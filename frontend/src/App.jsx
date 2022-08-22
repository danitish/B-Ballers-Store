import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ProductScreen from "./screens/ProductScreen";
import TeamScreen from "./screens/TeamScreen";
import CartScreen from "./screens/CartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import Logout from "./components/Logout";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProtectedRoute from "./common/ProtectedRoute";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import RequestResetPassword from "./screens/RequestResetPassword";
import ResetPassword from "./screens/ResetPassword";
import NotFound from "./screens/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="Shop d-flex flex-column min-vh-100">
      <ToastContainer />
      <Header />
      <main className="flex-fill py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/page/:pageNumber" element={<HomeScreen />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />
            <Route path="/search/:keyword" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/teams/:team" element={<TeamScreen />} />
            <Route path="/teams/:team/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signup" element={<RegisterScreen />} />
            <Route path="/signin" element={<LoginScreen />} />
            <Route path="/reset-password" element={<RequestResetPassword />} />
            <Route
              path="/reset-password/:userId/:token"
              element={<ResetPassword />}
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route
              path="/shipping"
              element={
                <ProtectedRoute>
                  <ShippingScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/placeorder"
              element={
                <ProtectedRoute>
                  <PlaceOrderScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/order/:id"
              element={
                <ProtectedRoute>
                  <OrderScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/userlist"
              element={
                <ProtectedRoute isAdmin>
                  <UserListScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/user/:id/edit"
              element={
                <ProtectedRoute isAdmin>
                  <UserEditScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/productlist"
              element={
                <ProtectedRoute isAdmin>
                  <ProductListScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/productlist/:pageNumber"
              element={
                <ProtectedRoute isAdmin>
                  <ProductListScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/product/:id/edit"
              element={
                <ProtectedRoute isAdmin>
                  <ProductEditScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orderlist"
              element={
                <ProtectedRoute isAdmin>
                  <OrderListScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/orderlist/:pageNumber"
              element={
                <ProtectedRoute isAdmin>
                  <OrderListScreen />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
