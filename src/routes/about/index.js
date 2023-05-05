import React, { useState } from "react";
import OnePageHeader from "../../components/onePageHeader";
import "./about.scss";
import Slider from "react-slick";
import MenuBar from "../../components/menu";
import VectoreImage from "../../assets/images/about-image.png";
import IconDesign from "../../assets/icons/icon.png";
import CoffeImage from "../../assets/images/coffe.png";
import FarmerImage from "../../assets/images/a-7.png";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function About() {
  const [hiddenSection, setHiddenSection] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide1Index, setSlide1Index] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlideIndex(newIndex);
    },
  };
  console.log("slideIndex", slideIndex);
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlide1Index(newIndex);
    },
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      slideIndex === 0 && (
        <div className="right-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      slideIndex === 1 && (
        <div className="left-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      slide1Index === 0 && (
        <div className="right-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      slide1Index === 1 && (
        <div className="left-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      )
    );
  }

  return (
    <div>
      <div className="about-us-hero-banner">
        <Slider {...settings}>
          <div className="container-xl">
            <div className="about-us-first-section-image-with-text">
              <div className="grid">
                <div className="grid-items">
                  <div className="image-style">
                    <img src={VectoreImage} alt="VectoreImage" />
                  </div>
                </div>
                <div className="grid-items">
                  <h1>about us</h1>
                  <p>
                    Rare Earth Genomics is a dynamic partnership formed with Texas A&M Agrilife, one of the world's leading research institutions, to accelerate hemp research and create tools for farmers. This partnership enables us to access cutting-edge research and expertise in hemp science, setting us apart from others in the industry and giving us a competitive advantage.
                  </p>
                  <p>
                    Our ongoing research trials are focused on establishing hemp science best practices and finding innovative solutions to the challenges faced by farmers. Through these trials, we're identifying the most robust cultivars and testing their viability under different growing conditions. We're also exploring the potential uses of hemp in various industries, from textiles to pharmaceuticals.
                  </p>
                  <p>
                    At Rare Earth Genomics, our mission is to increase the likelihood of a successful harvest for farmers through genetic analysis and rigorous environmental testing of vigorous cultivars. We understand that the success of the farmer is the goal, and we're committed to providing reliable datasets, analytic tools, and stable germplasm to support them. Our proprietary tools and technologies help farmers make informed decisions about cultivation practices, selecting the right cultivars for their specific growing conditions, and optimizing yield and quality.
                  </p>
                  <p>
                  We believe that prosperity begins with a seed. That's why our mission is to bring stable genetics, cultivation technology, and seeds to the world. Our vision is to make hemp cultivation more accessible and sustainable for farmers worldwide, and we're actively working on initiatives and partnerships to achieve this goal.
                  </p>
                  <p>
                  Rare Earth Genomics has achieved several notable accomplishments in the industry, including the development of groundbreaking technologies that have been recognized for their potential to transform hemp cultivation. We're proud of the impact we've made so far, and we're excited to continue pushing the boundaries of hemp science and making a positive difference in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
         {/* <div className="container-xl">
            <div className="about-only-three-col-text-content">
              <div>
                <div className="page-title">
                  <h1>lorem inpsum</h1>
                </div>
                <div>
                  <div className="text-grid">
                    <div className="text-grid-items">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, aperiam! Facilis omnis praesentium ex
                        corrupti ipsum odio! Maxime, reiciendis optio corrupti
                        totam, deleniti nemo eveniet ab suscipit maiores aliquid
                        velit. Odio, magnam ipsa cumque ipsam enim, eveniet
                        aperiam quia, cum ea vitae sint officiis natus
                        asperiores rerum eaque consectetur aliquam atque
                        possimus omnis. Perferendis, earum facilis vitae
                        dignissimos quam quis! Perspiciatis alias, soluta
                        reprehenderit voluptatibus possimus iste nesciunt
                        temporibus quae obcaecati molestiae itaque porro
                        excepturi totam facilis asperiores sint, deleniti
                        perferendis fuga, dolorem at quia ea iusto laborum.
                        Deleniti, omnis!
                      </p>
                    </div>
                    <div className="text-grid-items">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, aperiam! Facilis omnis praesentium ex
                        corrupti ipsum odio! Maxime, reiciendis optio corrupti
                        totam, deleniti nemo eveniet ab suscipit maiores aliquid
                        velit. Odio, magnam ipsa cumque ipsam enim, eveniet
                        aperiam quia, cum ea vitae sint officiis natus
                        asperiores rerum eaque consectetur aliquam atque
                        possimus omnis. Perferendis, earum facilis vitae
                        dignissimos quam quis! Perspiciatis alias, soluta
                        reprehenderit voluptatibus possimus iste nesciunt
                        temporibus quae obcaecati molestiae itaque porro
                        excepturi totam facilis asperiores sint, deleniti
                        perferendis fuga, dolorem at quia ea iusto laborum.
                        Deleniti, omnis!
                      </p>
                    </div>
                    <div className="text-grid-items">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores, aperiam! Facilis omnis praesentium ex
                        corrupti ipsum odio! Maxime, reiciendis optio corrupti
                        totam, deleniti nemo eveniet ab suscipit maiores aliquid
                        velit. Odio, magnam ipsa cumque ipsam enim, eveniet
                        aperiam quia, cum ea vitae sint officiis natus
                        asperiores rerum eaque consectetur aliquam atque
                        possimus omnis. Perferendis, earum facilis vitae
                        dignissimos quam quis! Perspiciatis alias, soluta
                        reprehenderit voluptatibus possimus iste nesciunt
                        temporibus quae obcaecati molestiae itaque porro
                        excepturi totam facilis asperiores sint, deleniti
                        perferendis fuga, dolorem at quia ea iusto laborum.
                        Deleniti, omnis!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </Slider>
      </div>
      {/* <div className="main-service-section-alignment">
        <Slider {...settings1}>
          <div className="main-service-banner">
            <div className="service-flex">
              <div className="service-flex-items">
                <div className="image-style">
                  <img src={CoffeImage} alt="CoffeImage" />
                </div>
              </div>
              <div className="service-flex-items">
                <div>
                  <div className="service-text-style-for-page">
                    <h2>services</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corporis, autem pariatur, non reiciendis culpa atque,
                      reprehenderit officiis adipisci excepturi saepe modi vel
                      natus! Aut alias sint consectetur quaerat laborum quae!
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                    <p>
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-service-banner">
            <div className="service-flex">
              <div className="service-flex-items">
                <div className="image-style">
                  <img src={CoffeImage} alt="CoffeImage" />
                </div>
              </div>
              <div className="service-flex-items">
                <div>
                  <div className="service-text-style-for-page">
                    <h2>lorem ipsum</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Corporis, autem pariatur, non reiciendis culpa atque,
                      reprehenderit officiis adipisci excepturi saepe modi vel
                      natus! Aut alias sint consectetur quaerat laborum quae!
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                    <p>
                      Eligendi illum quasi consequuntur, iusto natus atque fugit
                      qui? Similique quibusdam quos repellendus possimus
                      obcaecati voluptatem quia perferendis ex necessitatibus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="main-service-section-alignment">
        <div className="main-service-banner">
          <div className="service-flex">
            <div className="service-flex-items">
              <div className="image-style">
                <img src={FarmerImage} alt="FarmerImage" />
              </div>
            </div>
            <div className="service-flex-items">
              <div>
                <div className="service-text-style-for-page">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corporis, autem pariatur, non reiciendis culpa atque,
                    reprehenderit officiis adipisci excepturi saepe modi vel
                    natus! Aut alias sint consectetur quaerat laborum quae!
                    Eligendi illum quasi consequuntur, iusto natus atque fugit
                    qui? Similique quibusdam quos repellendus possimus obcaecati
                    voluptatem quia perferendis ex necessitatibus
                  </p>
                  <p>
                    Eligendi illum quasi consequuntur, iusto natus atque fugit
                    qui? Similique quibusdam quos repellendus possimus obcaecati
                    voluptatem quia perferendis ex necessitatibus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
