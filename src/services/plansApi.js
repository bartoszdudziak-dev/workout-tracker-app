import supabase from './supabase';

export async function createPlan({ planName, exercises }) {
  const { error } = await supabase
    .from('plans')
    .insert([{ plan_name: planName, plan_exercises: exercises }]);

  if (error) throw new Error(error.message);
}
