import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ProtectedRoute from "./guard/ProtectedRoute";
// import PublicRoute from "./guard/PublicRoute";
import LoadingFallback from "./LoadingFallBack";
import Layout from "./layout/Layout";

import NotFound from "./pages/404/notFound";
import CartView from "./pages/cart/view";
import LoginView from "./pages/login/view";
import RegistrationView from "./pages/registration/view";
import ProductDetailsView from "./pages/productDetails/view";
import ProductsView from "./pages/products/view";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProductsView />
                </Suspense>
              }
            />
            <Route
              path="login"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <LoginView />
                </Suspense>
              }
            />
            <Route
              path="registration"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <RegistrationView />
                </Suspense>
              }
            />
                <Route
              path="products"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProductsView />
                </Suspense>
              }
            />
            <Route
              path="productDetails"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ProductDetailsView />
                </Suspense>
              }
            />
          </Route>

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="cart" element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <CartView />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
