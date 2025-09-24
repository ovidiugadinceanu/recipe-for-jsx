import saladImage from "./images/perfection_salad.jpg";
import "./App.css";

function App() {
  const ingredients = [
    {
      name: "envelopes unflavored gelatine",
      quantity: "2",
    },
    {
      name: "cup sugar",
      quantity: "1/2",
    },
    {
      name: "teaspoon salt",
      quantity: "1",
    },
    {
      name: "can (12 oz) apple juice",
      quantity: "1",
    },
    {
      name: " cup lemon juice",
      quantity: "1/2",
    },
    {
      name: "tablespoons vinegar",
      quantity: "2",
    },
    {
      name: "cup shredded carrot",
      quantity: "1",
    },
    {
      name: "cup sliced celery",
      quantity: "1",
    },
    {
      name: "cup finely shredded cabbage",
      quantity: "1",
    },
    {
      name: "cup chopped green pepper",
      quantity: "1/2",
    },
    {
      name: "can (4 oz) chopped pimiento",
      quantity: "1",
    },
  ];
  console.log(ingredients);

  return (
    <div className="container">
      {" "}
      <h1 style={{ textAlign: "center" }}>Perfection Salad</h1>
      <img src={saladImage} alt="jelly-salad" />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item) => (
          <li className="item">
            <em>{item.quantity}</em> {item.name}
          </li>
        ))}
      </ul>
      <h2>Preparation</h2>
      <ol>
        <li>
          In small saucepan, combine <strong>gelatine, sugar, and salt</strong>;
          mix well.
        </li>
        <li>
          Add <strong>1 cup water</strong>.<br /> Heat over low heat, stirring
          constantly, until sugar and gelatine are dissolved. Remove from heat.
        </li>
        <li>
          Stir in{" "}
          <strong>
            apple juice, lemon juice, vinegar, and 1/4 cup cold water
          </strong>
          .<br /> Pour into medium bowl. Refrigerate 1 hour, or until mixture is
          consistency of unbeaten egg white.
        </li>
        <li>
          Add{" "}
          <strong>carrot, celery, cabbage, green pepper, and pimiento</strong>;
          stir until well combined.
        </li>
        <li>
          Turn into decorative, 1 1/2-quart mold. Refrigerate 4 hours,or until
          firm.
        </li>
        <li>
          To unmold: Run small spatula around edge of mold; invert onto serving
          plate.
          <br /> Place hot dishcloth over mold; shake gently to release. Repeat,
          if necessary.
          <br /> Lift off mold. refrigerate until ready to serve.
        </li>
      </ol>
    </div>
  );
}

export default App;
