import Dashboard from "../scenes/modDashboard/ModDashboard";
import { Route, Navigate, Outlet, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "scenes/layout";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Refresh from "./Refresh/Refresh";

const ProtectedRoute = ({ isAllowed, redirectPath = "/", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default function PermissionsData(props) {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Refresh/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard role={props.role} />} />
            <Route
              element={
                <ProtectedRoute
                  redirectPath="/"
                  isAllowed={props.role === "admin"}
                />
              }
            >
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customers />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="geography" element={<Geography />} />
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Route>
            <Route
              element={
                <ProtectedRoute
                  redirectPath="/"
                  isAllowed={props.role === "seller"}
                />
              }
            >
              {/* <Route path="customers" element={<Customers />} /> */}
              <Route path="*" element={<h1>Page Not Found</h1>} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}
