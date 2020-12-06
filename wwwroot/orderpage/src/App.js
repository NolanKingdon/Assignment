import { Component } from 'react';
import items from './data/items';
import './css/styles.css';
import OrderPage from './components/OrderPage';
import PaymentPage from './components/PaymentPage';
import cards from './data/cards';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'payment',
      currentItem: items[0],
      cardNumber: {value: '', valid: true},
      cardName: {value: '', valid: true},
      expiryMonth: {value: '', valid: true},
      expiryYear: {value: '', valid: true},
      cardCCV: {value: '', valid: true},
      orderNumber: Math.round(Math.random()*10000000),
      cards
    }

    this.changePage = this.changePage.bind(this);
    this.formHandler = this.formHandler.bind(this);
    this.formSubmission = this.formSubmission.bind(this);
  }

  changePage(newPage) {
    this.setState({
      currentPage: newPage
    });
  }

  validateCreditCardNumber(e) {
    let number = parseInt(e.target.value[0]);
      
    if (number >= 3 && number <= 6) {
      // We need to activate the card.
      this.setState({
        cards: {
          ...this.state.cards,
          [number]: {
            ...this.state.cards[number],
            enabled: true
          }
        }
      });
    } else {
      // We need to disable the cards.
      let newCardState = {};

      Object.keys(this.state.cards).forEach(key => {
        newCardState[key] = this.state.cards[key];
        newCardState[key].enabled = false;
      });

      this.setState({
        cards: newCardState
      });
    }
  }

  formHandler(e) {
    let field = e.target.name;

    // Checking first card digit
    if (field === 'cardNumber') {
      this.validateCreditCardNumber(e);
    }

    // Validation could potentially go here for all elements to make it more realtime.
    this.setState({
      [field]: { value: e.target.value, valid: true }
    });
  }

  formSubmission() {
    // TODO -> Refactor this a bit so it's more DRY.
    // Validation Checks
    let valid = true;
    let nameRegex = /^[a-zA-Z ]+$/;
    let numberRegex = /^[0-9]+$/;
    let cardNumber = this.state.cardNumber.value;
    let cardName = this.state.cardName.value;
    let expiryMonth = this.state.expiryMonth.value;
    let expiryYear = this.state.expiryYear.value;
    let cardCCV = this.state.cardCCV.value;

    // Card Number is 16 digits
    if (cardNumber.length !== 16) {
      this.setState({
        cardNumber: { 
          value: this.state.cardNumber.value,
          valid: false
        }
      });

      valid = false;
    }

    // Name is only Letters and punctuation
    if (!nameRegex.test(cardName)) {

      // Setting valid back to true to get rid of warnings when user is correcting it.
      this.setState({
        cardName: { 
          value: this.state.cardName.value,
          valid: false
        }
      });

      valid = false;
    }

    // Expiration Date Exists
    if (expiryMonth === '' || expiryYear === '') {
      valid = false;

      this.setState({
        expiryMonth: { 
          value: this.state.expiryMonth.value,
          valid: false
        },
        expiryYear: { 
          value: this.state.expiryYear.value,
          valid: false
        }
      });

    }

    // CCV is 3 digits
    if (cardCCV.length !== 3 && !numberRegex.test(cardCCV)) {
      valid = false;

      this.setState({
        cardCCV: { 
          value: this.state.cardCCV.value,
          valid: false
        }
      });
    }

    // Send request
    if (valid) {
      axios.post('api/v1/purchase', {
        cardNumber: this.state.cardNumber.value,
        cardName: this.state.cardName.value,
        item: this.state.currentItem,
        cardCCV: this.state.cardCCV.value,
        cardExpiry: `${this.state.expiryMonth.value}/${this.state.expiryYear.value}`,
        orderNumber: this.state.orderNumber
      })
        .then( res => {
          if (res.status === 200) {
            this.changePage('finish');
          } else {
            // Set card number to be invalid
            this.setState({
              cardNumber: {
                ...this.state.cardNumber,
                valid: false
              }
            })
          }
        })
        .catch( e => e);
    }
  }

  render() {
    let page;
    let formInput = {
      cardNumber: this.state.cardNumber,
      cardName: this.state.cardName,
      expiryMonth: this.state.expiryMonth,
      expiryYear: this.state.expiryYear,
      cardCCV: this.state.cardCCV
    };

    switch (this.state.currentPage) {
      default:
      case 'order':
        page = <OrderPage 
                  item={this.state.currentItem}
                  pageChanger={this.changePage} />
        break;
      case 'payment':
        page = <PaymentPage 
                  item={this.state.currentItem} 
                  pageChanger={this.changePage} 
                  formHandler={this.formHandler} 
                  formInput={formInput} 
                  orderNumber={this.state.orderNumber} 
                  cards={this.state.cards} 
                  formSubmitter={this.formSubmission} />
        break;
    }

    return (
      <div className="App">
          {page}
      </div>
    );
  }
}

export default App;
