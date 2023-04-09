import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/pages/UserLogin';
import SignUp from './components/manager/pages/SignUp';
import Otp from './components/manager/pages/Otp';
import Login from './components/manager/pages/Login';
import AdminLogin from './components/admin/pages/AdminLogin';
import ForgetPswrd from './components/manager/pages/ForgetPswrd';
import ResetPswrd from './components/manager/pages/ResetPswrd';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/manager/pages/Dashboard';
import DashboardAdmin from './components/admin/pages/DashboardAdmin';
import Notification from './components/admin/pages/Notification';
import UserSignUp from './components/user/pages/UserSignUp';
import UserOtp from './components/user/pages/UserOtp';
import Home from './components/user/pages/Home';
import ForgotPswrd from './components/user/pages/ForgotPswrd';
import ResetPassword from './components/user/pages/ResetPswrd';
import Users from './components/admin/pages/Users';
import Managers from './components/admin/pages/Managers';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path='/' element={
            <Home />
          } />
          <Route path='/login' element={
            <UserLogin />
          } />
          <Route path='/signUp' element={
            <UserSignUp />
          } />
          <Route path='/otp' element={
            <UserOtp />
          } />
          <Route path='/forgot' element={
            <ForgotPswrd />
          } />
          <Route path='/reset-pswrd' element={
            <ResetPassword />
          } />
          <Route path='/manager' element={
            <Login />
          } />
          <Route path='/manager/signUp' element={
            <SignUp />
          } />
          <Route path='/manager/otp' element={
            <Otp />
          } />
          <Route path='/manager/forgot' element={
            <ForgetPswrd />
          } />
          <Route path='/manager/reset-pswrd' element={
            <ResetPswrd />
          } />
          <Route path='/manager/dashboard' element={
            <Dashboard />
          } />
          <Route path='/admin' element={
            <AdminLogin />
          } />
          <Route path='/admin/dashboard' element={
            <DashboardAdmin />
          } />
          <Route path='/admin/notify' element={
            <Notification />
          } />
          <Route path='/admin/users' element={
            <Users />
          } />
          <Route path='/admin/managers' element={
            <Managers />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
