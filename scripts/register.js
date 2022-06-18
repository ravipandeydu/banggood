document.querySelector("#signup").addEventListener("submit", signupFun);

    var usersArr = JSON.parse(localStorage.getItem("usersData")) || [];

    function signupFun(){
        event.preventDefault();
        
            alert("Regisration Successful");
            var usersObj = {
            userName: signup.name.value,
            userEmail: signup.email.value,
            userPassword: signup.password.value
            }

            usersArr.push(usersObj);
            localStorage.setItem("usersData", JSON.stringify(usersArr));
        
    }
    
