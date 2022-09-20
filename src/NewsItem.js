import React from "react";
import { Card } from "react-bootstrap";

function NewsItem({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={
          urlToImage ||
          "https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
        }
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsItem;
