import React from 'react';
class Topheader extends React.Component {
render(){
   
    return(
        <div>
        <header className="header-area">
            <div className="navgition navgition-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg" style={{boxShadow: "none"}}>
                            <a className="navbar-brand" href="/">
                            <img src="assets/images/logo.svg" alt=""/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item ">
                                        <a className="page-scroll" href="#home">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#service">SERVICES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#pricing">PRICING</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#contact">CONTACT</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="/testimonial">TESTIMONIALS</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-social d-none d-sm-flex align-items-center">
                                <a className="btn btn-info" href="/add-testimonial">ADD TESTIMONIALS</a>
                            </div>
                        </nav> 
                        </div>
                    </div> 
                </div> 
            </div>
             
        </header>
        </div>
    );
}
}

export default Topheader;