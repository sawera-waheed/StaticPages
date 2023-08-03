import React from "react";
import { Container, Grid } from "@mui/material";
import client1 from "../../assets/images/client1.png";
import client2 from "../../assets/images/client2.png";
import client3 from "../../assets/images/client3.png";
import client4 from "../../assets/images/client4.png";
import client5 from "../../assets/images/client5.png";
import client6 from "../../assets/images/client6.png";
import Image from "../../Components/Image/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper";
import "./styles.css";
import Testimonial from '../../Components/Testimonials/Testimonial';
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import t1 from "../../assets/images/t1.png"
import styled from "@emotion/styled";
const P = styled.p`
  font-size: 40px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
`;
const P2 = styled(P)`
  color: grey;
  font-size: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const Span = styled.span`
  color: blue;
`;
const Clients= () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={3} md={3} lg={3}></Grid>
          <Grid item sm={6} md={6} lg={6}>
            <P>
              Trusted by <Span>+2000</Span> clients
            </P>
            <P2>We combine classic brand strategy and account.</P2>
          </Grid>
          <Grid item sm={3} md={3} lg={3}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={0} lg={2} xl={2}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Image URL={client1} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Image URL={client2} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Image URL={client3} />
          </Grid>
          <Grid item xs={12} sm={12} md={0} lg={1} xl={1}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={0} lg={2} xl={2}></Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Image URL={client4} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Image URL={client5} />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <Image URL={client6} />
          </Grid>
          <Grid item xs={12} sm={12} md={0} lg={1} xl={1}></Grid>
        </Grid>
      </Container>
      <Swiper
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 2,
          },
        }}
        freeMode={true}
        navigation={{
          clickable: true,
        }}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Testimonial
            url={t1}
            name="Elisa Austen"
            position="Quicky"
            star=<IoMdStar color="yellow" size="25px" />
            star2=<IoMdStar color="yellow" size="25px" />
            star3=<IoMdStar color="yellow" size="25px" />
            star4=<IoMdStarHalf color="yellow" size="25px" />
            star5=<IoMdStarOutline
              color="yellow"
              size="25px"
              color-fill="yellow"
            />
          />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            url={t1}
            name="Elisa Austen"
            position="Quicky"
            star=<IoMdStar color="yellow" size="25px" />
            star2=<IoMdStar color="yellow" size="25px" />
            star3=<IoMdStar color="yellow" size="25px" />
            star4=<IoMdStarHalf color="yellow" size="25px" />
            star5=<IoMdStarOutline
              color="yellow"
              size="25px"
              color-fill="yellow"
            />
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            url={t1}
            name="Elisa Austen"
            position="Quicky"
            star=<IoMdStar color="yellow" size="25px" />
            star2=<IoMdStar color="yellow" size="25px" />
            star3=<IoMdStar color="yellow" size="25px" />
            star4=<IoMdStarHalf color="yellow" size="25px" />
            star5=<IoMdStarOutline
              color="yellow"
              size="25px"
              color-fill="yellow"
            />
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            url={t1}
            name="Elisa Austen"
            position="Quicky"
            star=<IoMdStar color="yellow" size="25px" />
            star2=<IoMdStar color="yellow" size="25px" />
            star3=<IoMdStar color="yellow" size="25px" />
            star4=<IoMdStarHalf color="yellow" size="25px" />
            star5=<IoMdStarOutline
              color="yellow"
              size="25px"
              color-fill="yellow"
            />
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            url={t1}
            name="Elisa Austen"
            position="Quicky"
            star=<IoMdStar color="yellow" size="25px" />
            star2=<IoMdStar color="yellow" size="25px" />
            star3=<IoMdStar color="yellow" size="25px" />
            star4=<IoMdStarHalf color="yellow" size="25px" />
            star5=<IoMdStarOutline
              color="yellow"
              size="25px"
              color-fill="yellow"
            />
          />
        </SwiperSlide>
      </Swiper>
    
    </div>
  );
};

export default Clients;
