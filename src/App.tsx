import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import ProtectedRoute from "./guard/ProtectedRoute";
import LoadingFallback from "./LoadingFallBack";
import Layout from "./layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const queryClient = new QueryClient();

// Lazy imports 
const NotFound = React.lazy(() => import("./pages/404/notFound"));
const CartView = React.lazy(() => import("./pages/cart/view"));
const LoginView = React.lazy(() => import("./pages/login/view"));
const RegistrationView = React.lazy(() => import("./pages/registration/view"));
const ProductDetailsView = React.lazy(() => import("./pages/productDetails/view"));
const ProductsView = React.lazy(() => import("./pages/products/view"));
const AboutView = React.lazy(() => import("./pages/about/view"));
const ContactView = React.lazy(() => import("./pages/contact/view"));
const ProfileView = React.lazy(() => import("./pages/profile/view"));
const HomeView = React.lazy(() => import("./pages/home/view"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <HomeView />
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
            <Route
              path="about"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <AboutView />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<LoadingFallback />}>
                  <ContactView />
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
            <Route path="profile" element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ProfileView />
                  </Suspense>
                }
              />
            </Route>
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
