import React, { Component, useContext } from "react";
import { observer } from "mobx-react-lite";
import AppStore from "./AppStore";

const Counter = observer(() => {
  const store = useContext(AppStore);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div>
        <strong>{store.count.value}</strong>
      </div>
      <button
        className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
        onClick={store.count.increment}
      >
        Increment
      </button>
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Counter />
        </main>
      </div>
    );
  }
}

export default App;
