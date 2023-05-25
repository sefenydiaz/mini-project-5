//LeAnne waz here 2023

function getTime() {
    var currentTime = (dayjs().format('MMMM DD[,] YYYY [at] HH:mm:ss'));
    console.log(currentTime);

}



setInterval(getTime, 1000)
