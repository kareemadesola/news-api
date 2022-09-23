import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";

const Page = ({ news }) => {
  return (
    <>
      <Container fluid>
        <Row className="py-2 px-1">
          {news?.results?.map((article) => {
            return (
              <Col sm={6} md={4} xxl={3} className="p-1">
                <NewsItem key={article.pubDate} {...article} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Page;
