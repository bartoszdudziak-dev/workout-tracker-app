import { PiSpinnerBold } from 'react-icons/pi';

function Spinner() {
  return (
    <PiSpinnerBold className='mx-auto mt-20 animate-[spin_3s_linear_infinite] text-6xl text-accent-primary md:text-8xl' />
  );
}

export default Spinner;
