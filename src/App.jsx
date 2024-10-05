import "./App.css";
import Card from "./components/card/Card.jsx";
import { cards } from "./Data.js";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
    console.log("Button clicked!");
  };
  const newColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.querySelector(".Circle").style.backgroundColor = randomColor;
    console.log("Background color changed to: ", randomColor);
  };
  return (
    <div>
      <img src="/assets/Dog.jpg" alt="dog" />
      <div className="Circle" onMouseOver={newColor}></div>
      <button onClick={handleClick}>Click me</button>
      {cards.map((card) => (
        <Card
          key={card}
          name={`${card.name}`}
          age={card.age}
          bg={"#" + Math.floor(Math.random() * 16777215).toString(16)}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default App;
