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

$('#form').on('submit',function(){ 
	var isValid = true;
	$('span').css('padding','5px');

		/*Kiểm tra điều kiện ngày tháng năm sinh */
		if ($('#day').val()== null|| $('#month').val()== null || $('#year').val()== null){
			$('#year').next('span').html('Bạn cần cung cấp đầy đủ ngày sinh.');
			isValid = false;
		} else{
			$('#year').next('span').text('');
		}

		if($('#address').val().trim() == ''){
			$('#address').next('span').html('Bạn chưa nhập địa chỉ.');
			isValid = false;
		}else{
			$('#address').next('span').html('');
		}
		

		/*Kiểm tra điều kiện số điện thoại */
		if ($('#phone').val().match(/^(01[2689]|09|08)[0-9]{8}$/) == null){
			$('#phone').next('span').html('Nhập chính xác số di động của bạn. VD: 01662543456, 0986788888...');
			isValid = false;
		} else{
			$('#phone').next('span').text('');
			
		}
			/*Kiểm tra điều kiện email */
		if ($('#email').val().match(/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/) == null){
			$('#email').next('span').html('Nhập chính xác email của bạn. ex: abc@gmail.com');
			isValid = false;
		} else{
			$('#email').next('span').text('');
			
			
		}			

		/*Kiểm tra điều kiện facebook*/
		if ($('#facebook').val().match(/(?:https?:\/\/)?(?:www\.)?facebook\.com\/.(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-\.]*)/) == null){
			$('#facebook').next('span').html('Nhập chính xác địa chỉ fb của bạn. ex: facebook.com/qh01');
			isValid = false;
		} else{
			$('#facebook').next('span').text('');
		}

		/*Kiểm tra điều kiện password */
		if ($('#password').val().trim() == ''|| $('#password').val().length<6 ){
			$('#password').next('span').html('Nhập mật khẩu tối thiểu 6 ký tự');
			isValid = false;
		} else{
			$('#password').next('span').text('');
		}
	return isValid;
})

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
			info[i] = (decodeArr[i].split('='))[1].replace(/\+/g,' ');
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

	
