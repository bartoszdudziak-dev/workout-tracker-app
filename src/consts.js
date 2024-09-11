import { format } from 'date-fns';

export const MAX_MOBILE_WIDTH = '768px';
export const DEFAULT_PLAN_INPUTS_NUM = 3;

// Testing
export const fakePlan = {
  planName: 'Fake plan',
  exercises: ['Bench press', 'Bicep Curl', 'Deadlift', 'Squat', 'Pull Up'].map(
    (exercise) => {
      return { name: exercise };
    },
  ),
};

export const fakeWorkouts = [
  {
    id: 1,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Upper Body Push Day',
    exercises: [
      {
        name: 'Incline Dumbbell Press',
        sets: [
          { reps: 10, weight: 60 },
          { reps: 8, weight: 80 },
          { reps: 6, weight: 90 },
        ],
      },
      {
        name: 'Overhead Shoulder Press',
        sets: [
          { reps: 10, weight: 30 },
          { reps: 10, weight: 35 },
          { reps: 5, weight: 50 },
        ],
      },
      {
        name: 'Push-Ups',
        sets: [
          { reps: 8, weight: 0 },
          { reps: 6, weight: 10 },
          { reps: 4, weight: 10 },
        ],
      },
    ],
  },
  {
    id: 2,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Lower Body Strength',
    exercises: [
      {
        name: 'Barbell Squat',
        sets: [
          { reps: 10, weight: 100 },
          { reps: 8, weight: 150 },
          { reps: 6, weight: 180 },
        ],
      },
      {
        name: 'Leg Press',
        sets: [
          { reps: 12, weight: 200 },
          { reps: 10, weight: 250 },
          { reps: 8, weight: 300 },
        ],
      },
      {
        name: 'Lunges',
        sets: [
          { reps: 10, weight: 20 },
          { reps: 8, weight: 30 },
          { reps: 6, weight: 40 },
        ],
      },
    ],
  },
  {
    id: 3,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Full Body Workout',
    exercises: [
      {
        name: 'Deadlift',
        sets: [
          { reps: 8, weight: 150 },
          { reps: 6, weight: 200 },
          { reps: 4, weight: 250 },
        ],
      },
      {
        name: 'Pull-Ups',
        sets: [
          { reps: 8, weight: 0 },
          { reps: 6, weight: 0 },
          { reps: 4, weight: 10 },
        ],
      },
      {
        name: 'Push-Ups',
        sets: [
          { reps: 15, weight: 0 },
          { reps: 12, weight: 10 },
          { reps: 10, weight: 20 },
        ],
      },
    ],
  },
  {
    id: 4,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Upper Body Pull Day',
    exercises: [
      {
        name: 'Pull-Up',
        sets: [
          { reps: 10, weight: 0 },
          { reps: 8, weight: 10 },
          { reps: 6, weight: 20 },
        ],
      },
      {
        name: 'Bent-Over Barbell Row',
        sets: [
          { reps: 10, weight: 80 },
          { reps: 8, weight: 100 },
          { reps: 6, weight: 120 },
        ],
      },
      {
        name: 'Bicep Curl',
        sets: [
          { reps: 12, weight: 25 },
          { reps: 10, weight: 30 },
          { reps: 8, weight: 35 },
        ],
      },
    ],
  },
  {
    id: 5,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Leg Day',
    exercises: [
      {
        name: 'Leg Extension',
        sets: [
          { reps: 12, weight: 80 },
          { reps: 10, weight: 100 },
          { reps: 8, weight: 120 },
        ],
      },
      {
        name: 'Romanian Deadlift',
        sets: [
          { reps: 10, weight: 100 },
          { reps: 8, weight: 120 },
          { reps: 6, weight: 140 },
        ],
      },
      {
        name: 'Calf Raises',
        sets: [
          { reps: 15, weight: 50 },
          { reps: 12, weight: 70 },
          { reps: 10, weight: 90 },
        ],
      },
    ],
  },
  {
    id: 6,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Chest & Triceps',
    exercises: [
      {
        name: 'Flat Bench Press',
        sets: [
          { reps: 10, weight: 100 },
          { reps: 8, weight: 130 },
          { reps: 6, weight: 150 },
        ],
      },
      {
        name: 'Dumbbell Flyes',
        sets: [
          { reps: 12, weight: 40 },
          { reps: 10, weight: 45 },
          { reps: 8, weight: 50 },
        ],
      },
      {
        name: 'Triceps Dips',
        sets: [
          { reps: 10, weight: 0 },
          { reps: 8, weight: 10 },
          { reps: 6, weight: 15 },
        ],
      },
    ],
  },
  {
    id: 7,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Back & Biceps',
    exercises: [
      {
        name: 'Lat Pulldown',
        sets: [
          { reps: 12, weight: 70 },
          { reps: 10, weight: 85 },
          { reps: 8, weight: 100 },
        ],
      },
      {
        name: 'Seated Row',
        sets: [
          { reps: 12, weight: 90 },
          { reps: 10, weight: 110 },
          { reps: 8, weight: 130 },
        ],
      },
      {
        name: 'Barbell Curl',
        sets: [
          { reps: 12, weight: 50 },
          { reps: 10, weight: 60 },
          { reps: 8, weight: 70 },
        ],
      },
    ],
  },
  {
    id: 8,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Core Focus',
    exercises: [
      {
        name: 'Plank',
        sets: [
          { reps: 60, weight: 0 },
          { reps: 60, weight: 0 },
          { reps: 60, weight: 0 },
        ],
      },
      {
        name: 'Russian Twist',
        sets: [
          { reps: 20, weight: 20 },
          { reps: 16, weight: 25 },
          { reps: 12, weight: 30 },
        ],
      },
      {
        name: 'Hanging Leg Raise',
        sets: [
          { reps: 12, weight: 0 },
          { reps: 10, weight: 0 },
          { reps: 8, weight: 10 },
        ],
      },
    ],
  },
  {
    id: 9,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Upper Body Strength',
    exercises: [
      {
        name: 'Bench Press',
        sets: [
          { reps: 10, weight: 150 },
          { reps: 8, weight: 170 },
          { reps: 6, weight: 190 },
        ],
      },
      {
        name: 'Seated Shoulder Press',
        sets: [
          { reps: 10, weight: 60 },
          { reps: 8, weight: 70 },
          { reps: 6, weight: 80 },
        ],
      },
      {
        name: 'Dumbbell Tricep Extension',
        sets: [
          { reps: 12, weight: 25 },
          { reps: 10, weight: 30 },
          { reps: 8, weight: 35 },
        ],
      },
    ],
  },
  {
    id: 10,
    date: format(new Date(), 'MM/dd/yyyy'),
    name: 'Cardio & Core',
    exercises: [
      {
        name: 'Jump Rope',
        sets: [
          { reps: 60, weight: 0 },
          { reps: 60, weight: 0 },
          { reps: 60, weight: 0 },
        ],
      },
      {
        name: 'Mountain Climbers',
        sets: [
          { reps: 40, weight: 0 },
          { reps: 30, weight: 0 },
          { reps: 20, weight: 0 },
        ],
      },
      {
        name: 'Bicycle Crunches',
        sets: [
          { reps: 25, weight: 0 },
          { reps: 20, weight: 0 },
          { reps: 15, weight: 0 },
        ],
      },
    ],
  },
];

export const fakePlans = [
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
