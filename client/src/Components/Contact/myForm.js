// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";
import "./index.css";
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <React.Fragment>
        <section className="section-form">
          <span className="title-contact">CONTACT</span>
          <div className="container">
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/f/xzbkwylj"
              method="POST"
            >
              <div className="form-group">
                <label for="firstName">FirstName</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your FirstName..."
                  required
                />
              </div>

              <div className="form-group">
                <label for="lastName">LastName</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your LastName..."
                  required
                />
              </div>

              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email..."
                  required
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Write a Message..."
                  required
                ></textarea>
              </div>
              {status === "SUCCESS" ? (
                <div>
                  <button onclick="myFunction()" type="submit">
                    Envoyer
                  </button>
                  <script>
                    function myFunction() {alert("Your mail is sent, Thanks!")}
                  </script>
                </div>
              ) : (
                <button type="submit">Envoyer</button>
              )}
              {status === "ERROR" && (
                <script>
                  function myFunction() {alert("Ooops! There was an error!")}
                </script>
              )}
            </form>
          </div>
        </section>
      </React.Fragment>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
