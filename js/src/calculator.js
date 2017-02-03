

var calculate = function() {

	// get the amount
	var amount = $(".amount").val().replace(/[^0-9.]/g,"");

	// determine rate
	var rate = $('.discount:checked').val();
	
	var loan_info = $.loanInfo({
		'amount': amount,
		'term': '60m',
		'rate': rate
	});
	
	var loan_info_2 = $.loanInfo({
		'amount': amount,
		'term': '60m',
		'rate': '2.95'
	});

	var savings = loan_info_2.total_interest - loan_info.total_interest;

	var output = '<h3>Your Savings: <span>$' + savings.toFixed(2) + '</span></h3><h3>Your Payment: <span>$' + loan_info.payment_amount_formatted + '</span></h3>';

	$(".results").html( output );
}


$(function(){

	calculate();
	
	$(".amount").keyup(function(){
		calculate();
	})
	
	$(".discount").click(function(){
		calculate();
	})

	$(".numbers-only").keyup(function(){
		var fixed=$(this).val().replace(/[^0-9.]/g,"");
		$(this).val( fixed );
	});

});

