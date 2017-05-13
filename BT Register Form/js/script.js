var i;

for (i=1;i<=31;i++) {
	var day = $('#day').html();
	day += '<option>'+ i + '</option>';
	$('#day').html(day);
	}

for (i=1;i<=12;i++) {
	var month = $('#month').html();
	month += '<option>' + i + '</option>';
	$('#month').html(month);
	}


for (i=1950;i<=2005;i++) {
	var year = $('#year').html();
	year += '<option>' + i + '</option>';
	$('#year').html(year);
	}

var decode;
var decodeArr = [];	
var title = [];
var info = [];
var html = '';
$(function(){
	decode = decodeURIComponent(location.search).substr(1);
		decodeArr = decode.split('&');
		for (i=0;i<decodeArr.length;i++) {
			title[i] = (decodeArr[i].split('='))[0];
			info[i] = (decodeArr[i].split('='))[1].replace(/\+/g, ' ');
		}
		
		var dateIndex = title.indexOf('Day');
		var monthIndex = title.indexOf('Month');
		var yearIndex = title.indexOf('Year');
		title[dateIndex] = "Date of birth";
		title[monthIndex] = title [yearIndex] = '';
		info[dateIndex] = info[dateIndex] + '/' + info[monthIndex] + '/' + info[yearIndex];
		for (var j=0;j<decodeArr.length;j++) {
			if (title[j] != '') {
				html += ('<span class="title">' + title[j] + '</span>' + ': ' + info[j] + '<br>');
			}
		}
		$('.info').html(html);
}) 
		
