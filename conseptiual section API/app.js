const allPlyers = () =>{
    document.getElementById("player-container").innerHTML=''
    document.getElementById("spanner").style.display='block'
    const searchValue = document.getElementById("search-box").value
    const url =`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        if(data.player == null){
            document.getElementById("spanner").style.display='block'
        }else{
            document.getElementById("spanner").style.display='none'
            showPlayerDetails(data.player)
        }
    })
    // console.log(searchBoxText)
};

const showPlayerDetails = (players) =>{ 
for(const player of players){
    const parent = document.getElementById("player-container")
    
    const div = document.createElement("div")
    div.innerHTML=`
    <div class="card broder my-5">
                      <div class="pro-pic">
                          <img class="w-25" src="${player.strCutout}" alt="">
                      </div>
                      <h2 class="text-denger">Name:${player.strPlayer}</h2>
                      <h5>Country:${player.strNationality}</h5>
                      <div class="allbutton">
                          <button class="btn btn-danger">Delete</button>
                          <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                      </div>
                  </div>
    `
    parent.appendChild(div) 
}
}


const details = (id) =>{
    const url =`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => setDetails(data.players[0]))
}

const setDetails = (info)=>{
    console.log(info.strGender)
    if(info.strGender == "Male"){
        document.getElementById("Meal").style.display='block'
        document.getElementById("Femail").style.display='none'
    }else{
        document.getElementById("Meal").style.display='none'
        document.getElementById("Femail").style.display='block'
    }

    const detailsContainer = document.getElementById("details-container")
    detailsContainer.innerHTML=`
    <div class="pro-pic">
    <img class="w-25" src="${info.strCutout}" alt="">
    </div>
    <h2 class="text-denger">Name:${info.strPlayer}</h2>
    `

}