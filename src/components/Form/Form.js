import React from "react";
import "./Form.css";
function Form() {
  return (
    <section id="hero" className="clearfix">
      <div className="container d-flex h-100">
        <div className="d-flex justify-content-center align-self-center w-100">
          <form
            action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
            method="POST"
          >
            <input type="hidden" name="orgid" value="00D2w000004NWpe" />
            <input
              type="hidden"
              name="retURL"
              value="https://customer-support.karkranikhil.now.sh/submission"
            />
            <h2>Submit Your Query</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                maxLength="80"
                name="name"
                size="20"
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address:</label>
              <input
                id="email"
                maxLength="80"
                name="email"
                size="20"
                type="text"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="00N2w000005E6VM">Liner brand:</label>
              <select
                class="form-control"
                id="00N2w000005E6VM"
                name="00N2w000005E6VM"
                title="Liner brand"
              >
                <option value="Retail" selected>
                  Retail
                </option>
                <option value="Liquor">Liquor</option>
                <option value="Wholesale">Wholesale</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                id="subject"
                maxLength="80"
                name="subject"
                size="20"
                type="text"
                className="form-control"
                placeholder="Enter Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                placeholder="Enter Description"
              />
            </div>
            <input type="hidden" id="external" name="external" value="1" />
            <div className="text-center">
              <button type="submit" className="btn btn-get-started">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
