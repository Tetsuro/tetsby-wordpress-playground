import React, { Component } from 'react';

export default class PostListing extends Component {
  render() {
    const { nodes } = this.props;

    const listing = nodes.map(node => {
      const { title, id } = node;
      const url = node.featured_media ? node.featured_media.source_url : '';

      return (
        <li key={id}>
          <img src={url} />
          <span
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </li>
      );
    });

    return <ul>{listing}</ul>;
  }
}
