import { BadgeCheck } from "lucide-react";

function Certifications() {
  const certifications = [
    "Minicurso de Análise de Dados - Cubo Academy",
    "Segurança da Informação - Unimoura",
    "Fundamentos de Gestão de Projetos - Unimoura",
    "Versionamento de Código com Git e GitHub - DIO",
  ];

  return (
    <section className="mt-20">
      <h2 className="section-title">Certificações</h2>

      <div className="space-y-4 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert}
            className="
                  card
                  flex
                  items-center
                  gap-4
                  hover:border-pink-500
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
          >
            <BadgeCheck size={24} className="text-pink-500 flex-shrink-0" />

            <span className="text-sm font-medium leading-6">{cert}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
