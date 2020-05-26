function queryserver() {
    var count = String($('#course_amt').val());
    var text = String($('#paste_field').val());
    $('#server_status').empty().append("Processing, please be patient...");
    var jqXHR = $.ajax({
        type: "POST",
        url: "http://nossl.ethanzeigler.com:8000/test",
        data: count + text,
        contentType: "charset=utf-8",
        dataType: "text",
        success: function (data, textStatus, jqXHR) {
            console.log(textStatus);
	        $('#server_status').empty().append("Completed successfully.");
            $('#card-content').empty().append(data.replace("\n", "<br>"));
            $('#response-card').css("display", "initial");
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            $('#server_status').empty().append("Something went wrong. If it continues, contact the developer at ethanzeigler (at] g mail dottcom (Why this? <a href='http://www.scrapebox.com/email-scraper'>Email Scrapers.</a>)<br><br>" + textstatus);
        }
    });
}
