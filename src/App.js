import "./App.css";
import dataItem from "./data.json";

function App() {
  return (
    <div className="container">
      <div className="head1">WALKER'S VILLAGE</div>
      <div className="add">
        3rd FLOOR PLANET MALL,OPPOSITE NORTH CITY SEVOKE ROAD
      </div>
      <div className="tel">Tel - 7551874316</div>
      <div className="head2">TAX INVOICE</div>
      <div className="head3">WV/2122/0003565</div>
      <div className="head4">
        <div>DATE: 06/03/2022</div>
        <div>TIME: 20:53:56</div>
      </div>
      <div className="head5">
        <div>TABLE NO: B1</div>
        <div>PAX: 4</div>
      </div>
      <div className="head6">
        XX0001:GENERAL CUSTOMERXX0001-GENERAL CUSTOMER:XX0001
      </div>
      <table>
        <tr style={{ borderBottom: "2px solid black" }}>
          <th className="item">ITEM</th>
          <th>QTY</th>
          <th>RATE</th>
          <th className="amt">AMOUNT</th>
        </tr>
        {dataItem.data.map((x, val) => (
          <tr key={val}>
            <td className="item">{x.item}</td>
            <td>{x.qty}.00</td>
            <td>{x.rate}</td>
            <td className="amt">{x.qty * x.rate}.00</td>
          </tr>
        ))}
      </table>
      <div
        className="gst"
        style={{
          borderTop: "2px solid black",
          paddingTop: "10px",
          marginTop: "10px",
        }}
      >
        <div className="space2">Gross Amount:</div>
        <div>6324.00</div>
      </div>
      <div className="gst">
        <div className="space2">CGST@2.5%</div>
        <div>48.65</div>
      </div>
      <di className="gst">
        <div className="space2">SGST@2.5%</div>
        <div>48.65</div>
      </di>
      <div
        className="gst"
        style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}
      >
        <div className="space">Round Off</div>
        <div>0.30</div>
      </div>
      <div
        className="total"
        style={{ borderBottom: "2px solid black", paddingBottom: "10px",marginBottom:"2px" }}
      >
        <div>TOTAL:</div>
        <div>6,421.00</div>
      </div>
      <div style={{ borderTop: "2px solid black" }}></div>
      <div style={{ marginTop: "10px" }}>
        {`(RUPEES SIX THOUSAND FOUR HUNDRED TWENTY-ONE ONLY)`}
      </div>
      <div
        style={{
          width: "90%",
          wordWrap: "break-word",
          marginTop: "10px",
          paddingBottom: "3px",
        }}
      >
        K031122,K031125,K031129,K031131.K031139,K031141,K031149,K031150,K031171
      </div>
      <div style={{ borderTop: "2px solid black" }}></div>
      <div style={{ marginTop: "10px" }}>User: CASHIER</div>
      <div className="grTotal">Grand Total-: 6421</div>
      <div style={{ marginTop: "10px", marginBottom: "25px" }}>
        Order Taken: ARJUN
      </div>
      <div className="footer">No GST oO Alcohol Items</div>
      <div className="footer">Thank you,plese visit again</div>
    </div>
  );
}

export default App;
