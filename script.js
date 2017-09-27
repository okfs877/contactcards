$(document).ready(function() {
    $('form').submit(function(){
        var appended ='<button hiddendescription="' + $("#description").val() + '">';
        $('form').children('input:text').each(function(){
            appended+= $(this).val() + " ";
        });
        appended+="<br/>Click for Description!</button>";
        $("#cardholder").append(appended);
        return false;
    });
});
$(document).on("click", "button", function(){
    alert($(this).attr("hiddendescription"));
});