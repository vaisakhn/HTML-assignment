function store()
{
	
	var username=document.getElementById('username');
	var email=document.getElementById('email');
	var phone=document.getElementById('phone');
	var date=document.getElementById('date');
	var work=document.getElementById('workexperience');
	var sname;
	if (document.getElementById('Mr.').checked==true) 
	{
     sname ='Mr.';
    }
    else if(document.getElementById('Mrs.').checked==true)
    {
    	sname='Mrs.';
    }
    else if(document.getElementById('Mx.').checked==true)
    {
    	sname='Mx.';
    }
      localStorage.setItem('sname',sname);
	if(username.value!='')
	{
		localStorage.setItem('username',username.value);
	}
	if(email.value!='')
	{
		localStorage.setItem('email',email.value);
	}
	 if(phone.value!='')
	 {
	 	localStorage.setItem('phone',phone.value);
	 }
	 if(date.value!='')
	 {
	 	localStorage.setItem('date',date.value);
	 }
	 if(work.value!='')
	 {
	 	localStorage.setItem('work',work.value);
	 }
}

window.onload = ()=>{
    document.getElementById("storesirname").innerHTML=localStorage.getItem('sname');
	document.getElementById("storeusername").innerHTML= localStorage.getItem('username');
	document.getElementById("storemail").innerHTML=localStorage.getItem('email');
	document.getElementById("storephone").innerHTML=localStorage.getItem('phone');
	document.getElementById("storedate").innerHTML=localStorage.getItem('date');
	document.getElementById("storework").innerHTML=localStorage.getItem('work');
}
