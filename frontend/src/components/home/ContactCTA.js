import { Github, Linkedin } from "lucide-react";
import Button from "../ui/Button";

function ContactCTA() {
  return (
    <section className="pt-10 pb-20">

      <div className="my-20 border-t border-zinc-700" />

      {/* Frase */}
      <div className="border-l-4 border-pink-500 pl-5">

        <h2 className="text-3xl font-bold mb-2">
          Pensando além do código
        </h2>

        <p className="italic text-zinc-500 dark:text-zinc-400 leading-7">
          "Para mim, tecnologia é sobre resolver problemas de forma criativa,
          construindo soluções que fazem a diferença."
        </p>

        <span className="block mt-3 text-sm text-zinc-400">
          — Munique Alves
        </span>

      </div>

      {/* CTA */}
      <div className="mt-16">

        <h2 className="text-4xl font-bold mb-3">
          Vamos construir algo incrível juntos?
        </h2>

        <p className="text-zinc-500 dark:text-zinc-400">
          Entre em contato comigo através do e-mail:
          {" "}
          <span className="font-semibold text-pink-500">
            munivicalves@gmail.com
          </span>
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">

          <Button to="/about">
            Saiba mais sobre mim
          </Button>

          <a
            href="https://github.com/munivicalves"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--border)] p-3 transition hover:border-pink-500 hover:text-pink-500"
          >
            <Github size={22} />
          </a>

          <a
            href="https://linkedin.com/in/munique-alves"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[var(--border)] p-3 transition hover:border-pink-500 hover:text-pink-500"
          >
            <Linkedin size={22} />
          </a>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;