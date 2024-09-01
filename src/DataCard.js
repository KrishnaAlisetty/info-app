import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DataCard(element) {
  const [modalState, setModalState] = useState(false);
  const closeModal = () => {
    setModalState(false);
  };
  const showModal = () => {
    setModalState(true);
  };
  return (
    <>
      <Card style={{ width: "18rem", height: "20rem" }} className="card">
        <Card.Img
          variant="top"
          src={element.data.image}
          height="200px"
          width="200px"
        />
        <Card.Body>
          <Card.Title>{element.data.title}</Card.Title>
          <Card.Text>
            <div className="detailsContainer">
              <button type="button" class="btn btn-info" onClick={showModal}>
                Know more.
              </button>
              <i class="bi bi-flag-fill">Add to visit</i>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Modal show={modalState} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{element.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{element.data.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DataCard;
