import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";

const Page = ({ news }) => {
  return (
    <>
      <Container fluid>
        {news?.articles?.map((article) => {
          return (
            <Row className="py-2 px-1">
              <Col md={6}>
                {/*<div style={{ display: "flex" }} className="col-md-6">*/}
                <NewsItem key={article.publishedAt} {...article} />

                {/*</div>*/}
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Page;
