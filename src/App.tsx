import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { ThemeProvider } from './contexts/ThemeContext';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ManageTransactions from './pages/Admin/Manage-transaction';
import Dashboard from './pages/Admin/Dashboard';
import FundRequest from './pages/Admin/FundRequest';
import Fund from './pages/Admin/Fund';
import NiftyUpDowsPrediction from './pages/Admin/NiftyUpDowsPrediction';
import NiftyUpDown from './pages/Admin/NiftyUpDown';
import Trade from './pages/Admin/Trade';
import ManageRisk from './pages/Admin/ManageRisk';
import ManageRoles from './pages/Admin/ManageRoles';
import ManageUsers from './pages/Admin/ManageUser';
import TransactionReport from './pages/Admin/TransactionReport';
// import SubscriptionPin from './pages/Admin/SubscriptionPin';
import LedgerBalance from './pages/Admin/LegderBalanace';
import DownloadReport from './pages/Admin/DownloadReport';
import ManualActiveTrade from './pages/Admin/ManualActiveTrade';
import Notification from './pages/Admin/Notification';
import ChangePasswords from './pages/Admin/ChangePasswords';
import BanScript from './pages/Admin/BanScript';
import UserTrade from './pages/User/UserTrade';
import UserFund from './pages/User/UserFund';
import UserNiftyUpDowsPrediction from './pages/User/UserNIftyUpDownPrediction';
import UserTransactionReport from './pages/User/UserTransactionReport';
import UserLedgerBalance from './pages/User/LedgerBalance';
import UserDownloadReport from './pages/User/UserDownloadReport';
import UserNotification from './pages/User/UserNotifications';
import UserChangePassword from './pages/User/ChangePassword';


// import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* User Panel Routes */}
              <Route path="/" element={<UserLayout />}>
                <Route index element={<Navigate to="/trade" replace />} /> 
                <Route path="trade" element={<UserTrade />} />
                <Route path="fund" element={<UserFund />} />
                <Route path="nifty-updown-prediction" element={<UserNiftyUpDowsPrediction />} />
                <Route path="transaction-report" element={<UserTransactionReport />} />
                <Route path="balance" element={<UserLedgerBalance />} />
                <Route path="download-report" element={<UserDownloadReport />} />
                <Route path="notification" element={<UserNotification />} />
                <Route path="change-password" element={<UserChangePassword />} />
              </Route>

              {/* Admin Panel routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="manage-transactions" element={<ManageTransactions />} />
                <Route path="fundrequest" element={<FundRequest />} />
                <Route path="fund" element={<Fund />} />
                <Route path="nifty-updown-prediction" element={<NiftyUpDowsPrediction />} />
                <Route path="nifty-updown" element={<NiftyUpDown />} /> 
                <Route path="trade" element={<Trade />} /> 
                <Route path="manage-risk" element={<ManageRisk />} />
                <Route path="manage-roles" element={<ManageRoles />} />
                <Route path="manage-users" element={<ManageUsers />} />
                <Route path="transaction-report" element={<TransactionReport />} />
                {/* <Route path="subscription-pin" element={<SubscriptionPin />} /> */}
                <Route path="balance" element={<LedgerBalance />} />
                <Route path="download-report" element={<DownloadReport />} />
                <Route path="manual-active-trade" element={<ManualActiveTrade />} />
                <Route path="notification" element={<Notification />} />
                <Route path="change-password" element={<ChangePasswords />} />
                <Route path="banscript" element={<BanScript />}></Route>

                
              </Route>    
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;