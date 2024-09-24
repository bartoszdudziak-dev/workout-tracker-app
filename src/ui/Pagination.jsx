import { TbArrowBigLeftFilled, TbArrowBigRightFilled } from 'react-icons/tb';
import ButtonIcon from './ButtonIcon';

import { useSearchParams } from 'react-router-dom';

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  const totalPages = Math.ceil(
    count / Number(import.meta.env.VITE_WORKOUTS_PER_PAGE),
  );

  const setPageParam = (page) => {
    searchParams.set('page', page);
    setSearchParams(searchParams);
  };

  const goToPrevPage = () => {
    const prevPage = currentPage === 1 ? currentPage : currentPage - 1;
    setPageParam(prevPage);
  };

  const goToNextPage = () => {
    const nextPage = currentPage === totalPages ? currentPage : currentPage + 1;
    setPageParam(nextPage);
  };

  return (
    <div className='flex items-center justify-center gap-10 md:gap-20'>
      <div className='flex items-center gap-2 text-xs font-bold uppercase md:text-sm'>
        <ButtonIcon
          disabled={currentPage === 1}
          onClick={goToPrevPage}
          icon={<TbArrowBigLeftFilled />}
          type='secondary'
        />
        <span className='hidden md:block'>Previous</span>
      </div>

      <div className='text-xs md:text-sm'>
        <span className='font-semibold'>
          {(currentPage - 1) * Number(import.meta.env.VITE_WORKOUTS_PER_PAGE) +
            1}{' '}
          to{' '}
          <span className='font-semibold'>
            {currentPage === totalPages
              ? count
              : currentPage * Number(import.meta.env.VITE_WORKOUTS_PER_PAGE)}
          </span>{' '}
          of <span className='font-semibold'>{count}</span>
        </span>
      </div>

      <div className='flex items-center gap-2 text-xs font-bold uppercase md:text-sm'>
        <span className='hidden md:block'>Next</span>
        <ButtonIcon
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
          icon={<TbArrowBigRightFilled />}
          type='secondary'
        />
      </div>
    </div>
  );
}

export default Pagination;
