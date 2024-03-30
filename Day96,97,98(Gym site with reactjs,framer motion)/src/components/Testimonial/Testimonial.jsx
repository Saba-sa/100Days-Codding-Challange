import React, { useState, useEffect } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import "./Testimonial.scss";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const Testimonial = () => {
  const [disabled, setDisabled] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [testimonial, setTestimonial] = useState(
    testimonialsData[selectedTestimonial]
  );
  const transition = { type: "spring", duration: 3 };
  useEffect(() => {
    setTestimonial(testimonialsData[selectedTestimonial]);
  }, [selectedTestimonial]);

  const right = () => {
    if (selectedTestimonial < testimonialsData.length - 1) {
      setSelectedTestimonial((prev) => prev + 1);
    } else {
      setDisabled(true);
    }
  };

  const left = () => {
    if (selectedTestimonial > 0) {
      setSelectedTestimonial((prev) => prev - 1);
    } else {
      setDisabled(false);
    }
  };

  return (
    <section className="testimonial" id="testimonials">
      <div className="wrapper">
        <div className="left">
          <span>TESTIMONIALS</span>
          <h2 className="stroke-text ">WHAT THEY</h2>
          <h2 className="stroke">SAY ABOUT US</h2>
          <motion.p
            key={selectedTestimonial}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: 100 }}
            transition={transition}
          >
            {testimonial.review}
          </motion.p>
          <h3>
            {testimonial.name}{" "}
            <span className="profession">- {testimonial.status}</span>
          </h3>
          <div className="ruler"></div>
        </div>
        <div className="right">
          <div className="arrow">
            <FaArrowLeftLong
              color={`${!disabled ? "gray" : "white"}`}
              onClick={left}
            />
            <FaArrowRightLong
              color={`${disabled ? "gray" : "white"}`}
              onClick={right}
            />
          </div>
          <div className="image-section">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              transition={{ ...transition, duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bor img-border-back"
            ></motion.div>
            <motion.img
              key={selectedTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: -100 }}
              transition={transition}
              src={testimonial.image}
              alt={testimonial.name}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ ...transition, duration: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bor img-filled-back"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
