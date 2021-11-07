import React, { Component } from 'react'
import CommitteeList from './CommitteeList'
import Select from 'react-select';
import './CommitteeAttendance.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Form, Modal, Button } from 'react-bootstrap'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

class CommitteeAttendance extends Component {

    constructor(props) {
        super(props);

        this.state = {

            month: "",
            members: [],
            showSheet: false,
            days: [], _days: [],
            name: "",
            options: [], attendees: [],
            obj: {
                month:
                {
                    member:
                    {

                        day: []

                    }

                }
            }





        }
    }
    componentDidMount() {
        this.setState({
            showSheet: false,
            month: ((new Date()).getMonth),
            options: [
                {
                    label: "January",
                    value: "1"
                },
                {
                    label: "February",
                    value: "2"
                },
                {
                    label: "March",
                    value: "3"
                },
                {
                    label: "April",
                    value: "4"
                },
                {
                    label: "May",
                    value: "5"
                },
                {
                    label: "June",
                    value: "6"
                },

                {
                    label: "July",
                    value: "7"
                },
                {
                    label: "August",
                    value: "8"
                },
                {
                    label: "September",
                    value: "9"
                },
                {
                    label: "October",
                    value: "10"
                },
                {
                    label: "Novemeber",
                    value: "11"
                },
                {
                    label: "December",
                    value: "12"
                }
            ],
            attendees: [],
            obj: {
                month:
                {
                    member:
                    {

                        day: []

                    }

                }
            }



        }, () => {
            console.log(this.state.month)
            var _val = 0;
            for (let val of this.state.options) {
                if (val.label === this.state.month) {
                    _val = val.value;
                }
            }
            console.log(_val)

            var _numberOfDays = this.numberOfDays(_val, 2020);

            console.log(_numberOfDays);
            var _days = [];
            for (let i = 1; i <= _numberOfDays; i++) {
                _days.push(i);
            }
            this.setState({
                days: _days
            })
        })





    }
    numberOfDays = (_month, year) => {
        return (new Date(year, _month, 0).getDate());
    }
    handleMonthChange = (e) => {
        console.log(this.state.members);
        var _month = e.target.value;

        var _val = 0;
        for (let val of this.state.options) {
            if (val.label === _month) {
                _val = val.value;
            }
        }
        console.log(_val)

        var _numberOfDays = this.numberOfDays(_val, 2020);

        console.log(_numberOfDays);
        var _days = [];
        for (let i = 1; i <= _numberOfDays; i++) {
            _days.push(i);
        }
        this.setState({
            month: _month,
            days: _days
        }, () => {
            console.log(this.state.month);
            console.log(this.state.days);
        })
    }
    handleNameOnChange = (e) => {
        var _name = e.target.value;
        this.setState({
            name: _name
        })
    }
    handleSubmit = () => {
        this.setState({ showSheet: false })
        var newList = this.state.members.concat(this.state.name);
        this.setState({
            members: newList,

        })
        console.log(this.state.members)
    }

    handleMarkDay = (e, index, value) => {
        if (e.target.checked === true) {
            let objCopy = {}
            var days_attended = this.state._days;
            console.log(days_attended);
            var _member = value, _day = index;
            days_attended = days_attended.concat(_day);
            // console.log(days_attended);
            //this.state.obj.month=this.state.month;

            var _month = this.state.month

            objCopy = {
                [_month]: {
                    [_member]: {
                        days: days_attended
                    }
                }
            }


            //objCopy.month.member=_member;
            this.setState({ _days: days_attended })
            //Object.assign(this.state.obj, objCopy);
            this.setState({ obj: objCopy }, () => {
                console.log(this.state.obj);

            })

            /* this.setState({
                 obj:objCopy
                
 
             })*/

        }
        else {
            let objCopy = {}
            var days_attended = this.state._days;
            console.log(days_attended);
            var _member = value, _day = index - 1;
            days_attended.splice(_day, 1);
            console.log(days_attended);
            //this.state.obj.month=this.state.month;

            var _month = this.state.month

            objCopy =
            {
                [_month]: {
                    [_member]: {
                        days: days_attended
                    }
                }
            }


            //objCopy.month.member=_member;
            this.setState({ _days: days_attended })

            this.setState({ obj: objCopy }, () => {
                console.log(this.state.obj);

            })

        }











    }

    render() {
        return (<div className="CommitteeAttendance">

            <div className="container">


                <div className="parent_div">
                    <h1>Committee 1</h1>
                    <Form className="w-25">
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Select Month</Form.Label>
                            <Form.Control as="select" onChange={this.handleMonthChange} >
                                {this.state.options.map((values, index) => {
                                    return (
                                        <option index={values.value} value={values.label}
                                        >
                                            {values.label}

                                        </option>
                                    )

                                })}

                            </Form.Control>
                        </Form.Group>
                    </Form>

                </div>



            </div>
            <TableContainer >
                <Table className="classes" size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Committee Member</TableCell>

                            {this.state.days.map((value) => {
                                return (
                                    <TableCell>
                                        {value}
                                    </TableCell>

                                )
                            }
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.members.map((value, indx) => {
                            return (<TableRow key={value}>
                                <TableCell>{value}</TableCell>
                                {this.state.days.map((index) => {
                                    return (
                                        <TableCell>
                                            <Form.Check type="checkbox" onChange={(e) => this.handleMarkDay(e, index, value)} />

                                        </TableCell>)


                                })}




                            </TableRow>)



                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            <div id="edit-bg" tabIndex="0" role="button" onClick={() => { this.setState({ showSheet: true }) }} className="ep-enhanced" aria-label="Customize this page" title="Customize this page">
                <div id="edit-bg-icon"></div>
                <span id="edit-bg-text">+ Add Member</span>
            </div>
            <Modal show={this.state.showSheet} onHide={() => { this.setState({ showSheet: false }) }}>

                <Modal.Body>
                    <form id="form1" onSubmit={this.handleSubmit} >
                        <Form.Group controlId="name">
                            <Form.Control type="text" value={this.state.value} onChange={this.handleNameOnChange} placeholder="Name" />
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





        </div>)
    }
}



export { CommitteeAttendance };