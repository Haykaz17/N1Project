import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Style from "./Carousel.module.scss";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={Style.arrow} onClick={onClick} style={{ left: 0 }}>
      <LeftOutlined className={Style.arrowIcon} />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={Style.arrow} onClick={onClick} style={{ right: 0 }}>
      <RightOutlined className={Style.arrowIcon} />
    </div>
  );
};

const Slider = () => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setCarousel(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data", err);
      });
  }, []);

  return (
    <Carousel
      className={Style.contain}
      arrows
      infinite={false}
      slidesToShow={2.7}
      slidesToScroll={3}
      prevArrow={<PrevArrow />}
      nextArrow={<NextArrow />}
      responsive={[
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
    >
      {carousel.map((item) => (
        <div key={item.id} className={Style.container}>
          <div className={Style.container_image}>
            <img src={item.image} className={Style.image} alt={item.title} />
            <div className={Style.dflex}>
              <p className={Style.text}>{item.title}</p>
              <p className={Style.p}>
                hsadjldvghsadsfdsffdsjdsjhsfdhjshsfdhsdhds
                fhshhjsdksdfcxiojkndbfjmmncxzdoeihuosbhafd
              </p>
              <h2 >180$</h2>
              <button className={Style.button} alt={item.button}>
                Learn More Now!
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
