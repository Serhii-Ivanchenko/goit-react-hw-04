import ReactModal from 'react-modal';

export default function ImageModal({ isOpen, url, description }) {
  return (
    <ReactModal isOpen={isOpen} shouldCloseOnEsc={true} ariaHideApp={false}>
      <img src={url} alt={description} />
    </ReactModal>
  );
}
