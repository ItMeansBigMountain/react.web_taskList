import PropTypes from 'prop-types'
import AddTask from './AddTask';


const DebugButton = (props) => {

    function printElement(e) {
        console.log(AddTask)
        return e;
    }


    

    return (
        <button onClick={printElement} className='btn' style={{ backgroundColor: props.color, color: props.fontColor }} >
            {props.text}
        </button>
    )
}



// DEFAULT SETTINGS
DebugButton.defaultProps = {
    text: 'debug',
    color: 'black',
    fontColor: 'white',
}



// DEFAULT DATATYPES
// DebugButton.propTypes = {
//     title: PropTypes.string.isRequired,
// }


export default DebugButton
