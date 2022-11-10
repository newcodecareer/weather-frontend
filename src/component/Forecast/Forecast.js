import "./Forecast.css";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "CLEAR_DAY",
  color: "white",
  size: 66,
  animate: true,
};

const weatherMap = {
  '01n': <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
};

// const sampleDate = [
//   {
//     day: "Thursday",
//     max: 20,
//     min: 15,
//     icon,
//   },
//   {
//     day: "Thursday",
//     max: 20,
//     min: 15,
//     icon,
//   },
//   {
//     day: "Thursday",
//     max: 20,
//     min: 15,
//     icon,
//   },
//   {
//     day: "Thursday",
//     max: 20,
//     min: 15,
//     icon,
//   },
//   {
//     day: "Thursday",
//     max: 20,
//     min: 15,
//     icon,
//   },
// ];

function Forecast(props) {

  const {data} = props;

  return (
    <div className="flex-center forecast-section">
      
      {data.map((data) => {
        return (
          <div className="forecast">
            <p className="day">{data.dt}</p>
            {weatherMap[data.weather[0].icon]}
            <div className="forecast-temp">
              <p className="max">{data.main.temp_max}</p>
              <p className="min">{data.main.temp_min}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
