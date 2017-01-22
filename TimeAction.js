 function displayTime()
 //<![CDATA[
    {
     var currentDate = new Date();
     var currentHour = currentDate.getHours();
     var currentMinute = currentDate.getMinutes();
     var currentSecond = currentDate.getSeconds();
     currentHour = currentHour % 12;
     currentHour= currentHour ? currentHour : 12; // the hour '0' should be '12'
     var ampm=currentHour <= 12 ? 'PM' : 'AM';
     currentMinute = currentMinute < 10 ? '0'+currentMinute : currentMinute;
     currentSecond = currentSecond <10 ? '0'+currentSecond : currentSecond;
     document.getElementById('timeDiv').innerHTML = currentHour + ':' + currentMinute + ' : ' + currentSecond+' '+ampm;
    }

    window.onload = function ()
    {
     window.setInterval('displayTime()', 1000);
    }
function ShopStatus(msg,work=0){
     var msg="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">"+msg+"</span><span style=\"color:red;\"><b> !!</b></span>";
     var work=work;
     var act ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(0, 100, 255);>\">Today Open</span><span style=\"color:rgb(0, 206, 0);\"><b> !!</b></span>";
     var unact ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">Now Closed</span><span style=\"color:red;\"><b> !!</b></span>";
     var currentDate = new Date();
     var currentHour = currentDate.getHours();
     var currentMinute = currentDate.getMinutes();
     var currentSecond = currentDate.getSeconds();
 if(currentHour > 12)
     currentHour = currentHour % 12;
    document.write(currentHour);
 if(currentHour <= 12)
    currentHour = currentHour;
     currentHour= currentHour ? currentHour : 12; // the hour '0' should be '12'
     var ampm=currentHour <= 12 ? 'PM' : 'AM';
     currentMinute = currentMinute < 10 ? '0'+currentMinute : currentMinute;
     currentSecond = currentSecond <10 ? '0'+currentSecond : currentSecond;
    // add a zero in front of numbers<10
   if(work==1){
   	document.write(msg);
   }else{
   	if(currentHour>12)ampm="PM";
   	if(ampm == "PM" && currentHour < 7){
   		document.write(act);
   		 }else if(ampm == "PM" && currentHour > 11){
   		 	document.write(act+ampm);
   		 	 }else if(ampm == "PM" && currentHour > 6 ){
   		 	 	document.write(unact);
   		 	 	 }else if(ampm == "AM" && currentHour >=9){
   		 	 	 	document.write(act);
   		 	 	 	 }else{
   		 	 	 	 	document.write(unact+" Test Script"+ampm+" YES");
   		 	 	 	 }
   		 	 	 	}
   		 	 	  }
   //]]>
