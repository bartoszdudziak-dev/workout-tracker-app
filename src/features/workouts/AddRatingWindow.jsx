import Button from '../../ui/Button';
import WorkoutRate from './WorkoutRating';
import SpinnerMini from '../../ui/SpinnerMini';

import { useState } from 'react';
import { useAddRating } from './useAddRating';

function AddRatingWindow({
  workout: { id, workout_name: name },
  closeModalWindow,
}) {
  const [rate, setRate] = useState(null);
  const { addRating, isUpdating } = useAddRating();

  const handleClick = () =>
    addRating({ id, rate }, { onSuccess: () => closeModalWindow() });

  return (
    <div className='flex flex-col gap-10 p-6 md:gap-12 md:p-10'>
      <h3 className='max-w-[80%] tracking-wider text-primary'>
        Rate the{' '}
        <span className='inline-block font-semibold text-accent-primary'>
          {name}
        </span>
      </h3>
      <div className='mx-auto'>
        <WorkoutRate onRate={setRate} />
      </div>
      <div className='flex items-center justify-between'>
        <Button
          size='large'
          type='secondary'
          onClick={closeModalWindow}
          disabled={isUpdating}
        >
          Cancel
        </Button>
        {isUpdating && <SpinnerMini />}
        <Button size='large' onClick={handleClick} disabled={isUpdating}>
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default AddRatingWindow;
