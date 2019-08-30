import React, { Component } from 'react';
import '../sass/Navbar.sass';
import { Strings } from '../util/Strings';

const brand = require('../img/despatch_cloud.png');

class Navbar extends Component {

    state = { toggle: false }

    toggleCollapse = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow p-1 mb-5 bg-white">
                <button class="bg-transparent border-0 mr-0" type="button" data-toggle="collapse" onClick={() => this.toggleCollapse()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <a class="navbar-brand" href="#"><img src={brand} /></a>
                <div className={"collapse navbar-collapse" + (this.state.toggle ? " show" : "")} id="navbarSupportedContent">
                    <div class="input-group mb-3 my-auto w-75">
                        <div class="input-group-prepend">
                            <button class="btn my-2 my-sm-0" type="submit" ><i class="fas fa-search"></i></button>
                        </div>
                        <input class="form-control border-0 mr-sm-2" type="search" placeholder={Strings.searchHere} aria-label={Strings.searchHere} />
                    </div>
                    <div className="mr-2 mt-1 ml-auto" >
                        <h6 class="font-weight-bold m-0">Corey Cross <br />
                            <small class="m-0">Administrator</small>
                        </h6>

                    </div>
                </div>
                <div className="shadow rounded-circle border border-light d-flex align-items-center justify-content-center text-white mr-2 mt-1 userCircle">
                    CC
                </div>
            </nav>
        )
    }
}

export { Navbar }