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
        <div className="form-group mb-3">
          <label htmlFor="cardName">
            Nome:
            <input
              className="form-control"
              name="cardName"
              type="text"
              value={ cardName }
              id="cardName"
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">
            Descrição:
            <textarea
              className="form-control"
              name="cardDescription"
              type="textarea"
              value={ cardDescription }
              id="description"
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="attr1" className="form-group">
            Força:
            <input
              className="form-control"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              id="attr1"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="attr2" className="form-group">
            Velocidade:
            <input
              className="form-control"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              id="attr2"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="attr3" className="form-group">
            Drible:
            <input
              className="form-control"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              id="attr3"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image" className="form-group">
            Imagem:
            <input
              className="form-control"
              name="cardImage"
              type="text"
              value={ cardImage }
              id="image"
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="rare" className="form-group">
            Raridade:
            <select
              className="form-control"
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
        <div className="form-group mb-3">
          {/* Ref.: https://pt-br.reactjs.org/docs/conditional-rendering.html */}
          { hasTrunfo
            ? (
              <span>Você já tem um Super Trunfo em seu baralho</span>
            )
            : (
              <div className="form-group">
                <label htmlFor="trunfo" className="form-check-label">
                  Super Trunfo:
                  <input
                    className="form-check-input"
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
          className="btn btn-primary btn-lg"
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
