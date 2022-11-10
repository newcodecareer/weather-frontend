import "./CardHeader.css";

function CardHeader() {
  return (
    <div className="card-header">
      <div className="card_current-weather">
        <p>
          <span className="weather-degree">19</span> Possible Light Rain
        </p>
        <div className="extra-info flex-center">
          <div>
            <p>HUMIDITY</p>
            <p> 92 %</p>
          </div>
          <hr className="vertical-line" />
          <div>
            <p>WIND</p>
            <p> 3.37 m/s</p>
          </div>
        </div>
      </div>

      <p className="card-city">Sydney</p>
    </div>
  );
}

export default CardHeader;
