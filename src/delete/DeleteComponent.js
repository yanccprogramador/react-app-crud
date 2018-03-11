import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import logo from '../logo.svg';


export class DeleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };

    fetch('http://localhost:3000/api/products/' + this.props.match.params.id + '?access_token=xe0oLTi4YYRbkFIA4fHBpyK0MlHxfSyRV7Hy8DfgPAhQ0jdl5imfmmNGq5sQIg2M', { method: 'DELETE' })
      .then((data) => {

        if (data.status == 200)
          alert('Apagado');

        this.setState({ redirect: true });
      }
      );
  }


  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to='/' />;
    }

    return (
      <div class="progress">
          <div class="indeterminate"></div>
      </div>
            )

  }
}
function createMarkup(htmlString) { return { __html: htmlString }; };
