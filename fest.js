function processform(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let college=document.getElementById("college").value;
    let participantId=document.getElementById("participant-id").value;

    
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);
    console.log("College: " + college);
    console.log("Participant ID: " + participantId);

    document.getElementById("ChangeText").innerText="Welcome, "+name;

count++;
    document.getElementById("count").innerText=count+" participants have registered till now";
}

function hideemail(){
    let email=document.getElementById("email");
    email.type="password";
}