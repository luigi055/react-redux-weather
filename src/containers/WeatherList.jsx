import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'Charts';
import GoogleMaps from 'GoogleMaps';

class WeatherList extends Component {

  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;
    console.log(lon, lat);

    return (
      <tr key={cityName} >
        <td >
          <GoogleMaps lat={lat} lon={lon} />
        </td>
        <td>
          <Chart color='#f90' data={temps} units="°C" />
        </td>
        <td>
          <Chart color='red' data={pressures} units="hPa" />
        </td>
        <td>
          <Chart color='blue' data={humidities} units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// { weather } is the same as say const weather = state.weather
const mapStateToProps = ({ weather }) => ({ weather });


export default connect(mapStateToProps)(WeatherList);
