import React from 'react';
import DashboardContainer from './dashboard/dashboard_container';
import CurrentBalanceContainer from './currentbalance/currentbalance_container';

function MainComponent() {
  return (
    <div>
      <DashboardContainer/>
      <CurrentBalanceContainer/>
    </div>
  );
}

export default MainComponent;
