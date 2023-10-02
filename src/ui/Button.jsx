import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ text, onClick, active = false, page, disabled = false }) {
  return (
    <div className='page-item '>
      <Link
        to={page && !disabled ? `/page/${page}` : ""}
        className={`${
          active ? "active bg-gray-300" : ""
        } page-link relative block py-1.5 px-3 pointer rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500  focus:shadow-none`}
        onClick={onClick}
      >
        {text}
      </Link>
    </div>
  );
}

export default Button;
