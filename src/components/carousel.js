import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';
import "../styles/carousel.css"

const Carousel=(props)=> {
  return (
    <div className="carousel__div">
    <MDBCarousel className="carousel__container" showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement className="carousel__img" src='womenwear.png' alt='...' />
          <MDBCarouselCaption>
            <h1>Kadın giyimde %80'e varan indirimler!</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement className="carousel__img" src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement className="carousel__img" src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
  );
}

export default Carousel;