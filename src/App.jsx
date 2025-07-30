import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';

const App = () => {
  const [theme, setTheme] = useState('theme1');

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Content theme={theme} />
    </div>
  );
};

export default App
