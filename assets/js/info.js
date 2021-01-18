var states = {
  "Oregon": "Pacific", "California": "Pacific", "Washington": "Pacific", "Alaska": "Pacific", "Hawaii": "Pacific", "Nevada": "Pacific",
  "Idaho": "Frontier", "Montana": "Frontier", "Wyoming": "Frontier", "Utah": "Frontier", "Colorado": "Frontier", "New Mexico": "Frontier", "Arizona": "Frontier", "South Dakota": "Frontier", "North Dakota": "Frontier",
  "Minnesota": "Midwest", "Iowa": "Midwest", "Illinois": "Midwest", "Indiana": "Midwest", "Missouri": "Midwest", "Kansas": "Midwest", "Nebraska": "Midwest", "Ohio": "Midwest", "Michigan": "Midwest", "Wisconsin": "Midwest",
  "Texas": "Southern", "Oklahoma": "Southern", "Mississippi": "Southern", "Alabama": "Southern", "Arkansas": "Southern", "Louisiana": "Southern", "Tennessee": "Southern",  "Kentucky": "Southern",
  "West Virginia": "Atlantic", "Virginia": "Atlantic", "North Carolina": "Atlantic", "Georgia": "Atlantic", "Florida": "Atlantic", "Maryland": "Atlantic", "Delaware": "Atlantic", "DC": "Atlantic", "South Carolina": "Atlantic",
  "Pennsylvania": "Northeastern", "Rhode Island": "Northeastern", "Connecticut": "Northeastern", "New Hampshire": "Northeastern", "Vermont": "Northeastern", "Maine": "Northeastern", "Massachusetts": "Northeastern", "New Jersey": "Northeastern", "New York": "Northeastern"
}

var regions = {
  "Pacific": ["Oregon", "California", "Washington", "Alaska", "Hawaii", "Nevada"],
  "Frontier": ["Idaho", "Montana", "Wyoming", "Utah", "Colorado", "New Mexico", "Arizona", "South Dakota", "North Dakota"],
  "Midwest": ["Minnesota", "Iowa", "Illinois", "Indiana", "Missouri", "Kansas", "Nebraska", "Ohio", "Michigan", "Wisconsin"],
  "Southern": ["Texas", "Oklahoma", "Mississippi", "Alabama", "Arkansas", "Louisiana", "Tennessee", "Kentucky"],
  "Atlantic": ["West Virginia", "Virginia", "North Carolina", "Georgia", "Florida", "Maryland", "Delaware", "DC", "South Carolina"],
  "Northeastern": ["Pennsylvania", "Rhode Island", "Connecticut", "New Hampshire", "Vermont", "Maine", "Massachusetts", "New Jersey", "New York"]
}


var state_info = {
  "Illinois": [
    "This is a list of stats about Illinois Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj",
    "gillianmui7770@gmail.com",
    "This is a list of stats about Illinois Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj This is a list of stats about Ohio Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj This is a list of stats about Illinois Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj",
  ],
  "Montana": [
    "This is a list of stats about Montana Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj",
    "dineethanipun@gmail.com",
    "This is a list of stats about Montana Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj This is a list of stats about Ohio Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj This is a list of stats about Montana Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj",

  ],
  "Ohio": [
    "This is a list of stats about Ohio Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj",
    "sharmadt100@gmail.com",
    "This is a list of stats about Ohio Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj This is a list of stats about Ohio Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj This is a list of stats about Ohio Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj <br>This is a list of stats about each state Below the stats is more info about each statelksjdlfkjsdlfkjslkjdflsk sdlfjslkdfj",
  ]
}

$("path, circle").hover(function(e) {
  var id = $(this).attr("id")
  if(id != "path67"){
    document.getElementById(id).setAttribute("style", "fill: #3b65c4; stroke: #3b65c4; stroke-width:3px;");
  }
});

$("path, circle").click(function(e) {
  var id = $(this).attr("id")
  if(id != "path67"){
    document.getElementById(id).setAttribute("style", "fill: #3b65c4; stroke: #3b65c4; stroke-width:3px;");
  }

  if(id in state_info){
    document.getElementById("directions").style.display = "none";
    document.getElementById("info_state").style.display = "block";
    var curr_info = state_info[id]
    console.log(curr_info)
    console.log(curr_info[2])
    console.log(curr_info[3])

    document.getElementById("info_statename").innerHTML = id
    document.getElementById("info_bullets").innerHTML = curr_info[0]
    document.getElementById("info_mail").href = "mailto:" + curr_info[1];
    document.getElementById("info_detailed").innerHTML = curr_info[2]
  }
  else{
    document.getElementById("directions").style.display = "block";
    document.getElementById("info_state").style.display = "none";
  }
});

$("path, circle").mouseleave(function(e) {
  Object.keys(states).forEach(i => document.getElementById(i).setAttribute("style", fill="#D3D3D3"));
  document.getElementById("circle60").setAttribute("style", "fill: #D3D3D3;");
  if(document.getElementById("info_state").style.display == "block"){
    var elems = document.getElementById("info_statename").innerHTML.split(" ")
    document.getElementById(elems[2]).setAttribute("style", "fill: #3b65c4; stroke: #3b65c4; stroke-width:3px;");
  }
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
