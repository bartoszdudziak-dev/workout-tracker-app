import Button from '../../ui/Button';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Modal from '../../ui/Modal';
import { useUser } from './useUser';
import { useDeleteUser } from './useDeleteUser';

function DeleteAccount() {
  const {
    user: {
      id,
      user_metadata: { email },
    },
  } = useUser();

  const { deleteUser, isDeleting } = useDeleteUser();

  const handleDelete = () => deleteUser(id);

  return (
    <Modal>
      <div className='flex max-w-screen-xs flex-col lg:justify-between'>
        <div>
          <h3 className='mb-4 text-lg font-semibold uppercase tracking-widest text-primary sm:text-xl md:mb-6'>
            Delete Account
          </h3>
          <p className='text-sm leading-5 tracking-wider text-secondary md:text-base'>
            This operation is permanently cannot be undone! All your workouts
            will disappear!{' '}
            <span className='font-bold'>(not available yet)</span>
          </p>
        </div>
        <div className='mt-8 flex justify-end'>
          <Modal.Open>
            <Button size='large' type='secondary' disabled>
              Delete
            </Button>
          </Modal.Open>
        </div>
      </div>

      <Modal.Window>
        <ConfirmDelete
          resource='account'
          details={email}
          onConfirm={handleDelete}
          disabled={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
}

export default DeleteAccount;
