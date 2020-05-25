interface ServerRequest {
    txt:string
    settings:Settings
}

interface Settings {
    example:string
}

function queryserver() {
    let text:string = String($('#paste_field').val());
    let jqXHR = $.ajax({
        type: "POST",
        url: "https://ethanzeigler.com:3000/test",
        data: text,
        contentType: "charset=utf-8",
        dataType: "text",
        success: function(data, textStatus, jqXHR)
        {
            console.log(textStatus);
            $('#card-content').empty().append(data.replace("\n", "<br>"));
            $('#response-card').css("display", "initial");
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            console.log(textStatus);
            $('#server_status').empty().append("Something went wrong. If it continues, contact the developer at ethanzeigler (at] g mail dottcom (Why this? <a href='http://www.scrapebox.com/email-scraper'>Email Scrapers.</a>)");
        }
    });
}