import React from 'react';
import PaintingList from './components/paintings/PaintingList';
import datapaintings from './datajson/datapaintings.json';
import Panel from './components/panel/Panel';
import Container from './components/container/Container';

const App = () => {
  return (
    // реакт фрмагмент
    // передача динамических props // XML разметка
    <>
      <Container>
        <Panel title="Свежие новости">
          <p>Главная</p>
        </Panel>
        <Panel>
          <p>Главная</p>
        </Panel>

        <PaintingList datapaintings={datapaintings} />
      </Container>
    </>
  );
};

export default App;
