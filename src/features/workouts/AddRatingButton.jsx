import { TbHandClick } from 'react-icons/tb';
import ButtonIcon from '../../ui/ButtonIcon';

function AddRatingButton({ onClick }) {
  return (
    <ButtonIcon onClick={onClick} type='secondary' icon={<TbHandClick />} />
  );
}

export default AddRatingButton;
