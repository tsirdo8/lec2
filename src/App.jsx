import "./App.css";
import Card from "./components/card/Card.jsx";
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Card
        name={"nika"}
        age={15}
        description={
          "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,illum"
        }
      />

      <Card name={"saba"} age={16} bg={"green"} />
    </div>
  );
}

export default App;
