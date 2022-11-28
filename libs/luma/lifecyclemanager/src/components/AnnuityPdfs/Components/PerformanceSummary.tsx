export const PerformanceSummary = () => {
  return (
    <section>
      <div className="performance-summary-group">
        <div className="performance-summary ibmplexsans-bold-mine-shaft-12px">
          <h2>
            <span className="performance-summary-border">
              Performance Summary
            </span>
          </h2>
        </div>
        <table className="performance-summary-table">
          <tr>
            <th className="performance-summary-table-header ibmplexsans-regular-normal-mine-shaft-10px">
              Active Underlier
            </th>
            <th className="performance-summary-table-header ibmplexsans-regular-normal-mine-shaft-10px">
              Active Underlier (Strike)
            </th>
            <th className="performance-summary-table-header ibmplexsans-regular-normal-mine-shaft-10px">
              Underlier Performance
            </th>
            <th className="ibmplexsans-regular-normal-mine-shaft-10px">
              Intrinsic Value
            </th>
          </tr>
          <tr>
            <td className="ibmplexsans-bold-mine-shaft-12px">RUT</td>
            <td className="ibmplexsans-bold-mine-shaft-12px">
              1,906.09 (2,285.68)
            </td>
            <td className="ibmplexsans-bold-mine-shaft-12px">-16.61%</td>
            <td className="ibmplexsans-bold-mine-shaft-12px">16.61%</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
