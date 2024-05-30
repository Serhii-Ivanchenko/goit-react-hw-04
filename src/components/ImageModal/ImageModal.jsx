import ReactModal from 'react-modal';

export default function ImageModal({ isOpen, onClose, url, description }) {
  return (
    <ReactModal
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      onRequestClose={onClose}
    >
      <img src={url} alt={description} />
    </ReactModal>
  );
}
