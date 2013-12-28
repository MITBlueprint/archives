$(function() {
	
$('.phone').formatter({
'pattern': '({{999}}) {{999}}-{{9999}}',
'persistent': false
});

$('#dietary').on('change', function(){
var selection = $(this).val();
if (selection == "other") {
	$("#otherdietary").show();
} else { 
	$("#otherdietary").hide();
}
});


});
