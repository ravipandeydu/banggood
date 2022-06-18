document.querySelector("#signin").addEventListener("submit", loginAccount);
    var usersArr = JSON.parse(localStorage.getItem("usersData"));

    function loginAccount(){
        event.preventDefault();
        var p = [];
        var q = [];
        usersArr.forEach(function(el){
            p.push(el.userEmail);
            q.push(el.userPassword);
            });
            console.log(p);
            console.log(q);
            var x = document.querySelector("#email");
            var y = document.querySelector("#password");

            for(var i = 0; i<q.length; i++){
                if(y.value === q[i] && x.value == p[i]){
                    alert("Login Successful");
                    location.assign("index.html");
                    break;
                }

                else{
                    alert("Incorrect Email or Password");
                    
                }
            }
    }