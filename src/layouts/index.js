// import React from 'react';
import withRouter from 'umi/withRouter';
// import Header from './Header';
import api from '../common/api';


function Layout({ children, location }) {
  console.log(location);
  return (
    <div>
      {/* <Header location={location} /> */}
      <div>
        {children}
      </div>
    </div>
  );
}

export default withRouter(Layout);
