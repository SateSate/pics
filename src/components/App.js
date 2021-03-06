import React from "react";
import SeachBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "25px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
