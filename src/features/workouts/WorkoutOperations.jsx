import { TbCopyPlus, TbEdit, TbSettings } from 'react-icons/tb';
import { RiDeleteBinLine } from 'react-icons/ri';

import ButtonIcon from '../../ui/ButtonIcon';
import Modal from '../../ui/Modal';

import { useLayout } from '../../context/LayoutContext';
import { useState } from 'react';

function WorkoutOperations({ isOpen, handleCopyWorkout, isCreating }) {
  const { isMobile } = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);

  if (isMobile)
    return (
      <>
        <span className='asbsolute right-0 top-0 z-40'>
          <ButtonIcon
            icon={<TbSettings />}
            type='secondary'
            onClick={toggleMenu}
          />
        </span>
        {isMenuOpen && (
          <div className='absolute inset-0 z-30 bg-backdrop-primary backdrop-blur-md'>
            <div className='flex h-full items-center justify-center gap-10'>
              <Modal.Open opens='workoutEditForm'>
                <ButtonIcon
                  icon={<TbEdit />}
                  type='secondary'
                  size={isOpen ? 'xl' : 'medium'}
                />
              </Modal.Open>
              <ButtonIcon
                icon={<TbCopyPlus />}
                type='secondary'
                size={isOpen ? 'xl' : 'medium'}
                onClick={handleCopyWorkout}
                disabled={isCreating}
              />
              <Modal.Open opens='delete'>
                <ButtonIcon
                  icon={<RiDeleteBinLine />}
                  type='secondary'
                  size={isOpen ? 'xl' : 'medium'}
                />
              </Modal.Open>
            </div>
          </div>
        )}
      </>
    );

  return (
    <div className='flex flex-col gap-0.5 md:flex-row md:gap-1 lg:gap-2'>
      <Modal.Open opens='workoutEditForm'>
        <ButtonIcon icon={<TbEdit />} type='secondary' />
      </Modal.Open>
      <ButtonIcon
        icon={<TbCopyPlus />}
        type='secondary'
        onClick={handleCopyWorkout}
        disabled={isCreating}
      />

      <Modal.Open opens='delete'>
        <ButtonIcon icon={<RiDeleteBinLine />} type='secondary' />
      </Modal.Open>
    </div>
  );
}

export default WorkoutOperations;
