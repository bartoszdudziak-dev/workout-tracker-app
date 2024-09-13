import { useState } from 'react';

function ButtonToggle({ id, on, off, isChecked, onChange }) {
  const [internalChecked, setInternalChecked] = useState(false);

  const checked = isChecked !== undefined ? isChecked : internalChecked;

  const handleToggle = () =>
    isChecked !== undefined ? onChange?.() : setInternalChecked((on) => !on);

  const toggleBallStyle = `${checked ? 'after:left-[calc(100%-1rem)] after:xs:left-[calc(100%-1.1rem)] md:after:left-[calc(100%-1.25rem)]' : 'after:left-1'} after:absolute after:top-1/2 after:size-3 after:xs:size-3.5 after:md:size-4 after:-translate-y-1/2 after:rounded-full after:bg-secondary after:transition-all after:duration-200 after:content-[""]`;

  const handleKeyDown = (e) => {
    if (e.key === 'Space' || e.key === ' ') handleToggle();
  };

  return (
    <div className='justify- flex w-min items-center'>
      {off && <span className='mr-1 xs:mr-1.5 md:mr-2'>{off}</span>}
      <input
        type='checkbox'
        id={id}
        className='invisible h-0 w-0'
        checked={checked}
        onChange={handleToggle}
      />
      <label
        tabIndex='0'
        onKeyDown={handleKeyDown}
        htmlFor={id}
        className={`focus-visible:ring-offset-offsetColor relative block h-4 w-8 cursor-pointer rounded-full shadow-sm outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-4 xs:h-5 xs:w-10 md:h-6 md:w-12 ${toggleBallStyle} ${checked ? 'bg-accent-primary' : 'bg-tetiary'}`}
      ></label>
      {on && <span className='ml-1 xs:ml-1.5 md:ml-2'>{on}</span>}
    </div>
  );
}

export default ButtonToggle;
