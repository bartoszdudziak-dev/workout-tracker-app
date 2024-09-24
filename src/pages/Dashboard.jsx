import StatsContainer from '../features/dashboard/StatsContainer';
import ButtonBack from '../ui/ButtonBack';
import PageTitle from '../ui/PageTitle';

function Dashboard() {
  return (
    <>
      <ButtonBack />
      <PageTitle title='Dashboard' />
      <StatsContainer />
    </>
  );
}

export default Dashboard;
