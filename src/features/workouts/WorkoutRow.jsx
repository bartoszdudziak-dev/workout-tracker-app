import { MdExpandLess, MdExpandMore } from 'react-icons/md';

import Table from '../../ui/Table';
import ButtonIcon from '../../ui/ButtonIcon';
import WorkoutOperations from './WorkoutOperations';
import WorkoutDetails from './WorkoutDetails';
import WorkoutForm from './WorkoutForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal';

import { formatDate } from '../../utils/helpers';
import { useDeleteWorkout } from './useDeleteWorkout';
import { useCreateWorkout } from './useCreateWorkout';
import SpinnerMini from '../../ui/SpinnerMini';
import { useMobile } from '../../hooks/useMobile';

function WorkoutRow({ workout, onOpen, curOpen }) {
  const { isMobile } = useMobile();
  const { deleteWorkout, isDeleting } = useDeleteWorkout();
  const { createWorkout, isCreating } = useCreateWorkout();

  const {
    id,
    workout_name: name,
    workout_date: date,
    exercises: workout_exercises,
  } = workout;

  const exercises = workout_exercises.map((exercise) => {
    return {
      name: exercise.exercise_name,
      sets: exercise.sets.map((set) => set.set),
    };
  });

  const isOpen = id === curOpen;
  const handleToggle = () => onOpen(isOpen ? null : id);

  const handleCopyWorkout = () => {
    createWorkout({
      workoutName: `Copy of ${name}`,
      workoutDate: new Date(),
      exercises,
    });
  };

  return (
    <Modal>
      <div className='relative'>
        <Table.Row>
          <div>
            {isCreating ? (
              isMobile ? (
                <span className='absolute left-4 top-1/2 z-50 -translate-y-1/2'>
                  <SpinnerMini />
                </span>
              ) : (
                <SpinnerMini />
              )
            ) : (
              <ButtonIcon
                type='secondary'
                icon={isOpen ? <MdExpandLess /> : <MdExpandMore />}
                onClick={handleToggle}
              />
            )}
          </div>
          <div
            className={`line-clamp-3 break-all ${isOpen ? 'font-bold text-accent-primary' : 'font-semibold'}`}
          >
            {name}
          </div>
          <div className='font-semibold text-secondary'>{formatDate(date)}</div>
          <div className='text-base sm:text-xl md:text-2xl'>😁</div>
          <WorkoutOperations
            isOpen={isOpen}
            handleCopyWorkout={handleCopyWorkout}
            isCreating={isCreating}
          />
        </Table.Row>
        <WorkoutDetails exercises={exercises} isOpen={isOpen} />
      </div>

      <Modal.Window name='delete'>
        <ConfirmDelete
          resource='workout'
          details={name}
          onConfirm={() => deleteWorkout(workout.id)}
          disabled={isDeleting}
        />
      </Modal.Window>

      <Modal.Window size='large' name='workoutEditForm'>
        <WorkoutForm session='edit' workout={workout} />
      </Modal.Window>
    </Modal>
  );
}

export default WorkoutRow;
