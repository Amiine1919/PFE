import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AddEditForm from "../AddEditForm";
import { deleteJobAd } from "../../JS/actions";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./index.css";

const JobAdCard = ({ jobAd }) => {
  const dispatch = useDispatch();
  const removeJobAd = (id) => dispatch(deleteJobAd(id));
  const [show, setShow] = useState(false);

  const handleRemove = () => removeJobAd(jobAd._id);

  return (
    <Card className="card">
      <i
        className={`fas fa-ellipsis-v ${show && "action-btn"} `}
        onClick={() => setShow(!show)}
      />
      {show && (
        <ul className="action-menu">
          <li>
            <i className="fas fa-trash" />
            <span onClick={handleRemove}>DELETE</span>
          </li>
          <li>
            <i className="fas fa-pen" />
            <AddEditForm
              oldJobAd={{
                title: jobAd.title,
                salary: jobAd.salary,
                description: jobAd.description,
              }}
              _id={jobAd._id}
            />
          </li>
        </ul>
      )}
      <Card.Header as="h5">Tunisie Tomaia</Card.Header>
      <Card.Body>
        <div className="jobAd-info">
          <Card.Title>{jobAd.title}</Card.Title>
          <Card.Text> {jobAd.salary} </Card.Text>
          <Card.Text className="description">{jobAd.description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobAdCard;
