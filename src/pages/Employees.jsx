import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import { DataGrid } from "@mui/x-data-grid";
import { employeesColumns, employeesData } from "../utilis/dashboardData";
import { DataGridTables, NavBar } from "../Components";
import useAuth from "../custom-hooks/useAuth";
const Employees = () => {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser && (
        <div>
          <NavBar name="Employees" type="Pages" />
        </div>
      )}
      <DataGridTables
        rows={employeesData}
        columns={employeesColumns}
        title={"Employees"}
      />
    </>
  );
};

export default Employees;
