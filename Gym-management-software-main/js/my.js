$(document).ready(function(){
    $("#signup-show").click(function () {
        $("#CreateAccount").toggleClass("active");
        $(".registration-form").toggle();
        $(".Login-form").toggle();
        // alert('Button clicked!');
})



    // Fetch the content of the title.txt file (formatted as JSON)
    // $.get('path/to/title.txt', function(data) {
       
        $.get('title.txt', function(data) {

        // Parse the JSON data
        var parsedData = JSON.parse(data);

        // Set the title from the parsed JSON
        $('#pageTitle').text(parsedData.pageTitle);

        // Set the page name
        $('#pageName').text(parsedData.pageName);

        // // Set the logo image and make it visible
        // $('#logo').attr('src', parsedData.logo).show();

        // // Set the header image and make it visible
        // $('#headerImage').attr('src', parsedData.image).show();
    }).fail(function() {
        // Handle any error in case the file fails to load
        $('#pageTitle').text("Error: Could not load title.");
        $('#pageName').text("Error: Could not load page name.");
    });










    });

