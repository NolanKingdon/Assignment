
/**
 * Main display header. Appears on top of all the cards.
 * 
 * @param {Object} props 
 *      props.svg   => svg tag for an icon in the header (optional).
 *      props.text  => the text displayed in the header itself.
 */
const Header = (props) => {

    return (
        <div className='header-wrapper'>
            <h2>{props.svg && props.svg}{props.text}</h2>
        </div>
    );
}

export default Header;