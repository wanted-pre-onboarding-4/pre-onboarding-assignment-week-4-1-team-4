import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { cls } from '../utils/cls';

const Page = ({ length, curNumber }) => {
  const [showPages, setShowPages] = useState(Math.ceil(curNumber / 5));

  const navigator = useNavigate();

  const onLeftClick = useCallback(() => {
    if (curNumber === 1) return;
    navigator(`?_page=${curNumber - 1}&_limit=4`);
    setShowPages(Math.ceil((curNumber - 1) / 5));
  }, [curNumber]);

  const onRightClick = useCallback(() => {
    navigator(`?_page=${curNumber + 1}&_limit=4`);
    setShowPages(Math.ceil((curNumber + 1) / 5));
  }, [curNumber]);

  const onNumberClick = useCallback(e => {
    const { innerText: clickNumber } = e.target;
    navigator(`?_page=${+clickNumber}&_limit=4`);
    setShowPages(Math.ceil(clickNumber / 5));
  }, []);

  return (
    <div className="flex  justify-center my-5">
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
      <ul className="flex space-x-3">
        {new Array(5)
          .fill(0)
          .map((_, i) => 5 * (showPages - 1) + i + 1)
          .map((button, index) => (
            <li
              key={button}
              onClick={onNumberClick}
              className={cls(
                'w-10 h-10 cursor-pointer  flex justify-center items-center',
                index + 1 + 5 * (showPages - 1) === curNumber
                  ? 'bg-slate-500 rounded-full text-white'
                  : ''
              )}
            >
              {button}
            </li>
          ))}
      </ul>
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
    </div>
  );
};

export default Page;
