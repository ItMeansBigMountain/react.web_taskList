import PropTypes from 'prop-types'

const CustomButton = (props) => {

    return (
        <button onClick={props.CustomFunction} className='btn' style={{ backgroundColor: props.bgcolor, color: props.fontColor }} >
            {props.text}
        </button>
    )
}



// DEFAULT SETTINGS
CustomButton.defaultProps = {
    title: 'Click Me!',
}



// DEFAULT DATATYPES
CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
}


export default CustomButton
