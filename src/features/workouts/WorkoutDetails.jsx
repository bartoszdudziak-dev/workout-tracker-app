import Exercise from './Exercise';

function WorkoutDetails({ isOpen, exercises }) {
  return (
    <div
      className={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} bg-backdrop-secondary shadow-inner transition-all duration-300`}
    >
      <ul className='mx-auto w-full max-w-screen-md divide-y divide-primary overflow-hidden'>
        {exercises.map((exercise, index) => (
          <Exercise exercise={exercise} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDetails;
