import Portal from '../../../components/Portal';
import { useEffect } from 'react';

const Modal = ({ children }) => {
  useEffect(() => {
    document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <Portal>
      <div className="h-full w-full flex items-center justify-center fixed left-0 top-0 text-center bg-[#00000099]">
        <div className="h-[600px] w-[600px] overflow-scroll bg-white">
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  );
};
export default Modal;
