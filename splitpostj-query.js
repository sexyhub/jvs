jQuery(document).ready(function(){
jQuery('.page1').click(function(){
jQuery('.content1').show();
jQuery('.content2').hide();
return false;
});
jQuery('.page2').click(function(){
jQuery('.content1').hide();
jQuery('.content2').show();
return false;
});
});
