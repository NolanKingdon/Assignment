import Card from './Card';
import Header from './Header';
import ContentBody from './ContentBody';
import Pane from './Pane';

/**
 * Contains the layout for the Order page. Allows user to move the selected item
 * into the purchasing page.
 * 
 * @param {Object} props 
 *  props contains:
 *      props.item -> Item we are using. @See '../data/items'
 *      props.pageChanger -> Callback to change the page in the state.
 */
const OrderPage = (props) => {
    let item = props.item;

    let catagoryText = '';

    // Appending text to catagoryText for clean use in JSX.
    for (let i=0; i<item.catagories.length; i++) {
        catagoryText += item.catagories[i];

        // Appending the chevron if there is another element.
        if (i < item.catagories.length-1) {
            catagoryText += ' > ';
        }
    }

    return (
        <div className='page order-page'>
            <Card width={540}>
                <Header text='Your order:'/>
                <ContentBody>
                    <Pane>
                        <div className='img-container'>
                            <img src={item.image} alt={item.imageAlt} />
                        </div>
                        <div className='info-container'>
                            <div className='spaced-info-content'>
                                <p className='strong-text'>{item.name}</p>
                                <p className='price-text'>${item.price}</p>
                            </div>
                            <p className='light-text'>
                                {catagoryText}
                            </p>
                        </div>
                        <button className='btn btn-forward' onClick={(_) => props.pageChanger('payment')}>Proceed to Payment</button>
                    </Pane>
                </ContentBody>
            </Card>
        </div>
    );
}

export default OrderPage;