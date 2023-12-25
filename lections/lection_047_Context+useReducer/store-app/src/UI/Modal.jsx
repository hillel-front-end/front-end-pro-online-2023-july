import { Children } from "react";
import styled from "styled-components";
import Button from "./Button";

const Overlay = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;

  background-color: rgb(232 232 232 / 97%);
  z-index: 20;
  transition: 0.3s all;

  display: ${(props) => (props.$visibility ? "block" : "none")};
`;

{
  /* <Overlay visibility={true} /> */
}

const ModalContent = styled.div`
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  text-align: center;
  padding: 30px;
  border-radius: 3px;
  transition: 0.3s all;

  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.$visibility ? "block" : "none")};

  .closeModal {
    width: 20px;
    height: 20px;
    font-size: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 40px;
    top: 34px;
  }
`;

export default function Modal({ children, visibility, onClose, ...props }) {
  const onCloseHandler = () => {
    onClose();
  };

  return (
    <>
      <ModalContent $visibility={visibility} {...props}>
        <Button className="closeModal" onClick={onCloseHandler}>
          X
        </Button>
        {children}
      </ModalContent>
      <Overlay {...props} $visibility={visibility} />
    </>
  );
}
