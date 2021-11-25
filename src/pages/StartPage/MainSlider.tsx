import { baseImgFull } from "../../consts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface IPropType {
  images: string[];
}
const Next = ({ className, style, onClick }: any) => {
  return (
    <ArrowNext onClick={onClick}>
      <NextStyle />
    </ArrowNext>
  );
};
export const MainSlider = ({ images }: IPropType) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <Next />,

    customPaging(index: number): JSX.Element {
      return <div>{index}</div>;
    },
  };
  return (
    <>
      <BGonImg />
      <SliderStyle ref={(c) => c?.slickNext()} {...settings}>
        {images.map((img) => (
          <>
            <Img src={baseImgFull + img} alt="" />
            <div style={{ position: "absolute", top: "0", color: "white" }}>{img}</div>
          </>
        ))}
      </SliderStyle>
    </>
  );
};
const ArrowNext = styled.div`
  opacity: 0.5;
  position: absolute;
  left: 25%;
  top: 70%;
  z-index: 10;
  color: white;
  background: #000;
  padding: 12px 5px;
`;

const NextStyle = styled(FontAwesomeIcon).attrs({ icon: faChevronRight })`
  font-size: 50px;
`;

const BGonImg = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  background-color: rgba(49, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const SliderStyle = styled(Slider)`
  overflow: hidden;
  .slick-list {
    height: 100vh;
    flex: 1;
    overflow: hidden;
  }

  .slick-dots {
    bottom: 20%;
    color: white;
    z-index: 10;
  }

  .slick-prev {
    display: none;
  }
`;
