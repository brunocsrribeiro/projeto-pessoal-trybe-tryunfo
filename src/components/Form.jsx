import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input
            type="text"
            id="name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="textarea"
            id="description"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Força:
          <input
            type="number"
            id="attr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Velocidade:
          <input
            type="number"
            id="attr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Drible:
          <input
            type="number"
            id="attr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            id="image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare">
          Raridade:
          <select name="rare-card" id="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trunfo:
          <input
            type="checkbox"
            id="trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
