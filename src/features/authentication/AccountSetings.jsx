import DeleteAccount from './DeleteAccount';
import UpdateUserForm from './UpdateUserForm';

function AccountSetings() {
  return (
    <div className='mt-10 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-20'>
      <UpdateUserForm />
      <DeleteAccount />
    </div>
  );
}

export default AccountSetings;
