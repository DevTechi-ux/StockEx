"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StatsCards from "../../components/Admin/Dashboard/Stack-card";
import ActiveTradesTable from "../../components/Admin/ManageTransaction'/active-trade";
import SymbolTable from "../../components/Admin/ManageTransaction'/symbol-table";
import TransactionFilters from "../../components/Admin/ManageTransaction'/filters";

export function ManageTransactions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#active-trades") {
      setTimeout(() => {
        const element = document.getElementById("active-trades");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }
  }, [location.hash]);

  return (
 <div>

        <StatsCards />
        <TransactionFilters />
        <SymbolTable />
        <ActiveTradesTable />
    </div>
  );
}

export default ManageTransactions;
