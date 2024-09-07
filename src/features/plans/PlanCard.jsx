import { CiSquareMore } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../ui/ButtonIcon';

function PlanCard({ plan }) {
  const { name, exercises, date, id } = plan;
  const numberOfExercises = exercises.length;

  return (
    <Link
      to={`/workouts/new?plan=${id}`}
      className='xs:p-5 flex aspect-square flex-col justify-between overflow-clip rounded-md border p-3 leading-3 shadow-lg transition-all duration-300 hover:scale-105 md:rounded-lg'
    >
      <h3 className='xs:text-base line-clamp-2 text-sm font-bold uppercase leading-5 tracking-wider text-accent-secondary'>
        {name}
      </h3>

      <div className='flex justify-between'>
        <ButtonIcon size='large' icon={<CiSquareMore />} />

        <div className='flex flex-col gap-1 text-xs font-semibold text-light-secondary'>
          <span className='font-bold'>
            {numberOfExercises}{' '}
            {numberOfExercises === 1 ? 'exercise' : 'exercises'}
          </span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
}

export default PlanCard;
