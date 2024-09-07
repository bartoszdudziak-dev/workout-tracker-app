import { AiOutlineClose } from 'react-icons/ai';
import ButtonIcon from './ButtonIcon';

import { createPortal } from 'react-dom';
import { cloneElement, createContext, useContext, useState } from 'react';

const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open() });
}

function Window({ children }) {
  const { isOpen, close } = useContext(ModalContext);

  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 z-50 bg-white/10 bg-blend-overlay backdrop-blur-md'>
      <div className='fixed left-1/2 top-1/2 w-full max-w-screen-md -translate-x-1/2 -translate-y-1/2 border bg-light-primary p-10 shadow-2xl md:rounded-lg'>
        <span className='absolute right-5 top-5'>
          <ButtonIcon icon={<AiOutlineClose />} size='medium' onClick={close} />
        </span>
        <div className='w-full break-words'>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
