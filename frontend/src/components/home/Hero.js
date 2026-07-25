import Button from "../ui/Button";

function Hero() {
  return (
    <section className="text-center py-24">

      <span className="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm font-medium text-pink-500">
        👋 Disponível para oportunidades
      </span>

      <h1 className="mt-8 text-6xl font-black leading-tight">
        Olá,
        <br />
        eu sou a{" "}
        <span className="text-pink-500">
          Munique.
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-500 dark:text-zinc-400">
        Desenvolvedora Full Stack apaixonada por transformar problemas em
        soluções digitais modernas, escaláveis e intuitivas.
      </p>

      <div className="mt-10 flex justify-center gap-4">

        <Button to="/portfolio">
          Ver Projetos
        </Button>

        <Button
          to="/about"
          variant="outline"
        >
          Sobre mim
        </Button>

      </div>

      <div className="mt-14 border-b border-zinc-700" />

    </section>
  );
}

export default Hero;