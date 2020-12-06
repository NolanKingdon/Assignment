/**
 * Main container element. Provides border and contains the content of the page.
 * 
 * @param {Object} props 
 */
const Card = (props) => {
    return (
        <div className='card-wrapper' style={{width: `${props.width}px`}}>
            {props.children}
        </div>
    );
}

export default Card;