import Table from "./Table";

const ResultTable = (props) => {
    return (
    <div>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {props.dataTable.length > 0 ? <Table dataTable={props.dataTable}/> : <p>fallback text</p>}
    </div>
  );
};

export default ResultTable;