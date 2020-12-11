function slideTabbedMenu()
{
  $("#feedItemLi").click(function(){
    animateWidth(1)
  });

  $("#datasetItemLi").click(function(){
   animateWidth(2);
  });

  $("#scriptsItemLi").click(function(){
   animateWidth(3);
  });

  $("#notebooksItemLi").click(function(){
   animateWidth(4);
  });

  $("#annotationItemLi").click(function(){
   animateWidth(5);
  });
  $("#environmentItemLi").click(function(){
   animateWidth(6);
  });

  $("#papaersItemLi").click(function(){
   animateWidth(7);
  });
}
var currentSlide=1;
function animateWidth(incomingSlide)
{
  diff=currentSlide-incomingSlide
  margin=(Math.abs(diff)*100);

  if(diff<0) //sliding forward
  {
    $("#contentBoxContents_tabbedMenuBarBody").animate({"margin-left":"-="+margin+"%"},"medium");
  }
  else
  {
    $("#contentBoxContents_tabbedMenuBarBody").animate({"margin-left":"+="+margin+"%"},"medium");
  }
  currentSlide=incomingSlide
}
function showBuilderOptions()
{
	$("#builder,#dropDownDiv").mouseenter(function(){
			 $("#dropDownDiv").stop().slideDown();
	 });
	 $("#builder,#dropDownDiv").mouseleave(function(){
			 $("#dropDownDiv").stop().slideUp();
	 });

}
$(document).ready(function(){
	slideTabbedMenu();
  showBuilderOptions();

});
