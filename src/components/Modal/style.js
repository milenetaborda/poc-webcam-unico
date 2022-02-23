import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99998;
`

export const ModalContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 80px);
  max-height: calc(100vh - 80px); 
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 99999;
  padding: 1rem;
  width: ${({ width }) => width || '600px'};
  background-color: ${({ bgColor }) => bgColor || 'white'};
  border-radius: ${({ borderRadius }) => borderRadius || '8px'};
`
