import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  // Ref.: https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/formularios-no-react/537fc0f4-1be1-4cd8-8333-9432fa722672/conteudos/0c016b63-b3cf-442c-ac12-d3d2a0968f33/event-handlers-genericos/7d887960-3e88-411f-b052-fa89110ae935?use_case=next_button
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.onVerifyInputEmpty);
  }

  onVerifyInputEmpty() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const minValue = 0;
    const maxValue = 90;
    const sumValues = 210;

    const inputCardTexts = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    ].every((element) => element !== '');

    const inputCardAttrs = [
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ].every((element) => (element >= minValue)
        && (element <= maxValue)
        && (element !== ''));

    const inputCardAttrsSum = [
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ].map((attr) => Number(attr))
      .reduce((acc, curr) => acc + curr, minValue);

    if (inputCardTexts
      && inputCardAttrs
      && inputCardAttrsSum <= sumValues
    ) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

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
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
