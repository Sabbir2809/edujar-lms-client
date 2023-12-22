<<<<<<< HEAD
"use client";
=======
>>>>>>> 647cbf9d778957b13b7934891ab2a986fc169f21
import { useState } from "react";
import { Button, Modal } from "keep-react";
import { EnvelopeSimpleOpen } from "phosphor-react";

const NotificationModel = ({ title, message }) => {
  const [showModal, setShowModal] = useState(false);
  const onClick = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <button className="btn btn-outline btn-sm" onClick={onClick}>
        Details
      </button>
      <Modal
        icon={<EnvelopeSimpleOpen size={28} color="#1B4DFF" />}
        size="xl"
        show={showModal}
<<<<<<< HEAD
        position="center"
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">
              {message}
            </p>
=======
        position="center">
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-body-4 leading-relaxed text-metal-500">{message}</p>
>>>>>>> 647cbf9d778957b13b7934891ab2a986fc169f21
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="outlineGray" onClick={onClick}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NotificationModel;
