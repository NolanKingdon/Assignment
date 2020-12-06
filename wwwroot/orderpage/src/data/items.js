import Chair from '../images/wingChair.png';

/**
 * Temporary store for our items. In the future this would ideally be moved to a database
 * and accessed through our api.
 */
const items = [
    {
        name: 'Wing Chair',
        price: '249.00',
        catagories: ['Furniture', 'Seating'],
        image: Chair,
        imageAlt: 'Image of a chair'
    }
];

export default items;