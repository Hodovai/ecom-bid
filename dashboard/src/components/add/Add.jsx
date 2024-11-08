import React from "react";
//import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

/**
 * @typedef {import("@mui/x-data-grid").GridColDef} GridColDef
 */

/**
 * Add Component
 * 
 * @param {{
 *  slug: string;
 *  columns: GridColDef[];
 *  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 * }} props
 */
const Add = (props) => {
  const { slug, columns, setOpen } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form handling logic here
    // Example: mutation.mutate();  
    setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        {/* Add form */}
        <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column, index) => (
              <div className="item" key={index}>
                <label htmlFor={column.field}>{column.headerName}</label>
                <input type={column.type || "text"} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
