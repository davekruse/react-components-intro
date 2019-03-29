import React, {Component} from 'react';

export default class Image extends Component {
  render() {
    let src = this.props.url;
    return(
      <div className="space-image">
        <img src={src} />
      </div>
      
    )
  }
}