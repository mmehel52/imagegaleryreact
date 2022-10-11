import Person from "./pages/Homepage";
import Pic from "./components/Picture";
import data from "./helper/data";
import "./styles/style.css";

function App() {
  return (
    <>
      <Person />
      <Pic data={data} />
    </>
  );
}

export default App;
