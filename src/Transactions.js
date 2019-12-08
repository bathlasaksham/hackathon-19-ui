import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
import DatePicker from "react-datepicker";
import TextField from '@material-ui/core/TextField';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import BookingInfo from './Components/BookingInfo';
import { Card } from '@material-ui/core';

class Transactions extends Component {

  getBookingDetails = () => {
    axios.get("/booking/get", {
      params: {

      }
    }).then(response => {

    }).catch(err => {

    })
  }

  constructor(props) {
    super(props);
    this.getBookingDetails();
  }

  getDateString = date => {
    return (date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2));
  }

state = {
    source: "",
    destination: "",
    date: this.getDateString(new Date()),
    cities: ['India', 'Aus'],
    people: 1,
    type: "direct",
    coupon: "",
    showData: true,
    bookingsInfoList: [
      {
        date : '2019-12-10',
        flight_ids : 'IS 100,UK 102',
        source: 'Delhi',
        destination: "Mumbai",
        amount:'2569',
        persons:'3',
        status:'Confirmed',
      },
      {
        date : '2019-12-11',
        flight_ids : 'IS 200,UK 102',
        source: 'Chennai',
        destination: "Mumbai",
        amount:'3569',
        persons:'4',
        status:'Cancelled',
      }
    ],
  }

  onIdChange = (e) => {
    this.setState({coupon: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form >

              <Form.Group as={Col} style={{marginRight: 20, marginLeft: 20}}>
                <Form.Label>Phone Number</Form.Label>
                  <Form.Control value={this.state.coupon} onChange={e => this.onIdChange(e)}>
                  </Form.Control>
                </Form.Group>

              <Form.Group as={Col} style={{marginRight: 20}}>
              <Button variant="outline-success" style={{marginTop: 30}}>Search</Button>
              </Form.Group>

            </Form>
          </Navbar.Collapse>
        </Navbar> 

        <Card>
        {
          this.state.showData?
          (
            Array.from(this.state.bookingsInfoList).map((value) => {
              return (
                <BookingInfo 
                  date = {value.date}
                  flightIds = {value.flight_ids}
                  source = {value.source}
                  destination = {value.destination}
                  amount = {value.amount}
                  persons = {value.persons}
                  status = {value.status}
                  progress = {value.progress}
                />
              )
            })
          ) :
          null
        }
        </Card>

        </Container>
      </div>
    );
  }
}

export default Transactions;
