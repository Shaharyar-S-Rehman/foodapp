// ---------------adminsignup-------------------
let adminSignup = () => {
    let adminName = document.getElementById("adminname");
    let adminEmail = document.getElementById("adminemail");
    let adminCountry = document.getElementById("admincountry");
    let adminCity = document.getElementById("admincity");
    let adminPassword = document.getElementById("adminpassword");
    


    firebase.auth().createUserWithEmailAndPassword(adminEmail.value, adminPassword.value)
        .then((res) => {
            let admin = {
                adminName: adminName.value,
                adminEmail: adminemail.value,
                adminCountry :adminCountry.value,
                adminCity : adminCity.value,
                adminPassword: adminpassword.value
            }

            firebase.database().ref(`users/${res.user.uid}`).set(admin)
                .then(() => {
         
                    alert("welcome Admin")
                    window.location = "dashboard.html"
                   
                })

        })
        .catch((err) => {
            alert("enter correct email",err)
        })
}