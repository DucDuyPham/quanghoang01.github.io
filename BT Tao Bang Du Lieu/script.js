var p1 = {
	name: "Phan Quân",
	age: 55,
	avatar: "ava1.jpg",
	email: "phanquan@gmail.com",
	phone: "0988242343",
	gender: "Nam"
}

var p2 = {
	name: "Lê Hà",
	age: 23,
	avatar: "ava2.jpg",
	email: "leha@gmail.com",
	phone: "0987675677",
	gender: "Nữ"
}

var p3 = {
	name: "Lê Chi",
	age: 27,
	avatar: "ava3.jpg",
	email: "lechi@gmail.com",
	phone: "0988343456",
	gender: "Nữ"
}

var p4 = {
	name: "Phan Hải",
	age: 32,
	avatar: "ava4.jpg",
	email: "phanhai@gmail.com",
	phone: "0989345678",
	gender: "Nam"
}

var p5 = {
	name: "Phan Linh",
	age: 30,
	avatar: "ava5.jpg",
	email: "phanlinh@gmail.com",
	phone: "0988344445",
	gender: "Nữ"
}


var arrP = [p1,p2,p3,p4,p5];
var temp = '';
var id = '';

var dem = 0;
function createTable(){
	for (var i = 0; i < arrP.length; i++) {
		temp = '<tr><td class="avatar"><img src="img/'+ arrP[i].avatar +'"></td><td class="name">' + arrP[i].name + '</td><td class="age">' + arrP[i].age + '</td><td class="gender">' + arrP[i].gender + '</td><td class="email">'+ arrP[i].email +'</td><td class="phone">' + arrP[i].phone + '</td></tr>'
		$("tbody").append(temp);
		temp = '';
	}
}
createTable();


$(function() 
    { 
        $("#myTable").tablesorter(); 
    } 
); 
   