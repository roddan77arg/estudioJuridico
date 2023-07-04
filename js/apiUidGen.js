$.ajax({
    url: "https://www.uuidtools.com/api/generate/v1",
    success: function(data) {
        // UUID Received!
        console.log(data[0])
    },
    error: function(jqXHR, textStatus, errorThrown) {
        // Something when wrong.
        // You may have exceeded the rate limit (60 requests per minute).
        console.log(jqXHR, textStatus, errorThrown);
    }
});