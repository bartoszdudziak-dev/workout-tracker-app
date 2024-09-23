import { FaFaceFrown } from 'react-icons/fa6';
import { FaFaceFrownOpen } from 'react-icons/fa6';
import { FaFaceGrimace } from 'react-icons/fa6';
import { FaFaceGrin } from 'react-icons/fa6';
import { FaFaceGrinBeam } from 'react-icons/fa6';

import { useState } from 'react';

export const ratingOptions = [
  {
    icon: <FaFaceFrown />,
    value: 1,
    color: 'text-red-400',
    hover: 'hover:text-red-400',
  },
  {
    icon: <FaFaceFrownOpen />,
    value: 2,
    color: 'text-orange-400',
    hover: 'hover:text-orange-400',
  },
  {
    icon: <FaFaceGrimace />,
    value: 3,
    color: 'text-yellow-400',
    hover: 'hover:text-yellow-400',
  },
  {
    icon: <FaFaceGrin />,
    value: 4,
    color: 'text-lime-400',
    hover: 'hover:text-lime-400',
  },
  {
    icon: <FaFaceGrinBeam />,
    value: 5,
    color: 'text-green-400',
    hover: 'hover:text-green-400',
  },
];

function RatingButton({
  option: { icon, value, color, hover },
  setRate,
  rate,
  onRate,
  disabled,
}) {
  const handleSetRate = () => {
    setRate((prevRate) => (prevRate === value ? null : value));

    // update outside rate
    onRate?.((prevRate) => (prevRate === value ? null : value));
  };

  // its span element so it will just fake disabled property
  return (
    <span
      role='button'
      className={`${rate === value ? color : 'text-secondary'} ${hover} text-2xl hover:opacity-70 sm:text-3xl ${disabled ? 'pointer-events-none opacity-50 transition-none' : 'transition-all duration-300 hover:scale-105'}`}
      value={value}
      onClick={handleSetRate}
    >
      {icon}
    </span>
  );
}

function WorkoutRating({ onRate, initialRate = null, disabled = false }) {
  const [rate, setRate] = useState(initialRate);

  return (
    <div className='flex gap-3 sm:gap-5'>
      {ratingOptions.map((option) => (
        <RatingButton
          disabled={disabled}
          key={option.value}
          option={option}
          setRate={setRate}
          rate={rate}
          onRate={onRate}
        />
      ))}
    </div>
  );
}

export default WorkoutRating;
