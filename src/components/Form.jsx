import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="cardName">
            Nome
            <input
              name="cardName"
              type="text"
              value={ cardName }
              id="cardName"
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              name="cardDescription"
              type="textarea"
              value={ cardDescription }
              id="description"
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1">
            Atributo 1
            <input
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              id="attr1"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2">
            Atributo 2
            <input
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              id="attr2"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3">
            Atributo 3
            <input
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              id="attr3"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            Imagem:
            <input
              name="cardImage"
              type="text"
              value={ cardImage }
              id="image"
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare">
            Raridade:
            <select
              name="cardRare"
              value={ cardRare }
              data-testid="rare-input"
              id="rare"
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
        </div>
        <div>
          {/* Ref.: https://pt-br.reactjs.org/docs/conditional-rendering.html */}
          { hasTrunfo
            ? (
              <span>Você já tem um Super Trunfo em seu baralho</span>
            )
            : (
              <div>
                <label htmlFor="trunfo">
                  Super Trunfo
                  <input
                    name="cardTrunfo"
                    type="checkbox"
                    checked={ cardTrunfo }
                    id="trunfo"
                    data-testid="trunfo-input"
                    disabled={ hasTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              </div>
            ) }
        </div>
        <button
          type="submit"
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
