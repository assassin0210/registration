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
    slickNex: () => <div>next</div>,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    customPaging(index: number): JSX.Element {
      return <div>{index}</div>;
    },
  };
  return (
    <>
      <SliderStyle ref={(c) => c?.slickNext()} {...settings}>
        {images.map((img) => (
          <img src={baseImgFull + img} alt="" />
        ))}
      </SliderStyle>
    </>
  );
};
const SliderStyle = styled(Slider)`
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
  }

  .slick-next {
    background: #000;
    display: flex;
    position: absolute;
    right: 50%;
  }

  .slick-prev {
    background: #000;
    z-index: 1000;
    display: flex;
    position: absolute;
    left: 50%;
  }
`;

const Arrays = styled.div``;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
