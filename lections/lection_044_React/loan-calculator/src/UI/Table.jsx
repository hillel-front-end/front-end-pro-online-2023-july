function Table({ children, thead, ...props }) {
  return (
    <>
      <table className="cutom-table" {...props}>
        <thead>{thead}</thead>
        {children.length > 0 && <tbody>{children}</tbody>}
      </table>
      {children.length === 0 && (
        <div className="empty-table text-center">Table is empty...</div>
      )}
    </>
  );
}

export default Table;
