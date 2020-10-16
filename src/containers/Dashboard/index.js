import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {calculateData} from '../../actions'

const Dashboard = () => {
  const dispatch = useDispatch();
  const calculations = useSelector((state) => state.calculations);
  
  useEffect(() => {
    dispatch(calculateData());
  }, [dispatch]);
  return (
    <div>
      <h1>app</h1>
    </div>
);
};

export default Dashboard;
