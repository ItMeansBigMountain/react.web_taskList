// importing argument dictionary data type control module
import PropTypes from 'prop-types'

// importing component
import CustomButton from './CustomButton.js';

// find location of url pathway
import { useLocation } from 'react-router-dom'



// ARROW FUNCTION COMPONENT
// returns html (jsx) 
// (props) is a dictionary that can hold values passed into it when component is called
const Header = (props) => {
    const location = useLocation()

    return (
        <header>
            <h2 className='header' > {props.title}  </h2>
            {location.pathname === "/" && <CustomButton fontColor='white' bgcolor={props.showAddTask == true ? "red" : "green"} text={props.showAddTask == true ? "Close" : "Add"} CustomFunction={props.onAdd} />}
        </header>
    )
}




// NOTE!!!
// pass parameters to (props) argument in header arrow function 
// pass those parameters by adding div tags into the component call in the App.js file 
// ex: <Header title = "oyama" />

// DEFAULT PROP ARGUMENT IF NOTHING PASSED IN DIV TAGS ex: <Header />
Header.defaultProps = {
    title: 'Task Tracker',
}



// DATA TYPE MANDATE
// in case you want to make sure that future developers will always pass in strings into Component Call Argument
Header.propTypes = {
    title: PropTypes.string.isRequired,
}




// CSS STYLE SHEET FOR DIV TAG ARGUMENT INSIDE Header()=>return()
// const headingStyle = {
//     color : 'red',
//     backgroundColor : "black"
// }




export default Header
