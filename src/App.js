import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Employee from "./components/Employee";
import Directory from "./components/Directory";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Directory />
        <Route path="/employee/:name" component={Employee} />
      </div>
    </BrowserRouter>
  );
  // end return
}
// end App function

export default App;
