import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import logo from '../logo.svg';


export class GetComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: '', load: true
    };
  }


  componentWillMount() {
    fetch('http://localhost:3000/api/products?access_token=xe0oLTi4YYRbkFIA4fHBpyK0MlHxfSyRV7Hy8DfgPAhQ0jdl5imfmmNGq5sQIg2M')
      .then((data) => data.json())
      .then((json) => {
        let table='';
        json.map((obj) =>
          table += `<tr><td>${obj.name}</td><td>${obj.qtd}</td><td>${obj.value}</td>
          <td><a href="delete/${obj.id}">Delete</a></td><td><a href="update/${obj.id}">Update</a></td></tr>`
        );
        this.setState({
          array: table, load: false
        })
      });
  }

  render() {
    if(this.state.load){
      return (
        <div class="progress">
            <div class="indeterminate"></div>
        </div>
              )
    }
    return (
      <div className="container">
        <table>
          <thead><tr><td>Nome</td><td>Quantidade</td><td>Valor</td></tr></thead>
          <tbody dangerouslySetInnerHTML={createMarkup(this.state.array)}>
            
          </tbody>
        </table>
      </div>
    );

  }
}
function createMarkup(htmlString) { return { __html: htmlString }; };
