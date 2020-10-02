import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button, Jumbotron } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Jumbotron>
          <h1 className="App-title">
            <span role="img" aria-label="UmbrellaFire">☔🔥☔</span>
          </h1>
          <p className="App-description">
            Connecting Founders to PNW based investors.
          </p>
          <div>
            <Button
            color= "primary"
            size="lg"
            active
            class="btn btn-primary"
            href="https://airtable.com/shrFam7a6yzHCLXk2"
            target="_blank">
              Founders
            </Button>{' '}


            <Button
            color= "primary"
            size="lg"
            active
            class="btn btn-primary"
            href="https://airtable.com/shrrJDuLj2R9hINCt"
            target="_blank"
            rel="noopener noreferrer"
            >
              Investors
            </Button>
          </div>
        </Jumbotron>
      </header>
    </div>
  );
}

export default App;
