import PropTypes from "prop-types";


export const Student =({students}) =>{
    return(
<div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Index</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            return (
              <tr key={i}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.index}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
    
    )
}

Student.propTypes = {
    students: PropTypes.arrayOf(PropTypes.object).isRequired,
    
  };