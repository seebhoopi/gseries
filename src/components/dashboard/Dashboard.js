import React from 'react';

 import { Link } from 'react-router';
class Dashboard extends React.Component {

    

  render(){
  return (
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Patient Diagnostic Report</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/consultation1.jpg" width={263} height={191} /></p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                   <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Diagnostic Centers</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/diagnostic.jpg" width={263} height={191} />
                        </p>
                         <Link to={'/labtests'}>Book a Test</Link>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Home Remedy</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/Homeremedies.jpg" width={263} height={191} /></p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Specialist Availability</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        {/*<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>*/}
                        <p><img src="assets/img/consultation.jpg" />
                        </p>
                        <a href="#" style={{textAlign: 'right'}}>Book for an appointment</a>
                        {/*<div class="nav navbar-nav navbar-right"><a>Book for appointment</a></div>*/}
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Blogs</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/blogimage.jpg" width={263} height={191} />
                        </p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col-md-4">
                    <div className="card">
                      <div className="header">
                        <h4 className="title">Treatment Process</h4>
                        <p className="category">Loren ipsumLoren ipsumLoren ipsumLoren ipsum</p>
                      </div>
                      <div className="content">
                        {/*<div id="chartPreferences" class="ct-chart ct-perfect-fourth"></div>*/}
                        <p><img src="assets/img/treatmentprocess.jpg" width={263} height={191} /></p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card ">
                      <div className="header">
                        <h4 className="title">Diet Recommendation</h4>
                        <p className="category">dummy textdummy textdummy textdummy textdummy text</p>
                      </div>
                      <div className="content">
                        <p><img src="assets/img/dietrecommendations.jpg" width={263} height={191} />
                        </p>
                        <a href="#" style={{textAlign: 'right'}}>View More</a>
                        <div className="footer">
                          <hr />
                          <div className="stats">
                            <i className="fa fa-clock-o" /> Notification text come here
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>      
    );

}
}

export default Dashboard;
