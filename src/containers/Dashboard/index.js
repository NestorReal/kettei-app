import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {calculateData} from '../../actions'
import TransitionCards from '../../components/TransitionCards';
const Dashboard = () => {
  const dispatch = useDispatch();
  const calculations = useSelector((state) => state.calculations);
  
  useEffect(() => {
    dispatch(calculateData());
  }, [dispatch]);
  return (
    <div>
      <TransitionCards data={[]}/>      
    </div>
);
};

export default Dashboard;
