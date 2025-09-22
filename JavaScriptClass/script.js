function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
    let name = document.ContactForm.name.value;
    let email = document.ContactForm.email.value;
    let mobile = document.ContactForm.mobile.value;
    let gender = document.ContactForm.gender.value;
    let country = document.ContactForm.country.value;
    let hobbies = [];
    let checkboxes = document.getElementsByClassName("hobbies[]");
    for(let i=0; i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            hobbies.push(checkboxes[i].value);
        }
    }
    let nameErr = emailErr = mobileErr = genderErr = countryErr = hobbiesErr = true;

    // Validate name
    if (name === "") {
        printError("nameErr", "Please enter a valid name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email
    if (name === "") {
        printError("emailErr", "Please enter a valid email");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Prevent form submission if there's an error
    if (nameErr||emailErr|| mobileErr || genderErr || countryErr || hobbiesErr) {
        return false;
    }

    // No errors, form is valid
    return true;
}
