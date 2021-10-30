import React from "react";
import { Carousel } from "react-bootstrap";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Carousel className="pt-0">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/01/96/82/11/240_F_196821190_4yPmu9YcrwXKz1miV0RFoiykh9I7kfle.jpg"
            alt="First slide"
            height="400px"
            weight="100%"
          />
          <Carousel.Caption>
            <h2 className="text-white">
              Discover new place and we are no-1 in Bangladesh
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/03/00/75/64/240_F_300756454_jX9UODdWSoEWksF3WfY9B6LMd4yQse6R.jpg"
            alt="Second slide"
            height="400px"
            weight="100%"
          />

          <Carousel.Caption>
            <h2 className="text-white">
              More then 500 places and price guarantee
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/03/15/08/85/240_F_315088533_706xMSeuNJK4lnrTDvqRbcurHHkIubmr.jpg"
            alt="Third slide"
            height="400px"
            weight="100%"
          />

          <Carousel.Caption>
            <h2 className="text-white">
              Always welcome to contact customer service and our tellephone no:
              01931446671
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://t3.ftcdn.net/jpg/03/00/13/94/240_F_300139479_nw2Bv0bUxXznA5JkSAqS9iTrSipeNTI1.jpg"
            alt="Third slide"
            height="400px"
            weight="100%"
          />

          <Carousel.Caption>
            <h2 className="text-white">
              You can advance booking our next package
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
