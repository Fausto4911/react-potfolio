import React from 'react';


function Header (props) {
  return (
    <div className="row">
      <div className="col-sm-4">{props.title}</div>
      <div className="col-sm-4">.col-sm-4</div>
      <div className="col-sm-4">.col-sm-4</div>
    </div>
  );
}


export default Header;
