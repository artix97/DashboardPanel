import React from 'react';
import Refresh from '../../App/Refresh/Refresh';



const Dashboard = (props) => {

  return (
    <>
      <Refresh />
      <h2>Dashboard {props.role}</h2>
    </>
  );
}
export default Dashboard