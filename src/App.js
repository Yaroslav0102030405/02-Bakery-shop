import React from 'react';
// import PaintingList from './components/paintings/PaintingList';
// import datapaintings from './datajson/datapaintings.json';
// import Panel from './components/panel/Panel';
import Container from './components/container/Container';
import Header from './pages/Home/Header/Header';

const App = () => {
  return (
    // реакт фрмагмент
    // передача динамических props // XML разметка
    <>
      {/* <Header /> */}

      <Header />
      <Container>
        {/* <Panel title="Свежие новости">
          <p>Главная</p>
        </Panel>
        <Panel>
          <p>Главная</p>
        </Panel> */}

        {/* <PaintingList datapaintings={datapaintings} /> */}
      </Container>
    </>
  );
};

export default App;
