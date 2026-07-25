import { Link } from "react-router-dom";

function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-pink-500 hover:bg-pink-600 text-white",

    outline:
      "border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white",
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-xl
    transition
    font-semibold
    ${styles[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;