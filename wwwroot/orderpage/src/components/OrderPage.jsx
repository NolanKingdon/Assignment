import Card from './Card';
import Header from './Header';
import ContentBody from './ContentBody';
import Pane from './Pane';

const OrderPage = (props) => {
    return (
        <div className='page order-page'>
            <Card width={540}>
                <Header text='Your order:'/>
                <ContentBody>
                    <Pane>

                    </Pane>
                </ContentBody>
            </Card>
        </div>
    );
}

export default OrderPage;