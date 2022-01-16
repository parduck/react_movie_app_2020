//import Potato from "./Potato";

//컴포넌트를 내부에 사용할 수도 있다.
function Potato() {
  return <h3>I hate potato</h3>;
}

function App() {
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <div style={style}>
      <h1>Hello</h1>
      <Potato />
    </div>
  );
}

export default App;
