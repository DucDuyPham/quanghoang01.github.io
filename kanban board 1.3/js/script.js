var COLUMN_TYPE = ['todo', 'doing', 'done'];

var DB = {		// Lay du lieu, luu du lieu vao localStorage
    getData: function () {
        if (typeof(Storage) !== "undefined") {
            var data;

            try {
                data = JSON.parse(localStorage.getItem('list')) || {};

            } catch (error) {
                data = {};
            }

            return data;
        } else {
            alert('Sorry! No Web Storage support');
            return {};
        }
    },
    setData: function (data) {
        localStorage.setItem('list', JSON.stringify(data));
    }
};
var list = DB.getData();

var app={ 
	newJob :function(e, type, input){		//type: id cua cot
		var jobName = $(input).val();
		var event=window.event || e; 
		if (event.keyCode ==13 && jobName.trim() !=''){
			this.addJobToList(type,jobName);
			$(input).val('');
			if(!list[type]) list[type] = [];
			list[type].push(jobName);
			DB.setData(list);

		}
	},
	addJobToList: function(type, jobName){
		var item='<li class="list-group-item collection-item" >'+ jobName +'<span class="badge" onclick="app.deleteJob(this)"><i class="glyphicon glyphicon-trash"></i></span></li>';

		$('#'+type).append(item);
	},

	deleteJob :function(span){	
	var modal = $('#myModal');
	$('#myModal').modal('show');
	var item= $(span).parent();
	$('.btn-success').off('click');
	$('.btn-success').on('click', function(){
        var columnType = item.parent().attr('id');
        var itemPosition = $('#' + columnType + ' .collection-item').index(item);
		list[columnType].splice(itemPosition, 1);
        DB.setData(list);

        item.remove();
	});
		
	}

}

$( function() {
        COLUMN_TYPE.forEach(function (type) {
            var columnType = list[type] || [];
            columnType.forEach(function (jobName) {
                app.addJobToList(type, jobName);
            });
        });

    $( ".sorted-list").sortable({
    connectWith: ".sorted-list",

    placeholder: 'ui-state-highlight',
    start:function(event,ui){
    $(ui.item[0]).addClass('dragging');
    },
    stop:function(event,ui){
    $(ui.item[0]).removeClass('dragging');
    }
    });
    } );