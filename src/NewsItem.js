import React from "react";
import { Card } from "react-bootstrap";

const NewsItem = ({ title, description, image_url }) => (
  <Card>
    <Card.Img
      variant="top"
      src={
        image_url || "https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
      }
    />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default NewsItem;
