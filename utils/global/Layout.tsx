"use client";
import { persistor, store } from "@/Redux-toolkit/store";
import Footer from "@/components/GlobalComponents/Footer";
import GoToTop from "@/components/GlobalComponents/GoToTop";
import AuthProvider from "@/context/AuthProvider";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider ,QueryClient} from "@tanstack/react-query";
import Navbar from "@/components/GlobalComponents/Navbar";

interface layoutChildrenProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Layout: React.FC<layoutChildrenProps> = ({ children }) => {
  return (
    <div>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Navbar />
              <main>{children} </main>
              <Footer />
            </PersistGate>
          </Provider>
          <ToastContainer />
          <GoToTop />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
};

export default Layout;
