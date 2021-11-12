import React from "react";
import "./index.css";

export default function WaterFlowGridCreator(props) {
  const {
    rowCount,
    columnCount,
    blockCount,
    handleGridCreatorChange,
    handleCurrentScreenChange
  } = props;
  const gridFields = [
    {
      label: "Rows",
      count: rowCount,
      type: "rowCount"
    },
    {
      label: "Columns",
      count: columnCount,
      type: "columnCount"
    },
    {
      label: "Blocks",
      count: blockCount,
      type: "blockCount"
    }
  ];

  return (
    <>
      <h2>Grid Creation</h2>
      <form className="grid-creator-container">
        {gridFields.map((gridField) => {
          const { count, type, label } = gridField;
          return (
            <div className="grid-field" key={type}>
              <label className="grid-field-label">
                Number of {label}: {count}
              </label>
              <input
                type="range"
                className="form-input"
                value={count}
                min={1}
                step={1}
                max={10}
                onChange={(e) => handleGridCreatorChange(type, e)}
              />
            </div>
          );
        })}
      </form>
      <button className="btn" onClick={handleCurrentScreenChange}>
        Next
      </button>
    </>
  );
}
