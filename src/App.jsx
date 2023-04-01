import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/user/pages/UserLogin';
import SignUp from './components/manager/pages/SignUp';
import Otp from './components/manager/pages/Otp';
import Login from './components/manager/pages/Login';
import AdminLogin from './components/admin/pages/AdminLogin';
import ForgetPswrd from './components/manager/pages/ForgetPswrd';

function App() {

  return (
    <div>
      <BrowserRouter>
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
          <Route path='/admin' element={
            <AdminLogin />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
