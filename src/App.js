import React from 'react';

function App() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a href="#" className="navbar-brand">
                    <i className="fas fa-book-open"></i>&nbsp;Books App
                </a>
            </div>
        </div>
    </nav> 
  );
}

export default App;
