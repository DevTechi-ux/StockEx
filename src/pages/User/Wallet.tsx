import React from 'react';
import Balance from '../../components/User/WalletPanel/Balance';
import TransactionHistory from '../../components/User/WalletPanel/TransactionHistory';
import FundingForm from '../../components/User/WalletPanel/FundingForm';

const Wallet: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <Balance />
        </div>
        <div className="col-span-4">
          <FundingForm />
        </div>
        <div className="col-span-12">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Wallet;