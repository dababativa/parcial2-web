import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { FormattedMessage } from "react-intl";



function ReactTable() {

    const [item, setItem] = useState([])

    let enData;
let data;



function getBrowserLang(){
    console.log(typeof navigator.language || navigator.userLanguage)
    return navigator.language || navigator.userLanguage;
  }

function makeData(){
    if(!navigator.onLine){
        data = window.localStorage.getItem("data");
        if(data==null){
            return <p>Necesita conectarse a internet... Intentelo de nuevo más tarde.</p>
        }
    } else {
        if(getBrowserLang().includes('es')){
            fetch(
                "https://gist.githubusercontent.com/josejbocanegra/c55d86de9e0dae79e3308d95e78f997f/raw/d9eb0701f6b495dac63bbf59adc4614a9eb5fbc8/series-es.json"
              ).then((response) => response.json()).then(data=> {
                data = data
                window.localStorage.setItem('data', data);
                console.log(data)
                const items = data.map((element, i) => (
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{element.name}</td>
                    <td>{element.channel}</td>
                    <td>{element.description}</td>
                  </tr>
                  
                ));
                setItem(items)
              });
        } else if(getBrowserLang().includes('en')){
            fetch(
                "https://gist.githubusercontent.com/josejbocanegra/5dc69cb7feb7945ef58b9c3d84be2635/raw/64146e99e4416da3a8be2e2da4156cb87b3f6fd0/series-en.json"
              ).then((response) => response.json()).then(data=> {
                data = data
                console.log(data)
                window.localStorage.setItem('data', data);
                const items = data.map((element, i) => (
                  <tr>
                    <th scope="row">{i+1}</th>
                    <td>{element.name}</td>
                    <td>{element.channel}</td>
                    <td>{element.description}</td>
                  </tr>
                ));
                setItem(items)
              });
        }
    }
}

useEffect(()=>{
    makeData();
})








  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Name"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Channel"/>
            </th>
            <th scope="col">
              <FormattedMessage id="Description"/>
            </th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
      <div></div>
    </div>
  );
}

export default ReactTable;
