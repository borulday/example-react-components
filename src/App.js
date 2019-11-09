import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from "./components/Button/Button";
import Link from "./components/Link/Link";
import List from "./components/List/List";
import DatePicker from "./components/DatePicker/DatePicker";

import Header from "./components/Header/Header";
import HeaderItem from "./components/HeaderItem/HeaderItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Header>
          <HeaderItem title="Terlik" />
        </Header>

        <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Connected Components
        </Link>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="warning">Warning</Button>
        <Button type="error" icon="cool">Error</Button>
        <List name="Mark" />
        
        <DatePicker title="Start Date" description="End Date" />
      </header>
    </div>
  );
}

export default App;
