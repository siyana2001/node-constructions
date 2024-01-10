import React from 'react';
import './Dashboard.css'; 
import 'font-awesome/css/font-awesome.min.css';
import pic from '../Dashboard/initial-linked-letter-hs-logo-design-modern-letter-hs-logo-design-vector-with-modern-trendy-2H6CMTD.jpg';



class Dashboard extends React.Component {
  render() {
    return (
      <div className='siyana'>
        <div id="mySidenav" className="sidenav">
          <p className="logo">
            <span>HS Constructions</span>
          </p>
          <a href="#" className="icon-a">
            <i className="fa fa-dashboard icons"></i> Dashboard
          </a>
          <a href="/cust" className="icon-a">
            <i className="fa fa-users icons"></i> Customers
          </a>
          <a href="/view" className="icon-a">
            <i className="fa fa-list icons"></i> Layouts
          </a>
          <a href="/insert" className="icon-a">
            <i className="fa fa-shopping-bag icons"></i> Insert layout
          </a>
          <a href="/3d" className="icon-a">
            <i className="fa fa-tasks icons"></i> 3D Image
          </a>
          <a href="#" className="icon-a">
            <i className="fa fa-list-alt icons"></i> Tasks
          </a>
        </div>

        <div id="main">
          <div className="head">
            <div className="col-div-6">
              <span style={{ fontSize: '30px', cursor: 'pointer', color:'white' }} className="nav">
                ☰ Dashboard
              </span>
              <span style={{ fontSize: '30px', cursor: 'pointer', color:'white' }} className="nav2">
                ☰ Dashboard
              </span>
            </div>

            <div className="col-div-6">
              <div className="profile">
                <img src={pic} className="pro-img" alt="Profile" />
                <p>
                 Hajral Siyana<span>DEVELOPER</span>
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>
          <br />

          <div className="col-div-3">
            <div className="box">
              <p>
                67
                <br />
                <span>Customers</span>
              </p>
              <i className="fa fa-users box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>
                88
                <br />
                <span>Projects</span>
              </p>
              <i className="fa fa-list box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>
                99
                <br />
                <span>Orders</span>
              </p>
              <i className="fa fa-shopping-bag box-icon"></i>
            </div>
          </div>
          <div className="col-div-3">
            <div className="box">
              <p>
                78
                <br />
                <span>Tasks</span>
              </p>
              <i className="fa fa-tasks box-icon"></i>
            </div>
          </div>
          <div className="clearfix"></div>
          <br />
          <br />
          <div className="col-div-8">
            <div className="box-8">
              <div className="content-box">
                <p>
                  Top Selling Projects
                </p>
                <br />
                <table>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                  <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                  </tr>
                  <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                  </tr>
                  <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div className="col-div-4">
            <div className="box-4">
              <div className="content-box">
                <p>
                  Total Sale
                </p>

                <div className="circle-wrap">
                  <div className="circle">
                    <div className="mask full">
                      <div className="fill"></div>
                    </div>
                    <div className="mask half">
                      <div className="fill"></div>
                    </div>
                    <div className="inside-circle"> 70% </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
