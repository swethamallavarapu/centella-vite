import Table from "react-bootstrap/Table";
// import { Card } from "react-bootstrap";

function TableCompare() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Medical Chemistry</th>
            <th>Metabolism</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>QED</td>

            <td>QED</td>
          </tr>

          <tr>
            <td>SAscore</td>
            <td>SAscore</td>
          </tr>
          <tr>
            <td>Fsp3</td>
            <td>Fsp3</td>
          </tr>
          <tr>
            <td>MCE-18</td>
            <td>MCE-18</td>
          </tr>
          <tr>
            <td>NPscore</td>
            <td>NPscore</td>
          </tr>
          <tr>
            <td>Lipinski Rule</td>
            <td>Lipinski Rule</td>
          </tr>
          <tr>
            <td>Pfizer Rule</td>
            <td>Pfizer Rule</td>
          </tr>
          <tr>
            <td>GSK Rule</td>
            <td>GSK Rule</td>
          </tr>
          <tr>
            <td>Golden Triangle</td>
            <td>Golden Traingle</td>
          </tr>
          <tr>
            <td>Pains</td>
            <td>Pains</td>
          </tr>
          <tr>
            <td>Alarm NMR Rule</td>
            <td>Alarm NMR Rule</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableCompare;
