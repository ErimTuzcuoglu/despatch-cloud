import React, { Component } from 'react';
import '../sass/ModifiedBs.scss';
import '../sass/Home.sass';
import { Navbar, Sidebar } from '../components';
import { Strings } from '../util/Strings';

const rows = [
  {
    date: "11th July 2019",
    items: [
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      }
    ]
  }, {
    date: "10th July 2019",
    items: [
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      },
      {
        person: "Matthew Dunne",
        title: "Migration to Shopify",
        mention: 4345,
        priority: "Medium",
        sent: 43250,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elitr sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"
      }
    ]
  }
]

const rightPanelImage = require('../img/right_content.png');
const moneyBagIcon = require('../img/money_bag_icon.png');

class Home extends Component {

  calculateDate = (date) => {
    var time = 0
    if (date < 60) {
      return date +" "+ Strings.seconds +" "+ Strings.ago
    } else if (date < 3600) {
      time = parseInt(date / 60)
      return time +" "+ Strings.minutes +" "+ Strings.ago
    } else if (date < 86400) {
      time = parseInt(date / 3600)
      return time +" "+ Strings.hours +" "+ Strings.ago
    } else if (date >= 86400) {
      time = parseInt(date / 86400)
      return time +" "+ Strings.hours +" "+ Strings.ago
    }
  }

  truncateText = (text) => {
    if(text.length > 57) {
      return text.substr(0, 57)
    }
    return text
  }

  centerBarRender = () => {
    return (
      <div className="container-fluid col-sm-12 col-lg-7 form-group bg-light ml-0 mt-5 centerContainerStyle">
        {rows.map((rowItem, i) => {
          return (
            <div className="w-100">
              <p className="text-secondary w-100 mt-5 text-center">{rowItem.date}</p>
              {rowItem.items.map((item, j) => {
                return (<div className="row checkbox-row mx-1">
                <input type="checkbox" class=" my-auto" id={"checkbox-" + j} name={"checkbox-" + j} />
                  <div className="d-flex flex-row mb-2 bg-white shadow rounded centerRowStyle">
                    
                    <div className="rounded-circle mr-2 my-2 d-lg-none d-sm-block bg-success text-center">
                      <img class="text-white align-bottom" src={moneyBagIcon} width="30" height="30"></img>
                    </div>
                    <div className="rounded-circle mr-2 my-2 d-none d-lg-block bg-warning text-center mailIconStyle">
                      <i class="fas fa-envelope text-white align-bottom"></i>
                    </div>
                    <h6 class="leftTextStyle mr-3">{item.person}<br />
                        <small class="smallStyle">{item.title}<small className='ml-1 text-info'>(#{item.mention})</small></small>
                      </h6>
                    <p className="text-muted mr-3 d-none d-lg-block generalTextSize">{this.truncateText(item.message)}</p>
                    <p className="text-success text-center ml-auto my-auto d-none d-lg-block generalTextSize">{item.priority}</p>
                    <p className="text-center ml-auto mx-1 my-auto d-none d-lg-block generalTextSize">{this.calculateDate(item.sent)}</p>
                    <div className="shadow rounded-circle border border-light d-none d-lg-block text-white text-center mr-2 my-auto ml-auto rowCircleStyle">
                    <p className="mt-1">CC</p>
                </div>
                
                  </div>
                  </div>
                )
              })
              }
            </div>
          )
        })}
      </div>
    )
  }


  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex flex-row">
          <Sidebar />
          {this.centerBarRender()}
          <button type="button" class="btn btn-default btnCircle bg-info d-lg-none">
            <i class="fas fa-paper-plane text-white"></i>
            <i class="fas fa-plus text-info p-1 border border-info rounded-circle bg-white plusIconStyle"></i>
          </button>
          <div className="bg-white shadow d-none d-lg-block rightStyle">
            <div className="d-flex justfiy-content-center align-items-center flex-column">
            <p className="rightTitleStyle">{Strings.rightTitle}</p>
            <img src={rightPanelImage} className="rightImgStyle" />
            <p>{Strings.psst}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
