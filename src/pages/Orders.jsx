import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ordersData, columnsOrders } from "../utilis/dashboardData";
import { Typography } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { DataGridTables, NavBar } from "../Components";
import useAuth from "../custom-hooks/useAuth";

const Orders = () => {

  const { currentUser } = useAuth();
 
      
  return (

    <>
    {currentUser && (
        <div>
          <NavBar  name='Orders'  type='Pages' />
        </div>
      )}
   <DataGridTables rows={ordersData} columns={columnsOrders} title={'Recent Orders'}/>
   
   </>
  );
};

export default Orders;
