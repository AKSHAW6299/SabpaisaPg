import React, { useState } from "react";
import SabpaisaPaymentGateway from "./SabpaisaPaymentGateway";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is included

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [payerName, setPayerName] = useState("Anand Kumar Shaw");
  const [payerEmail, setPayerEmail] = useState("anand.kumar@sabpaisa.in");
  const [payerMobile, setPayerMobile] = useState("6291312929");
  const [amount, setAmount] = useState(8625);
  const [clientCode, setClientCode] = useState("TM001");
  const [payerAddress, setPayerAddress] = useState("Bangalore");
  const [transUserName, setTransUserName] = useState("spuser_2013");
  const [clientTxnId, setclientTxnId] = useState("3828972293337345");
  const [transUserPassword, setTransUserPassword] = useState("RIADA_SP336");
  const [authkey, setAuthkey] = useState("kaY9AIhuJZNvKGp2");
  const [authiv, setAuthiv] = useState("YN2v8qQcU3rGfA1y");
  const [callbackUrl, setCallbackUrl] = useState("http://localhost:3000/response");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
    document.getElementById("renderSabPaisa").click();
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-lg p-4">
            <div className="text-center">
              <h2 className="text-success">SabPaisa Payment Gateway</h2>
              <p className="text-muted text-xs">Secure Payment Gateway</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row">
                {/* Payer Details */}
                <div className="col-md-6 mb-3">
                  <label>Name</label>
                  <input type="text" className="form-control" value={payerName} onChange={(e) => setPayerName(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Email</label>
                  <input type="email" className="form-control" value={payerEmail} onChange={(e) => setPayerEmail(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Phone</label>
                  <input type="tel" className="form-control" value={payerMobile} onChange={(e) => setPayerMobile(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Amount</label>
                  <input type="number" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>

                {/* Transaction Details */}
                <div className="col-md-6 mb-3">
                  <label>Client Code</label>
                  <input type="text" className="form-control" value={clientCode} onChange={(e) => setClientCode(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Transaction User Name</label>
                  <input type="text" className="form-control" value={transUserName} onChange={(e) => setTransUserName(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Transaction Password</label>
                  <input type="password" className="form-control" value={transUserPassword} onChange={(e) => setTransUserPassword(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Client Transaction ID</label>
                  <input type="text" className="form-control" value={clientTxnId} onChange={(e) => setclientTxnId(e.target.value)} />
                </div>

                {/* Security & Address */}
                <div className="col-md-6 mb-3">
                  <label>Auth Key</label>
                  <input type="text" className="form-control" value={authkey} onChange={(e) => setAuthkey(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Auth IV</label>
                  <input type="text" className="form-control" value={authiv} onChange={(e) => setAuthiv(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Address</label>
                  <input type="text" className="form-control" value={payerAddress} onChange={(e) => setPayerAddress(e.target.value)} />
                </div>
                <div className="col-md-6 mb-3">
                  <label>Callback URL</label>
                  <input type="url" className="form-control" value={callbackUrl} onChange={(e) => setCallbackUrl(e.target.value)} />
                </div>
              </div>

              {/* Payment Button */}
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-success btn-lg px-4">
                  Proceed to Pay
                </button>
              </div>
            </form>

            <div id="renderSabPaisa"></div>
          </div>
        </div>
      </div>

      <SabpaisaPaymentGateway payerName={payerName} payerEmail={payerEmail} payerMobile={payerMobile} isOpen={isOpen} />
    </div>
  );
};

export default App;
