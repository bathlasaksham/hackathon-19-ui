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
import BaggageInfo from './Components/BaggageInfo';
import { Card } from '@material-ui/core';
import ProgressBar from 'react-bootstrap/ProgressBar'

class Track extends Component {

  getBaggageDetails = () => {
    axios.post("/baggage/getDetails", {
      
        booking_id: this.state.coupon
      
    }).then(response => {
        this.setState({baggagesInfoList: response.data.details})
    }).catch(err => {

    })
  }

  constructor(props) {
    super(props);
    this.getBaggageDetails();
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
    baggagesInfoList: [
      {
        booking_id : '1',
        flight_name : 'IS 100',
        weight: '0.8'+'kg',
        no_of_items: "2",
        updated_at:'2019-12-08 4:00',
        status:'Not Checked In',
        progress:'10',
      },
      {
        booking_id : '1',
        flight_name : 'IS 200',
        weight: '0.6'+'kg',
        no_of_items: "2",
        updated_at:'2019-12-09 6:00',
        status:'Checked In',
        progress:'30',
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
                <Form.Label>Booking Id</Form.Label>
                  <Form.Control value={this.state.coupon} onChange={e => this.onIdChange(e)}>
                  </Form.Control>
                </Form.Group>

              <Form.Group as={Col} style={{marginRight: 20}}>
              <Button variant="outline-success" style={{marginTop: 30}} onClick={this.getBaggageDetails}>Search</Button>
              </Form.Group>

            </Form>
          </Navbar.Collapse>
        </Navbar> 

        <Card>
        {
          this.state.showData?
          (
            Array.from(this.state.baggagesInfoList).map((value) => {
              return (
                <BaggageInfo 
                  bookingId = {value.booking_id}
                  flightName = {value.flight_name}
                  weight = {value.weight}
                  noOfItems = {value.no_of_items}
                  updatedAt = {value.created_at}
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

export default Track;
