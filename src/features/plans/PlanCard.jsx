import { RiDeleteBinLine } from 'react-icons/ri';
import {
  TbArrowNarrowLeft,
  TbCopyPlus,
  TbEdit,
  TbSettings,
} from 'react-icons/tb';

import ButtonIcon from '../../ui/ButtonIcon';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import PlanForm from './PlanForm';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PlanOperationButton from './PlanOperationButton';

function PlanCard({ plan }) {
  const { name, exercises, date, id } = plan;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const exercisesNum = exercises.length;
  const navigate = useNavigate();

  function handleOpenSettings(e) {
    e.stopPropagation();
    setIsSettingsOpen((open) => !open);
  }

  function handleClick() {
    !isSettingsOpen ? navigate(`/workouts/new/${id}`) : null;
  }

  return (
    <Modal>
      <div
        onClick={handleClick}
        className={`relative flex aspect-square flex-col justify-between overflow-clip rounded-md p-3 leading-3 shadow-lg transition-all duration-200 hover:scale-105 focus:outline-4 focus:outline-offset-4 focus:outline-accent-primary xs:p-5 md:rounded-lg ${!isSettingsOpen && 'cursor-pointer'} }`}
      >
        <h3 className='line-clamp-2 text-sm font-bold uppercase leading-5 tracking-wider text-accent-primary xs:text-base'>
          {name}
        </h3>

        {isSettingsOpen && (
          <div className='bg-backdrop-secondary absolute inset-0 z-10 p-2 backdrop-blur-md'>
            <ul className='flex flex-col divide-y divide-accent-primary text-center'>
              <li className='flex w-full basis-7 justify-center py-[5%] xs:px-3 xs:py-2'>
                <Modal.Open opens='planForm'>
                  <PlanOperationButton text='Edit' icon={<TbEdit />} />
                </Modal.Open>
              </li>
              <li className='flex w-full justify-center py-[5%] xs:px-3 xs:py-2'>
                <PlanOperationButton text='Copy' icon={<TbCopyPlus />} />
              </li>
              <li className='flex w-full justify-center py-[5%] xs:px-3 xs:py-2'>
                <Modal.Open opens='delete'>
                  <PlanOperationButton
                    text='Delete'
                    icon={<RiDeleteBinLine />}
                  />
                </Modal.Open>
              </li>
            </ul>
          </div>
        )}

        <div className='absolute bottom-[5%] left-[5%] z-20'>
          <ButtonIcon
            size='large'
            icon={isSettingsOpen ? <TbArrowNarrowLeft /> : <TbSettings />}
            type='secondary'
            onClick={handleOpenSettings}
          />
        </div>

        <div className='text-secondary flex flex-col items-end gap-1 text-xs font-semibold'>
          <span className='font-bold'>
            {exercisesNum} {exercisesNum === 1 ? 'exercise' : 'exercises'}
          </span>
          <span>{date}</span>
        </div>

        <Modal.Window name='delete'>
          <ConfirmDelete resource='plan' details={name} />
        </Modal.Window>

        <Modal.Window size='large' name='planForm'>
          <PlanForm session='edit' plan={plan} />
        </Modal.Window>
      </div>
    </Modal>
  );
}

export default PlanCard;
