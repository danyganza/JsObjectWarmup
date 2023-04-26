let my_city = [ {    name: `Edmonton`,    population: 1000000,    is_capital: true, communities: `leduc``sherwood Park` `clareview` `millwoods` `Capilano`,}];

for (let i = 0; i < my_city.length; i++) {
  if (my_city[i].is_capital === true && my_city[i].population > 0) {
    console.log(`My city is: ${my_city[i].name}, population is: ${my_city[i].population}`);
  } else {
    console.log(`not important enough`)
  }
}

