const Card = (props) => {
    return (
        <div className='card-wrapper' style={{width: `${props.width}px`}}>
            {props.children}
        </div>
    );
}

export default Card;