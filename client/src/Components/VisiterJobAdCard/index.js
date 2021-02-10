import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const VisiterJobAdCard = ({ jobAd }) => {
  return (
    <Card className="card">
      <Card.Header as="h5">Tunisie Tomaia</Card.Header>
      <Card.Body>
        <div className="jobAd-info">
          <Card.Title>{jobAd.title}</Card.Title>
          <Card.Text> {jobAd.salary} </Card.Text>
          <Card.Text className="description">{jobAd.description}</Card.Text>
        </div>
        <Button variant="primary" href="/contact">
          Postuler
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VisiterJobAdCard;
