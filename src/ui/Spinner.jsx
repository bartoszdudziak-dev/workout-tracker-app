import { PiSpinnerBold } from 'react-icons/pi';

function Spinner({ margin = 'm-20' }) {
  return (
    <PiSpinnerBold
      className={`mx-auto animate-[spin_3s_linear_infinite] text-6xl text-accent-primary md:text-8xl ${margin}`}
    />
  );
}

export default Spinner;
