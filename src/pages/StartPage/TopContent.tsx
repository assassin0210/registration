import { baseImgFull } from "../../consts";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface IPropType {
  images: string[];
}

export const TopContent = ({ images }: IPropType) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    customPaging(index: number): JSX.Element {
      return <div>{index}</div>;
    },
  };
  return (
    <>
      <BGonImg />

      <SliderStyle ref={(c) => c?.slickNext()} {...settings}>
        {images.map((img) => (
          <img src={baseImgFull + img} alt="" />
        ))}
      </SliderStyle>
    </>
  );
};

const BGonImg = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  background-color: rgba(49, 0, 0, 0.3);
  width: 100%;
  height: 100%;
`;
const SliderStyle = styled(Slider)`
  overflow: hidden;

  .slick-list {
    height: 100vh;
    flex: 1;
    overflow: hidden;

    img {
      height: 100vh;
      object-fit: cover;
      overflow: hidden;
    }
  }

  .slick-dots {
    bottom: 20%;
    color: white;
    z-index: 10;
  }

  .slick-next {
    background: #000;
    display: flex;
    position: absolute;
    left: 0;
    top: 70%;
    z-index: 10;
  }

  .slick-prev {
    display: none;
  }
`;
