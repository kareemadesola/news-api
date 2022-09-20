import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";

const Page = ({ news }) => {
  return (
    <>
      <Container fluid>
        <Row className="py-2 px-1">
          {news?.articles?.map((article) => {
            return (
              <Col sm={6} md={4} xxl={3}>
                <NewsItem key={article.publishedAt} {...article} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Page;
