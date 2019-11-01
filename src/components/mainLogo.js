import React from "react";

// import MainLogo from '../images/test.svg';
import MainLogo2 from "../images/mainLogo.svg";

class App extends React.Component {
  render() {
    return (
      <div className="mainLogo">
        <img src={MainLogo2} />
      </div>
    );
  }
}

export default App;
