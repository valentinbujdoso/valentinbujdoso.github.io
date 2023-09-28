$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    var guestList = "<ul>";
    for (const element of data) {
        guestList += "<li>" + element.first + " " + element.last + "</li>";
    }

    $("#guestList").html(guestList + "</ul>");
}