import React, { createContext, useContext, useState } from 'react';

interface WalletBalance {
  currency: string;
  amount: number;
}

interface Transaction {
  id: string;
  userId: string;
  type: 'deposit' | 'withdrawal';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'rejected';
  timestamp: Date;
}

interface WalletContextType {
  balances: WalletBalance[];
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'timestamp'>) => void;
  updateTransaction: (id: string, status: Transaction['status']) => void;
}

const WalletContext = createContext<WalletContextType | null>(null);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balances, setBalances] = useState<WalletBalance[]>([
    { currency: 'USD', amount: 0 },
    { currency: 'BTC', amount: 0 },
    { currency: 'ETH', amount: 0 },
  ]);

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Omit<Transaction, 'id' | 'timestamp'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
    };

    setTransactions(prev => [newTransaction, ...prev]);

    if (transaction.status === 'completed') {
      setBalances(prev =>
        prev.map(balance =>
          balance.currency === transaction.currency
            ? {
                ...balance,
                amount:
                  balance.amount +
                  (transaction.type === 'deposit' ? transaction.amount : -transaction.amount),
              }
            : balance
        )
      );
    }
  };

  const updateTransaction = (id: string, status: Transaction['status']) => {
    setTransactions(prev =>
      prev.map(transaction =>
        transaction.id === id ? { ...transaction, status } : transaction
      )
    );

    if (status === 'completed') {
      const transaction = transactions.find(t => t.id === id);
      if (transaction) {
        setBalances(prev =>
          prev.map(balance =>
            balance.currency === transaction.currency
              ? {
                  ...balance,
                  amount:
                    balance.amount +
                    (transaction.type === 'deposit' ? transaction.amount : -transaction.amount),
                }
              : balance
          )
        );
      }
    }
  };

  return (
    <WalletContext.Provider
      value={{ balances, transactions, addTransaction, updateTransaction }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};