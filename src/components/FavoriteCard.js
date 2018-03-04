import React, { Component } from "react";
import "../styles/FavoriteCard.css";
import { Button } from "semantic-ui-react";

class FavoriteCard extends Component {
  constructor(props) {
    super(props);

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(event) {
    this.props.callBackFromParent(event.target.value);
  }

  render() {
    let cityElements = this.props.savedCities.map((city) => {
      return <Button className="FavoriteCard-btn" size="tiny" value={city} key={`${city}-button`} onClick={this.getWeather} content={city} />;
    });

    return (
      <div className="FavoriteCard">
        <h3>My favorite cities</h3>
        <div className="FavoriteCard-button-container">
          {cityElements}
        </div>
      </div>
    );
  }
}

export default FavoriteCard;
