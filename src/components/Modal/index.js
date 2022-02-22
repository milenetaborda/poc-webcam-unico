import React, { forwardRef, useImperativeHandle, useState } from 'react'
import ReactDOM from 'react-dom'
import * as S from './style'

// eslint-disable-next-line react/display-name
const Modal = forwardRef(
  ({ width, bgColor, borderRadius, backdropColor, isReadOnly, children, ...props }, ref) => {
    const [showModal, setShowModal] = useState(null)

    useImperativeHandle(ref, () => {
      return {
        openModalFn: () => openModal(),
        closeModalFn: () => closeModal(),
      }
    })

    const openModal = () => {
      setShowModal(true)
    }

    const closeModal = () => {
      setShowModal(false)
    }

    if (showModal) {
      return ReactDOM.createPortal(
        <S.ModalWrapper>
          <S.ModalBackDrop onClick={isReadOnly ? () => null : closeModal} backdropColor={backdropColor} />
          <S.ModalContainer width={width} borderRadius={borderRadius} bgColor={bgColor} {...props}>
            {children}
          </S.ModalContainer>
        </S.ModalWrapper>,
        document?.getElementById('modal-root'),
      )
    }

    return null
  },
)

export default Modal
