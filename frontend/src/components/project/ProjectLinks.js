import Button from "../ui/Button";

function ProjectLinks({ githubUrl, deployUrl }) {
  return (
    <div className="flex gap-4 mt-6">
      {githubUrl && (
        <Button
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      )}

      {deployUrl && (
        <Button
          href={deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
        >
          Ver Projeto
        </Button>
      )}
    </div>
  );
}

export default ProjectLinks;