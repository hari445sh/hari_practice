function validate() {
    var a = document.getElementById("LoginID").value;
    var b = document.getElementById("password").value;

    if (a == "Harish" && b == "harish")
    {
        window.alert("Login successfully " + Date());
        window.location = "HomePage.html";
        
                return ;
    }
    else
    {
        if (a == "Harish")
        {
            window.alert("Please enter Valid password ");
            return false;
           
        }
        else
        {
            window.alert("please enter Valid LoginID");
            return false;
        }
        return; 
    }
}
function date() {
    document.getElementById('demo').innerHTML = Date();
}