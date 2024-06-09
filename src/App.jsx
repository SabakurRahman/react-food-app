function App() {
  let arrayItem = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <>
      <ul>
        {arrayItem.map((item, index) => {
          return (
            <li key={index} className="dd">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
