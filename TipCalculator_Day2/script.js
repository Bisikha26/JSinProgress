const calculateTip = () => {
    let billamount = document.getElementById("billamt").value;
    let service_quality = document.getElementById("serviceQual").value;
    let no_ofpeople = document.getElementById("peopleamt").value;

    if (billamount === '' || service_quality == 0) {
        alert("Please enter values");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if(no_ofpeople === "" || no_ofpeople <=1) {
        no_ofpeople= 1;
        document.getElementById("each").style.display= "none";
    } else {
        document.getElementById("each").style.display= "block";
    }

    // calculate tip
    let total = (billamount * service_quality) / no_ofpeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2); //only two digits after decimal points

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Hide the tip amout on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//to call calculateTip function
document.getElementById("calculate").onclick=function(){
    calculateTip();
}