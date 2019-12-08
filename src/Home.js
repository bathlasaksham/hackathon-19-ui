import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Home extends Component {

  getDateString = date => {
    return (date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2));
  }

  state = {
    source: "",
    destination: "",
    date: this.getDateString(new Date()),
    cities: ['India', 'Aus'],
  }

  onSourceChange = (e) => {
    this.setState({source: e.target.value});
  }

  onDestinationChange = (e) => {
    this.setState({source: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <Container>
            <Form>
              <Form.Row>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Source</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    value="India"
                  />
                </InputGroup>
                <Form.Group controlId="exampleForm.ControlSelect1">
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
                <Form.Group controlId="exampleForm.ControlSelect1">
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
              </Form.Row>
            </Form>
        </Container>
      </div>
    );
  }
}

export default Home;
