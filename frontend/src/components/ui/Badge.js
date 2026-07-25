function Badge({ children }) {
  return (
    <span
      className="
      px-3
      py-1
      rounded-full
      text-sm
      bg-pink-100
      text-pink-600
      font-medium
      "
    >
      {children}
    </span>
  );
}

export default Badge;