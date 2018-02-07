$(function(){
	$('#thankarea').css('display','none');
	$('#request-form').submit(function(){
	var checkName  = $('input[name=name]').val();
	var checkEmail = $('input[name=email]').val();
	var err_flg_name    = 0;
	var err_flg_mail    = 0;
	if(!checkName){
			var caution_name = "";	
      			//caution_name = '<div class="caution caution1"><p>Please input name!</p></div>';
			//$('#inputarea').append(caution_name);
			//alert('please write name!');
			err_flg_name = 1;
			//if(err_flg !== 2){
			//$('.caution2').remove();
			//}
			//return false;
		}
		if(!checkEmail){
      			//caution_email = '<div class="caution caution2"><p>Please input email!</p></div>';
			//$('#inputarea').append(caution_email);
			//alert('please write email!');
			//if(err_flg == 0){
			//$('.caution1').remove();
			//}
			//err_flg = 2;
			err_flg_mail = 1;
			//return false;
		}
		if((err_flg_name == 1) && (err_flg_mail == 1)){
      		var caution_name = '<div class="caution caution1"><p>Please input name!</p></div>';
      		var caution_email = '<div class="caution caution2"><p>Please input email!</p></div>';
			$('#inputarea').append(caution_name);
			$('#inputarea').append(caution_email);
			return false;
		}else if((err_flg_name == 0) && (err_flg_mail == 1)){
      		var caution_name = '<div class="caution caution1"><p>Please input name!</p></div>';
      		var caution_email = '<div class="caution caution2"><p>Please input email!</p></div>';
			$('.caution1').remove();
			$('#inputarea').append(caution_email);

			return false;

		}else if((err_flg_name == 1) && (err_flg_mail == 0)){
      		var caution_name = '<div class="caution caution1"><p>Please input name!</p></div>';
      		var caution_email = '<div class="caution caution2"><p>Please input email!</p></div>';
			$('.caution2').remove();
			$('#inputarea').append(caution_name);

			return false;
		}



	});

});
  
