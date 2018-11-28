/*global $*/
function pageLoad(){
    $('#calendar').fullCalendar({
        windowResize: resize,
        googleCalendarApiKey: 'AIzaSyCdeBF7AuqWRmy-Xib1ud1UosmT8s3ys0s',
        events: {
              googleCalendarId: 'itd9lh3m8r2frpq6qpfpcqan2k@group.calendar.google.com',
              className: 'gcal-event'
        },
        eventLimit: true,
        eventColor: "rgb(160, 30, 30)",
        eventTextColor: "white",
        themeSystem: "bootstrap4",
        bootstrapFontAwesome: false
    })
    resize(); // make sure at least resized once
}

function resize(view) {
    $('#calendar').fullCalendar('option', 'aspectRatio', $(window).width() / $(window).height());
}