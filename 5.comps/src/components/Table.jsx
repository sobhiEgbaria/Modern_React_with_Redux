import { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";

// Global filter input
function GlobalFilter({ globalFilter, setGlobalFilter }) {
  return (
    <span>
      Search:{" "}
      <input
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Type to search..."
      />
    </span>
  );
}

function TableComponent() {
  const data = useMemo(
    () => [
      { name: "Alice", age: 25, country: "USA" },
      { name: "Bob", age: 30, country: "UK" },
      { name: "Charlie", age: 28, country: "Canada" },
      { name: "Alice", age: 25, country: "USA" },
      { name: "Bob", age: 30, country: "UK" },
      { name: "Charlie", age: 28, country: "Canada" },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age" },
      { Header: "Country", accessor: "country" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // Column filters
    useGlobalFilter, // Global search
    useSortBy // Sorting
  );

  return (
    <>
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <table
        {...getTableProps()}
        style={{ width: "100%", border: "1px solid gray" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              key={Math.random() * 1000}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={Math.random() * 1000}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ borderBottom: "2px solid black", cursor: "pointer" }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={Math.random() * 1000} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    key={Math.random() * 1000}
                    {...cell.getCellProps()}
                    style={{ padding: "8px", border: "1px solid gray" }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableComponent;
