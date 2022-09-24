import { useNavigate, useLocation } from 'react-router-dom';
import { CreateLink } from '../utils/makeLink';
function Pagenation({ total, limit, page, setPage, setUrl }) {
  const location = useLocation();
  const navigate = useNavigate();
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav className="flex justify-center items-center m-4">
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <button
              className="ml-6"
              key={i + 1}
              onClick={() => {
                const link = CreateLink(i + 1, 4, location, navigate);
                setUrl(link);
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
