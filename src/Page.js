import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsItem from "./NewsItem";

const Page = ({ news }) => {
  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url("https://mdbootstrap.com/img/Photos/Others/images/76.jpg")`,
          height: "97.5vh",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center">
          <h1>Peak News</h1>
          <p className="lead">Catch Every Moment</p>
        </div>
      </section>
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
