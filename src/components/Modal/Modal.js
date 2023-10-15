import './Modal.css';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({
  isModalOpen,
  closeModal,
  largeImageURL,
  tags,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={largeImageURL} alt={tags} width="840px" height="700px" />
    </Modal>
  );
};
