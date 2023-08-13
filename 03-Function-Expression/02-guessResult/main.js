const showModal = alert;
showModal("Execute modal"); // * จะ alert คำว่า Execute modal เพราะว่าshowModal เก็บ function alert ไว้



const showModal2 = alert();
showModal2("Execute modal"); // ** จะ alert คำว่า undefined เพราะที่การประกาศตัวแปรshowModal2 ไม่ใช่การเก็บค่าfunction แต่เป็นการcall function
