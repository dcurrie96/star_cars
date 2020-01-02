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
      search: ''
    }
  }

  filterPrice = (vehicle) =>{
    if(String(this.state.minPrice).length === 0) return true;
    else if(String(this.state.minPrice).length === 0) return true;
    else if(this.state.minPrice === -1) return true;
    else if(this.state.maxPrice === -1) return true;
    return ((vehicle.price >= this.state.minPrice && vehicle.price <= this.state.maxPrice)) ? true: false;
  }
  filterName = (vehicle) =>{
    // console.log("Called filter name!");
    console.log(`Here is the search query: ${this.state.search}`);
    return vehicle.name.toLowerCase().includes(this.state.search);
  }

  onMinPriceChange = (event) => {
      this.setState({minPrice: event.target.value});

      console.log(`Here is the min price: ${event.target.value}`);
      console.log(typeof event.target.value);
      //console.log(filteredBots)
  }

  onMaxPriceChange = (event) => {
      this.setState({maxPrice: event.target.value});

      console.log(`Here is the max price: ${event.target.value}`);
      console.log(typeof event.target.value);

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
      return (this.filterPrice(vehicle) && this.filterName(vehicle));
    });
    return (
      <div>
        <h1>Star Dealership</h1>
        <div className="App mainLayout">
          <SideBar changeSearch={this.changeSearch} minPrice={this.onMinPriceChange} maxPrice={this.onMaxPriceChange}/>
          <VehicleList vehicles = {filteredVehicles}/>
        </div>
      </div>
    );
  }
}

export default App;
