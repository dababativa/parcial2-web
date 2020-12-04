import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from './table.js';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import es from './locales/es';
import en from './locales/en';

function getBrowserLang(){
  console.log(typeof navigator.language || navigator.userLanguage)
  return navigator.language || navigator.userLanguage;
}

function getFile(){
  let language = getBrowserLang();
  if(language.includes('es')){
    return es;
  } else if(language.includes('en')){
    return en;
  }
}

function App() {
  return (
    <div className="App" locale={getBrowserLang()} messages={getFile()}>
   
        <IntlProvider>
          <ReactTable></ReactTable>
        </IntlProvider>
    </div>
  );
}

export default App;
