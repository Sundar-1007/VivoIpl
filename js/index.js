// team and player data
var playerData = [

    {
        "id": 1,
        "playerName": "MS Dhoni (C)",
        "from": "CSK",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 2,
        "playerName": "Ruturaj Gaikwad",
        "from": "CSK",
        "price": "06.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/102.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 3,
        "playerName": "Ravindra Jadeja",
        "from": "CSK",
        "price": "16.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/46.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 4,
        "playerName": "Moeen Ali",
        "from": "CSK",
        "price": "08.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/206.png",
        "playerTeam": "Chennai Super Kings"
    },
    {
        "id": 5,
        "playerName": "Deepak Chahar",
        "from": "CSK",
        "price": "14.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/91.png",
        "playerTeam": "Chennai Super Kings"
    },

    {
        "id": 6,
        "playerName": "Rohit Sharma (C)",
        "from": "MI",
        "price": "14.50 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/107.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 7,
        "playerName": "Suryakumar Yadav",
        "from": "MI",
        "price": "03.03 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/174.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 8,
        "playerName": "Jasprit Bumrah",
        "from": "MI",
        "price": "7.50 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/1124.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 9,
        "playerName": "Jofra Archer",
        "from": "MI",
        "price": "07.20 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/181.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 10,
        "playerName": "Piyush Chawla",
        "from": "MI",
        "price": "01.00 Cr",
        "isPlaying": true,
        "description": "bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/149.png",
        "playerTeam": "Mumbai Indians"
    },
    {
        "id": 11,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "13.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": 'https://assets.iplt20.com/ipl/IPLHeadshot2022/164.png',
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 12,
        "playerName": "Faf Du Plessis (C)",
        "from": "RCB",
        "price": "07.00 cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/94.png",
        "playerTeam": "Royal Challengers Bangalore"
    },

    {
        "id": 13,
        "playerName": "Glenn Maxwell",
        "from": "RCB",
        "price": "10.25 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/282.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 14,
        "playerName": "Mohhamad Siraj",
        "from": "RCB",
        "price": "05.00 cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://assets.iplt20.com/ipl/IPLHeadshot2022/3840.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 15,
        "playerName": "Harshal Patel",
        "from": "RCB",
        "price": "10.75 cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/114.png",
        "playerTeam": "Royal Challengers Bangalore"
    },
    {
        "id": 16,
        "playerName": "David Miller",
        "from": "GT",
        "price": "03.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/128.png",
        "playerTeam": "Gujarat Titans"
    },
    {
        "id": 17,
        "playerName": "Hardik Pandya (C)",
        "from": "GT",
        "price": "15.00 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/54.png",
        "playerTeam": "Gujarat Titans"
    },
    {
        "id": 18,
        "playerName": "Shubman Gill",
        "from": "GT",
        "price": "07.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/62.png",
        "playerTeam": "Gujarat Titans"
    },
    {
        "id": 19,
        "playerName": "Mohammad Shami",
        "from": "GT",
        "price": "06.25 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/47.png",
        "playerTeam": "Gujarat Titans"
    },
    {
        "id": 20,
        "playerName": "KL Rahul (C)",
        "from": "LGT",
        "price": "15.00 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/19.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 21,
        "playerName": "Manan Vohra",
        "from": "LGT",
        "price": "01.10 Cr",
        "isPlaying": false,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/185.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 22,
        "playerName": "Avesh Khan",
        "from": "LGT",
        "price": "10.00 Cr",
        "isPlaying": true,
        "description": "Bowler",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/109.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 23,
        "playerName": "Quinton de Kock",
        "from": "LGT",
        "price": "06.75 Cr",
        "isPlaying": true,
        "description": "Batsman",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/170.png",
        "playerTeam": "Lucknow Super Giants"
    },
    {
        "id": 24,
        "playerName": "Deepak Hooda",
        "from": "LGT",
        "price": "05.75 Cr",
        "isPlaying": true,
        "description": "All-rounder",
        "playerImg": "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2023/215.png",
        "playerTeam": "Lucknow Super Giants"
    }

];

var teamData = [

    {
        "id": 0,
        "teamFullName": "Chennai Super Kings",
        "sName": "CSK",
        "fullSname": "CSK (Chennai Super King)",
        "teamIcon": "https://seeklogo.com/images/I/ipl-chennai-super-kings-logo-E534CFAF4A-seeklogo.com.png",
        "WonCount": 4,
        "backGround": 'url("https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
    },
    {
        "id": 1,
        "teamFullName": "Mumbai Indians",
        "sName": "MI",
        "fullSname": "MI (Mumbai Indians)",
        "teamIcon": "https://seeklogo.com/images/I/ipl-mumbai-indians-logo-5FD6E24965-seeklogo.com.png",
        "WonCount": 5,
        "backGround": 'url("https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
    },
    {
        "id": 2,
        "teamFullName": "Royal Challengers Bangalore",
        "sName": "RCB",
        "fullSname": "RCB (Royal challengers Bangalore)",
        "teamIcon": "https://seeklogo.com/images/R/royal-challengers-bengaluru-logo-A54D45DE4A-seeklogo.com.png",
        "WonCount": 0,
        "backGround": 'url("https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
    },
    {
        "id": 3,
        "teamFullName": "Gujarat Titans",
        "sName": "GT",
        "fullSname": "GT (Gujarat Titans)",
        "teamIcon": "https://seeklogo.com/images/G/gujarat-titans-ipl-logo-6962504B75-seeklogo.com.png",
        "WonCount": 1,
        "backGround": 'url("https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
    },

    {
        "id": 4,
        "teamFullName": "Lucknow Super Giants",
        "sName": "LGT",
        "fullSname": "LGT (Lucknow Super Giants)",
        "teamIcon": "https://seeklogo.com/images/L/lucknow-super-giants-logo-A21952E11E-seeklogo.com.png",
        "WonCount": 0,
        "backGround": 'url("https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaWNrZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")',
    }
];



var addteamclicked = () => {
    window.open("./addteam.html", "_self")
}
var addPlayerClicked = () => {
    window.open("./addplayer.html", "_self")
}





let detailofTeam = [];
let detailOfPlayer = [];
var teamGrid = document.getElementById("container_teams")

if (localStorage.getItem("teamArray") === null)
    localStorage.setItem("teamArray", JSON.stringify(teamData));

if (localStorage.getItem("playerArray") === null)
    localStorage.setItem("playerArray", JSON.stringify(playerData));

detailofTeam = JSON.parse(localStorage.getItem("teamArray"));
detailOfPlayer = JSON.parse(localStorage.getItem("playerArray"));





// search bar code goes here

var suggestArray = [];
for (var i = 0; i < detailofTeam.length; i++) {
    suggestArray.push(detailofTeam[i].sName)

}
let searchBar = document.querySelector(".search-input");
let inputBox = searchBar.querySelector("input");
let suggBox = searchBar.querySelector(".autocom-box");
let icon = searchBar.querySelector(".search-icon");



inputBox.onkeyup = (e) => {
    if (e.keyCode == 13) {
        icon.click()
    }
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {

        emptyArray = suggestArray.filter((data) => {

            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {

            return data = `<li>${data}</li>`;
        });
        searchBar.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {

            allList[i].setAttribute("onclick", "currentLi(this)");
        }
    } else {
        searchBar.classList.remove("active");
    }
}
function currentLi(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {

        window.open(`./teams.html?name=${element.textContent}`, "_self")

    }
    searchBar.classList.remove("active");
}
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

// search bar code ends here

// grid cards for teams goes here

var teamMainBox = document.getElementById("container_teams")
for (var i = 0; i < detailofTeam.length; i++) {
    teamMainBox.innerHTML += `
<div    onclick="makethisinclick('${i}')"  data-aos="fade-up" data-aos-duration='600'  class="card" style="background: ${detailofTeam[i].backGround}">

<img src="${detailofTeam[i].teamIcon}" class="mainimage card-img-top" alt=""/> 
<div class="dataodcard card-body">

  <p class="text-center"> ${detailofTeam[i].teamFullName}   </p>
  <p class="text-center"> Won Count : ${detailofTeam[i].WonCount} </p>
 
</div>

</div>

`

}

function makethisinclick(res) {
    var clickedCard = detailofTeam[res].sName

    window.open(`./teams.html?name=${clickedCard}`, "_self")


}


$('input').on('input', function () {
    if ($(this).val().trim() !== '') {
        $('.autocom-box').show();
    } else {
        $('.autocom-box').hide();
    }
});
