let urlData = location.href;
let newUrl = new URL(urlData);
let playerUrl = newUrl.searchParams.get("name");
console.log(playerUrl);

// geting data from local storage

teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));

let playerData = document.getElementById("player-details-con");
for (var i = 0; i < playersDetails.length; i++) {
  if (playersDetails[i].playerName == playerUrl) {
    var playingOrN = "";
    if (playersDetails[i].isPlaying == true) {
      playingOrN = "Playing";
    } else {
      playingOrN = "On Bench";
    }
    const trim = playersDetails[i].playerTeam;
    const trimop = trim.trim().replace(/\s+/g, '');
    $("body").addClass('palyerdetails');
    playerData.innerHTML += `

        <div id="player_detail-img" data-aos="fade-down" data-aos-duration="700">
        <img src="${playersDetails[i].playerImg}" alt="">
    </div>
        <div id="new-player-det" data-aos="fade-up" data-aos-duration="700">
        <table>
        <tr>
            <td>Player Name  </td>
            <td>${playersDetails[i].playerName}  </td>
        </tr>
        <tr>
            <td> Team Name </td>
            <td> ${playersDetails[i].playerTeam}  </td>
        </tr>
        <tr>
            <td> Team Code </td>
            <td>${playersDetails[i].from}   </td>
        </tr>
        <tr>
            <td> Worth </td>
            <td>${playersDetails[i].price}  </td>
        </tr>
        <tr>
            <td> Is playing </td>
            <td> ${playingOrN} </td>
        </tr>
    </table>
    </div>
    
        `;
  }
}