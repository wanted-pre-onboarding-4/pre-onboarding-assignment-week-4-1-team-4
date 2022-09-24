import { useNavigate, useLocation } from 'react-router-dom';
import { createLink } from '../utils/makeLink';
function Pagenation({ total, limit, page, setPage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const numPages = Math.ceil(total / limit);
  return (
    <>
      <nav className="flex flex-wrap justify-center items-center m-4">
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className="rounded-lg p-2 m-2 bg-blue-200  text-black text-base hover:bg-lime-300 focus:bg-purple-200"
              key={i + 1}
              onClick={() => {
                createLink(i + 1, 4, location, navigate);
                setPage(i + 1);
              }}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </button>
          ))}
      </nav>
    </>
  );
}

export default Pagenation;
