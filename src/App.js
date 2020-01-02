import React from 'react';
import logo from './logo.svg';
import './App.css';
import VehicleList from './VehicleList';
import SideBar from './SideBar';
import 'tachyons';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      vehicles: [],
      urls: [
        "https://swapi.co/api/vehicles/?page=1",
        "https://swapi.co/api/vehicles/?page=2",
        "https://swapi.co/api/vehicles/?page=3",
        "https://swapi.co/api/vehicles/?page=4"
      ],
      minPrice: -1,
      maxPrice: -1,
      minPassenger: -1,
      maxPassenger: -1,
      minFreight: -1,
      maxFreight: -1,
      search: ''
    }
  }
  filterGeneric = (quantParam, stateParamMin, stateParamMax) => {
    if(String(stateParamMin).length === 0) return true;
    else if(String(stateParamMax).length === 0) return true;
    else if(stateParamMin === -1) return true;
    else if(stateParamMin === -1) return true;
    return ((quantParam >= stateParamMin && quantParam <= stateParamMax)) ? true: false;
  }

  filterPrice = (vehicle) =>{
    return this.filterGeneric(vehicle.price, this.state.minPrice, this.state.maxPrice);
  }
  filterPassenger = (vehicle) =>{
    return this.filterGeneric(Number(vehicle.passengers) + Number(vehicle.crew), this.state.minPassenger, this.state.maxPassenger);
  }
  filterFreight = (vehicle)=>{
    return this.filterGeneric(Number(vehicle.capacity), this.state.minFreight, this.state.maxFreight);
  }
  filterName = (vehicle) =>{
    // console.log("Called filter name!");
    return vehicle.name.toLowerCase().includes(this.state.search);
  }

  onMinPriceChange = (event) => {
      this.setState({minPrice: event.target.value});
  }

  onMaxPriceChange = (event) => {
      this.setState({maxPrice: event.target.value});
  }
  changeFreightMin = (event)=>{
    this.setState({minFreight: event.target.value});
  }
  changeFreightMax = (event)=>{
    this.setState({maxFreight: event.target.value});
  }

  changePassengerMin = (event) => {
    this.setState({minPassenger: event.target.value});
  }
  changePassengerMax = (event) => {
    this.setState({maxPassenger: event.target.value});
  }

  changeSearch = (event) => {
      this.setState({search: event.target.value.toLowerCase()});
  }
  componentDidMount(){

    Promise.all(this.state.urls.map(url=>{
      return fetch(url)
        .then((response) => response.json())
        .then((respParsed) => respParsed.results)
      }))
        .then((values)=>[].concat(values[0], values[1], values[2], values[3]))
        .then(arrVeh => arrVeh.map(entry=>{
          let entryObj = {
            name: entry.name,
            crew: entry.crew,
            passengers: entry.passengers,
            price: Number(entry.cost_in_credits),
            capacity: entry.cargo_capacity
          };
          return entryObj;
        }))
        .then(arrVeh => this.setState({vehicles: arrVeh}))

  }
  render(){
    const filteredVehicles = this.state.vehicles.filter((vehicle) => {
      //Remember, these filter functions return booleans!
      return (this.filterPrice(vehicle) && this.filterName(vehicle) && this.filterPassenger(vehicle) && this.filterFreight(vehicle));
    });
    return (
      <div>
        <h1>Star Dealership</h1>
        <div className="App mainLayout">
          <SideBar changeSearch={this.changeSearch} minFreight={this.changeFreightMin} maxFreight={this.changeFreightMax} minPass={this.changePassengerMin} maxPass={this.changePassengerMax} minPrice={this.onMinPriceChange} maxPrice={this.onMaxPriceChange}/>
          <VehicleList vehicles = {filteredVehicles}/>
        </div>
      </div>
    );
  }
}

export default App;
