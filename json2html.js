export default function json2html(data) {
  const columns = ["Name", "Age", "Gender"];
  let table = `<table data-user="birlaaditya285@gmail.com"><thead><tr>`;
  
  // Add table headers
  columns.forEach(col => {
    table += `<th>${col}</th>`;
  });
  table += `</tr></thead><tbody>`;

  // Add table rows
  data.forEach(row => {
    table += `<tr>`;
    columns.forEach(col => {
      table += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    table += `</tr>`;
  });
  
  table += `</tbody></table>`;
  return table;
}
