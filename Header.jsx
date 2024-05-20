import reactphoto from "../assets/react-core-concepts.png";
import "../components/Header.css";
const reactDescriptions = ["Fundamental", "Powerful", "Popular"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const descriptions = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactphoto} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
