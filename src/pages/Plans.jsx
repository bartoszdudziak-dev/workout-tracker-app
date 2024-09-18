import ButtonBack from '../ui/ButtonBack';
import PageTitle from '../ui/PageTitle';
import PlansContainer from '../features/plans/PlansContainer';

function Plans() {
  return (
    <>
      <ButtonBack />
      <PageTitle title='My plans' />
      <PlansContainer />
    </>
  );
}

export default Plans;
