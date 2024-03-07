import React from "react";
import PaintingList from "./components/PaintingList";
// import Panel from "./components/Panel";
import paintings from "./datajson/paintings.json";

const App = () => {
  return (
    <div>
      {/* <Panel title="Последние новости">
        <p>fdgdfgfhfghjhjkhjkjhkhjkh</p>
        <a href="">Читать...</a>
      </Panel>

      <Panel>
        <p>fdgdfgfhfghjhjkhjkjhkhjkh</p>
      </Panel>

      <h1>Главный компонент-контейнер приложения</h1> */}
      <PaintingList paintings={paintings} />
    </div>
  );
};

export default App;
