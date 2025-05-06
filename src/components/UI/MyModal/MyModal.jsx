import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  padding: 25px;
  background: white;
  border-radius: 16px;
  min-width: 250px;
`;

const MyModal = ({ children, visible, setVisible }) => {
  return (
    <ModalWrapper visible={visible} onClick={() => setVisible(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default MyModal;