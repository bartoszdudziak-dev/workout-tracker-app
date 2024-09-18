import { TbX } from 'react-icons/tb';

import ButtonIcon from './ButtonIcon';

import { createPortal } from 'react-dom';
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactFocusLock from 'react-focus-lock';

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const open = setOpenName;
  const close = () => setOpenName('');

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ size = 'medium', name, children }) {
  const windowSize = {
    medium: 'max-w-screen-xs rounded',
    large: 'max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md xs:rounded',
  };

  const { openName, close } = useContext(ModalContext);

  const modalWindowRef = useRef();

  // Close on Escape press button
  useEffect(() => {
    function closeModalWindow(event) {
      if (event.key === 'Escape') close();
    }

    if (name === openName)
      document.addEventListener('keydown', closeModalWindow);
    return () => document.removeEventListener('keydown', closeModalWindow);
  }, [close, openName, name]);

  // Close on outside click
  useEffect(() => {
    function closeModalWindow(event) {
      if (
        modalWindowRef.current &&
        !modalWindowRef.current.contains(event.target)
      )
        close();
    }

    if (name === openName)
      document.addEventListener('click', closeModalWindow, true);
    return () => document.removeEventListener('click', closeModalWindow, true);
  }, [name, openName, close]);

  if (name !== openName) return null;

  return createPortal(
    <ReactFocusLock>
      <div className='fixed inset-0 z-50 bg-backdrop-primary backdrop-blur-md'>
        <div
          ref={modalWindowRef}
          className={`fixed left-1/2 top-1/2 h-max w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-tetiary bg-primary shadow-2xl sm:rounded-md md:rounded-lg ${windowSize[size]}`}
        >
          <span className='absolute right-5 top-5'>
            <ButtonIcon
              type='secondary'
              size='large'
              icon={<TbX />}
              onClick={close}
            />
          </span>
          {cloneElement(children, { closeModalWindow: close })}
        </div>
      </div>
    </ReactFocusLock>,
    document.body,
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
