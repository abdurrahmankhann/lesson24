function validate() {
    const email = document.getElementById("txtemail").value;
    const pwd = document.getElementById("txtpwd").value;
    const age = document.getElementById("txtage").value;
    let msgbox = document.getElementById("msg");
    let message = "";
    if (email == "") {
        message = "please enter email!";
        msgbox.style.color = "red";

    }
    else if (pwd == "") {
        message = "please enter password!";
        msgbox.style.color = "red";
    }
    else if (age == "") {
        message = "please enter age!";
        msgbox.style.color = "red";
    }
    else {
        message = "login successful...";
        msgbox.style.color = "green";

    }
    msgbox.innerText = message;

}