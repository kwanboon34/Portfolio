window.onload = pageLoad;
var Input_regis = [];

function pageLoad(){
	var form = document.getElementById("myform");
 	form.onsubmit = validateForm;
    
}

function validateForm() {
    var pass = document.forms["myform"]["password"];
    var repass = document.forms["myform"]["retypepassword"];
    if(pass.value == repass.value)
    {
        alert("ตรงแล้วเก่งมาก");
    }
    else if(pass.value != repass.value)
    {
        alert(" ไม่เหมือน นิ้วโดนปุ่มอื่นละสิ ");
        
        return false;
    }
}
