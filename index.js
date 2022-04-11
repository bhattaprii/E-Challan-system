async function login(usernamefieldid,passwordfieldid,formid,users){
    const uname = document.querySelector(usernamefieldid);
    const password = document.querySelector(passwordfieldid);
    const form = document.querySelector(formid);


    form.addEventListener('submit',function(event){
        event.preventDefault();
        
        console.log(uname.value);
        console.log(password.value);

        const user = users.find(function(currentuser){
            return currentuser.uname === uname.value && currentuser.password === password.value;
            
        });
        console.log(user);
        if(user){
            localStorage.setItem("user",JSON.stringify(user));
            if(user.role==="Admin"){
                window.location.pathname="/admin_page.html"
            }
            else{
                window.location.pathname="/traffic_page.html"
            }
        }
        else{
            alert("use corrrect user");
        }

    });
}

async function getusers(){
    const response = await fetch("http://localhost:3000/users")
    return response.json();
}
async function main(){
    const users = await getusers();
    login("#uname","#password","#login-form",users);
    login("#tuname","#tpassword","#traffic-login-form",users);
}
main();
