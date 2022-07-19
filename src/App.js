import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

/*Added new Component and Learned PropTypes and Prop...*/
function App() {
  return (
    <>
    <Navbar title="Convert Text" aboutText = "About"/>
    <div className="container">
    <TextForm/>
      </div>
    
    </>
  );
}

export default App;
