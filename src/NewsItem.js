import React from "react";
import { Card } from "react-bootstrap";

const NewsItem = ({ title, description, image_url, link }) => {
  function onClick() {
    // eslint-disable-next-line no-restricted-globals
    location.replace(link);
  }
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
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
};

export default NewsItem;
