import React from "react";

const Hero = () => (
  <section
    className="d-flex justify-content-center align-items-center"
    style={{
      backgroundImage: `url("https://mdbootstrap.com/img/Photos/Others/images/76.jpg")`,
      height: "95vh",
      backgroundSize: "cover",
    }}
  >
    <div className="text-center">
      <h1>Peak News</h1>
      <p className="lead">Catch Every Moment</p>
    </div>
  </section>
);

export default Hero;
