import PropTypes from 'prop-types';

const UserCars = ({userBuy, setUserBuy}) => {

  const handleClick = (car, index) => {
    userBuy.splice(index, 1)
    setUserBuy([...userBuy])
  }

  return (
    <div>
      <h2>Owned Cars</h2>
      <ol>
        {userBuy && userBuy.map((car,i) =>
          <li key={i}>
            <span>{car}</span>
            <button onClick={() => handleClick(car,i)}>Sell</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default UserCars

UserCars.propTypes = {
  userBuy: PropTypes.arrayOf(PropTypes.string).isRequired,
  setUserBuy: PropTypes.func.isRequired
}