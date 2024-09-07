import AddPlanButton from './AddPlanButton';
import PlanCard from './PlanCard';
import { format } from 'date-fns';

import { useLayout } from '../../context/LayoutContext';
import Modal from '../../ui/Modal';

const plans = [
  {
    id: 1,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Full-Body Strength Training',
    exercises: [
      'Squats',
      'Bench Press',
      'Deadlifts',
      'Pull-Ups or Lat Pulldowns',
      'Dumbbell Rows',
      'Plank',
      'Shoulder Press',
    ],
  },
  {
    id: 2,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Upper Body Push Day',
    exercises: [
      'Incline Dumbbell Press',
      'Overhead Shoulder Press',
      'Push-Ups',
      'Dumbbell Lateral Raises',
      'Tricep Dips',
    ],
  },
  {
    id: 3,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Lower Body Focus',
    exercises: [
      'Deadlifts',
      'Lunges',
      'Leg Press',
      'Glute Bridges',
      'Calf Raises',
    ],
  },
  {
    id: 4,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Back and Biceps',
    exercises: [
      'Pull-Ups',
      'Bent-Over Barbell Rows',
      'Dumbbell Bicep Curls',
      'Face Pulls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
      'Hammer Curls',
    ],
  },
  {
    id: 5,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Core and Cardio Circuit',
    exercises: [
      'Mountain Climbers',
      'Russian Twists',
      'Bicycle Crunches',
      'Plank to Push-Up',
      'Burpees',
    ],
  },
  {
    id: 6,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'HIIT (High-Intensity Interval Training)',
    exercises: [
      'Jump Squats',
      'High Knees',
      'Plank Jacks',
      'Box Jumps',
      'Battle Ropes',
    ],
  },
  {
    id: 7,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Bodyweight Workout (No Equipment)',
    exercises: [
      'Push-Ups',
      'Bodyweight Squats',
      'Plank',
      'Walking Lunges',
      'Bicycle Crunches',
      'Tricep Dips on a Chair',
    ],
  },
  {
    id: 8,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Core and Cardio Circuit',
    exercises: [
      'Mountain Climbers',
      'Russian Twists',
      'Bicycle Crunches',
      'Plank to Push-Up',
      'Burpees',
    ],
  },
  {
    id: 9,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'HIIT (High-Intensity Interval Training)',
    exercises: [
      'Jump Squats',
      'High Knees',
      'Plank Jacks',
      'Plank Jacks',
      'Plank Jacks',
      'Plank Jacks',
      'Plank Jacks',
      'Plank Jacks',
      'Plank Jacks',
      'Box Jumps',
      'Battle Ropes',
    ],
  },
  {
    id: 10,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Bodyweight Workout (No Equipment)',
    exercises: [
      'Push-Ups',
      'Bodyweight Squats',
      'Plank',
      'Walking Lunges',
      'Bicycle Crunches',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
      'Tricep Dips on a Chair',
    ],
  },
];

function PlansContainer() {
  const { isMobile, isNavOpen } = useLayout();

  return (
    <Modal>
      <div
        className={`grid auto-rows-auto ${isMobile ? 'grid-cols-2 gap-4 sm:grid-cols-3' : isNavOpen ? 'grid-cols-2 gap-8 lg:grid-cols-4' : 'grid-cols-3 gap-6 lg:grid-cols-5'}`}
      >
        <Modal.Open>
          <AddPlanButton />
        </Modal.Open>

        {plans.map((plan) => (
          <PlanCard plan={plan} key={plan.id} />
        ))}
      </div>

      <Modal.Window>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
          reiciendis!
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default PlansContainer;
