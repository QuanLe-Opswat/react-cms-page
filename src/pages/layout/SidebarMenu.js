import React from 'react';
import classnames from 'classnames';
import { navigate } from 'gatsby';

import './SidebarMenu.scss';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
const SidebarMenu = ({ menu, page }) => {
  const items = menu.categories.map((category) => {
    return <div key={category.title} className='category'>
      <hr/>
      <h6>{category.title}</h6>
      <ul className='listItem'>
        {category.items.map((item) => (
          <li key={item.key} className={classnames({ selected: item.key === page }, 'menuItem')} onClick={() => onMoveClick(item.move)}>
            <i className={classnames('icon', item.icon)}/>
            {item.title}
          </li>))}
      </ul>
    </div>;
  });

  const onMoveClick = async (move) => {
    if (move) {
      await navigate(move);
    }
  };

  return <div className='sidebarMenu'>
    <h4>Menu Bar</h4>
    <div className='menuBar'>
      {items}
    </div>
  </div>;
};

export default SidebarMenu;