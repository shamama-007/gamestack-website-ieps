import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LoadingBar from 'react-top-loading-bar'
import Plan from './pages/Plan';
import Search from './pages/Search';
import NotFound from './components/NotFound/NotFound';
import ForgetPassword from './pages/ForgetPassword';
import Otp from './pages/Otp';
import ResetPassword from './pages/ResetPassword';
import ProductDetail from './pages/ProductDetail';

// User Auth
import Dashboard from './pages/user/Dashboard';
import Settings from './pages/user/Setting';
import Subscription from './pages/user/Subscription';

// Admin Auth
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSettings from './pages/admin/AdminSetting';
import AdminSubscription from './pages/admin/AdminSubscription';
import AdminUsers from './pages/admin/AdminUser';
import AdminGameRequest from './pages/admin/AdminGameRequest';
import AdminBanner from './pages/admin/AdminBanner';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import { useDispatch } from 'react-redux';
import { adminDetailHandler } from './reducers/adminAuthSlice';
import ProtectedRouteAdmin from './components/ProtectedRoute/ProtectedRouteAdmin';
import AdminBannerUpdate from './pages/admin/AdminBannerUpdate';
import TermAndCondition from './pages/TermAndCondition';
import { UserAuthCheck } from './reducers/userAuthSlice';
import AvailabelProduct from './pages/user/AvailableProduct';
import UserGameSwap from './pages/user/UserGameSwap';


const App = () => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Condition Admin Login
    dispatch(adminDetailHandler());
    // User Admin Login
    dispatch(UserAuthCheck());
  }, [dispatch]);

  return (
    <>


      <LoadingBar
        color='#dce400'
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        {/* Friendly Route */}
        <Route exact path="/" element={<Home setProgress={setProgress} />} />
        <Route exact path="/plan" element={<Plan />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/checkout/:id" element={<Checkout />} />
        <Route exact path="/terms_conditions" element={<TermAndCondition />} />

        {/* Account Route */}
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/forget-password" element={<ForgetPassword />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />

        {/* User Protected Route */}
        <Route exact path="/user/dashboard" element={<Dashboard />} />
        <Route exact path="/user/settings" element={<Settings />} />
        <Route exact path="/user/subscription" element={<Subscription />} />
        <Route exact path="/user/available-product" element={<AvailabelProduct />} />
        <Route exact path="/user/user-game-swap" element={<UserGameSwap />} />

        



        {/* Admin Protected Route */}
        <Route exact path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRouteAdmin />}>
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/settings" element={<AdminSettings />} />
          <Route exact path="/admin/subscription" element={<AdminSubscription />} />
          <Route exact path="/admin/users" element={<AdminUsers />} />
          <Route exact path="/admin/game-request" element={<AdminGameRequest />} />
          <Route exact path="/admin/banner" element={<AdminBanner />} />
          <Route exact path="/admin/banner/:bannerId" element={<AdminBannerUpdate />} />
        </Route>

        {/* Page Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App