import { React, useState } from "react";
import Modal from "../components/modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handelClick = () => {
    setShowModal(true);
  };
  const handelOnClose = () => {
    setShowModal(false);
  };
  const actionButton = (
    <div>
      <Button primary>OK</Button>
    </div>
  );

  const modal = (
    <Modal handelOnClose={handelOnClose} actionButton={actionButton}>
      <p>Thank you for visit our modal component</p>
    </Modal>
  );

  return (
    <>
      <Button onClick={handelClick} primary>
        Modal
      </Button>
      {showModal && modal}
    </>
  );
};

export default ModalPage;
