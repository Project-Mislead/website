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
  "Illinois": ["Gillian Mui", "gillian_mui.jpg", "Gillian Mui is a junior at Whitney Young High School in Chicago, Illinois. She's passionate about working towards education equity and public health equity, especially women's health and mental health. Gillian is a Student Voice ambassador and an ambassador for Gabriel's Light, a suicide prevention awareness and anti-bullying nonprofit. Gillian is currently interning at Planned Parenthood Votes and is the public relations manager of Chicago Teen Mentors, which provides free tutoring for economically disadvantaged kids.", "gillianmui7770@gmail.com"],
  "Montana": ["Gallage Ariyaratne", "gallage_ari.jpg", "Gallage Ariyaratne is a senior at Montana State University- Bozeman with Sri-Lankan roots. He is also a researcher in cancer biology and enzymology.  He is the founder and president of the UNA-USA Montana State chapter. Gallage has written to The Exponent and has been the author for about three books. His latest book “We”- Case study on loneliness is at several worlds renowned -libraries and medical schools. Gallage is currently advocating for few startups in the US and Sri-Lanka.", "dineethanipun@gmail.com>"],
  "Ohio": ["Dhriti Sharma", "dhriti_sharma.jpg", "Dhriti Sharma is a recent graduate of University of Cincinnati at Ohio. She pursued her degree in Biology and a minor in Communication. During her undergrad, she was an undergraduate researcher where she conducted studies on mosquito dehydration patterns and its effect on their physiology. She has also volunteered and held leadership positions at several organization including Crossroad Health Center, Crisis Textline, Bearcat Buddies, Mercy Health, and Healing Center.", "sharmadt100@gmail.com"]
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
    document.getElementById("info_statename").innerHTML = "Director of " + id
    document.getElementById("info_name").innerHTML = curr_info[0]

    document.getElementById("info_bio").innerHTML = curr_info[2]

    document.getElementById("info_img").src = "./assets/img/team/" + curr_info[1];
    document.getElementById("info_img").alt = curr_info[0];

    document.getElementById("info_mail").href = "mailto:" + curr_info[3];
    document.getElementById("info_mail2").href = "mailto:" + curr_info[3];
    document.getElementById("info_mail2").innerHTML = curr_info[3];
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
