import supabase from './supabase';

export async function createPlan({ planName, exercises }) {
  const { data, error } = await supabase
    .from('plans')
    .insert([{ plan_name: planName, plan_exercises: exercises }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getPlans() {
  let { data, error } = await supabase
    .from('plans')
    .select('*')
    .order('id', { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

export async function deletePlan(id) {
  const { error } = await supabase.from('plans').delete().eq('id', id);

  if (error) throw new Error(error.message);
}

export async function updatePlan({ updatedPlan, id }) {
  const { data, error } = await supabase
    .from('plans')
    .update({ ...updatedPlan })
    .eq('id', id);

  if (error) throw new Error(error.message);

  return data;
}

export async function getPlan(id) {
  let { data, error } = await supabase
    .from('plans')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}
