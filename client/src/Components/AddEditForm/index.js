import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { addJobAd, editJobAd } from "../../JS/actions";
import "./index.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    background: "#f9f9f9",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 999,
    width: "100vw",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function AddEditForm({ oldJobAd, _id }) {
  const dispatch = useDispatch();
  const addNewJobAd = (formData) => dispatch(addJobAd(formData));
  const updateJobAd = (id, formData) => dispatch(editJobAd(id, formData));

  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    salary: "",
    description: "",
  });

  useEffect(() => {
    oldJobAd
      ? setForm(oldJobAd)
      : setForm({
          title: "",
          salary: "",
          description: "",
        });
  }, [modalIsOpen, oldJobAd]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    oldJobAd ? updateJobAd(_id, form) : addNewJobAd(form);
    closeModal();
  };

  return (
    <React.Fragment>
      {oldJobAd ? (
        <span onClick={openModal}>EDIT</span>
      ) : (
        <i className="fas fa-plus add-btn" onClick={openModal} />
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {oldJobAd ? <h2>Modify the job ad</h2> : <h2>Add a job ad</h2>}
        <form onSubmit={handleSubmit} className="add-edit-form">
          <label>TITLE</label>
          <input
            onChange={handleChange}
            value={form.title}
            name="title"
            type="text"
            placeholder="Enter the title..."
            required
          />
          <label>SALARY</label>
          <input
            onChange={handleChange}
            value={form.salary}
            name="salary"
            type="text"
            placeholder="Enter the salary..."
            required
          />
          <label>DESCRIPTION</label>
          <input
            onChange={handleChange}
            value={form.description}
            name="description"
            type="text"
            placeholder="Enter the job description..."
            required
          />
          <div>
            <button type="submit">Confirm</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
}

export default AddEditForm;
