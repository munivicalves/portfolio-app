import { useState } from "react";

import { createProject } from "../services/projectService";

import Button from "../components/ui/Button";

function CreateProject() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrls: "",
    githubUrl: "",
    deployUrl: "",
    techs: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const payload = {
        ...formData,

        imageUrls: formData.imageUrls
          .split(",")
          .map((img) => img.trim())
          .filter(Boolean),

        techs: formData.techs
          .split(",")
          .map((tech) => tech.trim())
          .filter(Boolean),
      };

      await createProject(payload);

      alert("Projeto criado com sucesso!");

      setFormData({
        title: "",
        description: "",
        imageUrls: "",
        githubUrl: "",
        deployUrl: "",
        techs: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao criar projeto.");
    }
  }

  return (
    <div className="page-container">

      <section className="section max-w-4xl mx-auto">

        <h1 className="section-title">
          Novo Projeto
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Título
            </label>

            <input
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Descrição
            </label>

            <textarea
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3 min-h-36"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Imagens
            </label>

            <input
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3"
              type="text"
              name="imageUrls"
              value={formData.imageUrls}
              onChange={handleChange}
              placeholder="moneyiq/1.png, moneyiq/2.png"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              GitHub
            </label>

            <input
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3"
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Deploy
            </label>

            <input
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3"
              type="url"
              name="deployUrl"
              value={formData.deployUrl}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Tecnologias
            </label>

            <input
              className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-3"
              type="text"
              name="techs"
              value={formData.techs}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB..."
            />
          </div>

          <Button>
            Salvar Projeto
          </Button>

        </form>

      </section>

    </div>
  );
}

export default CreateProject;