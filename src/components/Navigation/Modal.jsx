import React from "react";
import { Modal as SemanticModal } from "semantic-ui-react";

const Modal = ({ isModalShow, showModal, content }) => {
  return (
    <SemanticModal
      onClose={() => showModal(false)}
      onOpen={() => showModal(true)}
      open={isModalShow}
    >
      <SemanticModal.Header>{content.title}</SemanticModal.Header>
      <SemanticModal.Content image>
        <SemanticModal.Description>{content.data}</SemanticModal.Description>
      </SemanticModal.Content>
    </SemanticModal>
  );
};

export default Modal;
