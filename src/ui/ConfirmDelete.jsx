import Button from './Button';
import SpinnerMini from './SpinnerMini';

function ConfirmDelete({
  disabled = false,
  resource = '',
  details = '',
  onConfirm = null,
  closeModalWindow,
}) {
  return (
    <div className='relative flex flex-col gap-4 p-6 md:gap-6 md:p-10'>
      <h3 className='text-center text-lg font-bold uppercase tracking-widest text-accent-primary overline xs:text-xl'>
        Delete {resource}
      </h3>

      <p className='tracking-wider text-primary'>
        Are you sure you want to permanently delete{' '}
        <span className='inline-block font-semibold text-accent-primary'>
          {details}
        </span>{' '}
        {resource}?
      </p>

      <div className='mt-6 flex items-center justify-between'>
        <Button
          size='large'
          type='secondary'
          onClick={closeModalWindow}
          disabled={disabled}
        >
          Cancel
        </Button>
        {disabled && <SpinnerMini />}
        <Button size='large' onClick={null} disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
