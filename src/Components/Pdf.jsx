import React from "react";
import './Pdf.css'

const Pdf = ({cRef,data}) => {
  return (
    <form className="normal uk " id="content" ref={cRef}>
      <div className="form-code"> ELAVON APPLICATION FORM – UK 02/2021 </div>
      <div className="header" style={{ height: 80 }}>
        <h1>Application Form – UK</h1>
        <p>
          *Mandatory fields to be completed. Please fill in this application
          form below ("Application").
        </p>{" "}
        <img
          src="https://sayyebo.siteftp.co.uk/form/v11/logo.png"
          width={125}
          height="auto"
          alt="Elavon"
        />
      </div>
      <section style={{ paddingBottom: 0 }}>
        <h2>Customer Information</h2>
        <div className="blue-fields">
          <p>Blue fields are for internal use only</p>
        </div>
        <div className="row blue">
          <div className="cols-4 even-check half">
            <div className="input">
              <div className="check">
                <input
                  name="af_s1_q1"
                  type="checkbox"
                  defaultValue="new"
                  id="af_s1_q1_1"
                  checked={data.newApplication}
                />
                <label htmlFor="af_s1_q1_1">*New Application</label>
              </div>
              <div className="check">
                <input
                  name="af_s1_q1"
                  type="checkbox"
                  defaultValue="contract"
                  id="af_s1_q1_2"
                />
                <label htmlFor="af_s1_q1_2">Central Contract</label>
              </div>
              <div className="check">
                <input
                  name="af_s1_q1"
                  type="checkbox"
                  defaultValue="change-legal"
                  id="af_s1_q1_3"
                  checked={data.newApplication}
                />
                <label htmlFor="af_s1_q1_3">Change of Legal Entity</label>
              </div>
            </div>
          </div>
          <div className="cols-2">
            <label>Portfolio</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q2"
                defaultValue="United Kingdom"
                disabled=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>*Portfolio Country</label>
            <div className="input">
              <input type="text" id="af_s1_q3" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-2">
            <label>Site Survey</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s1_q4"
                  defaultValue="yes"
                  id="af_s1_q4_1"
                />
                <label htmlFor="af_s1_q4_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s1_q4"
                  defaultValue="telesales"
                  id="af_s1_q4_2"
                />
                <label htmlFor="af_s1_q4_2">Telesales</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row blue">
          <div className="cols-2">
            <label>*Funding Currency</label>
            <div className="input">
              <input type="text" id="af_s1_q5" defaultValue="" placeholder="" value={data.fundingCurrency} />
            </div>
          </div>
          <div className="cols-2">
            <label>*Client Group</label>
            <div className="input">
              <input type="text" id="af_s1_q6" defaultValue="" placeholder="" value={data.clientGroup} />
            </div>
          </div>
          <div className="cols-2">
            <label>*Card Bundle</label>
            <div className="input">
              <input type="text" id="af_s1_q7" defaultValue="" placeholder="" value={data.CardBundle} />
            </div>
          </div>
          <div className="cols-2">
            <label>MCC</label>
            <div className="input">
              <input type="text" id="af_s1_q8" defaultValue="" placeholder="" value={data.mcc} />
            </div>
          </div>
          <div className="cols-2">
            <label>Association Code/s</label>
            <div className="input">
              <input type="text" id="af_s1_q9" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row blue">
          <div className="cols-2">
            <label>Parent Chain Code</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q10"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>*Parent Entity Code</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q11"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>Old MID</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q12"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>Pre Assigned MID</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q13"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>New MID</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q14"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row blue">
          <div className="cols-3">
            <label>AMEX MID (if applicable)</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q15"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>*Sales Rep Code</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q16"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>*Chargeback Distribution</label>
            <div className="input">
              <div className="check">
                <input
                  name="af_s1_q17"
                  type="checkbox"
                  defaultValue="email"
                  id="af_s1_q17_2"
                />
                <label htmlFor="af_s1_q17_2">
                  Email address
                  <br />
                  (recommended)
                </label>
              </div>
              <div className="check">
                <input
                  type="text"
                  id="af_s1_q17_2_a"
                  defaultValue=""
                  placeholder=""
                  style={{
                    display: "inline-block",
                    width: 300,
                    marginRight: 5,
                  }}
                />
              </div>
              <div className="check">
                <input
                  name="af_s1_q17"
                  type="checkbox"
                  defaultValue="mail"
                  id="af_s1_q17_1"
                />
                <label htmlFor="af_s1_q17_1">Mail</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row blue">
          <div className="cols-10">
            <label>Exclusion group/s</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q41"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-6">
            <label>*Legal Name</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q18"
                defaultValue=""
                placeholder=""
                value={data.legalName}
              />
            </div>
          </div>
          <div className="cols-4 even-check third">
            <label>*Registered Office Address is contact for:</label>
            <div className="input">
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="all"
                  id="af_s1_q19_1"
                />
                <label htmlFor="af_s1_q19_1">All</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="chargeback"
                  id="af_s1_q19_2"
                />
                <label htmlFor="af_s1_q19_2">Chargeback</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="communication"
                  id="af_s1_q19_3"
                />
                <label htmlFor="af_s1_q19_3">Communication</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="shipping"
                  id="af_s1_q19_4"
                />
                <label htmlFor="af_s1_q19_4">Shipping</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="statement"
                  id="af_s1_q19_5"
                />
                <label htmlFor="af_s1_q19_5">Statement</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="settlement"
                  id="af_s1_q19_6"
                />
                <label htmlFor="af_s1_q19_6">Settlement</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q19"
                  type="checkbox"
                  defaultValue="PCI"
                  id="af_s1_q19_7"
                />
                <label htmlFor="af_s1_q19_7">
                  PCI (for current and future MIDs)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>*Legal/Registered Office Address</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q20"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*City</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q21"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>*Postcode</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q22"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-1">
            <label>*Title</label>
            <div className="input">
              <select name="af_s1_q23" id="af_s1_q23">
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
                <option value="mr">Mr</option>
              </select>
            </div>
          </div>
          <div className="cols-4">
            <label>*Attention (First/Middle/Last Name)</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q24"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>Email Address</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q25"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*Phone No.</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q26"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>Mobile No.</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q27"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-6">
            <label>*Trading (DBA) Name</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q28"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-4 even-check third">
            <label>*Trading (DBA) Address is contact for:</label>
            <div className="input">
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="all"
                  id="af_s1_q29_1"
                />
                <label htmlFor="af_s1_q29_1">All</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="chargeback"
                  id="af_s1_q29_2"
                />
                <label htmlFor="af_s1_q29_2">Chargeback</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="communication"
                  id="af_s1_q29_3"
                />
                <label htmlFor="af_s1_q29_3">Communication</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="shipping"
                  id="af_s1_q29_4"
                />
                <label htmlFor="af_s1_q29_4">Shipping</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="statement"
                  id="af_s1_q29_5"
                />
                <label htmlFor="af_s1_q29_5">Statement</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="settlement"
                  id="af_s1_q29_6"
                />
                <label htmlFor="af_s1_q29_6">Settlement</label>
              </div>
              <div className="check" style={{ width: "auto" }}>
                <input
                  name="af_s1_q29"
                  type="checkbox"
                  defaultValue="PCI"
                  id="af_s1_q29_7"
                />
                <label htmlFor="af_s1_q29_7">
                  PCI (for current and future MIDs)
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>*Trading (DBA) Address (if different from above)</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q30"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*City</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q31"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>*Postcode</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q32"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-1">
            <label>*Title</label>
            <div className="input">
              <select name="af_s1_q33" id="af_s1_q33">
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
                <option value="mr">Mr</option>
              </select>
            </div>
          </div>
          <div className="cols-4">
            <label>*Attention (First/Middle/Last Name)</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q34"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>Email Address</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q35"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*Phone No.</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q36"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>Mobile No.</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q37"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>
              Statement Address (if different from Trading (DBA) Address or
              Legal/Registered Office address)
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q38"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*City</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q39"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>*Postcode</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q40"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>
              <strong>PCI contact person (if different from above):</strong>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="cols-1">
            <label>*Title</label>
            <div className="input">
              <select name="af_s1_q42" id="af_s1_q42">
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
                <option value="mr">Mr</option>
              </select>
            </div>
          </div>
          <div className="cols-4">
            <label>*Contact name</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q43"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>*Email Address</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q44"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*Phone No.</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q45"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>*Mobile No.</label>
            <div className="input">
              <input
                type="text"
                id="af_s1_q46"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 0 }}>
        <h2>Internet Customer</h2>
        <div className="row">
          <div className="cols-5">
            <label>Which countries will you accept orders from?</label>
            <div className="input">
              <input type="text" id="af_s2_q1" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-5">
            <label>What is your email address for customer queries?</label>
            <div className="input">
              <input type="text" id="af_s2_q2" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row no-border">
          <div className="cols-10">
            {" "}
            <label>
              Which of the following security checks do you undertake?
            </label>{" "}
          </div>
        </div>
        <div className="row">
          <div className="cols-1-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s2_q3"
                  type="checkbox"
                  defaultValue="bin"
                  id="af_s2_q3_1"
                />
                <label htmlFor="af_s2_q3_1">BIN checks</label>
              </div>
            </div>
          </div>
          <div className="cols-1-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s2_q3"
                  type="checkbox"
                  defaultValue="velocity"
                  id="af_s2_q3_2"
                />
                <label htmlFor="af_s2_q3_2">Velocity checks</label>
              </div>
            </div>
          </div>
          <div className="cols-1-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s2_q3"
                  type="checkbox"
                  defaultValue="ip-geo"
                  id="af_s2_q3_3"
                />
                <label htmlFor="af_s2_q3_3">IP/GEO checks</label>
              </div>
            </div>
          </div>
          <div className="cols-2 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s2_q3"
                  type="checkbox"
                  defaultValue="Max-amount"
                  id="af_s2_q3_4"
                />
                <label htmlFor="af_s2_q3_4">Maximum Amount checks</label>
              </div>
            </div>
          </div>
          <div className="cols-3-3 no-border grey-input">
            <div className="input">
              <div className="check">
                <input
                  name="af_s2_q3_1"
                  type="checkbox"
                  defaultValue="other"
                  id="af_s2_q3_1_5"
                />
                <label htmlFor="af_s2_q3_1_5">Other</label>
              </div>
              <input
                style={{ float: "left", width: 255, padding: 0 }}
                type="text"
                id="af_s2_q3_5_1"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>Payment Service Provider (Gateway)</label>
            <div className="input">
              <input type="text" id="af_s2_q4" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-5">
            <label>Internet Service Provider</label>
            <div className="input">
              <input type="text" id="af_s2_q5" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Customer Profile</h2>
        <div className="row no-border">
          <div className="cols-10">
            {" "}
            <label>*Ownership Type</label>{" "}
          </div>
        </div>
        <div className="row">
          <div className="cols-2-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="sole-trader"
                  id="af_s4_q1_1"
                />
                <label htmlFor="af_s4_q1_1">Sole Trader</label>
              </div>
            </div>
          </div>
          <div className="cols-2-5 no-border grey-input">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="partnership"
                  id="af_s4_q1_2"
                />
                <label htmlFor="af_s4_q1_2">Partnership; No. of Partners</label>
              </div>
              <input
                style={{ float: "left", width: 45, padding: 0 }}
                type="text"
                id="af_s4_q1_2_1"
                defaultValue=""
              />
            </div>
          </div>
          <div className="cols-2-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="private"
                  id="af_s4_q1_3"
                />
                <label htmlFor="af_s4_q1_3">Private Limited Company</label>
              </div>
            </div>
          </div>
          <div className="cols-2-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="public"
                  id="af_s4_q1_4"
                />
                <label htmlFor="af_s4_q1_4">Public Limited Company</label>
              </div>
            </div>
          </div>
          <div className="cols-2-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="liability"
                  id="af_s4_q1_5"
                />
                <label htmlFor="af_s4_q1_5">
                  Limited Liability Partnership
                </label>
              </div>
            </div>
          </div>
          <div className="cols-2-5 no-border grey-input">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="charity"
                  id="af_s4_q1_6"
                />
                <label htmlFor="af_s4_q1_6">Charity</label>
              </div>
              <input
                style={{ float: "left", width: 162, padding: 0 }}
                type="text"
                id="af_s4_q1_6_1"
                defaultValue=""
              />
            </div>
          </div>
          <div className="cols-5 no-border grey-input">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q1"
                  type="checkbox"
                  defaultValue="other"
                  id="af_s4_q1_7"
                />
                <label htmlFor="af_s4_q1_7">Other (please specify)</label>
              </div>
              <input
                style={{ float: "left", width: 320, padding: 0 }}
                type="text"
                id="af_s4_q1_7_1"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>*Company/Charity Registration No.</label>
            <div className="input">
              <input type="text" id="af_s4_q2" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-2-5">
            <label>*Date of Incorporation</label>
            <div className="input">
              <input type="text" id="af_s4_q3" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-2-5">
            <label>*Current ownership since</label>
            <div className="input">
              <input type="text" id="af_s4_q4" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>Outlet Store No.</label>
            <div className="input">
              <input type="text" id="af_s4_q6" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-5">
            <label>Previous Industry experience since</label>
            <div className="input">
              <input type="text" id="af_s4_q7" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-1 no-border">
            <label>*VAT Details</label>
          </div>
          <div className="cols-2 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q31"
                  type="checkbox"
                  defaultValue={1}
                  id="af_s4_q31_1"
                />
                <label htmlFor="af_s4_q31_1">VAT Number</label>
              </div>
              <input type="text" name="af_s4_q31_text" defaultValue="" />
            </div>
          </div>
          <div className="cols-2 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q32"
                  type="checkbox"
                  defaultValue={1}
                  id="af_s4_q32_1"
                />
                <label htmlFor="af_s4_q32_1">VAT Number Pending</label>
              </div>
            </div>
          </div>
          <div className="cols-5 no-border">
            <div className="input">
              <div className="check">
                <input
                  name="af_s4_q33"
                  type="checkbox"
                  defaultValue={1}
                  id="af_s4_q33_1"
                />
                <label htmlFor="af_s4_q33_1">
                  In Business Confirmation{" "}
                  <em>
                    (I confirm that I am engaged in business activities but not
                    registered for VAT in the European Union)
                  </em>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>
              Other Tax Number (to be completed if VAT Number was not entered
              above)
            </label>
            <div className="input">
              <div className="check">
                <input
                  name="s2['q34']"
                  type="checkbox"
                  defaultValue="corporate-tax-number"
                  id="s2['q34']_1"
                />
                <label htmlFor="s2['q34']_1">Corporate Tax Number</label>
              </div>
              <input
                style={{
                  float: "left",
                  width: 150,
                  padding: 0,
                  marginRight: 10,
                }}
                type="text"
                name="s2['q34']_1_text"
                defaultValue=""
              />
              <div className="check">
                <input
                  name="s2['q34']"
                  type="checkbox"
                  defaultValue="income-tax-number"
                  id="s2['q34']_2"
                />
                <label htmlFor="s2['q34']_2">Income Tax Number</label>
              </div>
              <input
                style={{
                  float: "left",
                  width: 150,
                  padding: 0,
                  marginRight: 10,
                }}
                type="text"
                name="s2['q34']_2_text"
                defaultValue=""
              />
              <div className="check">
                <input
                  name="s2['q34']"
                  type="checkbox"
                  defaultValue="charity-number"
                  id="s2['q34']_3"
                />
                <label htmlFor="s2['q34']_3">Charity Number</label>
              </div>
              <input
                style={{
                  float: "left",
                  width: 150,
                  padding: 0,
                  marginRight: 10,
                }}
                type="text"
                name="s2['q34']_3_text"
                defaultValue=""
              />
            </div>
          </div>
        </div>
        <div className="row page-break">
          <div className="cols-5">
            <label>*Country of Incorporation</label>
            <div className="input">
              <input type="text" id="af_s4_q8" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-2-5">
            <label>*Are you new to Card Processing?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q9"
                  defaultValue="yes"
                  id="af_s4_q9_1"
                />
                <label htmlFor="af_s4_q9_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q9"
                  defaultValue="no"
                  id="af_s4_q9_2"
                />
                <label htmlFor="af_s4_q9_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-2-5">
            <label>If no, who was your previous acquirer?</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q10"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>
              *Description of goods and/or services that you require Merchant
              Services for (and, if different from that, please also note your
              core business activity)
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q11"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>Web URL</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q12"
                defaultValue="www."
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-3-3">
            <label>*Customer Annual Turnover</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q13"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>*(Anticipated) Card sales p.a.</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q14"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>*Average Transaction Value</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q15"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-3-3 percent">
            <label>*% of total turnover relating to Card Present</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q16"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3 percent">
            <label>
              *% of total turnover relating to Mail Order / Telephone Order
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q17"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3 percent">
            <label>*% of total turnover relating to Internet</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q18"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-2-5">
            <label>Seasonal Sales</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q19"
                  defaultValue="yes"
                  id="af_s4_q19_1"
                />
                <label htmlFor="af_s4_q19_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q19"
                  defaultValue="no"
                  id="af_s4_q19_2"
                />
                <label htmlFor="af_s4_q19_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-7">
            <p>
              If applicable, please state your quarterly percentages and
              underline the peak month of each quarter
            </p>
          </div>
        </div>
        <div className="row">
          <div className="cols-2-5 percent">
            <label>JAN, FEB, MAR</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q20"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2-5 percent">
            <label>APR, MAY, JUN</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q21"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2-5 percent">
            <label>JUL, AUG, SEP</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q22"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-2-5 percent">
            <label>OCT, NOV, DEC</label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q23"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>
              *Please state the country which generates the highest revenue per
              annum for your business. If you operate in only one country,
              please state that country
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s4_q29"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <p>
            *PCI Level: Please tick the box that best describes your
            (anticipated) numbers of Transactions
          </p>
        </div>
        <div className="row">
          <div className="cols-2-5">
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q24"
                  defaultValue={4}
                  id="af_s4_q24_1"
                />
                <label htmlFor="af_s4_q24_1">
                  Level 4 : Processing less than 20,000 Internet Transactions or
                  up to 1 million MO/TO and Card Present Transactions p.a.
                </label>
              </div>
            </div>
          </div>
          <div className="cols-2-5">
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q24"
                  defaultValue={3}
                  id="af_s4_q24_2"
                />
                <label htmlFor="af_s4_q24_2">
                  Level 3: Processing between 20,000 and 1 million Internet
                  Transactions p.a.
                </label>
              </div>
            </div>
          </div>
          <div className="cols-2-5">
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q24"
                  defaultValue={2}
                  id="af_s4_q24_3"
                />
                <label htmlFor="af_s4_q24_3">
                  Level 2: Processing 1 million to 6 million Transactions p.a.
                </label>
              </div>
            </div>
          </div>
          <div className="cols-2-5">
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s4_q24"
                  defaultValue={1}
                  id="af_s4_q24_4"
                />
                <label htmlFor="af_s4_q24_4">
                  Level 1 – processing &gt;6 million Transactions p.a.
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Travel Agencies/Tour Operators</h2>
        <div className="row">
          <div className="cols-3">
            <label>Do you offer Currency Exchange Facilities?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s3_q1"
                  defaultValue="yes"
                  id="af_s3_q1_1"
                />
                <label htmlFor="af_s3_q1_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s3_q1"
                  defaultValue="no"
                  id="af_s3_q1_2"
                />
                <label htmlFor="af_s3_q1_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-3">
            <label>Are you a Member of any Bonding Associations?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s3_q2"
                  defaultValue="yes"
                  id="af_s3_q2_1"
                />
                <label htmlFor="af_s3_q2_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s3_q2"
                  defaultValue="no"
                  id="af_s3_q2_2"
                />
                <label htmlFor="af_s3_q2_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-4">
            <label>Name of Bonding Association</label>
            <div className="input">
              <input type="text" id="af_s3_q3" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>Membership No./Bond No.</label>
            <div className="input">
              <input type="text" id="af_s3_q4" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-5">
            <label>Bond Amount</label>
            <div className="input">
              <input type="text" id="af_s3_q5" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
      </section>
      <section className="page-break">
        <h2>Authorised Signatory / Beneficial Owner / Director</h2>
        <div className="row">
          <div className="cols-10 grey no-border">
            <p>
              The individual signing this form (“Authorised Signatory”) must
              complete the information in the section below and tick all
              applicable boxes.
            </p>
            <p>
              If applicable, please also complete one section for each
              individual who is the beneficial owner of the Customer. Beneficial
              Owners are those individuals who are the business owners (e.g.
              Sole Traders) or who directly or indirectly hold 25% or more of
              the shares/voting rights (“Interest / control”) of the Customer.
              In the case of a complex structure, please provide details of any
              individual holding, directly or indirectly, 10% or more of the
              Interest.
            </p>
            <p>
              Where applicable, please also provide the information requested
              below for any two directors of the Customer. (Please provide
              either the date of birth or address. However, in the case of a
              complex structure please provide the name, date of birth or
              address for all of the directors of the Customer).
            </p>
            <p>
              Individuals, who perform two or more of these functions, please
              tick all appropriate boxes and provide the required information by
              only completing the section once.
            </p>
            <p>
              A “Responsible Party” is an individual who has control over the
              day-to-day operations of the business. Please ensure that at least
              one of the individuals identified below is a Responsible Party.
            </p>
            <p>Please use the Continuation Page if necessary.</p>
          </div>
        </div>
        <div className="bo page-break">
          <h2>
            1) <input name="af_s5_p1_q0-1" id="af_s5_p1_q0-1" type="checkbox" />{" "}
            Authorised Signatory{" "}
            <input name="af_s5_p1_q0-2" id="af_s5_p1_q0-2" type="checkbox" />{" "}
            Beneficial Owner{" "}
            <input name="af_s5_p1_q0-3" id="af_s5_p1_q0-3" type="checkbox" />{" "}
            Director (Please tick all applicable boxes)
          </h2>
          <div className="row">
            <div className="cols-1">
              <label>*Title</label>
              <div className="input">
                <select name="af_s5_p1_q1.1" id="af_s5_p1_q1.1">
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                  <option value="mr">Mr</option>
                </select>
              </div>
            </div>
            <div className="cols-3">
              <label>*Name (First/Middle/Last Name)</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q1.2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Date of Birth</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2 percent">
              <label>*Interest</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q3"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Responsible Party</label>
              <div className="input">
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p1_q4"
                    defaultValue="yes"
                    id="af_s5_p1_q4_1"
                  />
                  <label htmlFor="af_s5_p1_q4_1">Yes</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p1_q4"
                    defaultValue="no"
                    id="af_s5_p1_q4_2"
                  />
                  <label htmlFor="af_s5_p1_q4_2">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6">
              <label>*Private Residential Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q5"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*City</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q6"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-3">
              <label>*State / Province</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q7"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-1">
              <label>Postcode</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q8"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*Country</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q9"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Phone No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q10"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-7">
              <label>Email Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q11"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Mobile No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q12"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-4">
              <label>
                *Identification Number (passport no. or government issued no.)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q13"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Issue Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q14"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Expiry Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q15"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6-6">
              <label>
                Nationality/Citizenship (**mandatory for Authorised Signatories
                &amp; Beneficial Owners only)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q16"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3-3">
              <label>If applicable, what is your second nationality?</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p1_q17"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bo">
          <h2>
            2) <input name="af_s5_p2_q0-1" id="af_s5_p2_q0-1" type="checkbox" />{" "}
            Authorised Signatory{" "}
            <input name="af_s5_p2_q0-2" id="af_s5_p2_q0-2" type="checkbox" />{" "}
            Beneficial Owner{" "}
            <input name="af_s5_p2_q0-3" id="af_s5_p2_q0-3" type="checkbox" />{" "}
            Director (Please tick all applicable boxes)
          </h2>
          <div className="row">
            <div className="cols-1">
              <label>*Title</label>
              <div className="input">
                <select name="af_s5_p2_q1.1" id="af_s5_p2_q1.1">
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                  <option value="mr">Mr</option>
                </select>
              </div>
            </div>
            <div className="cols-3">
              <label>*Name (First/Middle/Last Name)</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q1.2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Date of Birth</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2 percent">
              <label>*Interest</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q3"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Responsible Party</label>
              <div className="input">
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p2_q4"
                    defaultValue="yes"
                    id="af_s5_p2_q4_1"
                  />
                  <label htmlFor="af_s5_p2_q4_1">Yes</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p2_q4"
                    defaultValue="no"
                    id="af_s5_p2_q4_2"
                  />
                  <label htmlFor="af_s5_p2_q4_2">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6">
              <label>*Private Residential Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q5"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*City</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q6"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-3">
              <label>*State / Province</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q7"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-1">
              <label>Postcode</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q8"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*Country</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q9"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Phone No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q10"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-7">
              <label>Email Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q11"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Mobile No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q12"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-4">
              <label>
                *Identification Number (passport no. or government issued no.)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q13"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Issue Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q14"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Expiry Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q15"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6-6">
              <label>
                Nationality/Citizenship (**mandatory for Authorised Signatories
                &amp; Beneficial Owners only)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q16"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3-3">
              <label>If applicable, what is your second nationality?</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p2_q17"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bo">
          <h2>
            3) <input name="af_s5_p3_q0-1" id="af_s5_p3_q0-1" type="checkbox" />{" "}
            Authorised Signatory{" "}
            <input name="af_s5_p3_q0-2" id="af_s5_p3_q0-2" type="checkbox" />{" "}
            Beneficial Owner{" "}
            <input name="af_s5_p3_q0-3" id="af_s5_p3_q0-3" type="checkbox" />{" "}
            Director (Please tick all applicable boxes)
          </h2>
          <div className="row">
            <div className="cols-1">
              <label>*Title</label>
              <div className="input">
                <select name="af_s5_p3_q1.1" id="af_s5_p3_q1.1">
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                  <option value="mr">Mr</option>
                </select>
              </div>
            </div>
            <div className="cols-3">
              <label>*Name (First/Middle/Last Name)</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q1.2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Date of Birth</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2 percent">
              <label>*Interest</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q3"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Responsible Party</label>
              <div className="input">
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p3_q4"
                    defaultValue="yes"
                    id="af_s5_p3_q4_1"
                  />
                  <label htmlFor="af_s5_p3_q4_1">Yes</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p3_q4"
                    defaultValue="no"
                    id="af_s5_p3_q4_2"
                  />
                  <label htmlFor="af_s5_p3_q4_2">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6">
              <label>*Private Residential Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q5"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*City</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q6"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-3">
              <label>*State / Province</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q7"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-1">
              <label>Postcode</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q8"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*Country</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q9"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Phone No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q10"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-7">
              <label>Email Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q11"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Mobile No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q12"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-4">
              <label>
                *Identification Number (passport no. or government issued no.)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q13"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Issue Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q14"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Expiry Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q15"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6-6">
              <label>
                Nationality/Citizenship (**mandatory for Authorised Signatories
                &amp; Beneficial Owners only)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q16"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3-3">
              <label>If applicable, what is your second nationality?</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p3_q17"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bo page-break">
          <h2>
            4) <input name="af_s5_p4_q0-1" id="af_s5_p4_q0-1" type="checkbox" />{" "}
            Authorised Signatory{" "}
            <input name="af_s5_p4_q0-2" id="af_s5_p4_q0-2" type="checkbox" />{" "}
            Beneficial Owner{" "}
            <input name="af_s5_p4_q0-3" id="af_s5_p4_q0-3" type="checkbox" />{" "}
            Director (Please tick all applicable boxes)
          </h2>
          <div className="row">
            <div className="cols-1">
              <label>*Title</label>
              <div className="input">
                <select name="af_s5_p4_q1.1" id="af_s5_p4_q1.1">
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                  <option value="mr">Mr</option>
                </select>
              </div>
            </div>
            <div className="cols-3">
              <label>*Name (First/Middle/Last Name)</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q1.2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Date of Birth</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q2"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2 percent">
              <label>*Interest</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q3"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-2">
              <label>*Responsible Party</label>
              <div className="input">
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p4_q4"
                    defaultValue="yes"
                    id="af_s5_p4_q4_1"
                  />
                  <label htmlFor="af_s5_p4_q4_1">Yes</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="af_s5_p4_q4"
                    defaultValue="no"
                    id="af_s5_p4_q4_2"
                  />
                  <label htmlFor="af_s5_p4_q4_2">No</label>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6">
              <label>*Private Residential Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q5"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*City</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q6"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-3">
              <label>*State / Province</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q7"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-1">
              <label>Postcode</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q8"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>*Country</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q9"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Phone No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q10"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-7">
              <label>Email Address</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q11"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Mobile No.</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q12"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-4">
              <label>
                *Identification Number (passport no. or government issued no.)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q13"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Issue Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q14"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3">
              <label>Expiry Date</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q15"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="cols-6-6">
              <label>
                Nationality/Citizenship (**mandatory for Authorised Signatories
                &amp; Beneficial Owners only)
              </label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q16"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
            <div className="cols-3-3">
              <label>If applicable, what is your second nationality?</label>
              <div className="input">
                <input
                  type="text"
                  id="af_s5_p4_q17"
                  defaultValue=""
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Transaction Details</h2>
        <div className="row">
          <div className="cols-3">
            <label>*Who supplies the goods/performs the service?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q1"
                  defaultValue="you"
                  id="af_s7_q1_1"
                />
                <label htmlFor="af_s7_q1_1">You</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q1"
                  defaultValue="third"
                  id="af_s7_q1_2"
                />
                <label htmlFor="af_s7_q1_2">Third Party</label>
              </div>
            </div>
          </div>
          <div className="cols-2">
            <label>*Cashback</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q2"
                  defaultValue="yes"
                  id="af_s7_q2_1"
                />
                <label htmlFor="af_s7_q2_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q2"
                  defaultValue="no"
                  id="af_s7_q2_2"
                />
                <label htmlFor="af_s7_q2_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-2-5">
            <label>Anticipated average Cashback amount</label>
            <div className="input">
              <input type="text" id="af_s7_q3" defaultValue="" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-2">
            <label>*Do you take deposits?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q5"
                  defaultValue="yes"
                  id="af_s7_q5_1"
                />
                <label htmlFor="af_s7_q5_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q5"
                  defaultValue="no"
                  id="af_s7_q5_2"
                />
                <label htmlFor="af_s7_q5_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-3 percent">
            <label>Size of deposit as a % of total transaction value?</label>
            <div className="input">
              <input type="text" id="af_s7_q6" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-5">
            {" "}
            <label>
              How far in advance of the supply of goods/services are deposits
              taken?
            </label>
            <div className="row">
              <div className="cols-1-5 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q7_1"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Days</label>
                </div>
              </div>
              <div className="cols-1-5 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q7_2"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Weeks</label>
                </div>
              </div>
              <div className="cols-1-5 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q7_3"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Months</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5 percent deposits">
            <label>What % of your annual turnover relates to deposits?</label>
            <div className="input">
              <input type="text" id="af_s7_q8" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-5">
            {" "}
            <label>
              Time between taking deposit and receiving remaining balance of
              payment?
            </label>
            <div className="row">
              <div className="cols-1-5 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q9_1"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Days</label>
                </div>
              </div>
              <div className="cols-1-5 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q9_2"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Weeks</label>
                </div>
              </div>
              <div className="cols-1-5 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q9_3"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Months</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-3">
            <label>*Do you ever take full payment up front?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q10"
                  defaultValue="yes"
                  id="af_s7_q10_1"
                />
                <label htmlFor="af_s7_q10_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s7_q10"
                  defaultValue="no"
                  id="af_s7_q10_2"
                />
                <label htmlFor="af_s7_q10_2">No</label>
              </div>
            </div>
          </div>
          <div className="cols-4">
            {" "}
            <label>
              How far in advance of supply is the full payment taken?
            </label>
            <div className="row">
              <div className="cols-1 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q11_1"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Days</label>
                </div>
              </div>
              <div className="cols-1 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q11_2"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Weeks</label>
                </div>
              </div>
              <div className="cols-1 no-border grey-input no-padding-top">
                <div className="input">
                  <input
                    type="text"
                    id="af_s7_q11_3"
                    defaultValue=""
                    style={{ float: "left", width: 40, marginRight: 5 }}
                  />
                  <label>Months</label>
                </div>
              </div>
            </div>
          </div>
          <div className="cols-3 percent pa">
            <label>
              What % of your annual turnover relates to upfront full payments?
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s7_q12"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-10">
            <label>
              If you wish to provide any further details, please insert here:
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s7_q13"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Financial Information</h2>
        <div className="row blue">
          <div className="cols-10">
            <label>*Payment Method</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q1"
                  defaultValue="eba"
                  id="af_s8_q1_1"
                />
                <label htmlFor="af_s8_q1_1">EBA</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q1"
                  defaultValue="alb"
                  id="af_s8_q1_2"
                />
                <label htmlFor="af_s8_q1_2">ALB</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q1"
                  defaultValue="chain"
                  id="af_s8_q1_4"
                />
                <label htmlFor="af_s8_q1_4">Chain</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q1"
                  defaultValue="edi"
                  id="af_s8_q1_5"
                />
                <label htmlFor="af_s8_q1_5">EDI</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row blue">
          <div className="cols-1-5">
            <label>Delay Days</label>
            <div className="input">
              <input type="text" id="af_s8_q2" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-3 grey-input">
            <label>Funding Frequency</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q3"
                  defaultValue="daily"
                  id="af_s8_q3_1"
                />
                <label htmlFor="af_s8_q3_1">Daily</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q3"
                  defaultValue="weekly"
                  id="af_s8_q3_2"
                />
                <label htmlFor="af_s8_q3_2">Weekly</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q3"
                  defaultValue="monthly"
                  id="af_s8_q3_3"
                />
                <label htmlFor="af_s8_q3_3">Monthly</label>
              </div>
            </div>
          </div>
          <div className="cols-1-5">
            <label>Funding Day</label>
            <div className="input">
              <input type="text" id="af_s8_q4" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-2">
            <label>VAT Override</label>
            <div className="input">
              <div className="check">
                <input
                  name="af_s8_q5"
                  type="checkbox"
                  defaultValue="yes"
                  id="af_s8_q5_1"
                />
                <label htmlFor="af_s8_q5_1">Yes / Rate:</label>
              </div>
              <input
                style={{ float: "left", width: 75, padding: 0 }}
                type="text"
                name="af_s8_q5_1_text"
                defaultValue=""
              />
            </div>
          </div>
          <div className="cols-2">
            <label>*Faster Payments</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q6"
                  defaultValue="yes"
                  id="af_s8_q6_1"
                />
                <label htmlFor="af_s8_q6_1">Yes (with fee)</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q6"
                  defaultValue="no"
                  id="af_s8_q6_2"
                />
                <label htmlFor="af_s8_q6_2">No</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row blue">
          <div className="cols-3 grey-input">
            <label>Billing Frequency</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q7"
                  defaultValue="daily"
                  id="af_s8_q7_1"
                />
                <label htmlFor="af_s8_q7_1">Daily</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q7"
                  defaultValue="weekly"
                  id="af_s8_q7_2"
                />
                <label htmlFor="af_s8_q7_2">Weekly</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q7"
                  defaultValue="monthly"
                  id="af_s8_q7_3"
                />
                <label htmlFor="af_s8_q7_3">Monthly</label>
              </div>
            </div>
          </div>
          <div className="cols-1-5">
            <label>Billing Day</label>
            <div className="input">
              <input type="text" id="af_s8_q8" defaultValue="" placeholder="" />
            </div>
          </div>
          <div className="cols-2">
            <label>Settlement Method</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q9"
                  defaultValue="gross"
                  id="af_s8_q9_1"
                />
                <label htmlFor="af_s8_q9_1">Gross</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s8_q9"
                  defaultValue="net"
                  id="af_s8_q9_2"
                />
                <label htmlFor="af_s8_q9_2">Net</label>
              </div>
            </div>
          </div>
          <div className="cols-3">
            <label>Account</label>
            <div className="input">
              <div className="check">
                <input
                  name="af_s8_q10"
                  type="checkbox"
                  defaultValue="all"
                  id="af_s8_q10_1"
                />
                <label htmlFor="af_s8_q10_1">All</label>
              </div>
              <div className="check">
                <input
                  name="af_s8_q10"
                  type="checkbox"
                  defaultValue="deposity"
                  id="af_s8_q10_2"
                />
                <label htmlFor="af_s8_q10_2">Deposit</label>
              </div>
              <div className="check">
                <input
                  name="af_s8_q10"
                  type="checkbox"
                  defaultValue="billing"
                  id="af_s8_q10_3"
                />
                <label htmlFor="af_s8_q10_3">Billing</label>
              </div>
              <div className="check">
                <input
                  name="af_s8_q10"
                  type="checkbox"
                  defaultValue="chargeback"
                  id="af_s8_q10_4"
                />
                <label htmlFor="af_s8_q10_4">Chargeback</label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-3-3">
            <label>*Account Name</label>
            <div className="input">
              <input
                type="text"
                id="af_s8_q11"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>*Account Number</label>
            <div className="input">
              <input
                type="text"
                id="af_s8_q12"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>*Sort Code</label>
            <div className="input">
              <input
                type="text"
                id="af_s8_q13"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-3-3">
            <label>*IBAN</label>
            <div className="input">
              <input
                type="text"
                id="af_s8_q14"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>*SWIFT / BIC Code</label>
            <div className="input">
              <input
                type="text"
                id="af_s8_q15"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>Bank Name</label>
            <div className="input">
              <input
                type="text"
                id="af_s8_q16"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Statement Information</h2>
        <div className="row">
          <div className="cols-8">
            <div className="row">
              <div className="cols-2">
                <div className="input">
                  <div className="check">
                    <input
                      name="af_s9_q1"
                      type="checkbox"
                      defaultValue="billing"
                      id="af_s9_q1_1"
                    />
                    <label htmlFor="af_s9_q1_1">Billing Statement</label>
                  </div>
                </div>
              </div>
              <div className="cols-2">
                <div className="input">
                  <div className="check">
                    <input
                      name="af_s9_q2"
                      type="checkbox"
                      defaultValue="billing"
                      id="af_s9_q2_1"
                    />
                    <label htmlFor="af_s9_q2_1">Transaction Detail</label>
                  </div>
                </div>
              </div>
              <div className="cols-3">
                <div className="input">
                  <div className="check">
                    <input
                      name="af_s9_q3"
                      type="checkbox"
                      defaultValue="billing"
                      id="af_s9_q3_1"
                    />
                    <label htmlFor="af_s9_q3_1">
                      Hardcopy (see Schedule of Fees for charge)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="cols-2">
                <div className="input">
                  <div className="check">
                    <input
                      name="af_s9_q4"
                      type="checkbox"
                      defaultValue="billing"
                      id="af_s9_q4_1"
                    />
                    <label htmlFor="af_s9_q4_1">Funding Statement (EDI)</label>
                  </div>
                </div>
              </div>
              <div className="cols-2">
                <div className="input">
                  <div className="check">
                    <input
                      name="af_s9_q5"
                      type="checkbox"
                      defaultValue="billing"
                      id="af_s9_q5_1"
                    />
                    <label htmlFor="af_s9_q5_1">Batch Summary</label>
                  </div>
                </div>
              </div>
              <div className="cols-3">
                <div className="input">
                  <div className="check">
                    <input
                      name="af_s9_q6"
                      type="checkbox"
                      defaultValue="billing"
                      id="af_s9_q6_1"
                    />
                    <label htmlFor="af_s9_q6_1">
                      Online via Reporting Tool
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cols-2 text-center label-center">
            <label>Hold Statement</label>
            <div className="input">
              <div className="check">
                <input
                  name="af_s9_q7"
                  type="checkbox"
                  defaultValue="hold-statement"
                  id="af_s9_q7_1"
                />
                <label htmlFor="af_s9_q7_1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Reporting Tool</h2>
        <div className="row">
          <div className="cols-5">
            <label>
              Full name of selected registered user(s) of the Reporting Tool
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s10_q1"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <label>Preferred Username(s) (if any)</label>
            <div className="input">
              <input
                type="text"
                id="af_s10_q2"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cols-5">
            <label>
              Email address and telephone number of registered user(s)
            </label>
            <div className="input">
              <input
                type="text"
                id="af_s10_q3"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-5">
            <div className="input">
              <div className="check">
                <input
                  name="af_s10_q4"
                  type="checkbox"
                  defaultValue="view-online"
                  id="af_s10_q4_1"
                />
                <label htmlFor="af_s10_q4_1">
                  Please tick this box if you would like to view your
                  Chargebacks online via the Reporting Tool
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Terminal Rental</h2>
        <div className="row">
          <div className="cols-10">
            <label>Will you be renting terminals from Elavon?</label>
            <div className="input">
              <div className="radio">
                <input
                  type="radio"
                  name="af_s11_q1"
                  defaultValue="yes"
                  id="af_s11_q1_1"
                />
                <label htmlFor="af_s11_q1_1">Yes</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  name="af_s11_q1"
                  defaultValue="no"
                  id="af_s11_q1_2"
                />
                <label htmlFor="af_s11_q1_2">No</label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-break">
        <h2>Third Party Products and Services (Third Party Vendors)</h2>
        <div className="row">
          <div className="cols-3-3">
            <label>Terminal Provider</label>
            <div className="input">
              <input
                type="text"
                id="af_s12_q1"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>Terminal Type</label>
            <div className="input">
              <input
                type="text"
                id="af_s12_q2"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>IPOS Provider</label>
            <div className="input">
              <input
                type="text"
                id="af_s12_q3"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Privacy Notice</h2>
        <div className="row no-border page-break">
          <div className="cols-10 text-justify">
            <p>
              References to “We”, “Us” or “Our” are references to Elavon
              Financial Services DAC, incorporated in Ireland (Registered No.
              418442), having its registered office address at Building 8,
              Cherrywood Business Park, Loughlinstown, Co. Dublin, D18 W 319
              Ireland operating through its UK Branch at 2nd Floor, 70
              Gracechurch Street, London, EC3V 0HR.
            </p>
            <p>
              References to “You”, “you”, “Your” and “your” are defined in the
              UK Terms of Service (the “TOS”).
            </p>
            <p>
              By “Your Information” we mean the personal and financial
              information We obtain from you or from third parties (such as
              credit reference and fraud prevention agencies, joint account
              holders, Your employees or officers of Your business, other
              organisations who introduced Us, or act on your or Our behalf)
              which, where you are a sole trader or partnership, may relate to
              you and/or your business partners and guarantors and where you are
              a company or limited liability partnership, may relate to your
              officers, shareholders, partners, owners and guarantors.
            </p>
            <p>
              <strong>HOW DO WE USE YOUR INFORMATION?</strong>
            </p>
            <p>We use Your Information for the following purposes:</p>
            <table className="disclaimer-table">
              <tbody>
                <tr>
                  <th>
                    <strong>Purpose:</strong>
                  </th>
                  <th>
                    <strong>Legal basis of processing:</strong>
                  </th>
                </tr>
                <tr>
                  <td>
                    Where it is necessary to use Your Information in order to
                    provide our services to you.
                  </td>
                  <td>Contractual necessity</td>
                </tr>
                <tr>
                  <td>
                    To conduct anti-money laundering checks and fulfil our
                    regulatory obligations in connection with the services.
                  </td>
                  <td>Legal obligation</td>
                </tr>
                <tr>
                  <td>
                    To comply with legal requirements and Card Scheme Rules (as
                    such term is defined in the TOS)
                  </td>
                  <td>
                    Legal obligation, contractual necessity and legitimate
                    interests
                  </td>
                </tr>
                <tr>
                  <td>
                    To carry out credit checks and other enquiries to help us
                    make decisions about whether to enter into a contract with
                    you and to evaluate our ongoing relationship with you
                  </td>
                  <td>Legitimate interests</td>
                </tr>
                <tr>
                  <td>
                    For the prevention, investigation and detection of crime and
                    fraud
                  </td>
                  <td>Legitimate interests</td>
                </tr>
                <tr>
                  <td>To analyse and improve the running of our business</td>
                  <td>Legitimate interests</td>
                </tr>
                <tr>
                  <td>
                    To market and sell to you products and services offered by
                    Elavon, its Affiliates or third parties, whether relating to
                    Merchant Services or otherwise
                  </td>
                  <td>Legitimate interests</td>
                </tr>
                <tr>
                  <td>
                    For analytical purposes and we may share this aggregated
                    information with others from time to time. This regards use
                    of records of the transactions in combination with the
                    records of our customers in an aggregated form
                  </td>
                  <td>Legitimate interests</td>
                </tr>
                <tr>
                  <td>
                    For credit-scoring to assess this Application and to verify
                    your identity and that of the Other Individuals
                  </td>
                  <td>Contractual necessity</td>
                </tr>
              </tbody>
            </table>{" "}
            <br />
            <p>
              <strong>
                Please note that where we are using Your Information and the
                legal basis of our processing activities is identified as
                ‘legitimate interests’ you have a right to object to our use of
                Your Information. Please refer to Your rights section for
                further details.
              </strong>
            </p>
            <p>
              <strong>HOW DO WE SHARE YOUR INFORMATION?</strong>
            </p>
            <p>We may at any time give Your Information to:</p>
            <p>
              - Any organisation who introduced Us or who acts on Your behalf to
              allow them to provide services to you and/or to allow them to
              conduct, monitor and analyse their business;
              <br /> - Service providers, advisors and agents providing services
              to Us (including our group companies and Affiliates);
              <br /> - Card Schemes covered by the TOS;
              <br /> - VMAS™ and MATCH™ in order to report Customer’s business
              name and the name of Customer’s principals to the VMAS™ and MATCH™
              listings pursuant to the Card Scheme Rules.
              <br /> - Anyone who has a legal right to require disclosure of
              your information or to whom we are permitted by law to disclose
              your information (this may include third parties such as bailiffs,
              receivers, the police and the courts);
              <br /> - Regulatory bodies where required for regulatory purposes;
              <br /> - Credit reference agencies and fraud prevention agencies
              (for more information on these disclosures please see below);
              <br /> - Our professional advisors in order to obtain advice in
              relation to our relationship with you;
              <br /> - Any person to whom we assign or sub-contract any of the
              rights or obligations under our agreement with you;
              <br /> - Third party investors or potential investors in Elavon or
              its Affiliates or otherwise in the event of the sale, disposal,
              merger or transfer of the business of Elavon or its Affiliates, or
              obtaining financing for Elavon’s business, or negotiations in
              connection with that purpose.
            </p>
            <p>
              In addition, We may at any time give Your Information to any
              organisation that requires disclosure of Your Information for
              regulatory purposes or as a matter of law whether or not their
              power is derived from an Act/Acts of Government.
            </p>
            <p>
              You further acknowledge and agree that any information provided in
              connection with this Application and all other relevant
              information, may be supplied by Us to our Affiliates for all of
              the purposes listed above.
            </p>
            <p>
              <strong>OVERSEAS TRANSFERS OF YOUR INFORMATION</strong>
            </p>
            <p>
              We may transfer Your Information to countries outside the UK and
              the European Economic Area where data protection laws may not be
              as strict as they are in the UK. If we do so we will put in place
              appropriate controls to ensure that Your Information is protected
              adequately, in particular through standard data protection model
              clauses adopted by the European Commission. For more information
              about these controls please contact us at
              EUDataProtectionOffice@elavon.com.
            </p>
            <p>
              <strong>FOR HOW LONG DO WE KEEP YOUR INFORMATION?</strong>
            </p>
            <p>
              We will keep Your Information for as long as we have a contract
              with you and for as long as we need Your Information for
              regulatory or evidential purposes after expiry of termination of
              your contract.
            </p>
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 0 }}>
        <div className="row no-border page-break">
          <div className="cols-10">
            <p>
              <strong>YOUR RIGHTS</strong>
            </p>
            <p>
              Individuals have the following rights under data protection
              legislation:
            </p>
            <p>
              - a right to ask for a copy of their personal data
              <br /> - a right to ask Us to delete or correct any information We
              hold about them that is inaccurate;
              <br /> - a right to request erasure of information in certain
              circumstances;
              <br /> - a right to data portability (this is a right to ask for
              Your Information in a commonly used electronic format where
              information has been provided by the individual and the legal
              basis for processing that information is consent or contractual
              necessity);
              <br /> - a right to restrict processing and a right to object to
              processing activities in certain circumstances;
              <br /> - a right to stop Your Information from being used for
              direct marketing purposes; and
              <br /> - a right to lodge a complaint with the Data Protection
              Commissioner (or other supervisory authority in the European
              Union) if You believe that Your Information has not been processed
              in accordance with the requirements of the data protection
              legislation.
              <br />
            </p>
            <p>
              Where any processing is based on consent you have a right to
              withdraw consent at any time, without affecting the lawfulness of
              processing based on consent before its withdrawal.
            </p>
            <p>
              If you would like to exercise any of these rights, please contact
              us at EUDataProtectionOffice@elavon.com.
            </p>
            <p>
              <strong>PROVISION OF INFORMATION ABOUT OTHER PEOPLE</strong>
            </p>
            <p>
              If you are providing personal information about other individuals
              in this Application, you must explain to those individuals whose
              personal details you have disclosed (“Other Individuals”), the
              categories of personal information that is being disclosed and all
              uses and processing of their personal data as detailed in this
              Application. This explanation must be provided to Other
              Individuals before you submit the Application to us.
            </p>
            <p>
              <strong>CREDIT REFERENCE AND FRAUD PREVENTION AGENCIES</strong>
            </p>
            <p>
              IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING AND MAINTAINING
              OF A MERCHANT SERVICES ACCOUNT. To ensure compliance with current
              legal and regulatory requirements aimed at preventing financial
              crime, money laundering and terrorist financing and to enable Us
              to proceed with your Application, We are required to obtain,
              verify and record information that identifies each person who
              opens up a merchant services account. We shall search your records
              and those of the Other Individuals at credit reference agencies
              who shall supply Us with information as well as information from
              the Electoral Register for the purpose of verifying your identity
              and that of the Other Individuals. Alternatively, We may ask you
              to provide physical forms of identification. Prior to our
              acceptance of this Application and from time to time thereafter,
              we may investigate the individual and business history and
              background of the Customer, each such representative and any other
              officers, partners, proprietors and/or owners of the Customer, and
              obtain credit reports or other background investigation reports on
              each of them that We consider necessary to review the acceptance
              and continuation of this Application.
            </p>
            <p>
              Credit reporting agencies and other relevant agencies used by us
              will compile information to answer those credit inquiries and
              supply Us with such information as well as information from the
              Electoral Register for the purpose of verifying your identity and
              that of the Other Individuals. Credit reference agencies will
              record any credit searches on their file whether or not this
              Application proceeds.
            </p>
            <p>
              It is important that you give Us accurate details. We shall check
              your details and those of the Other Individuals with crime
              prevention agencies and if you give Us false or inaccurate
              information and We suspect fraud, We shall record this. We may
              disclose Your details and details of how you conduct your business
              and account to such agencies. This information may be used by
              other credit grantors for making decisions about you or people
              with whom you are financially associated. The information may also
              be used for prevention of financial crime and money laundering.
            </p>
            <p>
              If upon review of the information submitted in Your Application
              (which may or may not include all of the checks specified above)
              it appears that We require further information from You, We shall
              request for this from You. Please note that unless and until we
              receive this additional information we cannot proceed with your
              Application. Please note that any such checks and inquiries may
              occur after opening of Your merchant services account, as they may
              be desirable or necessary to evaluate the continuance of the
              Agreement.
            </p>
            <p>
              If We are satisfied with the credit checks and other enquiries,
              this Application, the TOS and the Operating Guide, each updated by
              Us from time to time, will form your Agreement with Us.
            </p>
            <p>
              <strong>IMPORTANT PRINCIPLES AND OBLIGATIONS</strong>
            </p>
            <p>
              The Customer must obtain an Authorisation Code via an electronic
              terminal or similar device before completing any Transaction. The
              Customer understands that an AUTHORISATION CODE IS NOT A GUARANTEE
              OF ACCEPTANCE OR PAYMENT OF A TRANSACTION. RECEIPT OF AN
              AUTHORISATION CODE DOES NOT MEAN THAT THE CUSTOMER WILL NOT
              RECEIVE A CHARGEBACK FOR THAT TRANSACTION.
            </p>
            <p>
              The Customer further understands and acknowledges that the
              acceptance of Card Not Present Transactions is done entirely at
              their/its own risk. All Customers must comply with the
              requirements of the Payment Card Industry Data Security Standards
              (“PCI DSS”). We require all Level 3 and Level 4 Merchants
              (determined by Transaction volume) to validate PCI DSS compliance
              on an annual basis with initial validation to occur no later than
              ninety (90) days from when the Application has been accepted by
              Us. The Customer will be charged the PCI Charges further described
              in the Schedule of Fees. Further, if you are new to card payment
              processing, you must also comply with the requirements of the
              Payment Card Industry Payment Application Data Security Standard
              (“PCI PA DSS”). You must use a value added re-seller (“VAR”) whose
              payment application software (the software used to process the
              card payment transactions in a secure manner) is compliant with
              the PCI PA DSS.
            </p>
            <p>
              <strong>
                It is very important that you read this Application, the TOS and
                the Operating Guide, before you submit this Application.
              </strong>
            </p>
            <p>
              <strong>CUSTOMER DECLARATION</strong>
            </p>
            <p>
              By submitting this Application, the Customer and its
              representative(s) warrant and represent to Us that (i) all
              information provided in this Application is true, complete and
              accurate, properly reflects the business, financial condition and
              principal partners, owners or officers of the Customer; and (ii)
              the person submitting this Application is duly authorised to and
              has the power (corporate or otherwise) to bind the Customer to all
              provisions of this Application and the TOS. Transmission of a
              Transaction Receipt for a Transaction to Elavon, shall be the
              Customer’s acceptance of and agreement to the TOS.
            </p>
            <p>
              The submission by a representative of the Customer of this
              Application, or the transmission of a Transaction Receipt or other
              evidence of a Transaction to Us, shall be the Customer’s
              acceptance of and agreement to the terms and conditions contained
              in the Agreement, comprising, this Application, the TOS and the
              Operating Guide. The Customer agrees to comply with the
              Application, the TOS, the Operating Guide and all applicable laws,
              rules and regulations including the rules and regulations of the
              Card Schemes, and understands that failure to comply may result in
              termination of processing services. Words and phrases not
              specifically defined in this Application shall have the same
              meaning as set out in the TOS.
            </p>
            <p>
              <strong>
                AUTHORISATION TO USE PERSONAL DATA FOR PAYMENT SERVICE PURPOSES
              </strong>
            </p>
            <p>
              In order to provide the Merchant Services to You we need to
              access, retain and process personal data. You hereby authorise us
              to use personal data to enable us to provide the Merchant
              Services.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>*Signatures</h2>
        <div className="row no-border">
          <div className="cols-10 text-justify">
            <p>
              This Application (including the Privacy Notice as well as any
              Continuation Pages), the Schedule of Fees, the TOS and the
              Operating Guide together constitute the Agreement to which this
              Application applies.
            </p>
            <p>
              By submitting this Application, I confirm that I have read and
              understood the Privacy Notice.
            </p>
          </div>
        </div>
        <div className="row no-border">
          <p>
            <strong>KEEPING YOU INFORMED</strong>
          </p>
          <p>
            We may tell you about products or services or invite you to take
            part in offers of Ours and Our business partners that We think may
            benefit you. We may do this by post, by telephone (including by way
            of automatic dialing), by fax or e-mail.
          </p>
        </div>
        <div className="row no-border">
          <div className="cols-10">
            <div className="input">
              <div className="check">
                <input
                  name="af_s14_q1"
                  type="checkbox"
                  defaultValue="no"
                  id="af_s14_q1_1"
                />
                <label htmlFor="af_s14_q1_1">
                  Tick this box if you do not wish to receive this information,
                  but remember this shall preclude you from receiving any of our
                  special offers or promotions.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row no-border">
          <p>
            <strong>
              By submitting this Application, You understand that provided You
              meet Elavon’s criteria for accepting Customers, a binding
              agreement is entered into between You and Elavon. If You do not
              meet these criteria, Elavon will decline the Application. Elavon
              retains the right to decline the Application without further
              explanation.
            </strong>
          </p>
        </div>
        <div className="row no-border">
          <div className="cols-3-3 signature">
            {" "}
            <label>Signature</label>
            <div id="af_s14_q4">
              {" "}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAyCAYAAADm1uYqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAVdEVYdENyZWF0aW9uIFRpbWUAOS8xMS8xNWBa7IIAAAWcSURBVHic7ZzdbRtXEEaPgryLHYSuQHIFXgPzbroCryswXYFXFViuQFQFod8HEFVBqApCVRCyAuVhZrVXjEzZlilqw+8ABLE/996RgD2Ymb3gwc3NDUII0Qd+23UAQgjxvUhYQojeIGEJIXqDhCWE6A0SlhCiN0hYQojeIGEJIXrD75suHhwcPFUc4ifRPjqxTyjDEkL0BglLCNEbJCwhRG+QsIQQvUHCEkL0BglLCNEbJCwhRG+QsIQQvUHCEkL0ho073beBmQ2B4/wMgCEwB5bufvrU8Qgh+sOTCMvMBkCdn6N7bnmT3xKWEOKbbF1YZjYGGuDwgVsvtx3Lz5CyHQNTd5/vOh4h9pmtCsvMGuBTcWoFTIkScE6UhWNgwjPMrlJWM6JsnewyFiHE9jOsOr9XdFnKEu6UicftuRIzOwUqdz/ecoz/wcyOM7aKKGHb+McbxlTuPivGD9rjb9w/yjUGwMTdJ78idiH+z2xbWH8QD/uxuy/KCymp+r5BZlYBH4DrxwZgZsP1tdvzwIiQ0sLdx8X5GXdL2EMiM8TM6oz7VjJmNgHeAQcpoj+BazNbEsK7dvdh3jvIuY6JrO0DsEQZnBAPsrVtDflgQj7sZtakiL6HOXBCyKScc2hmEzNbmtn0njWHmd20x2NgnpK5MwfwN/CZaPhXRbx1rg8hzEvgrbvPssQ9I2QzN7OBmc0JWZ3nHJMc+wfdC4ZBMf8sx1dEdrUienxCiAc42PQDcI/9Ab/MNsbAq7VLV4QUJmXZlA91Q2QdL8sm91o/7JJ48HH3Jq/XhEyuCSFMi3U/uvtp3nNKSPQ65xgBh+5++8cWa93GkLK9IARTAYscfwRcunuVsvyrmPuY6H9V7j4v5j2h29oxekwzXz/gJ/aJrZaE7j6lK6UGdA9pm2G8M7Nzd69zSCuZFSEEcuyEyGKuCQEuCCEsgSbLuLZpX9M1ygG+FrI6K+aY0pV+X4q1akIq52siabhfVitCei3Xec+QENz7lNWQrgdWA427j3LNiiibn92LByGeE0+2cTR7VrP8AJ2I8ntIJ6uqaM43hKy+uPs4xbcgRNPkVE0ef6QT1yK/65TFGZHZVXl+RgjnquhfjYkykWKeNs5XwPu1sRDiWRbbNyp3X5jZDFi5+yQzr2nGSNvPKv6+tpcmhNjAVkvCTaztz3pJPNADsnzKeyqiJzRz93ptmwFEptYQQrvM8eSYz8BbQlwTQjAv8nq7taKdf0IIaplzHrn7QYpumnO8IYR3lN/tua+57gCoi9jbf+xVxtuudZSxzglRLSkE/aOoJBT7xFaElaKpgXGRKVV0D+6I7i1c2/+5Icq3UYqpFUhNt2+rJgRScXd/1FnOtaLrX7ViGeZcn4DzXPs0x18UYZ+4e7MmmiOipJtkc72ds+Juj+yKNemY2YJovF8Sfapl8QaxjfW07cH9LBKW2Cd++VvCLH8uiKznHzO7SQlcEGJ5RyEr7vZ/3qQYFgBZqrViqIlsakaIoCKEOKHb/jDKLQzDPB7mPQ1RzlVEFtQUa66It4BNcQyRMb0t9kdVRMbWiuk04z9x9/v2kh0Dr939VmTZ03uR5wePlZUQ+8Yvz7Byw+eHDbesCOmcrr0hLMedFG//BoQs5kTG1QptVGRvdzZqZiZT5RqLDbFWwHwtMxoCw02bPp8TyrDEPrENYQ3pdolDyOX288Du74o1gRTX2lLvTtN635GwxD6xs6b7j5CymhGl5Ou+ZD9PgYQl9oln/wN+xe7xQ6JUnO00ICHEznj2wiI2Wx4RGzmbHccihNghfRDWgMis6l0HIoTYLb3oYYlvox6W2Cf6kGEJIQQgYQkheoSEJYToDRKWEKI3SFhCiN6w8S2hEEI8J5RhCSF6g4QlhOgNEpYQojdIWEKI3iBhCSF6g4QlhOgN/wJ32lO8uxiArAAAAABJRU5ErkJggg=="
                alt="Signature"
              />{" "}
            </div>
          </div>
          <div className="cols-3-3">
            <label>Full Name &amp; Title</label>
            <div className="input">
              <input
                type="text"
                id="af_s14_q5"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
          <div className="cols-3-3">
            <label>Date (DD/MM/YYYY)</label>
            <div className="input">
              <input
                type="text"
                id="af_s14_q6"
                defaultValue=""
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div className="row blue no-border signature">
          <div className="cols-10">
            <div className="row no-border">
              <p>INTERNAL USE ONLY</p>
              <p>
                I certify to the best of my knowledge and belief that the
                information provided in this Application was provided by the
                Customer and is true, complete and accurate in all respects. I
                further certify that the signatures were provided by the
                Customer‘s owner(s) or officer(s), as appropriate
              </p>
            </div>
            <div className="row no-border">
              <div className="cols-3-3 signature">
                {" "}
                <label>Signature</label>
                <div id="af_s14_q7">
                  {" "}
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAyCAYAAADm1uYqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAVdEVYdENyZWF0aW9uIFRpbWUAOS8xMS8xNWBa7IIAAAWcSURBVHic7ZzdbRtXEEaPgryLHYSuQHIFXgPzbroCryswXYFXFViuQFQFod8HEFVBqApCVRCyAuVhZrVXjEzZlilqw+8ABLE/996RgD2Ymb3gwc3NDUII0Qd+23UAQgjxvUhYQojeIGEJIXqDhCWE6A0SlhCiN0hYQojeIGEJIXrD75suHhwcPFUc4ifRPjqxTyjDEkL0BglLCNEbJCwhRG+QsIQQvUHCEkL0BglLCNEbJCwhRG+QsIQQvUHCEkL0ho073beBmQ2B4/wMgCEwB5bufvrU8Qgh+sOTCMvMBkCdn6N7bnmT3xKWEOKbbF1YZjYGGuDwgVsvtx3Lz5CyHQNTd5/vOh4h9pmtCsvMGuBTcWoFTIkScE6UhWNgwjPMrlJWM6JsnewyFiHE9jOsOr9XdFnKEu6UicftuRIzOwUqdz/ecoz/wcyOM7aKKGHb+McbxlTuPivGD9rjb9w/yjUGwMTdJ78idiH+z2xbWH8QD/uxuy/KCymp+r5BZlYBH4DrxwZgZsP1tdvzwIiQ0sLdx8X5GXdL2EMiM8TM6oz7VjJmNgHeAQcpoj+BazNbEsK7dvdh3jvIuY6JrO0DsEQZnBAPsrVtDflgQj7sZtakiL6HOXBCyKScc2hmEzNbmtn0njWHmd20x2NgnpK5MwfwN/CZaPhXRbx1rg8hzEvgrbvPssQ9I2QzN7OBmc0JWZ3nHJMc+wfdC4ZBMf8sx1dEdrUienxCiAc42PQDcI/9Ab/MNsbAq7VLV4QUJmXZlA91Q2QdL8sm91o/7JJ48HH3Jq/XhEyuCSFMi3U/uvtp3nNKSPQ65xgBh+5++8cWa93GkLK9IARTAYscfwRcunuVsvyrmPuY6H9V7j4v5j2h29oxekwzXz/gJ/aJrZaE7j6lK6UGdA9pm2G8M7Nzd69zSCuZFSEEcuyEyGKuCQEuCCEsgSbLuLZpX9M1ygG+FrI6K+aY0pV+X4q1akIq52siabhfVitCei3Xec+QENz7lNWQrgdWA427j3LNiiibn92LByGeE0+2cTR7VrP8AJ2I8ntIJ6uqaM43hKy+uPs4xbcgRNPkVE0ef6QT1yK/65TFGZHZVXl+RgjnquhfjYkykWKeNs5XwPu1sRDiWRbbNyp3X5jZDFi5+yQzr2nGSNvPKv6+tpcmhNjAVkvCTaztz3pJPNADsnzKeyqiJzRz93ptmwFEptYQQrvM8eSYz8BbQlwTQjAv8nq7taKdf0IIaplzHrn7QYpumnO8IYR3lN/tua+57gCoi9jbf+xVxtuudZSxzglRLSkE/aOoJBT7xFaElaKpgXGRKVV0D+6I7i1c2/+5Icq3UYqpFUhNt2+rJgRScXd/1FnOtaLrX7ViGeZcn4DzXPs0x18UYZ+4e7MmmiOipJtkc72ds+Juj+yKNemY2YJovF8Sfapl8QaxjfW07cH9LBKW2Cd++VvCLH8uiKznHzO7SQlcEGJ5RyEr7vZ/3qQYFgBZqrViqIlsakaIoCKEOKHb/jDKLQzDPB7mPQ1RzlVEFtQUa66It4BNcQyRMb0t9kdVRMbWiuk04z9x9/v2kh0Dr939VmTZ03uR5wePlZUQ+8Yvz7Byw+eHDbesCOmcrr0hLMedFG//BoQs5kTG1QptVGRvdzZqZiZT5RqLDbFWwHwtMxoCw02bPp8TyrDEPrENYQ3pdolDyOX288Du74o1gRTX2lLvTtN635GwxD6xs6b7j5CymhGl5Ou+ZD9PgYQl9oln/wN+xe7xQ6JUnO00ICHEznj2wiI2Wx4RGzmbHccihNghfRDWgMis6l0HIoTYLb3oYYlvox6W2Cf6kGEJIQQgYQkheoSEJYToDRKWEKI3SFhCiN6w8S2hEEI8J5RhCSF6g4QlhOgNEpYQojdIWEKI3iBhCSF6g4QlhOgN/wJ32lO8uxiArAAAAABJRU5ErkJggg=="
                    alt="Signature"
                  />{" "}
                </div>
              </div>
              <div className="cols-3-3">
                <label>Full Name &amp; Title</label>
                <div className="input">
                  <input
                    type="text"
                    id="af_s14_q8"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
              </div>
              <div className="cols-3-3">
                <label>Date (DD/MM/YYYY)</label>
                <div className="input">
                  <input
                    type="text"
                    id="af_s14_q9"
                    defaultValue=""
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer">
        <p>
          Elavon Financial Services DAC Registered in Ireland with Companies
          Registration Office. The liability of the member is limited. United
          Kingdom branch registered in England and Wales under the number
          BR022122. Elavon Financial Services DAC, trading as Elavon Merchant
          Services is authorised and regulated by the Central Bank of Ireland.
          Authorised by the Prudential Regulation Authority and with deemed
          variation of permission. Subject to regulation by the Financial
          Conduct Authority and limited regulation by the Prudential Regulation
          Authority. Details of the Temporary Permissions Regime, which allows
          EEA-based firms to operate in the UK for a limited period while
          seeking full authorisation, are available on the Financial Conduct
          Authority's website.
        </p>{" "}
        <img src="https://sayyebo.siteftp.co.uk/form/v11/logo.png" width={125} height="auto" alt="Elavon" />
      </div>
    </form>
  );
};

export default Pdf;
