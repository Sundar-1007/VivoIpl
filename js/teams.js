let urlData = location.href;
let newUrl = new URL(urlData);
let teamFull = newUrl.searchParams.get("name");


console.log(teamFull)


// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));
var teamMainBox = document.getElementById("container_teams")
var tableTeam = document.getElementById("table-team")

var cnt = 0;





for (var i = 0; i < playersDetails.length; i++) {
  if (teamFull == playersDetails[i].from) {
    var isPlay = ""
    if (playersDetails[i].isPlaying == true) {
      isPlay = "Playing"
    }
    else {
      isPlay = "On Bench"
    }
    var currentP = playersDetails[i].playerName
    cnt++
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${currentP}')"  data-aos="fade-up" data-aos-duration="600"   class="minibox mn2 card">

<img src="${playersDetails[i].playerImg}" class="mainimage card-img-top" alt=""/> 
<div class="dataodcard card-body text-center">

  <p class="text1"> ${playersDetails[i].playerName}   </p>
  <p class="text2"> Worth : ${playersDetails[i].price} </p>
  <p class="text2"> Playing : ${isPlay} </p>
  <p class="text2">
   ${playersDetails[i].description} </p>
 
</div>

</div>

`}
  function makethisinclick(res) {
    window.open(`./playerDetails.html?name=${res}`, "_self")
  }

}
// search for top batsman
var topBatsman = ""
for (var j = 0; j < playersDetails.length; j++) {
  if (playersDetails[j].description == "Batsman" && playersDetails[j].from == teamFull) {
    topBatsman = playersDetails[j].playerName

    break
  }
  else {
    topBatsman = "No Player"
  }
}
// search for top bowler
var topBowler = ""
for (var j = 0; j < playersDetails.length; j++) {
  if (playersDetails[j].description == "Bowler" && playersDetails[j].from == teamFull) {
    topBowler = playersDetails[j].playerName

    break
  }
  else {
    topBowler = "No Player"
  }
}


// team table
console.log(cnt)
teamsDetails.map((item) => {
  if (teamFull == item.sName) {
    $("body").addClass("teams-card");

    return tableTeam.innerHTML += `
 <table>
 <tr>
     <td>Team name</td>
     <td>${item.teamFullName}</td>
 </tr>

 <tr>
     <td>Team icon</td>
     <td> <img src="${item.teamIcon}" class="team-page-icon" alt=""></td>
 </tr>

 <tr>
     <td>Player count</td>
     <td>  ${cnt}</td>
 </tr>

 <tr>
     <td>Top Batsman</td>
     <td>${topBatsman}</td>
 </tr>
 <tr>
     <td>Top Bowler</td>
     <td>${topBowler}</td>
 </tr>

 <tr>
     <td>Won Count</td>
     <td>${item.WonCount}</td>
 </tr>
</table>

`
  }

})

// Find elements containing "(c)" text and add a class
var add = $('.text1:contains("(C)")');
var addclass = add.addClass('my-class');

var newElement = $('<span>').text('C');

  
  // Append the new element to the target element
  $('.my-class').append(newElement);
  $('.my-class span').addClass('cap');
