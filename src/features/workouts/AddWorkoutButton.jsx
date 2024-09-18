import Button from '../../ui/Button';

function AddWorkoutButton({ onClick }) {
  return (
    <Button onClick={onClick} size='large'>
      Add new
    </Button>
  );
}

export default AddWorkoutButton;
