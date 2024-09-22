import ButtonBack from '../ui/ButtonBack';
import PageTitle from '../ui/PageTitle';
import AccountSettings from '../features/authentication/AccountSetings';

function Account() {
  return (
    <>
      <ButtonBack />
      <PageTitle title='Account' />

      <AccountSettings />
    </>
  );
}

export default Account;
