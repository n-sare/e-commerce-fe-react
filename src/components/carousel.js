import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';
import styles from "../styles/carousel.module.css"

const Carousel = () => {

  //Carousel is from MDBootstrap
  return (
    <div className={styles.carousel__div}>
      <MDBCarousel className={styles.carousel__container} showControls showIndicators dark fade>
        <MDBCarouselInner>

          <MDBCarouselItem itemId={0}>
            <MDBCarouselElement className={styles.carousel__img} src='1.jpeg' alt='...' />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={1}>
            <MDBCarouselElement className={styles.carousel__img} src='2.jpg' alt='...' />
            {/* //Leaving this in comment out, to show how to put text in Carousel (which I did not prefer) 
                //You have to import MDBCarouselCaption from mdb-react-ui-kit
            
            <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption> */}
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <MDBCarouselElement className={styles.carousel__img} src='3.jpg' alt='...' />
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}

export default Carousel;