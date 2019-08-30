import React, { Component } from 'react';
import '../sass/Sidebar.sass';
import '../sass/ModifiedBs.scss';
import { Strings } from '../util/Strings';

const ticketRows = [
    { color: 'bg-primary', checked: true, title: Strings.open, count: 43 },
    { color: 'bg-danger', checked: false, title: Strings.awaitingReply, count: 2 },
    { color: 'bg-success', checked: false, title: Strings.resolved, count: 12 },
    { color: 'bg-secondary', checked: true, title: Strings.archived, count: 60 }
]

const priorityRows = [
    { color: 'bg-danger', checked: true, title: Strings.urgent, count: 43 },
    { color: 'bg-warning', checked: false, title: Strings.high, count: 2 },
    { color: 'bg-success', checked: true, title: Strings.medium, count: 43 },
    { color: 'bg-info', checked: false, title: Strings.low, count: 2 }
]

const tags=[Strings.trash, Strings.jackets, Strings.jackets, Strings.jumpers]

class Sidebar extends Component {

    state = { toggle: false }

    toggleCollapse = () => {
        this.setState({ toggle: !this.state.toggle })
    }

    renderSidebarContentRow = (rowData, key) => {
        const { color, checked, title, count } = rowData
        return (
            <div className="d-flex align-items-center flex-row pr-1 mt-1 rowStyle">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class={"form-check-input " + color} id={"checkbox-" + key} checked={checked} name={"checkbox-" + key} />
                    <label class={"form-check-label ml-1 textStyle " + (checked ? "font-weight-bold" : "text-muted")} for={"checkbox-" + key}>{title}</label>
                </div>
                <p className={'ml-auto my-auto ' + (checked ? "font-weight-bold" : "text-muted")}>{count}</p>
            </div>
        )
    }

    render() {
        return (
            <nav className="sidebar mt-5 bg-white shadow overflow-auto d-none d-lg-block">
                <button class="bg-transparent border-0" type="button" data-toggle="collapse" onClick={() => this.toggleCollapse()} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="scrollView" id="navbarSupportedContent">
                    <div class="sidebar-header">
                        <button type="button" class="btn btn-primary d-none d-lg-block buttonTop">{Strings.createTicket}<i class="fas fa-paper-plane mx-4"></i></button>
                    </div>
                    <div className="m-4">
                        <div className="d-flex flex-row mb-2">
                            <h5 className="font-weight-bold">{Strings.tickets}</h5>
                            <span href="#" class="badge badge-pill badge-dark ml-auto h-75 p-1 badgeStyle">43</span>
                        </div>
                        {ticketRows.map((item, i) => {
                            return this.renderSidebarContentRow(item, i)
                        })}
                        <h5 className="font-weight-bold mt-4">{Strings.priority}</h5>
                        {priorityRows.map((item, i) => {
                            return this.renderSidebarContentRow(item, i+4)
                        })}
                        <h5 className="font-weight-bold mt-4">{Strings.tags}</h5>
                        <input className="w-100" placeholder={Strings.searchForTag}/>
                        <div className="d-flex flex-wrap mt-2">
                            {tags.map((item, i) => {
                                return (
                                    <div class="form-check form-check-inline mr-3">
                                        
                                <label class="form-check-label mr-1 textStyle"  for={"radio-" + i}>{item}</label>
                                <input type="radio" class="form-check-input" id={"radio-" + i} checked name={"radio-" + i} />
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export { Sidebar }