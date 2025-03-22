import React from "react";
import "../css/Workdetails.css";


const WorkDetails = () => {
  return (
    <div className="work-details">
      <section className="intro">
        <h1>Designing Dashboards with usability in mind</h1>
        <div className="tags">
          <span className="year-tag">2020</span>
          <p className="category">Dashboard, User Experience Design</p>
        </div>
        <p className="description">
          Armet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src="./public/assets/single-blog-post-images/dashboard-user-experience.webp" alt="Dashboard Design" className="dashboard-img" />
      </section>
      
      <section className="details">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <p className="description">
          Armet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
        <img src="./public/assets/single-blog-post-images/car.webp" alt="Car Illustration" className="car-img" />
        <img src="./public/assets/single-blog-post-images/dashboard-delivery-pickup.webp" alt="Order Summary" className="order-img" />
      </section>
    </div>
  );
};

export default WorkDetails;