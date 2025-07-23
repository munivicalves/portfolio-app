import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/CreateProject.module.css';

function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrls: '',
    githubUrl: '',
    deployUrl: '',
    techs: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        imageUrls: formData.imageUrls
          .split(',')
          .map((url) => url.trim()), // converte para array de strings
        techs: formData.techs
          .split(',')
          .map((tech) => tech.trim()), // converte para array de strings
      };

      await axios.post('http://localhost:5000/projects', payload);
      alert('Projeto criado com sucesso!');

      // limpa o formulário
      setFormData({
        title: '',
        description: '',
        imageUrls: '',
        githubUrl: '',
        deployUrl: '',
        techs: '',
      });
    } catch (error) {
      console.error('Erro ao criar projeto:', error);
      alert('Falha ao criar projeto.');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Adicionar Novo Projeto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Nomes das Imagens (separados por vírgula):</label>
          <input
            type="text" // <-- alterado de "url" para "text"
            name="imageUrls"
            value={formData.imageUrls}
            onChange={handleChange}
            placeholder="ex: petshop1.PNG, petshop2.PNG"
            required
          />
        </div>

        <div>
          <label>GitHub URL:</label>
          <input
            type="url"
            name="githubUrl"
            value={formData.githubUrl}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>URL do Projeto Online:</label>
          <input
            type="url"
            name="deployUrl"
            value={formData.deployUrl}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tecnologias (separadas por vírgula):</label>
          <input
            type="text"
            name="techs"
            value={formData.techs}
            onChange={handleChange}
            placeholder="ex: Java, MySQL, Swing"
          />
        </div>

        <button className={styles.button} type="submit">
          Criar Projeto
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
