import Amex from '../images/cards/amex.svg';
import Discover from '../images/cards/discover.svg';
import Mastercard from '../images/cards/mastercard.svg';
import Visa from '../images/cards/visa.svg';
import AmexDisabled from '../images/cards/amexDisabled.svg';
import DiscoverDisabled from '../images/cards/discoverDisabled.svg';
import MastercardDisabled from '../images/cards/mastercardDisabled.svg';
import VisaDisabled from '../images/cards/visaDisabled.svg';

/**
 * Data for our cards. Key corresponds to the correct starting number for each
 * card provider.
 */
const cards = {
    3: {
        name: 'Amex',
        enabledImg: Amex,
        disabledImg: AmexDisabled,
        enabled: false
    },
    6: {
        name: 'Discover',
        enabledImg: Discover,
        disabledImg: DiscoverDisabled,
        enabled: false
    },
    5: {
        name: 'Mastercard',
        enabledImg: Mastercard,
        disabledImg: MastercardDisabled,
        enabled: false
    },
    4: {
        name: 'Visa',
        enabledImg: Visa,
        disabledImg: VisaDisabled,
        enabled: false
    }
};

export default cards;
