import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import logo from '../logo.svg';


export class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state.redirect = false;
  }


  render() {
    
    return (
      <div class="container">
        <form onSubmit={createProduct}>
          <input type="text" id="name" placeholder="Nome" />
          <input type="text" id="qtd" placeholder="Quantidade" />
          <input type="text" id="value" placeholder="Valor" />
          <button class="btn waves-effect waves-effect-blue green">Salvar</button>
        </form>
      </div>
    );


  }
}
function createProduct(e) {
  e.preventDefault();
  fetch('http://localhost:3000/api/products?access_token=xe0oLTi4YYRbkFIA4fHBpyK0MlHxfSyRV7Hy8DfgPAhQ0jdl5imfmmNGq5sQIg2M', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      name: document.getElementById('name').value,
      qtd: document.getElementById('qtd').value,
      value: document.getElementById('value').value
    })
  }).then((response) => {
    if (response.status == 200)
      alert('Inserido com sucesso')

  })
}
function createMarkup(htmlString) { return { __html: htmlString }; };
