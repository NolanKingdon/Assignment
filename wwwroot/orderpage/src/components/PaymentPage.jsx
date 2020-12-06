import Card from './Card';
import Header from './Header';
import ContentBody from './ContentBody';
import Pane from './Pane';
import dollarSign from '../images/dollarSign.svg';
import backArrow from '../images/backArrow.svg';
import creditCard from '../images/creditCard.svg';
import person from '../images/personIcon.svg';
import years from '../data/years';
import alert from '../images/alert.svg';

let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

/**
 * Main page of application. Allows user to input their credit card information and send a purchase
 * to the backend.
 * 
 * In the future it may be a good idea to make the form itself a component to be used in other
 * areas of the app. I unfortunately did not have time to implement this after I started.
 * 
 * @param {Object} props 
 *  props values:
 *      props.item -> Current item(s) being purchased
 *      props.pageChanger -> Page update function
 *      props.formHandler -> Form input listener
 *      props.formInput -> Object of form inputs
 *      props.orderNumber -> random order number
 *      props.cards -> Cards to draw from
 *      props.formSubmitter -> Submission Event
 */
const PaymentPage = (props) => {

    let nameValid = props.formInput.cardName.valid;
    let numberValid = props.formInput.cardNumber.valid;
    let dateValid = props.formInput.expiryMonth.valid && props.formInput.expiryYear.valid;
    let ccvValid = props.formInput.cardCCV.valid;

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
                            <p className='confirmation-text payment-text'>{props.orderNumber}</p>
                        </div>
                        <button class='btn btn-backward' onClick={(e) => props.pageChanger('order')}>
                            <img src={backArrow} alt='Backwards arrow' /> 
                            BACK
                        </button>
                    </Pane>
                    <Pane width={67} class='space-around'>
                        <div className='credit-card-images'>
                            {Object.keys(props.cards).map(cardKey => props.cards[cardKey].enabled ? 
                                                <img src={props.cards[cardKey].enabledImg} alt={props.cards[cardKey].name} /> : 
                                                <img src={props.cards[cardKey].disabledImg} alt={props.cards[cardKey].name} />)}
                        </div>
                        <div>
                            <label className='input-card-icon' htmlFor='cardNumber'>Card Number</label>
                            <div className={'input-box-wrapper ' + (!numberValid ? 'invalid-input' : '')}>
                                <img src={creditCard} alt='Credit Card Icon' />
                                <input 
                                    type='text'
                                    name='cardNumber'
                                    placeholder='#### #### #### ####'
                                    value={props.formInput.cardNumber.value}
                                    onChange={props.formHandler} />
                            </div>
                            <p className='warning-text'>
                                {!numberValid && <img src={alert} alt='Alert Icon' />} 
                                {!numberValid && 'Card Number is invalid'}
                            </p>
                        </div>
                        <div>
                            <label className='input-card-icon' htmlFor='cardName'>Cardholder Name</label>
                            <div className={'input-box-wrapper ' + (!nameValid ? 'invalid-input' : '')}>
                                <img src={person} alt='Credit Card Icon' />
                                <input
                                    type='text'
                                    name='cardName'
                                    placeholder='Name on the card'
                                    value={props.formInput.cardName.value} 
                                    onChange={props.formHandler} />
                            </div>
                            <p className='warning-text'>
                                {!nameValid && <img src={alert} alt='Alert Icon' />} 
                                {!nameValid && 'Card Name is invalid'}
                            </p>
                        </div>
                        <div>
                            <label className='input-card-icon' htmlFor='expiryMonth'>Expiration Date</label>
                            <div className='expiration-date-selector'>
                                <div className={'input-box-wrapper ' + (!dateValid ? 'invalid-input' : '')}>
                                    <select name='expiryMonth' value={props.formInput.expiryMonth.value} onChange={props.formHandler}>
                                        <option value='' selected disabled>MM</option>
                                        {months.map(month => <option value={month}>{month}</option>)}
                                    </select>
                                </div>
                                <div className={'input-box-wrapper ' + (!dateValid ? 'invalid-input' : '')}>
                                    <select name='expiryYear' value={props.formInput.expiryYear.value} onChange={props.formHandler}>
                                        <option value='' selected disabled>YYYY</option>
                                        {years.map(year => <option value={year}>{year}</option>)}
                                    </select>
                                </div>
                                <div className={'input-box-wrapper ' + (!ccvValid ? 'invalid-input' : '')}>
                                    <input 
                                        type='text'
                                        placeholder='CCV'
                                        name='cardCCV'
                                        value={props.formInput.cardCCV.value} 
                                        onChange={props.formHandler} />
                                </div>
                            </div>
                            <div>
                                <p className='warning-text'>
                                    {!dateValid && <img src={alert} alt='Alert Icon' />} 
                                    {!dateValid && 'Date is invalid'}
                                </p>
                                <p className='warning-text'>
                                    {!ccvValid && <img src={alert} alt='Alert Icon' />} 
                                    {!ccvValid && 'CCV is invalid'}
                                </p>
                            </div>
                        </div>
                        <button className='btn btn-forward' onClick={props.formSubmitter}>SUBMIT</button>
                    </Pane>
                </ContentBody>
            </Card>
        </div>
    );
}

export default PaymentPage;
