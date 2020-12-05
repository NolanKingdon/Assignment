/**
 * The pane for where the content will sit within the ContentBody.
 * 
 * @param {Object} props 
 *  props contains:
 *      - props.width -> Width in % of the pane
 */
const Pane = (props) => {
    let width = props.width ?? 100;

    return (
        <div className='content-pane' stlye={{width: `${width}%`}}>
            {props.children}
        </div>
    );
}

export default Pane;
