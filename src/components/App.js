import React, { Component } from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Title text="Title"/>
        <Image url="/default.png" />
        <Description text="Description, description, description. " />
      </div>
    );
  }
}

export default App;
