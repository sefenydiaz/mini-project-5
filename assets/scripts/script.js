//LeAnne waz here 2023

var currentEL = $("#current"); //id is current

function getTime() {
    var currentTime = (dayjs().format('MMMM DD[,] YYYY [at] HH:mm:ss a'));

    //place into current element 
    //currentEL.innerHTML = currentTime; 
    console.log(currentTime);
    //console.log(typeof(currentTime));
    currentEL.text(currentTime);
    //console.log(currentEL.text)
}
   

setInterval(getTime, 1000);
