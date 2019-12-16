

const getVehicles = async () => {
  let urls = [
    "https://swapi.co/api/vehicles/?page=1",
    "https://swapi.co/api/vehicles/?page=2",
    "https://swapi.co/api/vehicles/?page=3",
    "https://swapi.co/api/vehicles/?page=4",
  ]
  const myPromise = await Promise.all(urls.map(url=>{
    return fetch(url)
      .then((response) => response.json())
      .then((respParsed) => respParsed.results)
    }))
      .then((values)=>{
        return [].concat(values[0], values[1], values[2], values[3]);
    });
  //console.log(myPromise);
  return myPromise;
}


const vehicles = getVehicles();
console.log("Here are the vehicles: ");
console.log(vehicles);


async function getData(){
  let urls = [
    "https://swapi.co/api/vehicles/?page=1",
    "https://swapi.co/api/vehicles/?page=2",
    "https://swapi.co/api/vehicles/?page=3",
    "https://swapi.co/api/vehicles/?page=4",
  ]
  let arrVeh = []
  for await (url of urls){
    let resp = await fetch(url);
    let respJ = await resp.json();
    arrVeh = arrVeh.concat(respJ.results);
  }
  return arrVeh;
}
