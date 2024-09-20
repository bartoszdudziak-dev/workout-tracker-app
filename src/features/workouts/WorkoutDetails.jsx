import Exercise from './Exercise';

function WorkoutDetails({ isOpen, exercises }) {
  return (
    <div
      className={`grid ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} bg-backdrop-secondary shadow-inner transition-all duration-700`}
    >
      <ul className='row-start-1 row-end-[span_2] mx-auto w-full max-w-screen-md divide-y divide-primary overflow-hidden'>
        {exercises.map((exercise, index) => (
          <Exercise exercise={exercise} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDetails;
