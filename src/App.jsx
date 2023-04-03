import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/pages/UserLogin';
import SignUp from './components/manager/pages/SignUp';
import Otp from './components/manager/pages/Otp';
import Login from './components/manager/pages/Login';
import AdminLogin from './components/admin/pages/AdminLogin';
import ForgetPswrd from './components/manager/pages/ForgetPswrd';
import ForgotOtp from './components/manager/pages/ForgotOtp';
import ResetPswrd from './components/manager/pages/ResetPswrd';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/manager/pages/Dashboard';
import DashboardAdmin from './components/admin/pages/DashboardAdmin';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path='/' element={
            <UserLogin />
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
          <Route path='/manager/reset-otp' element={
            <ForgotOtp />
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
