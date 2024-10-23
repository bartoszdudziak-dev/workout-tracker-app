import supabase from './supabase';

export async function signup({ email, password, firstName, lastName }) {
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
      },
    },
  });

  if (error) throw new Error('Sign up failed, user not created');

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function updateUser({ firstName, lastName }) {
  const { data, error } = await supabase.auth.updateUser({
    data: { firstName, lastName },
  });

  if (error) throw new Error(error.message);

  return data;
}

// Do not work. Need to implement client side deleting user
export async function deleteUser(id) {
  const { error } = await supabase.auth.admin.deleteUser(id);

  if (error) throw new Error(error.message);
}
