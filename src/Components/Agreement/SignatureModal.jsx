import React, { useRef, useState } from "react";
import { Button, Modal } from "antd";
import SignatureCanvas from "react-signature-canvas";
import "./SignAgreement.css";

const SignatureModal = (props) => {
  const { isModalOpen, submit, cancel } = props;

  const signatureRef = useRef(null);

  const handleCancel = () => {
    clearSignature();
    cancel();
  };

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const saveSignature = async () => {
    // let image = signatureRef.current.getTrimmedCanvas().toDataURL("image/png");
    let image = signatureRef.current.getTrimmedCanvas().toDataURL();
    image = base64ToFile(image.split("data:image/png;base64,")[1], "signature.png", "image/png");
    submit(image);
    clearSignature();
  };

  const base64ToFile = (base64String, fileName, mimeType) => {
    // Decode the Base64 string to binary data
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Create a Blob from the binary data
    const blob = new Blob([byteArray], { type: mimeType });

    // Create a File object with the desired file name and type
    return new File([blob], fileName, { type: mimeType });
  };

  return (
    <>
      <Modal
        title="Sign Agreement"
        open={isModalOpen}
        //   onOk={saveSignature}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={clearSignature}>
            Clear
          </Button>,
          <Button key="submit" type="primary" onClick={saveSignature}>
            Submit
          </Button>,
        ]}
      >
        <SignatureCanvas
          penColor="black" // Customize the pen color
          canvasProps={{ width: 450, height: 200, className: "test" }}
          ref={signatureRef}
        />
        <p>Draw you signature in above box</p>
      </Modal>
    </>
  );
};
export default SignatureModal;
