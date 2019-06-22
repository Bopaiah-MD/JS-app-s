import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Welcome extends React.Component {
  state = {
    data: [],
    loading: false
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(res => {
        console.log("res", res);
        this.setState({
          data: res,
          loading: true
        });
      });
  }

  render() {
    let { loading, data } = this.state;

    if (!loading) {
      return <div>Loading.......</div>;
    } else {
      return (
        <div>
          <h1>Random users Name fetched</h1>
          <ul>
            {data.map(name => (
              <li key={name.id}>{name.username}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);
