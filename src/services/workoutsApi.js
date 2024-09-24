import supabase from './supabase';

export async function createWorkout({
  workoutName,
  workoutDate,
  exercises,
  workoutRate,
}) {
  const dateISO = workoutDate.toISOString();

  const { data: workoutData, error: workoutError } = await supabase
    .from('workouts')
    .insert([
      {
        workout_name: workoutName,
        workout_date: dateISO,
        workout_rate: workoutRate || 0,
      },
    ])
    .select('id')
    .single();

  if (workoutError) throw new Error(workoutError.message);

  for (const exercise of exercises) {
    const { data: exerciseData, error: exerciseError } = await supabase
      .from('exercises')
      .insert([
        {
          workout_id: workoutData.id,
          exercise_name: exercise.name,
        },
      ])
      .select('id')
      .single();

    if (exerciseError) throw new Error(exerciseError.message);

    for (const set of exercise.sets) {
      const { error: setError } = await supabase.from('sets').insert([
        {
          exercise_id: exerciseData.id,
          set,
        },
      ]);

      if (setError) throw new Error(setError.message);
    }
  }
}

export async function getWorkouts({ sortByColumn, orderColumn, page }) {
  const fromWorkout =
    (page - 1) * Number(import.meta.env.VITE_WORKOUTS_PER_PAGE);
  const toWorkout =
    fromWorkout + Number(import.meta.env.VITE_WORKOUTS_PER_PAGE) - 1;

  let { data, error, count } = await supabase
    .from('workouts')
    .select(
      `
    id,
    workout_name,
    workout_date,
    workout_rate,
    exercises (
      id,
      exercise_name,
      sets (
        id,
        set
      )
    )
  `,
      { count: 'exact' },
    )
    .order(sortByColumn, { ascending: orderColumn === 'asc' })
    .range(fromWorkout, toWorkout);

  if (error) throw new Error(error.message);

  // Sort sets by id in ascending order
  data = data.map((workout) => ({
    ...workout,
    exercises: workout.exercises.map((exercise) => ({
      ...exercise,
      sets: exercise.sets.sort((a, b) => a.id - b.id),
    })),
  }));

  return { data, count };
}

export async function deleteWorkout(id) {
  const { error } = await supabase.from('workouts').delete().eq('id', id);
  if (error) throw new Error(error.message);
}

// To simplify, it will just delete old workout and create new one.
export async function updateWorkout({
  id,
  workoutRate,
  workout: { workoutName, workoutDate, exercises },
}) {
  await createWorkout({
    workoutName,
    workoutDate,
    workoutRate,
    exercises,
  });
  await deleteWorkout(id);
}

export async function updateRating({ id, rate }) {
  const { error } = await supabase
    .from('workouts')
    .update({ workout_rate: rate })
    .eq('id', id);

  if (error) throw new Error(error.message);
}

export async function getWorkoutsAfterDate(date) {
  const today = new Date();

  const { data, error, count } = await supabase
    .from('workouts')
    .select('*', { count: 'exact' })
    .gte('workout_date', date)
    .lte('workout_date', today.toISOString({ end: true }));

  if (error) {
    console.error(error);
    throw new Error('Bookings could not get loaded');
  }

  return { data, count };
}
