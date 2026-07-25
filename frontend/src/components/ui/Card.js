function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white dark:bg-zinc-900
        rounded-2xl
        shadow-lg
        border border-zinc-200 dark:border-zinc-700
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;