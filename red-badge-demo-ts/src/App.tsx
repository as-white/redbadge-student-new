import React from "react";
import PropsExample from './components/propsexample'
import PropsMapping from './components/PropsMapping'

function App() {
  const visitedPlaces = ["Vegas", "Dallas", "Chicago", "Louisville", "Clearwater", "Pigeon Forge"]

  return <div>
    <PropsExample name="Tom" business="Myspace" />
    <PropsMapping visited={visitedPlaces}/>
    </div>;
}

export default App;
