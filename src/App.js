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
      maxPrice: -1
    }
  }

  filterPrice = (vehicle) =>{
    console.log("Called filter price!");
    console.log(typeof this.state.minPrice);
    console.log(this.state.minPrice);
    // if(this.state.minPrice === "") return true;
    // if(!(this.state.maxPrice === "")) return true;
    return ((vehicle.price >= this.state.minPrice && vehicle.price <= this.state.maxPrice)) ? true: false;
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
      return this.filterPrice(vehicle);
    });
    return (
      <div>
        <h1>Star Dealership</h1>
        <div className="App mainLayout">
          <SideBar minPrice={this.onMinPriceChange} maxPrice={this.onMaxPriceChange}/>
          <VehicleList vehicles = {filteredVehicles}/>
        </div>
      </div>
    );
  }
}

export default App;
