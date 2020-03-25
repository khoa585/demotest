import React from 'react';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
function Header() {
    return (
        <div className="header">
  <div className="row header_">
    <div className="col-xl-2 col-lg-2 col-md-2 col-xs-2 .col-sm-2  wrapper">
      <div className="content">
        <span>NT Game Studios</span>
      </div>
    </div>
    <div className="col-xl-8 col-lg-8 col-md-8 col-xs-8 .col-sm-8">
      <div className="wrapper_">
        <div className="meta__group">
          <ul className="nav">
            <li className="nav-item">
              <span className="active">Home</span>
            </li>
            <li className="nav-item">
              <span>Product</span>
            </li>
            <li className="nav-item">
              <span>Join us</span>
            </li>
            <li className="nav-item">
              <span>Blog</span>
            </li>
            <li className="nav-item">
              <span>Contact us</span>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img className="img-responsive" style={{height: '50px'}} src="https://i.pinimg.com/originals/1c/91/cc/1c91cc7685a7b81c37194068762a66be.png" alt=''/>
        </div>
      </div>
    </div>
    <div className="col-xl-2 col-lg-2 col-md-2 col-xs-2 .col-sm-2">
      <div className="search">
        <SearchOutlinedIcon  className="fa-search"></SearchOutlinedIcon>
      </div>
    </div>
  </div>
</div>

    );
}

export default Header;
