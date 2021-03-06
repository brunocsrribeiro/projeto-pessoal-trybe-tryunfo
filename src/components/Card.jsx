import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="App-card">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <h5 data-testid="attr1-card">
          { cardAttr1 }
        </h5>
        <h5 data-testid="attr2-card">
          { cardAttr2 }
        </h5>
        <h5 data-testid="attr3-card">
          { cardAttr3 }
        </h5>
        <p data-testid="rare-card">
          { cardRare }
        </p>
        <h4>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
        </h4>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
