import React, { Component } from 'react';

export default class PostListing extends Component {
  render() {
    const { nodes } = this.props;
    const listing = nodes.map(node => (
      <li
        dangerouslySetInnerHTML={{
          __html: node.title,
        }}
      />
    ));

    return <ul>{listing}</ul>;
  }
}
