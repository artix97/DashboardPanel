import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import UserPage from "App/UserPage";
import AppAdmin from "App/AppAdmin";
import AppSeller from "App/AppSeller";

const App = () => {
  return (
      <Routes>
          {/* Routy ogólne */}
          <Route index element={<UserPage />} />
          <Route path="/admindashboard/*" element={<AppAdmin />} >
          </Route>

          <Route path="/dashboard/*" element={<AppSeller />} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
  )
}
export default App;


