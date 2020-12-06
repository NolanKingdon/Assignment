/**
 * Main content body. Used to store Panes. Oriented as a column flex.
 * @param {*} props 
 */
const ContentBody = (props) => {
    return (
        <div className='content-body'>
            {props.children}
        </div>
    );
}

export default ContentBody;