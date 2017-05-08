var question0 = {
	question: "Iphone do hãng nào sản xuất?",
	ans1: "Samsung",
	ans2: "Apple",
	ans3: "HTC",
	ans4: "LG",
	correct: "ans2"
};

var question1 = {
	question: "Iphone 5 có màn hình bao nhiêu inch?",
	ans1: "3,5 inch",
	ans2: "4 inch",
	ans3: "4,7 inch",
	ans4: "5 inch",
	correct: "ans2"
};

var question2 = {
	question: "Iphone 6s có ram mấy GB?",
	ans1: "1 GB",
	ans2: "2 GB",
	ans3: "3 GB",
	ans4: "4 GB",
	correct: "ans2"
};

var question3= {
	question: "Ai là CEO của Apple?",
	ans1: "Elon Musk",
	ans2: "Bill Gates",
	ans3: "Tim Cook",
	ans4: "Steve Job",
	correct: "ans3"
};

var question4 = {
	question: "Ai là CEO của Tesla",
	ans1: "Elon Musk",
	ans2: "Bill Gates",
	ans3: "Tim Cook",
	ans4: "Steve Job",
	correct: "ans1"
};

var arrQues = [question0,question1,question2,question3,question4];


var flag;
var score = 0;
var count = 1;
var preScore = 0;
var numberClick = 0;
var max = 4;
var answer = document.querySelectorAll(".answer div");

function start() {
	window.location.href = "quiz.html";
}

function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.background = "#BADDBC";
	}
}

function changeColor(button) {
		resetColor();
		button.style.background = "#f1ff92";
		flag = button.id;
}

function mark(dapAn) {
	if (dapAn == arrQues[count - 1].correct) {
		score += 1;
	}
	return score;
}

function nextQuestion() {
	preScore = mark(flag);
	resetColor();
	numberClick++;
	if (numberClick <= max) {
		document.getElementById("ques").innerHTML = arrQues[count].question;
		document.getElementById("ans1").innerHTML = arrQues[count].ans1;
		document.getElementById("ans2").innerHTML = arrQues[count].ans2;
		document.getElementById("ans3").innerHTML = arrQues[count].ans3;
		document.getElementById("ans4").innerHTML = arrQues[count].ans4;
		if(count == max)
			document.getElementById("button-next").innerHTML = "Result";
		count++;
	} else {
		if (score == arrQues.length) {
			window.location.href = "win.html";
		} else {
			alert('Bạn trả lời đúng: '+score+'/5 câu hỏi.');
			window.location.href = "again.html";
		}
	}
}

var Theme = 1;
function changeTheme(){
	if (Theme == 1){
		$('.quiz').css('background-color', '#ffb84d');
   		$('.quiz').css('color', 'blue');
   		$('body').css('background','#33ff77');
		Theme -= 1;
	}
		
	else if (Theme == 0){
		$('.quiz').css('background-color', '#0e664d');
   		$('.quiz').css('color', '#000');
   		$('body').css('background','#0e664d');
   		Theme += 1;
   	}
   }