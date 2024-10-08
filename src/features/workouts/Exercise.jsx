function Exercise({ exercise }) {
  return (
    <li className='grid grid-cols-1 gap-y-2 px-4 py-2 xs:grid-cols-2'>
      <div className='text-xs font-semibold uppercase tracking-wider text-accent-primary sm:text-sm'>
        {exercise.name}
      </div>
      <div className='flex flex-wrap gap-2 text-xs font-semibold sm:text-sm'>
        {exercise.sets.map((set, index) => (
          <div key={index} className='space-x-0.5'>
            <span>{set.reps}</span>
            <span>x</span>
            <span>{`${set.weight}kg`}</span>
          </div>
        ))}
      </div>
    </li>
  );
}

export default Exercise;
