import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const deleteAll = () => {
    if (people === data) {
      setPeople([]);
    } else setPeople(data);
  };
  const [undo, setUndo] = useState('clear all');
  const restoreAll = () => {
    if (undo === 'clear all') {
      setUndo('Restore all');
    } else setUndo('clear all');
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          onClick={() => {
            deleteAll();
            restoreAll();
          }}
        >
          {undo}
        </button>
      </section>
    </main>
  );
}

export default App;
