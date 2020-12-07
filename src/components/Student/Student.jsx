import React from "react";

const Student = ({ user }) => {
    let userName = user.name.title + '. ' + user.name.first + ' ' + user.name.last; 
    let grade = Math.floor(Math.random() * 100);
    let gradeStyle = {};
    if (grade < 60){
        gradeStyle = { color: 'red'}
    }
    else if (grade < 70 & grade > 60){
        gradeStyle = { color: 'orange'}
    }
    else if (grade < 80 & grade > 70) {
        gradeStyle = { color: 'purple'}
    }
    else if (grade < 90 & grade > 80) {
        gradeStyle = { color: 'yellow'}
    }
    else{
        gradeStyle = { color: 'green'}
    }

  return (
    <div className="card m-2" style={{minWidth: '270px'}}>
      <h5 className="card-title p2 mt-3 text-center">{userName}</h5>
      <img
        className="card-img-top"
        src={user.picture.large}
        alt=""
      ></img>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Gender: {user.gender}</li>
          <li className="list-group-item">Cell: {user.cell}</li>
          <li className="list-group-item">email: {user.email}</li>
          <li style={gradeStyle} className='list-group-item'><span style={{color: 'white'}}>Grade: </span>{grade} </li>
        </ul>
      </div>
    </div>
  );
};
export default Student;
