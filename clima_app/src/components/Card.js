import React from "react";
import dayjs from "dayjs";
import { Container, Row, Col } from "react-bootstrap";

const Card = (props) => {
  //passing needed state from App component (parent)
  const weather = props.weather;
  const locationName = props.locationName;

  //get the link from AccuWeather to get the icon in form of image
  const getImg = (iconNumber) => {
    if (iconNumber < 10) {
      iconNumber = "0" + iconNumber;
    }
    return `https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`;
  };

  //if undefined, return empty div
  if (!weather) {
    return <div></div>;
  }

  //return weather card
  return (
    <div className="weatherCard">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="card">
            <div className="locationName">
              {locationName}
            </div>
            <hr />
            <div className="date">
              {" "}
              {
dayjs(weather.DailyForecasts[0].Date).format('DD MMMM YYYY')}{" "}
            </div>
            <div> {weather.DailyForecasts[0].Day.IconPhrase} </div>
            <img
              src={getImg(weather.DailyForecasts[0].Day.Icon)}
              alt="weather icon"
              width="150px"
            />
            <div className="location">
              {" "}
              {weather.DailyForecasts[0].Temperature.Minimum.Value} -{" "}
              {weather.DailyForecasts[0].Temperature.Maximum.Value}°
              {weather.DailyForecasts[0].Temperature.Maximum.Unit}{" "}
            </div>
            <div className="info">
              On next 5 days:
              <br />
              {weather.Headline.Text}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Card;
