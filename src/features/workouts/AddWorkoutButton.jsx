import Button from '../../ui/Button';

function AddWorkoutButton({ onClick }) {
  return (
    <div className='mb-2'>
      <Button onClick={onClick} size='large'>
        Add new
      </Button>
    </div>
  );
}

export default AddWorkoutButton;
