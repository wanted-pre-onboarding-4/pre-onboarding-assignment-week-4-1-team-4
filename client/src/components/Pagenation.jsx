import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cls } from '../utils/cls';
// import { createLink } from '../utils/makeLink';
function Pagenation({ total, limit, page, setPage }) {
  const navigator = useNavigate();
  const [showPages, setShowPages] = useState(Math.ceil(page / 5));
  const totalPage = Math.ceil(total / limit);
  const totalShowPage = Math.ceil(totalPage / 5);
  console.log(limit, page, showPages);

  const onLeftClick = useCallback(() => {
    if (page === 1) return;
    navigator(`?_page=${page - 1}&_limit=${limit}`);
    setPage(page - 1);
    setShowPages(Math.ceil((page - 1) / 5));
  }, [page, limit]);

  const onRightClick = useCallback(() => {
    if (page === totalPage) return;
    navigator(`?_page=${page + 1}&_limit=${limit}`);
    setShowPages(Math.ceil((page + 1) / 5));
    setPage(page + 1);
  }, [page, limit, totalPage]);

  const onNumberClick = useCallback(
    e => {
      const { innerText: clickNumber } = e.target;
      navigator(`?_page=${+clickNumber}&_limit=${limit}`);
      setShowPages(Math.ceil(clickNumber / 5));
      setPage(+clickNumber);
    },
    [limit]
  );

  useEffect(() => {
    setShowPages(Math.ceil(page / 5));
  }, [page]);

  return (
    <>
      <nav className="flex flex-wrap justify-center items-center m-4">
        <button onClick={onLeftClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {Array(totalShowPage === showPages ? totalPage % 5 : 5)
          .fill(0)
          .map((_, i) => 5 * (showPages - 1) + i + 1)
          .map((button, i) => (
            <button
              className={cls(
                'rounded-lg p-2 m-2 bg-blue-200  text-black text-base hover:bg-lime-300',
                i + 1 + 5 * (showPages - 1) === page ? 'bg-purple-200' : ''
              )}
              key={i + 1}
              onClick={onNumberClick}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {button}
            </button>
          ))}
        <button onClick={onRightClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </nav>
    </>
  );
}

export default Pagenation;
