import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import TypoGraphy from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import './App.css';
import LocationList from './components/LocationList'
import ForecastExtende from './components/forecastExtende'
// modulo para hacer responsive 
import { Grid, Row, Col } from 'react-flexbox-grid'

export default class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }
  //3435910 = buenos aires, Argentina
  //3435910 = Sucre, Bolivia
  //4366164 = Washington, us
  handleSelectionLocation = (city) => {
    this.setState({ city: city })
    
  }
  cities = ['3911925', '3435910', '4366164', '3435910'];

  render() {
    const { city } = this.state;
    return (

      <Grid>
        < Row >
          <AppBar position="static">
            <Toolbar>
              <TypoGraphy variant='h2' color='inherit'>
                Weather App
            </TypoGraphy>
            </Toolbar>
          </AppBar>
        </Row >
        <Row>
          <Col xs={12} md={6} >
            <LocationList cities={this.cities} 
              onSelectedLocation={this.handleSelectionLocation} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>

              <div className="details">
                {city === null ? <h3> No se ha seleccionado ciudad</h3>
                :<ForecastExtende city={city}  city_name={'xD'}/>}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid >
    )
  };
}




