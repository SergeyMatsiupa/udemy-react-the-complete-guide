import TableRow from "./TableRow";

import classes from "./ResultTable.module.css";

const Table = (props) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.dataTable.map((dataRow) => {
          return <TableRow dataRow={dataRow} key={dataRow.year}/>;
        })}
      </tbody>
    </table>
  );
};

export default Table;
