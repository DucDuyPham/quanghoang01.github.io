function reset(x){
	document.getElementById('result').value = x;
}
function display(x) {
	document.getElementById('result').value += x;
}
function math(){
	reset(eval(document.getElementById('result').value).toFixed(2));
}

function giaithua(){
	var a = document.getElementById('result').value;
	var gt = 1;
	if(a==0){ gt = 1}
	if (a<0 || a % 1 != 0) {gt = "Math Error";}
	else
		{for (var i = 1; i <= a; i++) 
			{
			gt  *= i;
			}
		}
	document.getElementById('result').value = gt;
}

function cbh(){
	var a = document.getElementById('result').value;
	var cbh = '';
	if(a < 0){cbh = "Math Error"}
		else{
	cbh = Math.sqrt(parseFloat(document.getElementById('result').value)).toFixed(2)}
	document.getElementById('result').value = cbh;
}

function binhphuong(){
	document.getElementById('result').value = (parseFloat(document.getElementById('result').value))*(parseFloat(document.getElementById('result').value))
}