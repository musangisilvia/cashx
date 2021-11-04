import "../styles/DashboardStockCarousel.css";
import StockCarouselItem from "./StockCarouselItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

import useFetch from "../helpers/useFetch";

function DashboardStockCarousel() {

  const {data: stocks, isPending, error} = useFetch('/api/carousel')


  return (
    <div className="dashboard-stock-carousel">
      {/* Conditional Rendering */}
      { error && <div> {error} </div> }
      { isPending && <div> Loading... </div> }
      
      { stocks && 
      <Splide
        options={{
          type: "loop",
          direction: "ltr",
          perMove: 1,
          arrows: false,
          perPage: 5,
          autoplay: true,
          pauseOnHover: true,
          resetProgress: false,
          pagination: false,
          easing: "linear",
          interval: 0,
          speed: 5000,
          drag: false,
        }}
      >
          <SplideSlide>
            <StockCarouselItem stock={stocks[0]}/>
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[1]}/>
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[2]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[3]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[4]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[5]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[6]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[7]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[8]} />
          </SplideSlide>

          <SplideSlide>
            <StockCarouselItem stock={stocks[9]} />
          </SplideSlide>

      </Splide>
      }
    </div>
  );
}

export default DashboardStockCarousel;
