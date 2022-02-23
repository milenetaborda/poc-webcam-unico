import { useRef, useState } from "react";
import { closeCamera } from "unico-webframe"
import { geradorNome } from "gerador-nome";
import UnicoSelfieScreen from "./components/unicoSelfieScreen";
import { ButtonCloseModal } from "./assets/buttonCloseModal";
import { PicturePhoto } from "./assets/picturePhoto";
import { ToastContainer } from 'react-toastify';
import Modal from "./components/Modal";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  const [guarantor, setGuarantor] = useState();
  const [student, setStudent] = useState();
  const modalRef = useRef();

  const openModal = () => {
    modalRef?.current?.openModalFn();
    setGuarantor(geradorNome());
    setStudent(geradorNome());
  };

  const closeModal = () => {
    modalRef?.current?.closeModalFn();
    closeCamera()
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="App-button-container" onClick={openModal}>
          <button type="button" className="App-button">
            <PicturePhoto />
            Take a Picture
          </button>
        </div>
      </div>

      <Modal ref={modalRef} isReadOnly>
        <div className="App-title-modal-content">
          <span className="App-title-modal">Tirar foto</span>
          <button type="button" className="App-close" onClick={closeModal} >
            <ButtonCloseModal />
          </button>
        </div>
        <UnicoSelfieScreen
          closeModal={closeModal}
          guarantor={guarantor}
          student={student}
        />
      </Modal>

      <ToastContainer position="bottom-right" className="App-toast" />
    </div>
  );
}

export default App;
