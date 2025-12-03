import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
  name: string;
  isActive: boolean;
  registeredAt: Date;
  balance: number;
  totalTrades: number;
}

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserStatus: (userId: string, isActive: boolean) => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking auth state
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Load mock users
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string) => {
    const foundUser = users.find(u => u.email === email);
    
    if (foundUser && !foundUser.isActive) {
      throw new Error('Account is not active. Please wait for admin approval.');
    }

    // Simulate API call
    const mockUser = {
      id: foundUser?.id || '1',
      email,
      role: email.includes('admin') ? 'admin' : 'user',
      name: foundUser?.name || email.split('@')[0],
      isActive: true,
      registeredAt: foundUser?.registeredAt || new Date(),
      balance: foundUser?.balance || 0,
      totalTrades: foundUser?.totalTrades || 0,
    } as User;
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = async (name: string, email: string, _password: string) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role: 'user',
      isActive: false,
      registeredAt: new Date(),
      balance: 0,
      totalTrades: 0,
    };

    setUsers(prev => [...prev, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
  };

  const updateUserStatus = (userId: string, isActive: boolean) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId ? { ...user, isActive } : user
      )
    );
    localStorage.setItem('users', JSON.stringify(
      users.map(user =>
        user.id === userId ? { ...user, isActive } : user
      )
    ));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        login,
        register,
        logout,
        updateUserStatus,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};