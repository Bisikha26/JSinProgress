let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    // let time = `${hrs}:${mins}:${secs}`
    console.log(date)
    let period = "AM";

    // converting 24 hour format to 12 hour format
    if (hrs == 0) {
        hrs = 12;
    } else if (hrs >= 12) {
        hrs = hrs - 12;
        period = "PM";
    }

    // concat 0 infront of the number if hour is less than 10
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let time = `${hrs} : ${mins} : ${secs} ${period}`;
    document.getElementById("clock").innerText = time;
    setTimeout(clock, 1000);

}

clock();
