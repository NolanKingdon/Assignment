import Card from './Card';
import ContentBody from './ContentBody';
import Pane from './Pane';
import greenCheck from '../images/greenCheck.svg';

const ThankYouPage = (props) => {
    return (
        <div className='page thank-you-page'>
            <Card width={540}>
                <ContentBody>
                    <Pane>
                        <div className='thank-you-message'>
                            <img className='thank-you-img' src={greenCheck} alt='Green Checkmark' />
                            <h2>Thank You!</h2>
                            <h3 className='light-text'>Your payment has been accepted.</h3>
                        </div>
                    </Pane>
                </ContentBody>
            </Card>
        </div>
    );
}

export default ThankYouPage;