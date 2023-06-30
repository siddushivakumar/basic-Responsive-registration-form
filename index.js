document.getElementById("getcallbutton").addEventListener("click", logFormData)

function logFormData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phn = document.getElementById("phn").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    console.log("name: " + name);
    console.log("email: " + email);
    console.log("phn: " + phn);
    console.log("date: " + date);
    console.log("time: " + time);

}