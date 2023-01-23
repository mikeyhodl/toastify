// import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';


function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <Button variant="success" onClick={notify}>
        Notify!
      </Button>{" "}
      <ToastContainer />
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>{" "}
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default App;
