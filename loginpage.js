console.log("Working");
function checkPassword(str)
{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
function loginEventHandler(e)
{
    e.preventDefault();
    console.log("hello")
    var userName=document.getElementById("username").value;
    var userPass=document.getElementById("password").value;
    
    var errorMsg=document.getElementById("errorMsg");
    errorMsg="";

    var flag=false;
    if(userName=="")
    {
        alert("username req");
        errorMsg.innerHTML+="Username field can't be empty";
        console.log(errorMsg);
        flag=true;
        userName.className="form-control border border-danger";
        //userName.value="This field cant be empty";
        
    }
    if(userPass=="")
    {
        alert("password req");
        errorMsg.innerHTML+="Password field can't be empty";
        errorMsg+="<br/>"
        userPass.className="form-control border border-danger";
        flag=true;
        //userPass.innerHTML="cant be empty";
    }

    if(userPass!="")
    {
        if(checkPassword(userPass)==false)
        {
            alert("strong password required");
            flag=true;
            //userPass.innerHTML="weak password";
            errorMsg.innerHTML+="Password should be min 8 characters ,with atleast a symbol,upper and lower case letters and a number"
        }
        

    }
    if(flag==false)
    {
        window.location.href="blog-layout.html"
    }
}