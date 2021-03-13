var tiles_container = document.querySelector("#background");
var num_tiles = 400;

for (let i = 0; i < num_tiles; i++) {
	let new_tile = document.createElement("DIV");
  let attr_class = document.createAttribute("class");
  let ID = document.createAttribute("id");
  attr_class.value = "tile";
  ID.value = `${i}`;
  new_tile.setAttributeNode(attr_class);
  new_tile.setAttributeNode(ID);
  tiles_container.appendChild(new_tile);
}

var flicker = setInterval(function() {

  var active_tiles = document.querySelectorAll("svg");

  // remove flickering elements (SVGs)

  if (active_tiles) {
    for (let i = 0; i < active_tiles.length; i++) {
    	active_tiles[i].remove();
  	}
  }
    
  var random_tiles_arr = [];
  var classes_for_polyline = ["flicker-1", "flicker-2", "flicker-3"];
  // Get 3 random tiles
  for (let i = 0; i < 3; i++) {
  	let random_tile = Math.floor(num_tiles * Math.random());
    while (random_tiles_arr.indexOf(random_tile) !== -1) {
    	random_tile =  Math.floor(num_tiles * Math.random());
    }
  // Select tile and append an svg, apply a random style to it from classes_for_polyline arr
  //Select tile
  let tile = document.getElementById(random_tile);
  let border_path = "";
  
  switch(Math.floor(6 * Math.random())) {
  	case 0: //top-border polyline path
      border_path = "0,0 100,0 95,5 5,5 0,0";
      break;
    case 1: // top-right polyline path
    	if(random_tile < num_tiles/2 && random_tile % 20 > 10) {
      	border_path = "0,0 100,0 100,100 95,95 95,5 5,5 0,0";
      }
      break;
    case 2: // bottom-left polyline path
    	if(random_tile > num_tiles/2 && 10 > random_tile % 20 > 0) {
      	border_path = "0,0 0,100 100,100 95,95 5,95 5,5 0,0";
      }
      break;
    case 3: // left polyline path
    	border_path = "0,0 0,100 5,95 5,5 0,0";
      break;
    case 4: // right polyline path
    	border_path = "100,0 100,100 95,95 95,5 100,0";
      break;
    default:
    	break;
  }

   if(border_path) {
   	  // Append SVG element inside the selected tile
     let selected_class = Math.floor(3 * Math.random());
     tile.innerHTML = `<svg viewbox="0 0 100 100"><polyline points="${border_path}" class="${classes_for_polyline[selected_class]}"></polyline></svg>`
   }
  }
}, 3000);
