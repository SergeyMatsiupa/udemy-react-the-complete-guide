const TableRow = (props) => {
  return (
    <tr>
      {/* <td>YEAR NUMBER</td>
      <td>TOTAL SAVINGS END OF YEAR</td>
      <td>INTEREST GAINED IN YEAR</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td> */}
      <td>{props.dataRow.year}</td>
      <td>{props.dataRow.savingsEndOfYear}</td>
      <td>{props.dataRow.yearlyInterest}</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );
};

export default TableRow;
