import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "column1", headerName: "Column 1", width: 150 },
  { field: "column2", headerName: "Column 2", width: 150 },
  { field: "column3", headerName: "Column 3", width: 150 },
  { field: "column4", headerName: "Column 4", width: 150 },
  { field: "column5", headerName: "Column 5", width: 150 },
  { field: "column6", headerName: "Column 6", width: 150 },
  { field: "column7", headerName: "Column 7", width: 150 },
  { field: "column8", headerName: "Column 8", width: 150 },
  { field: "column9", headerName: "Column 9", width: 150 },
  { field: "column10", headerName: "Column 10", width: 150 },
];

const createData = (id) => {
  return {
    id,
    column1: `Data ${id} - 1`,
    column2: `Data ${id} - 2`,
    column3: `Data ${id} - 3`,
    column4: `Data ${id} - 4`,
    column5: `Data ${id} - 5`,
    column6: `Data ${id} - 6`,
    column7: `Data ${id} - 7`,
    column8: `Data ${id} - 8`,
    column9: `Data ${id} - 9`,
    column10: `Data ${id} - 10`,
  };
};

const rows = Array.from({ length: 100 }, (_, index) => createData(index + 1));

const TableView = () => {
  return (
    <div className="table-container">
      <DataGrid
        columnHeaderHeight={36}
        rowHeight={36}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          border: 0,
          borderRadius: "0px",
          "& .MuiDataGrid-columnHeader": {
            fontWeight: "400", // Optional: Set font weight of header titles
            backgroundColor: "#F5F5F5", // Set your desired background color here
            borderRight: "1px solid #e0e0e0", // Optional: Add a bottom border to the header
            borderTop: "1px solid #e0e0e0",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#E8E1EC", // Set your desired hover background color here
          },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #e0e0e0", // Set your desired vertical line color and style
          },
        }}
      />
    </div>
  );
};

export default TableView;
