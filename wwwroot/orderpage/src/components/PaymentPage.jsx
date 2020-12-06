import Card from './Card';
import Header from './Header';
import ContentBody from './ContentBody';
import Pane from './Pane';
import dollarSign from '../images/dollarSign.svg';
import backArrow from '../images/backArrow.svg';
import creditCard from '../images/creditCard.svg';
import person from '../images/personIcon.svg';
import years from '../data/years';
import cards from '../data/cards';

let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']


const PaymentPage = (props) => {
    return (
        <div className='page payment-page'>
            <Card width={800}>
                <Header text='Complete your Payment:' svg={dollarSign}/>
                <ContentBody>
                    <Pane width={33}>
                        <div className='payment-container'>
                            <p className='small-text payment-text'>Amount Due</p>
                            <p className='confirmation-text payment-text'>${props.item.price}</p>
                        </div>
                        <div className='payment-container'>
                            <p className='small-text payment-text'>Order Number</p>
                            <p className='confirmation-text payment-text'>{Math.round(Math.random()*10000000)}</p>
                        </div>
                        <button class='btn btn-backward' onClick={(e) => props.pageChanger('order')}>
                            <img src={backArrow} alt='Backwards arrow' /> 
                            BACK
                        </button>
                    </Pane>
                    <Pane width={67} class='space-around'>
                        <div className='credit-card-images'>
                            {cards.map(card => card.enabled ? 
                                                <img src={card.enabledImg} alt={card.name} /> : 
                                                <img src={card.disabledImg} alt={card.name} />)}
                        </div>
                        <div>
                            <label className='input-card-icon' htmlFor='cardNumber'>Card Number</label>
                            <div className='input-box-wrapper'>
                                <img src={creditCard} alt='Credit Card Icon' />
                                <input type='text' name='cardNumber' placeholder='#### #### #### ####'/>
                            </div>
                        </div>
                        <div>
                            <label className='input-card-icon' htmlFor='cardName'>Cardholder Name</label>
                            <div className='input-box-wrapper'>
                                <img src={person} alt='Credit Card Icon' />
                                <input type='text' name='cardName' placeholder='Name on the card' />
                            </div>
                        </div>
                        <div>
                            <label className='input-card-icon' htmlFor='expiryMonth'>Expiration Date</label>
                            <div className='expiration-date-selector'>
                                <div className='input-box-wrapper'>
                                    <select name="expiryMonth">
                                        {months.map(month => <option value={month}>{month}</option>)}
                                    </select>
                                </div>
                                <div className='input-box-wrapper'>
                                    <select name="expiryYear">
                                        {years.map(year => <option value={year}>{year}</option>)}
                                    </select>
                                </div>
                                <div className='input-box-wrapper'>
                                    <input type="text" placeholder='CCV'/>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-forward'>SUBMIT</button>
                    </Pane>
                </ContentBody>
            </Card>
        </div>
    );
}

export default PaymentPage;
