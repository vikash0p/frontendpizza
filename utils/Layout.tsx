"use client";
import { persistor, store } from "@/Redux-toolkit/store";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
interface layoutChildrenProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutChildrenProps> = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navbar />
            <main>{children} </main>
            <Footer />
          </PersistGate>
        </Provider>
        <ToastContainer />
        <GoToTop />
      </AuthProvider>
    </div>
  );
};

export default Layout;
