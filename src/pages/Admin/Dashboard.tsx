import React from 'react';
import BalanceInfo from '../../components/Admin/Dashboard/BalanceInfo';
import StatsCards from '../../components/Admin/Dashboard/Stack-card';
import ActivityTable from '../../components/Admin/Dashboard/Activity'; 
import UsersNearExpiry from '../../components/Admin/Dashboard/UserNearExpiry';
const Dashboard: React.FC = () => {
  return (
    <>
    <div className="flex">
                  <BalanceInfo />
                  <div className="flex-1">
                    <StatsCards />
                    <ActivityTable />
                    <UsersNearExpiry />
                  </div>
                </div>
    </>
    
    
  )
};
export default Dashboard;