import ReactDOM from "react-dom";

import ProfileBlock from "./components/profileBlock/profileBlock";

function App() {

  return (
    <ProfileBlock/>
  )
}

ReactDOM.render(<App />, document.querySelector(".root"));