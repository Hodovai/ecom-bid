import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

/**
 * @typedef {import("@mui/x-data-grid").GridColDef} GridColDef
 */

/**
 * DataTable Component
 * 
 * @param {{ 
 *  columns: GridColDef[], 
 *  rows: object[], 
 *  slug: string 
 * }} props 
 */
const DataTable = (props) => {
  const { columns, rows, slug } = props;

  const handleDelete = (id) => {
    // Logic for delete
    // Example: mutation.mutate(id)
  };

  /** @type {GridColDef[]} */
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="action">
            <Link to={`/${slug}/${params.row.id}`}>
              <img src="/view.svg" alt="" />
            </Link>
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              <img src="/delete.svg" alt="" />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, ...actionColumn]} 
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
