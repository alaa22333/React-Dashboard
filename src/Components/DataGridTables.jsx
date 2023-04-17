import { Card, Typography } from "@material-tailwind/react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { useStateContext } from "../Contexts/stateContext";
import "aos/dist/aos.css";
import Aos from "aos";

const DataGridTables = ({ columns, rows, title }) => {
  const { colorTheme } = useStateContext();
  useEffect(() => {
    Aos.init({ delay: 200, duration: 1500 });
  }, []);
  return (
    <div
      className="content "
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
    >
      <Typography
        variant="h3"
        style={{ color: colorTheme }}
        className=" py-5  dark:text-darkPrimary  "
      >
        {title}{" "}
      </Typography>
      <Card className=" h-67    ">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 9 } },
          }}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f1f5f9",
              color: "rgb(30 41 59 )",
              fontFamily: "poppins",
            },
            " & .css-128fb87-MuiDataGrid-toolbarContainer ": {
              padding: "10px",
            },
            "&  .MuiDataGrid-cell": { padding: "10px" },
            "& .MuiDataGrid-virtualScrollerRenderZone": {
              fontFamily: "poppins",
              color: "grey",
              padding: "20px",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              fontFamily: "poppins",
              background: "#f1f5f9",
            },
          }}
          pageSizeOptions={[5]}
          components={{ Toolbar: GridToolbar }}
          disableRowSelectionOnClick
          getRowHeight={() => "auto"}
        />
      </Card>
    </div>
  );
};

export default DataGridTables;
