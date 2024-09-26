import { useSearchExercisesByName } from '../workouts/useSearchExercisesByName';
import Input from '../../ui/Input';
import Label from '../../ui/Label';
import FormRow from '../../ui/FormRow';
import ProgressChart from './ProgressChart';
import { useLayout } from '../../context/LayoutContext';
import Spinner from '../../ui/Spinner';

function ExerciseProgress() {
  const { setQuery, data = [], isSearching } = useSearchExercisesByName();
  const { isNavOpen } = useLayout();

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <div
      className={`mx-auto w-full max-w-screen-xs space-y-8 rounded-md bg-primary px-4 py-6 shadow-md md:px-8 md:py-10 xl:max-w-full ${!isNavOpen && 'lg:max-w-full'} `}
    >
      <div
        className={`flex flex-col gap-4 lg:gap-8 xl:flex-row xl:items-end ${!isNavOpen && 'lg:flex-row lg:items-end'}`}
      >
        <div className='w-full max-w-72'>
          <FormRow>
            <Label htmlFor='searchExercisesInput'>Search Exercise </Label>
            <Input id='searchExercisesInput' onChange={handleChange} />
          </FormRow>
        </div>
        {!isSearching && data && data.length > 0 && (
          <span className='md:text-x text-center text-lg font-bold uppercase tracking-wider text-accent-primary'>
            {data.at(0).exercise_name}
          </span>
        )}
      </div>

      {isSearching ? <Spinner /> : <ProgressChart data={data} />}
    </div>
  );
}

export default ExerciseProgress;
