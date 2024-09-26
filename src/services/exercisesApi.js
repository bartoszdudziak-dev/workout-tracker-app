import supabase from './supabase';

export async function getExercisesByName({ query, limit }) {
  let supabaseQuery = supabase
    .from('exercises')
    .select('*, sets(id, set)')
    .ilike('exercise_name', `${query}%`)
    .order('created_at', { ascending: false });

  if (limit) {
    supabaseQuery = supabaseQuery.limit(limit);
  }

  let { data, error } = await supabaseQuery;

  if (error) throw new Error('Not found');

  // Sort sets by id in ascending order
  data = data.map((exercise) => ({
    ...exercise,
    sets: exercise.sets.sort((a, b) => a.id - b.id),
  }));

  return data;
}
