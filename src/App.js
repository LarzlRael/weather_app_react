import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import TypoGraphy from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import './App.css';
// import LocationList from './components/LocationList'
// import ForecastExtende from './components/forecastExtende'
// //importando el modulo de redux
// import { createStore } from 'redux'
// //importadno el archivo del streo que esta en otro store/index.js
// import { store } from './sotre/index'
// modulo para hacer responsive 
import { Grid, Row, Col } from 'react-flexbox-grid'
// // importando la funcion desde la carpeta de aciontes
// import { setCity } from './actions/index'
// const store = createStore(() => { },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Essto viene desde otro archoviconst setCity = value => ({ type: 'setcity', value })
//importando el modulo donde esta el container list location
import LocationListcontainer from './containers/LocationListContainer'
//importando el modulo de el forecasteextented container
import ForecastExtendContainer from './containers/forecastExtendContainer'
class App extends Component {
  //esta parte ya no se evalua aqui
  // constructor() {
  //   super();
  //   this.state = { city: null };
  // }
  //3435910 = buenos aires, Argentina
  //3435910 = Sucre, Bolivia
  //4366164 = Washington, us

  cities = [3911925, 3435910, 4366164, 3435910];

  render() {
    // const { city } = this.state;
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

            <LocationListcontainer cities={this.cities} />
            
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">

                {
                  <ForecastExtendContainer />
                  // <ForecastExtende city={city} city_name={'xD'} />
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid >
    )
  };
}


export default App;

//otro forma de enviar el componete 
// export default  connect(null, mapDispatchtoPropsAcions)(App)
// export default AppConected;

