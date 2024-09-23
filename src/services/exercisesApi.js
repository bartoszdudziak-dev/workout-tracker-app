import supabase from './supabase';

export async function getLastExerciseByName(query) {
  let { data, error } = await supabase
    .from('exercises')
    .select('*, sets(id, set)')
    .ilike('exercise_name', `${query}%`)
    .order('created_at', { ascending: false })
    .limit(1);
  if (error) throw new Error('Not found');

  return data;
}
