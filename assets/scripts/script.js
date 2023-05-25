//LeAnne waz here 2023

var currentEL = $("#current")//id is current

function getTime() {
    var currentTime = (dayjs().format('MMMM DD[,] YYYY [at] HH:mm:ss a'));

    //place into current element 
    currentEL.textContent = currentTime; 
    console.log(currentTime);
}

setInterval(getTime, 1000)
