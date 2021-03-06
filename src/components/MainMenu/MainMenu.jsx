import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styles from './MainMenu.module.scss';

class MainMenu extends Component {
  render() {
    const { links } = this.props;

    const linksMarkup = links.map(link => (
      <Link to={link.url} key={link.wordpress_id}>
        {link.title}
      </Link>
    ));

    return <nav className={styles.MainMenu}>{linksMarkup}</nav>;
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        wordpressWpApiMenusMenusItems {
          items {
            title
            url
            wordpress_id
          }
        }
      }
    `}
    render={data => (
      <MainMenu links={data.wordpressWpApiMenusMenusItems.items} />
    )}
  />
);
