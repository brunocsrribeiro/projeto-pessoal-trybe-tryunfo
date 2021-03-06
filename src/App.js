import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onDeleteButtonCard = this.onDeleteButtonCard.bind(this);
  }

  // Ref.: https://app.betrybe.com/course/front-end/componentes-com-estado-eventos-e-formularios-com-react/formularios-no-react/537fc0f4-1be1-4cd8-8333-9432fa722672/conteudos/0c016b63-b3cf-442c-ac12-d3d2a0968f33/event-handlers-genericos/7d887960-3e88-411f-b052-fa89110ae935?use_case=next_button
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.onVerifyInputEmpty);
  }

  // Função para verificar se estão preenchidos os campos, para efetuar a validação do button
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

  onSaveButtonClick(evt) {
    evt.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveCards,
    } = this.state;

    const deckTrunfo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // Ref.: https://stackoverflow.com/questions/62035318/reset-component-state-in-react-native
    const defaultState = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };

    this.setState({
      ...defaultState,
      saveCards: [...saveCards, deckTrunfo],
    });

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }
  }

  // Ref.: https://github.com/tryber/sd-016-b-project-tryunfo/pull/103/files
  onDeleteButtonCard(idxCard) {
    const { saveCards } = this.state;
    saveCards.splice(idxCard, 1);

    const card = saveCards
      .some((saveCard) => (
        saveCard.cardTrunfo === true
      ));

    if (!card) {
      return this.setState({ hasTrunfo: false });
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
      hasTrunfo,
      isSaveButtonDisabled,
      saveCards,
    } = this.state;

    return (
      <div>
        <Header />
        <main>
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div>
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
          <div>
            {
              saveCards.map((saveCard, idx) => (
                <div key={ idx }>
                  <Card { ...saveCard } />
                  <div>
                    <button
                      type="button"
                      data-testid="delete-button"
                      onClick={ () => (
                        this.onDeleteButtonCard(idx)
                      ) }
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
