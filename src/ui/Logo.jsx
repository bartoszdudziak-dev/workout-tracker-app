import { useDarkMode } from '../context/DarkModeContext';

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className='space-y-3 text-wrap'>
      <img
        className={`mx-auto w-40 ${isDarkMode && 'brightness-75'} transition-all duration-500`}
        src='/logo.webp'
        alt='The logo of the app, characterized by a bold well-build man in purple T-shirt'
      />
      <div className='flex flex-col text-2xl font-bold uppercase leading-5'>
        <span>Workout</span>
        <span className='text-right'>Tracker</span>
      </div>
    </div>
  );
}

export default Logo;
