import React from 'react';

const Toolbar = (props) => {
  return (
    <ul className="toolbarList">
      <li
        className={ props.selected === '0' ? 'toolbarItem active' : "toolbarItem" }
        onClick={() => props.onSelectFilter('0')}
      >
        { props.filters[0] }
      </li>
      <li
        className={ props.selected === '1' ? 'toolbarItem active' : "toolbarItem" }
        onClick={() => props.onSelectFilter('1')}
      >
        { props.filters[1] }
      </li>
      <li
        className={ props.selected === '2' ? 'toolbarItem active' : "toolbarItem" }
        onClick={() => props.onSelectFilter('2')}
      >
        { props.filters[2] }
      </li>
      <li
        className={ props.selected === '3' ? 'toolbarItem active' : "toolbarItem" }
        onClick={() => props.onSelectFilter('3')}
      >
        { props.filters[3] }
      </li>
    </ul>
  );
};

export default Toolbar;
