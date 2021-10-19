import "../styles/DashboardStockCarousel.css";
import StockCarouselItem from "./StockCarouselItem";
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';



function DashboardStockCarousel() {
  return (
    <div className="dashboard-stock-carousel">
      <Splide
        options={ {
          type: 'loop',
          direction: 'ltr',
          perMove: 1,
          arrows: false,
          perPage: 5,
          autoplay : true,
          pauseOnHover: true,
          resetProgress: false,
          pagination: false,
          easing: 'linear',
          interval: 0,
          speed: 5000,
          drag: false,
        } }
      >
        <SplideSlide>
            <StockCarouselItem num={1} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={2} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={3} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={4} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={5} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={6} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={7} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={8} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={9} />
        </SplideSlide>

        <SplideSlide>
          <StockCarouselItem num={10} />
        </SplideSlide>

      </Splide>
    </div>
  ) 
}

export default DashboardStockCarousel;
