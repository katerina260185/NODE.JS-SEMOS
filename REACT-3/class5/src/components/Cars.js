export const Cars = ({ listOfCars }) => {
    return (
      <ol>
        {listOfCars.map((car, i) => {
          return (
            <li key={i}>
              <span>{car.text}</span>
              <input
                type="button"
                value={car.done}
                checked={car.done}
                //onClick={() => {
                 // BuyCar(car);
               // }}
              />
            </li>
          );
        })}
      </ol>
    );
  };



//props
//Cars.propTypes = {
 //   car: PropTypes.arrayOf(PropTypes.object).isRequired,
 // }