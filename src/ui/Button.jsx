import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "focus:ring-bg:yellow-300 inline-block rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:py-4 md:px-6",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
