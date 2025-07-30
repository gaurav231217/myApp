import React from 'react';

const Content = ({ theme }) => {
  return (
    <main className="content">
      <h2 className="title">This is title</h2>
      <p>This is paragraph</p>
      <button className="btn">Click Me</button>

      <div className="cards">
        {[1, 2, 3].map((item) => (
          <div className="card" key={item}>
            <h3>Card {item}</h3>
            <p>Some quick info about card {item}.</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Content;