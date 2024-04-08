import Modal from "react-modal";
import style from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, selectedImage, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={style.modal}
    >
      {selectedImage && (
        <img
          className={style.modalImage}
          src={selectedImage.regular}
          alt={selectedImage.alt}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
