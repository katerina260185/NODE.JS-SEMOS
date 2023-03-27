import PropTypes from "prop-types";


export function Sport ({name, sport}) {

    return (
        <div>
            <h1>My name is {name}.</h1>
            <h3>Omilen sport {sport}</h3>
        </div>

        
    )
    
}
Sport.propTypes = {
    name: PropTypes.string.isRequired,
    sport: PropTypes.string,
  };
  
  Sport.defaultProps = {
    name: "Default",
    sport: "Default Sport",
  };