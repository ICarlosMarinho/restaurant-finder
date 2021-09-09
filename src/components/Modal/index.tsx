import React from "react";
import { createPortal } from "react-dom";

import { ModalContainer } from "./style";

interface ModalProps {
  modalOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, modalOpen }) => {
  return createPortal(
    modalOpen ? <ModalContainer>{children}</ModalContainer> : null,
    document.getElementById("modal-root") as Element
  );
};

export default Modal;
