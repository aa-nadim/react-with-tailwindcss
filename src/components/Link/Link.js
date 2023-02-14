import React from 'react';

const Link = (route) => {
  //console.log(route.route);
  return (
    <div>
      <li className='mr-12'>
        <a href={route.route.path}>{route.route.name}</a>
      </li>
    </div>
  );
};

export default Link;
