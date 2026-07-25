import { Cake, Laptop, MapPin } from "lucide-react";

function Intro() {
  // Mês no JavaScript começa em 0.
  // Dezembro = 11
  const birthDate = new Date(2002, 11, 26);

  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    age--;
  }

  return (
    <section className="px-6 pt-10 pb-3 mb-10">
      <h1
        className="
        text-5xl
        font-black
        text-pink-500
        mb-5
        "
      >
        Sobre Mim
      </h1>

      <p className="text-xl font-semibold mb-3">
        Apaixonada por resolver problemas com código.
      </p>

      <p className="max-w-3xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
        Desenvolvedora Full Stack em início de carreira, unindo lógica,
        desenvolvimento back-end e visão estratégica de negócios para criar
        soluções modernas, escaláveis e focadas na experiência do usuário.
      </p>

      <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <Cake size={18} />
          <span>{age} anos</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin size={18} />
          <span>Uberlândia • MG</span>
        </div>

        <div className="flex items-center gap-2">
          <Laptop size={18} />
          <span>Remoto ou Híbrido</span>
        </div>
      </div>

      <hr className="mt-8 border-[var(--border)]" />
    </section>
  );
}

export default Intro;
