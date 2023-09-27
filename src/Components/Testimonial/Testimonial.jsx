import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui id, quaerat, saepe, ipsa minus quidem at ducimus quasi soluta hic porro fugiat alias. Consequatur pariatur quo odio corrupti optio fuga",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio fugit eaque, omnis fugiat non dolorum eligendi molestias delectus numquam, iste quisquam inventore architecto nemo voluptatem doloribus labore. Obcaecati, itaque.",
    },
    {
      img: profilePic3,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aperiam, quo minima magnam repellat at delectus, alias sequi laudantium nostrum aliquam.",
    },
    {
      img: profilePic4,
      review:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum molestias odit quibusdam ipsam, facere sapiente quas repellat dignissimos unde enim ipsa nesciunt omnis fugit nihil beatae quae atque illo adipisci,quam sint quos culpa? Fuga laborum doloribus ex quisquam.",
    },
  ];

  return (
    <div className="t-wrapper">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>form me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper>
        {clients.map((clients, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={clients.img} alt="clients img" />
              <span>{clients.review}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
