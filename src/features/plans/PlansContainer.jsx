import AddPlanButton from './AddPlanButton';
import PlanCard from './PlanCard';
import Modal from '../../ui/Modal';
import PlanForm from './PlanForm';
import Spinner from '../../ui/Spinner';

import { useLayout } from '../../context/LayoutContext';
import { usePlans } from './usePlans';

function PlansContainer() {
  const { isMobile, isNavOpen } = useLayout();
  const { plans, isLoading } = usePlans();

  if (isLoading) return <Spinner />;

  return (
    <Modal>
      <div
        className={`grid auto-rows-auto ${isMobile ? 'grid-cols-2 gap-4 sm:grid-cols-3' : isNavOpen ? 'grid-cols-2 gap-8 lg:grid-cols-4' : 'grid-cols-3 gap-6 lg:grid-cols-5'}`}
      >
        <Modal.Open opens='planForm'>
          <AddPlanButton />
        </Modal.Open>

        {plans.length > 0
          ? plans.map((plan) => <PlanCard plan={plan} key={plan.id} />)
          : null}
      </div>

      <Modal.Window size='large' name='planForm'>
        <PlanForm session='create' />
      </Modal.Window>
    </Modal>
  );
}

export default PlansContainer;
