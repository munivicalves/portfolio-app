function Sidebar() {
  return (
      <aside
      className="
      hidden
      md:flex
      sticky
      top-24
      h-fit
      w-[340px]
      flex-shrink-0
      flex-col
      rounded-2xl
      border
      border-[var(--border)]
      bg-[var(--surface)]
      p-5
      shadow-lg
      "
      >
      <img
        src="/assets/perfil.png"
        alt="Profile"
        className="
          h-[280px]
          w-full
          rounded-xl
          object-cover
          shadow-md
        "
      />

      <h2
        className="
          mt-6
          text-left
          text-2xl
          font-bold
          text-zinc-900
          dark:text-white
        "
      >
        Munique Victória
      </h2>

      <h3
        className="
          mt-2
          text-left
          text-lg
          font-semibold
          text-pink-500
        "
      >
        Desenvolvedora Full Stack
      </h3>

      <p
        className="
          mt-4
          text-left
          leading-7
          text-zinc-600
          dark:text-zinc-300
        "
      >
        Desenvolvedora em formação com background em finanças e paixão por
        tecnologia. Meu foco é criar soluções digitais que otimizem processos e
        agreguem valor real ao usuário.
      </p>

      <p
        className="
          mt-4
          text-left
          leading-7
          text-zinc-600
          dark:text-zinc-300
        "
      >
        Formada em <strong>Sistemas de Informação</strong> pela Universidade de
        Uberaba (Uniube).
      </p>

      <div
        className="
          mt-8
          flex
          flex-col
          gap-3
        "
      >
        <a
          href="https://github.com/munivicalves"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-[var(--border)]
            py-3
            font-medium
            transition-all
            duration-300
            hover:bg-pink-500
            hover:text-white
            hover:border-pink-500
            text-center
          "
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/munique-alves"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-xl
            border
            border-[var(--border)]
            py-3
            font-medium
            transition-all
            duration-300
            hover:bg-pink-500
            hover:text-white
            hover:border-pink-500
            text-center
          "
        >
          LinkedIn
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;