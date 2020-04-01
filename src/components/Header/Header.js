import React from 'react';
import Body from '../Body/Body';
function Header() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="row header_">
            <div className="col-2  wrapper">
              <div className="content">
                <span>NT Game Studios</span>
              </div>
            </div>
            <div className="col-8">
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
            </div>
            <div className="col-1 logo_">
              <div className="logo">
                <img className="img-responsive" style={{ height: '50px' }} src="https://i.pinimg.com/originals/1c/91/cc/1c91cc7685a7b81c37194068762a66be.png" alt='' />
              </div>
            </div>
            <div className="col-1">
              <div className="search">
                <img className="img-responsive fa-search" src="../Icons/Search.png" alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Body></Body>
    </>
  );
}

export default React.memo(Header);