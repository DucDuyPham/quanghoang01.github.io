var app={ 
	newJob :function(e, type, input){
		var jobName = $(input).val();
		var event=window.event || e; 
		if (event.keyCode ==13 && jobName.trim() !=''){
			this.addJobToList(type,jobName);
			$(input).val('');

		}
	},
	addJobToList: function(type, jobName){
		var item='<li class="list-group-item collection-item" >'+ jobName +'<span class="badge" onclick="app.deleteJob(this)"><i class="glyphicon glyphicon-trash"></i></li></span>';

		$('#'+type).append(item);
	},

	deleteJob :function(span){	
	var modal = $('#myModal');
	$('#myModal').modal('show');
	var item= $(span).parent();
	$('#btn-delete').off('click');
	$('.btn-success').on('click', function(){
		item.remove();
	});
		
	}


}