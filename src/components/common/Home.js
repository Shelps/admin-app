import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
          <div className="jumbotron">
            <h1>Admin app</h1>
            <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
          </div>  
        );
    }
}

export default Home;