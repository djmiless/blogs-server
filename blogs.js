const express = require("express");
const Pusher = require("pusher");
require("dotenv").config()

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER,
    useTLS: process.env.PUSHER_USE_TLS
  });

const server = express();

//routes
server.get("/create-article", function(request, response){
    pusher.trigger("blogs", "new-post", {
        post_title: "New Nigeria",
        post_content: "This is a new Nigeria",
        post_summary: "Nigeria ia great country",
        post_author: "Lai Mohammed",
        post_date: new Date().getTime()
    })

    response.send({});
})






server.listen(process.env.PORT || 3000, () => console.log(`Server is listening`))

