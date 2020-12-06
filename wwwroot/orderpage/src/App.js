import { Component } from 'react';
import items from './data/items';
import './css/styles.css';
import OrderPage from './components/OrderPage';
import PaymentPage from './components/PaymentPage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'payment',
      currentItem: items[0]
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage(newPage) {
    this.setState({
      currentPage: newPage
    });
  }

  render() {
    let page;

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
                  pageChanger={this.changePage} />
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
