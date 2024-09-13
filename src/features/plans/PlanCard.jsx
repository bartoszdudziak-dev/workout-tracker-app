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

import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlanOperationButton from './PlanOperationButton';

function PlanCard({ plan }) {
  const { name, exercises, date, id } = plan;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const exercisesNum = exercises.length;

  function handleOpenSettings(e) {
    e.preventDefault();
    setIsSettingsOpen((open) => !open);
  }

  return (
    <Modal>
      <Link
        to={isSettingsOpen ? null : `/workouts/new/${id}`}
        className={`relative flex aspect-square flex-col justify-between overflow-clip rounded-md p-3 leading-3 shadow-lg outline-none transition-all duration-200 hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-primary xs:p-5 md:rounded-lg ${!isSettingsOpen && 'cursor-pointer'} }`}
      >
        <h3 className='line-clamp-2 text-sm font-bold uppercase leading-5 tracking-wider text-accent-primary xs:text-base'>
          {name}
        </h3>

        {isSettingsOpen && (
          <div className='absolute inset-0 z-10 bg-backdrop-secondary p-2 backdrop-blur-md'>
            <ul className='flex flex-col divide-y divide-primary text-center'>
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

        <div className='flex flex-col items-end gap-1 text-xs font-semibold text-secondary'>
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
      </Link>
    </Modal>
  );
}

export default PlanCard;
