import React, { Component } from "react";
import axios from "axios";
import Contacts from "./components/contacts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ contacts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;