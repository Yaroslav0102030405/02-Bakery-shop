import React from "react";
import PaintingList from "./components/paintings/PaintingList";
import datapaintings from "./datajson/datapaintings.json";
import Panel from "./components/panel/Panel";

const App = () => {
  return (
    // передача динамических props
    // XML разметка
    <div>
      <Panel title="Свежие новости">
        <p>Главная</p>
      </Panel>
      <Panel>
        <p>Главная</p>
      </Panel>

      <PaintingList datapaintings={datapaintings} />
    </div>
  );
};

export default App;
