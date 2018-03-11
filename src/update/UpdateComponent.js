import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import logo from '../logo.svg';

var id;

export class UpdateComponent extends Component {
  constructor(props) {
    super(props);
    id = this.props.match.params.id;
    this.campos
    this.state = {
      id: this.props.match.params.id, redirect: false, loading: true, campos: { qtd: 0, value: 0, name: '' }
    };
  }


  componentWillMount() {
    fetch('http://localhost:3000/api/products/' + this.props.match.params.id + '?access_token=xe0oLTi4YYRbkFIA4fHBpyK0MlHxfSyRV7Hy8DfgPAhQ0jdl5imfmmNGq5sQIg2M')
      .then((data) => data.json())
      .then((json) => {
        this.setState({
          id: this.props.match.params.id, redirect: false, loading: false, campos: { qtd: json.qtd, value: json.value, name: json.name }
        })
      });
  }

onNameChange(value){
    this.setState({
         name: value
    });
}
onQtdChange(value){
  this.setState({
       qtd: value
  });
}
onValueChange(value){
  this.setState({
       value: value
  });
}
 updateProduct(e) {
  e.preventDefault();
  fetch('http://localhost:3000/api/products/' + id + '?access_token=xe0oLTi4YYRbkFIA4fHBpyK0MlHxfSyRV7Hy8DfgPAhQ0jdl5imfmmNGq5sQIg2M', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      name: document.getElementById('name').value,
      qtd: document.getElementById('qtd').value,
      value: document.getElementById('value').value
    })
  }).then((response) => {
    if (response.status == 200)
      alert('Atualizado com sucesso')

  })
} 
  
  render() {
    if (this.state.loading) {
      return (
        <div class="progress">
          <div class="indeterminate"></div>
        </div>
      )
    }
    return (
      <div class="container">
        <form onSubmit={this.updateProduct}>
          <input type="text" id="name"  placeholder="Nome" defaultValue={this.state.campos.name} />
          <input type="text" id="qtd" placeholder="Quantidade"  defaultValue={this.state.campos.qtd} />
          <input type="text" id="value"  placeholder="Valor"  defaultValue={this.state.campos.value} />
          <button class="btn waves-effect waves-effect-blue green">Atualizar</button>
        </form>
      </div>
    );

  }
}

function createMarkup(htmlString) { return { __html: htmlString }; };
