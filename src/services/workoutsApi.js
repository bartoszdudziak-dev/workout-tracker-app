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
        workout_rate: workoutRate,
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

export async function getWorkouts({ sortByColumn, orderColumn }) {
  let { data, error } = await supabase
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
    ).
  `,
    )
    .order(sortByColumn, { ascending: orderColumn });

  if (error) throw new Error(error.message);

  // Sort sets by id in ascending order
  data = data.map((workout) => ({
    ...workout,
    exercises: workout.exercises.map((exercise) => ({
      ...exercise,
      sets: exercise.sets.sort((a, b) => a.id - b.id),
    })),
  }));

  return data;
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
