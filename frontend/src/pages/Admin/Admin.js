import { useEffect, useState } from "react";
import axios from "axios";
import { Edit3, ImagePlus, LogOut, Plus, Trash2, X } from "lucide-react";
import { API_URL } from "../../config/api";
import { projectImageSrc } from "../../utils/projectImage";
import styles from "./Admin.module.css";

const emptyProject = { title: "", description: "", githubUrl: "", deployUrl: "", techs: "", imageUrls: [] };

function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem("portfolio_admin_token"));
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  const authConfig = { headers: { Authorization: `Bearer ${token}` } };

  const loadProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    setProjects(response.data);
  };

  useEffect(() => {
    if (token) loadProjects().catch(() => setMessage("Não foi possível carregar os projetos."));
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  const login = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { password });
      sessionStorage.setItem("portfolio_admin_token", response.data.token);
      setToken(response.data.token);
      setPassword("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Não foi possível entrar.");
    } finally {
      setBusy(false);
    }
  };

  const uploadFiles = async () => Promise.all(selectedFiles.map(async (file) => {
    if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) throw new Error("Use imagens de até 5 MB.");
    const data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const response = await axios.post(`${API_URL}/projects/upload`, { data, type: file.type }, authConfig);
    return response.data.url;
  }));

  const saveProject = async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    try {
      const newImages = await uploadFiles();
      const payload = { ...form, imageUrls: [...form.imageUrls, ...newImages], techs: form.techs.split(",").map((tech) => tech.trim()).filter(Boolean) };
      if (!payload.imageUrls.length) throw new Error("Inclua pelo menos uma imagem do projeto.");
      if (editingId) await axios.put(`${API_URL}/projects/${editingId}`, payload, authConfig);
      else await axios.post(`${API_URL}/projects`, payload, authConfig);
      await loadProjects();
      setForm(emptyProject);
      setSelectedFiles([]);
      setEditingId(null);
      setMessage(editingId ? "Projeto atualizado com sucesso." : "Projeto publicado com sucesso.");
    } catch (error) {
      setMessage(error.response?.data?.message || error.message || "Não foi possível salvar o projeto.");
    } finally {
      setBusy(false);
    }
  };

  const startEditing = (project) => {
    setEditingId(project._id);
    setSelectedFiles([]);
    setForm({ ...project, techs: (project.techs || []).join(", "), imageUrls: project.imageUrls || [] });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeProject = async (id) => {
    if (!window.confirm("Excluir este projeto? Esta ação não pode ser desfeita.")) return;
    try {
      await axios.delete(`${API_URL}/projects/${id}`, authConfig);
      await loadProjects();
      if (editingId === id) { setEditingId(null); setForm(emptyProject); }
      setMessage("Projeto excluído.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Não foi possível excluir o projeto.");
    }
  };

  const logout = () => { sessionStorage.removeItem("portfolio_admin_token"); setToken(""); setProjects([]); };

  if (!token) return <main className={styles.loginPage}><form className={styles.loginCard} onSubmit={login}><span>Área reservada</span><h1>Gerenciar portfólio</h1><p>Entre com sua senha para publicar seus projetos.</p><label>Senha<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required /></label>{message && <p className={styles.error}>{message}</p>}<button disabled={busy}>{busy ? "Entrando..." : "Entrar"}</button></form></main>;

  return <main className={styles.container}>
    <div className={styles.header}><div><span>Área reservada</span><h1>Seus projetos</h1><p>Crie, organize e mantenha seu portfólio sempre atualizado.</p></div><button className={styles.logout} onClick={logout}><LogOut size={17} /> Sair</button></div>
    <section className={styles.editor}><div className={styles.editorHeading}><div><h2>{editingId ? "Editar projeto" : "Novo projeto"}</h2><p>Imagens novas são enviadas com segurança para o servidor.</p></div>{editingId && <button className={styles.textButton} onClick={() => { setEditingId(null); setForm(emptyProject); setSelectedFiles([]); }}>Cancelar</button>}</div>
      <form onSubmit={saveProject} className={styles.form}>
        <label>Título<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></label>
        <label className={styles.full}>Descrição<textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required /></label>
        <label>GitHub<input type="url" value={form.githubUrl} onChange={(e) => setForm({ ...form, githubUrl: e.target.value })} placeholder="https://github.com/..." /></label>
        <label>Projeto online<input type="url" value={form.deployUrl} onChange={(e) => setForm({ ...form, deployUrl: e.target.value })} placeholder="https://..." /></label>
        <label className={styles.full}>Tecnologias<input value={form.techs} onChange={(e) => setForm({ ...form, techs: e.target.value })} placeholder="React, Node.js, MongoDB" /></label>
        <div className={`${styles.full} ${styles.imagesField}`}><span>Imagens</span><label className={styles.upload}><ImagePlus size={19} /> Selecionar imagens<input type="file" accept="image/png,image/jpeg,image/webp,image/gif" multiple onChange={(e) => setSelectedFiles(Array.from(e.target.files || []))} /></label><small>PNG, JPG, WEBP ou GIF • até 5 MB por imagem</small>
          <div className={styles.previews}>{form.imageUrls.map((image) => <div className={styles.preview} key={image}><img src={projectImageSrc(image)} alt="Prévia do projeto" /><button type="button" onClick={() => setForm({ ...form, imageUrls: form.imageUrls.filter((item) => item !== image) })} aria-label="Remover imagem"><X size={15} /></button></div>)}{selectedFiles.map((file) => <div className={styles.preview} key={file.name}><img src={URL.createObjectURL(file)} alt="Nova prévia" /></div>)}</div>
        </div>
        <div className={`${styles.actions} ${styles.full}`}><button className={styles.primary} disabled={busy}>{busy ? "Salvando..." : editingId ? "Salvar alterações" : <><Plus size={17} /> Publicar projeto</>}</button>{message && <p className={styles.message}>{message}</p>}</div>
      </form>
    </section>
    <section className={styles.list}><h2>Projetos publicados <span>{projects.length}</span></h2><div className={styles.cards}>{projects.map((project) => <article key={project._id} className={styles.card}><img src={projectImageSrc(project.imageUrls?.[0])} alt="" /><div><h3>{project.title}</h3><p>{project.description}</p><div className={styles.cardActions}><button onClick={() => startEditing(project)}><Edit3 size={16} /> Editar</button><button className={styles.delete} onClick={() => removeProject(project._id)}><Trash2 size={16} /> Excluir</button></div></div></article>)}</div></section>
  </main>;
}

export default Admin;
