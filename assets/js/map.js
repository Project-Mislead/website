var regions = {
  "Pacific": ["Oregon", "California", "Washington", "Alaska", "Hawaii", "Nevada"],
  "Frontier": ["Idaho", "Montana", "Wyoming", "Utah", "Colorado", "New Mexico", "Arizona", "South Dakota", "North Dakota"],
  "Midwest": ["Minnesota", "Iowa", "Illinois", "Indiana", "Missouri", "Kansas", "Nebraska", "Ohio", "Michigan", "Wisconsin"],
  "Southern": ["Texas", "Oklahoma", "Mississippi", "Alabama", "Arkansas", "Louisiana", "Tennessee", "Kentucky"],
  "Atlantic": ["West Virginia", "Virginia", "North Carolina", "Georgia", "Florida", "Maryland", "Delaware", "DC", "South Carolina"],
  "Northeastern": ["Pennsylvania", "Rhode Island", "Connecticut", "New Hampshire", "Vermont", "Maine", "Massachusetts", "New Jersey", "New York"]
}

  var states = {
    "Oregon": "Pacific", "California": "Pacific", "Washington": "Pacific", "Alaska": "Pacific", "Hawaii": "Pacific", "Nevada": "Pacific",
    "Idaho": "Frontier", "Montana": "Frontier", "Wyoming": "Frontier", "Utah": "Frontier", "Colorado": "Frontier", "New Mexico": "Frontier", "Arizona": "Frontier", "South Dakota": "Frontier", "North Dakota": "Frontier",
    "Minnesota": "Midwest", "Iowa": "Midwest", "Illinois": "Midwest", "Indiana": "Midwest", "Missouri": "Midwest", "Kansas": "Midwest", "Nebraska": "Midwest", "Ohio": "Midwest", "Michigan": "Midwest", "Wisconsin": "Midwest",
    "Texas": "Southern", "Oklahoma": "Southern", "Mississippi": "Southern", "Alabama": "Southern", "Arkansas": "Southern", "Louisiana": "Southern", "Tennessee": "Southern",  "Kentucky": "Southern",
    "West Virginia": "Atlantic", "Virginia": "Atlantic", "North Carolina": "Atlantic", "Georgia": "Atlantic", "Florida": "Atlantic", "Maryland": "Atlantic", "Delaware": "Atlantic", "DC": "Atlantic", "South Carolina": "Atlantic",
    "Pennsylvania": "Northeastern", "Rhode Island": "Northeastern", "Connecticut": "Northeastern", "New Hampshire": "Northeastern", "Vermont": "Northeastern", "Maine": "Northeastern", "Massachusetts": "Northeastern", "New Jersey": "Northeastern", "New York": "Northeastern"
  }

$("path, circle").hover(function(e) {
  var curr_region = states[$(this).attr("id")];
  var region_states = regions[curr_region];
  region_states.forEach(i => document.getElementById(i).setAttribute("style", "fill: #3b65c4; stroke: #3b65c4; stroke-width:3px;"));
  if(curr_region == "Atlantic"){
    document.getElementById("circle60").setAttribute("style", "fill: #3b65c4; stroke: #3b65c4; stroke-width:3px;");
  }
  var info_html = "<p>" + curr_region +" Region</p>";
  $('#info-box').html(info_html);
  $('#info-box').css('display','block');
  document.getElementById(curr_region).setAttribute("style", "text-shadow: 0px 0px 5px #3b65c4");
});

$("path, circle").mouseleave(function(e) {
  Object.keys(states).forEach(i => document.getElementById(i).setAttribute("style", fill="#D3D3D3"));
  document.getElementById("circle60").setAttribute("style", "fill: #D3D3D3;");
  $('#info-box').css('display','none');
  document.getElementById("Pacific").setAttribute("style", "text-shadow: none");
  document.getElementById("Frontier").setAttribute("style", "text-shadow: none");
  document.getElementById("Midwest").setAttribute("style", "text-shadow: none");
  document.getElementById("Southern").setAttribute("style", "text-shadow: none");
  document.getElementById("Atlantic").setAttribute("style", "text-shadow: none");
  document.getElementById("Northeastern").setAttribute("style", "text-shadow: none");
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
