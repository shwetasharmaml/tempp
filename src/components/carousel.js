import React from "react";
import Carousel from "react-elastic-carousel";
import "./style.css";
import styled from "styled-components";
const CelebName = styled.div``;
const Item =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
  overflow:hidden;
`;

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

export default function CarouselComponent({data}) {
  return (
    <>
     <div>
        <Carousel breakPoints={breakPoints}>
          {data?.map((images)=>{return(
            <>
            <Item>
            <img src={images.image} />
            </Item>
            <CelebName>{images.name}</CelebName>
            </>
          )})}
          
        </Carousel>
      </div>
    </>
  );
}

 