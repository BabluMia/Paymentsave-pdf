import logo from "./logo.svg";
import "./App.css";
import { jsPDF } from "jspdf";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Pdf from "./Components/Pdf";

function App() {
  const [pdfState, setPdfState] = useState(false);
  const cRef = useRef();
  const printPDF = useReactToPrint({
    content: () => cRef.current,
    documentTitle: "Paymentsave.uk",
    bodyClass: "dis",
  });
  const handePdf = () => {
    printPDF();
  };
  const data = {
    mcc : '2345',
    legalName:'Shafin Ahmed',
    postCode:'12345',
    clientGroup:'DevsStream',
    fundingCurrency:'20000',
    CardBundle:'112',
    newApplication:true,
    changeOfligalEntity:true
  }
  return (
    <>
      <button onClick={handePdf}>Dounload PDF</button>
      <div style={{display:'none'}}>
        <Pdf cRef={cRef} data={data} />
      </div>
      
    </>
  );
}

export default App;
