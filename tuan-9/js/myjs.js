
check = () =>{
    var uname = document.getElementById('uname').value; 
    var pwd = document.getElementById('pwd').value;
    var ptn = /^BN-\d{5}$/g.test(uname); 
    var currentDate = new Date();
    var appointmentDate = new Date(document.getElementById('NK').value)
    let date = new Date(appointmentDate);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formattedDate = day + '/' + month + '/' + year;
     if (uname==""||pwd==""||appointmentDate==""){
        alert("hay nhat thong tin con trong");
    }
    else{
        if (ptn == false) {
        alert('nhập lại ma benh nhan');
    }
    var pts = /^\w{6,}$/g.test(pwd);
    if (pts == false) {
        alert('nhập lại mat khau');
    }
    if ( appointmentDate<currentDate ) {
        alert('ngay kham phai lon hon ngay hien tai');
    }
   }
   var dichVuCheckbox = document.getElementsByTagName('input');
   var check1=dichVuCheckbox[3].checked;
   var check2=dichVuCheckbox[4].checked;
   var check3=dichVuCheckbox[5].checked;
   var phuThu = 0;
   if(check1||check2||check3){
   if(check1){
       phuThu+=50000;
   }
   if(check2){
       phuThu+=50000;
   }
   if(check3){
       phuThu+=50000;
   }
   }
   else{
    alert("vui long chon loai dich vu");
   }
   phuThu+=50000;
  var serviceTypeSelect = document.getElementById("serviceType");
  var serviceTypeValue = serviceTypeSelect.value;
  var bookingTable = document.getElementById("bookingTable");
  var newRow = bookingTable.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var rowNum = bookingTable.rows.length - 1;
  cell1.innerHTML = rowNum;
  cell2.innerHTML = uname;
  cell3.innerHTML = pwd;
  cell4.innerHTML = formattedDate;
  cell5.innerHTML = phuThu.toLocaleString("vi-VN");
  cell6.innerHTML = serviceTypeValue;
  
}