import "../styles/StockCarouselItem.css";

function StockCarouselItem({ stock }) {
  return (
    <div className="stock-carousel-item">
      <div className="carousel-item-header">
        <p>{stock.symbol}</p>
        <p className="cash">{"$" + stock.latestPrice}</p>
      </div>
      <div className="carousel-item-trend">
        {stock.change > 0 &&
        <p className="up-stock">
          <span><i class="uil uil-angle-up"></i></span>
          {"+" + stock.changePercent + "%"} ({stock.change})
        </p>
        }
        {stock.change <= 0 && 
          <p className="down-stock">
            <span><i class="uil uil-angle-down"></i></span>
            {stock.changePercent + "%"} ({stock.change})
          </p>
        }
      </div>
    </div>
  );
}

export default StockCarouselItem;
