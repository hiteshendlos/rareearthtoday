import React, { useEffect, useRef, useState } from "react";
import About from "../about";
import FirstSection from "../home/firstSection";
import VectoreImage from "../../assets/images/logo.gif";
import IconDesign from "../../assets/icons/icon.png";
import CoffeImage from "../../assets/images/coffe.png";
import CoffeImage1 from "../../assets/images/coffe1.jpg";
import CoffeImage2 from "../../assets/images/coffe2.jpg";
import TeaxsImage from "../../assets/images/teaxs.png";
import FarmerImage from "../../assets/images/a-7.png";
import Slider from "react-slick";
import Icon from "../../assets/icons/icon.png";
import SecSection from "../home/secSection";
import "./newpage.scss";
import ContactSection from "../home/contactSection";
import SmoothScroll from "../../components/smoothscroll";
export default function Newpage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const mineref = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slide1Index, setSlide1Index] = useState(0);
  const [savedList, setSavedList] = useState(false);
  const settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    beforeChange: (oldIndex, newIndex) => {
      console.log("oldIndex, newIndex", oldIndex, newIndex);
      setSlide1Index(newIndex);
    },
  };

  const [openModal, setOpenModal] = useState(true);
  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      
        <div className="right-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      
    );
  }

  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      
        <div className="left-side-arrow-about-us" onClick={onClick}>
          <img src={IconDesign} alt="IconDesign" />
        </div>
      
    );
  }

  const nextSection = (currentPage) => {
    let navDots = document.getElementsByClassName("nav-dot");
    navDots = Array.prototype.slice.call(navDots);
    navDots[Number(currentPage) - 1]?.classList.remove("dot-active");
    navDots[Number(currentPage)]?.classList.add("dot-active");
    let pages = document.getElementById("all-pages");
    let Top = -document.documentElement.clientHeight * Number(currentPage);
    Top = Number(currentPage) === 10 ? Top + 969 : Top;
    pages.style.top = Top + "px";
  };

  return (
    <div>
      <div className="fullscreen-container" id="fullscreen">
      <div className="nav-dot-container">
        <p className="nav-dot dot-active" id="nav-dot-1" data-screen="main-screen"><span></span></p>
        <p className="nav-dot" id="nav-dot-2" data-screen="about-us"><span></span></p>
        <p className="nav-dot" id="nav-dot-3" data-screen="all-services"><span></span></p>
        <p className="nav-dot" id="nav-dot-4" data-screen="all-partners"><span></span></p>
        <p className="nav-dot" id="nav-dot-5" data-screen="all-contact"><span></span></p>
      </div>
        <div className="section-two-mail open-mail-box">
          <div className="open-main-box">
            <p>open mail ?</p>
            <button className="open-box-btn">cancel</button>
            <button className="open-box-btn">open</button>
          </div>
        </div>
        <div id="all-pages">
          <section className="page" id="main-screen">
            <div className="text-container">
              <div id="home">
              <div className="fullscreen-first" >
                <div className="slide open-mail-box" id="fullscreen-first">
                  <div className="open-main-box">
                    <p>open mail ?</p>
                    <button className="open-box-btn">cancel</button>
                    <button className="open-box-btn">open</button>
                  </div>
                </div>
                <div className="slide secsection-banner-logo" id="fullscreen-second">
                  <FirstSection setOpenModal={setOpenModal} />
                  
                </div>
                <div className="slide secsection-banner secsection-banner-one" id="fullscreen-second-two">
                    <SecSection />
                </div>

                <div className="slide secsection-banner secsection-banner-two" id="fullscreen-third">
                  <div className="sec-section-relative-div">
                    <div className="secsection-banner-image" id="secsection-bg-two">
                      <div className="sec-image-header-relative"></div>
                    </div>
                    <div className="dot-image-style-one"></div>
                  </div>
                </div>

                <div className="slide secsection-banner secsection-banner-three" id="fullscreen-fourth">
                  <div className="sec-section-relative-div">
                    <div className="secsection-banner-image" id="secsection-bg-fourth">
                      <div className="sec-image-header-relative"></div>
                    </div>
                    <div className="dot-image-style-two" id="secsection-banner-tow"></div>
                  </div>
                </div>
                </div>
                <div
                      className="bottom-arrow-alignment-abc" data-screen="about-us"
                    >
                      <img src={Icon} alt="Icon" />
                    </div>
              </div>
            </div>
          </section>         
          <section className="page" id="about-us">
            <div className="text-container">
              <About />
              <div
                className="bottom-arrow-alignment-abc" data-screen="all-services"
              >
                <img src={Icon} alt="Icon" />
              </div>
            </div>
          </section>
          <section className="page" id="all-services">
            <div className="text-container">
              <div className="main-service-section-alignment">
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
                            <h2>Services</h2>
                            <p>
                              Our services are designed to benefit hemp farmers, providing critical tools and analytics to improve the efficiency of farming a successful harvest. Thanks to our research partnership with Texas A&M Agrilife, we offer a comprehensive range of solutions that include gene sequencing, in-line breeding, and environmental testing and analysis. These services can help farmers select the most robust strains, develop new cultivars with desirable traits, and optimize their growing practices to achieve a successful harvest.
                            </p>
                            <p>
                              In addition, we provide plant physiology, yield metrics, and gene data analysis, which provide breeders with improved varietals that optimize plant health. Our expertise in many specialty branches of horticulture science, such as plant pathology and soil science, means that we can offer tailored solutions to address specific challenges and optimize growing practices.
                            </p>
                            <p>
                              At Rare Earth Genomics, we understand that every farmer's needs are unique, and that's why we offer customized solutions that are designed to meet each client's specific requirements. We also offer strategic partnership information for shared research and breeding material, so that our clients can access cutting-edge research and technology to improve their cultivation practices.
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
                          <img src={CoffeImage1} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>Gene sequencing</h2>
                            <p>
                              Rare Earth Genomics can provide gene sequencing services to identify the genetic makeup of different hemp cultivars. This information can be used to select the most robust and desirable strains for cultivation.
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
                          <img src={CoffeImage2} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>In-line breeding</h2>
                            <p>Our organization can offer in-line breeding services to develop new cultivars with desirable traits, such as higher CBD content or better resistance to pests and disease.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-service-banner">
                    <div className="service-flex">
                      <div className="service-flex-items">
                        <div className="image-style">
                          <img src={CoffeImage1} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>Environmental testing and analysis</h2>
                            <p>
                              Rare Earth Genomics can conduct rigorous environmental testing and analysis to determine which cultivars will thrive in specific growing conditions. This information can help farmers optimize their growing practices to achieve a successful harvest.
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
                          <img src={CoffeImage2} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>Plant physiology and yield metrics</h2>
                            <p>
                              Our organization can provide plant physiology and yield metrics services to help farmers monitor the health and productivity of their crops. This information can be used to identify areas for improvement and optimize cultivation practices.
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
                          <img src={CoffeImage1} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>Specialty branches of horticulture science</h2>
                            <p>
                              We offer services in many specialty branches of horticulture science, such as plant pathology and soil science. This expertise can be leveraged to help farmers address specific challenges or optimize their growing practices.
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
                          <img src={CoffeImage2} alt="CoffeImage" />
                        </div>
                      </div>
                      <div className="service-flex-items">
                        <div>
                          <div className="service-text-style-for-page">
                            <h2>Strategic partnerships</h2>
                            <p>
                              Rare Earth Genomics can provide information on strategic partnerships for shared research and breeding material. This can help farmers access cutting-edge research and technology to improve their cultivation practices.
                              </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
                <div
                  className="bottom-arrow-alignment-abc" data-screen="all-partners"
                >
                  <img src={Icon} alt="Icon" />
                </div>
              </div>
            </div>
          </section>

          <section className="page partners-section" id="all-partners">
            <div className="text-container">
              <div className="partner-all-section-content-alignment">
                <div className="container-xl">
                  <h4>partners</h4>
                  <p>
                    INFINITE SOLUTIONS VIA OUR PARTNERS
                  </p>
                  <div className="all-partners-content-icon-alignment">
                    <a href="#" className="order-1"></a>
                    <a href="#" className="order-2"></a>
                    <a href="#" className="order-3"></a>
                    <a href="https://www.tamu.edu/" className="order-class order-4">
                      <img src={TeaxsImage} alt="TeaxsImage" />
                    </a>
                    <a href="#" className="order-5"></a>
                    <a href="#" className="order-6"></a>
                    <a href="#" className="order-7"></a>
                  </div>
                </div>
              </div>
              <div
                className="bottom-arrow-alignment-abc" data-screen="all-contact"
              >
                <img src={Icon} alt="Icon" />
              </div>
            </div>
          </section>
          <section className="page" id="all-contact">
            <div className="text-container">
              <ContactSection />
            </div>
          </section>
        </div>
        
      </div>
    </div>
  );
}
