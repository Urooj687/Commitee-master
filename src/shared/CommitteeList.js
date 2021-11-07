import React, { Component } from 'react'
import './CommitteeList.css'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';
import { Switch, BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CommitteeAttendance } from './CommitteeAttendance'
import { connect } from 'react-redux';


class CommitteeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commitee: {
                Name: "", start_date: "", end_date: "", saving_amount: ""
            },
            // committee_arr: this.props.committee_arr, showSheet: false, showUpdate: false, index: 0, showSheet2: false
        }

    }
    componentDidMount() {
        this.setState({
            showSheet: false,
            showSheet2: false,
            showUpdate: false,
            index: 0
        });
    }
    handleClick = () => {
        this.setState({
            showSheet: true
        })


    }
    deleteOb = (index) => {
       /* const newList = JSON.parse(JSON.stringify(this.state.committee_arr));
        console.log(index);
        newList.splice(index, 1);*/
        /*this.setState({
            committee_arr: newList
        });*/
        this.props.delCommittee(index)


    }
    handleSubmit = (e) => {
        console.log(this.state.showUpdate);
        if (this.state.showUpdate === false) {
            e.preventDefault();
            this.props.addCommittee(this.state.commitee);
            // const newList = this.state.committee_arr.concat(this.state.commitee)
            // this.setState({
            //     committee_arr: newList
            // })

        }
        else {
            const obj = this.state.commitee;
            const elementsIndex = this.state.index;
            /*let newArray = [...this.state.committee_arr]

            newArray[elementsIndex] = this.state.commitee
            console.log(elementsIndex);
            console.log(newArray[elementsIndex]);*/

            this.setState({
                commitee: obj,
            })
            this.props.upCommittee(this.state.commitee, elementsIndex);

        }
        this.setState({ showSheet: false })
        console.log(this.props.committee_arr)

    }
    handleSubmit2 = () => {
        console.log("got value");
    }
    handleNameOnChange = (e) => {
        var _name = e.target.value;
        this.setState({
            commitee: {
                Name: _name, start_date: this.state.commitee.start_date,
                end_date: this.state.commitee.end_date, saving_amount: this.state.commitee.saving_amount
            }
        })
    }
    handleStartDateOnChange = (e) => {
        var _date = e.target.value;
        this.setState({
            commitee: {
                Name: this.state.commitee.Name, start_date: _date,
                end_date: this.state.commitee.end_date, saving_amount: this.state.commitee.saving_amount
            }
        })
    }
    handleEndDateOnChange = (e) => {
        var _enddate = e.target.value;
        this.setState({
            commitee: {
                Name: this.state.commitee.Name, end_date: _enddate,
                start_date: this.state.commitee.start_date, saving_amount: this.state.commitee.saving_amount
            }
        })
    }
    handleSavingAmountOnChange = (e) => {
        var _amount = e.target.value;
        this.setState({
            commitee: {
                Name: this.state.commitee.Name, start_date: this.state.commitee.start_date,
                end_date: this.state.commitee.end_date, saving_amount: _amount
            }
        })
    }
    render() {
        return (<div className="CommitteeList_comp">
            <div className="flex-direction-column">
                {this.props.committee_arr.map((values, index) => {
                    return (
                        <div className="d-flex align-items-center" key={index} style={{ backgroundColor: "#dedbdb" }}>
                            <div id="prefix-icon">
                                <FontAwesomeIcon className="prefix-icon" icon={faUserFriends} />
                            </div>
                            <div className="flex-grow-1 ml-2">

                                <h4 component={Link} to="/CommitteeList" className="m-0 Comitteee_name">{values.Name}</h4>

                            <div className="d-flex ">
                                <div>
                                    {values.start_date}
                                </div>
                                <span>-</span>
                                <div>
                                    {values.end_date}
                                </div>
                            </div>
                        </div>
                        <div className="mr-2">

                            <Dropdown style={{ color: "black", backgroundColor: "transparent" }}>
                                <Dropdown.Toggle>
                                    <FontAwesomeIcon className="prefix__icon" icon={faEllipsisV} />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => {
                                        this.setState({ showSheet: true, showUpdate: true, index: index });
                                    }} href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        this.setState({ index: index }, () => { this.deleteOb(index) })
                                    }} href="#/action-2">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        </div>
                    )
                })}
            </div>

            <div id="edit-bg" tabIndex="0" role="button" onClick={() => { this.setState({ showSheet: true, showUpdate: false }) }} className="ep-enhanced" aria-label="Customize this page" title="Customize this page">
                <div id="edit-bg-icon"></div>
                <span id="edit-bg-text">+ Create</span>
            </div>

            <Modal show={this.state.showSheet} onHide={() => { this.setState({ showSheet: false }) }}>

                <Modal.Body>
                    <form id="form1" onSubmit={this.handleSubmit} >
                        <Form.Group controlId="name">
                            <Form.Control type="text" value={this.state.Name} onChange={this.handleNameOnChange} placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="startDate">
                            <Form.Control type="date" value={this.state.start_date} onChange={this.handleStartDateOnChange} placeholder="Start Date" />
                        </Form.Group>
                        <Form.Group controlId="endDate">
                            <Form.Control type="date" value={this.state.end_date} onChange={this.handleEndDateOnChange} placeholder="End Date" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="number" value={this.state.saving_amount} onChange={this.handleSavingAmountOnChange} placeholder="Saving Amount" />
                        </Form.Group>

                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { this.setState({ showSheet: false }) }}>
                        Close
                </Button>
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </div >)
    }
}
const mapStateToProps = (state) => {
    const _committee_arr=state.committee_arr;
return {
committee_arr:_committee_arr
};

}

const mapDispatchToProps = dispatch => {
    return{

    addCommittee: (commitee) => dispatch({ payload: commitee, type: 'AddCommittee' }),
    delCommittee: (index)=>dispatch({ payload:index, type: 'DeleteCommittee' }),
    upCommittee: (commitee, elementsIndex)=>dispatch({ payload:{arr:commitee, index:elementsIndex}, type:'UpdateCommittee'})

    }


};

export default connect(mapStateToProps,mapDispatchToProps)(CommitteeList);