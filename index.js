$(document).ready(function() {
 $("#add-todo").click(function() {
     var todoBlock = $(this).closest("#new-block")
     var descript = todoBlock(this).find("#new-descript")
     var timesEstimate = todoBlock.find("#new-eastimate")
     
     $("ul").append("<li> input type='checkbox'/>"+descript.value()+"<span class=new-estimate>"+timesEstimate.val()+" units</span></li>")
     
     descript.val("")
     timeEstimate.val("")
 })
})