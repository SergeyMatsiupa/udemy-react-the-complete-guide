const TableRow = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      {/* <td>YEAR NUMBER</td>
      <td>TOTAL SAVINGS END OF YEAR</td>
      <td>INTEREST GAINED IN YEAR</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td> */}
      <td>{props.dataRow.year}</td>
      <td>{formatter.format(props.dataRow.savingsEndOfYear)}</td>
      <td>{formatter.format(props.dataRow.yearlyInterest)}</td>
      <td>{formatter.format(props.dataRow.totalInterest)}</td>
      <td>{formatter.format(props.dataRow.investedCapital)}</td>
    </tr>
  );
};

export default TableRow;
