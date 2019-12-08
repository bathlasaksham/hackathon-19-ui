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
import FlightInfo from './Components/FlightInfo';
import { Card } from '@material-ui/core';
import Row from 'react-bootstrap/Row';

// import Radio from 'Radio';
// import Input from 'react-bootstrap/Input';
// var DatePicker = require("react-bootstrap-date-picker");

class Home extends Component {

  getCities = () => {
    axios.get("/cities", {
      params: {

      }
    }).then(response => {

    }).catch(err => {

    })
  }

  constructor(props) {
    super(props);
    this.getCities();
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
    flightsInfoList: [
      {
        start_time: '20:00',
        end_time: '23:00',
        duration: "20 mins",
        price: {
          final: '2000'
        },
      },
      {
        start_time: '20:00',
        end_time: '23:00',
        duration: "20 mins",
        price: {
          final: '2000'
        },
      }
    ],
  }

  onSourceChange = (e) => {
    this.setState({source: e.target.value});
  }

  onDestinationChange = (e) => {
    this.setState({source: e.target.value});
  }

  onDateChange = (date) => {
    this.setState({date: this.getDateString(date)});
  }

  onPeopleChange = (e) => {
    this.setState({people: e.target.value});
  }
  onCouponChange = (e) => {
    this.setState({coupon: e.target.value});
  }

  onTypeChange = value => {
    this.setState({ type: value });
  }

  render() {
    return (
      <div className="App">
        <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form >
            <Form.Row>
                <Form.Group as={Col} style={{marginRight: 20}}>
                <Form.Label>Source</Form.Label>
                  <Form.Control as="select" onChange={e => this.onSourceChange(e)}>
                  {
                      Array.from(this.state.cities).map((value) => {
                        return (
                          <option value={value}>{value}</option>
                        )
                      })
                    }
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} style={{marginRight: 20}}>
                <Form.Label>Destination</Form.Label>
                  <Form.Control as="select" onChange={e => this.onDestinationChange(e)}>
                    {
                      Array.from(this.state.cities).map((value) => {
                        return (
                          <option value={value}>{value}</option>
                        )
                      })
                    }
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} style={{marginRight: 20}}>
                  <Form.Label>Date</Form.Label>
                  <TextField
                        id="start_date"
                        label=""
                        type="date"
                        className="date-picker"
                        value={this.state.date}
                        onChange={this.onDateChange}
                        // style={{marginTop: 30, marginLeft: -30}}
                        style={{width: 120}}
                    />
                </Form.Group>
                {/* </Form.Row>

                <Form.Row> */}

                <Form.Group as={Col} style={{marginRight: 20}}>
                <Form.Label>No. Of People</Form.Label>
                  <Form.Control value={this.state.people} onChange={e => this.onPeopleChange(e)}>
                  </Form.Control>
                </Form.Group>
              <Form.Group as={Col}>
              <Form.Label>Type</Form.Label>
                <form>
                  <input type="radio" name="type" value="direct" checked={this.state.type === "direct"} onChange={()  => this.onTypeChange("direct")} /> Direct
                  <br /><input type="radio" name="type" value="withstop" checked={this.state.type === "withstop"} style={{marginLeft: 25}} onChange={()  => this.onTypeChange("withstop")} /> With Stops
                </form>
              </Form.Group>

              <Form.Group as={Col} style={{marginRight: 20, marginLeft: 20}}>
                <Form.Label>Coupon</Form.Label>
                  <Form.Control value={this.state.coupon} onChange={e => this.onCouponChange(e)}>
                  </Form.Control>
                </Form.Group>

              <Form.Group as={Col} style={{marginRight: 20}}>
              <Button variant="outline-success" style={{marginTop: 30}}>Search</Button>
              </Form.Group>

              </Form.Row>
            </Form>
          </Navbar.Collapse>
        </Navbar> <br />

        <Card style={{padding: 10}}>

        <Card style={{padding: 20}}>
          <Row>
            <Col>
                Departure
            </Col>
            <Col>
                Duration
            </Col>
            <Col>
                Arrival
            </Col>
            <Col>
                Price
            </Col>
            <Col>
                
            </Col>
          </Row>
        </Card>

        <br />

        
        {
          this.state.showData?
          (
            Array.from(this.state.flightsInfoList).map((value) => {
              return (
                <FlightInfo 
                  startTime = {value.start_time}
                  endTime = {value.end_time}
                  duration = {value.duration}
                  finalPrice = {value.price.final}
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

export default Home;
