var feedparser = require('feedparser'),
    request = require('request');

/* GET home page. */
module.exports = function (app) {
    app.route('/api/WordPress').get(function(req, res, next) {
        var blogList = [];
        var url = "http://mikeallisononline.wordpress.com/feed/";
        var feedreq = request(url)
        var feed = new feedparser();
        feedreq.on('error', function (error) {
            // handle any request errors
        });
        feedreq.on('response', function (data) {
            var stream = this;
            if (data.statusCode != 200) return this.emit('error', new Error('Bad status code'));
            stream.pipe(feed);
        });

        feed.on('error', function(error) {
            // always handle errors
        });
        feed.on('readable', function() {
            // This is where the action is!
            var stream = this
                , meta = this.meta // **NOTE** the "meta" is always available in the context of the feedparser instance
                , item;

            while (item = stream.read()) {
                if (blogList.length < 8) {
                    blogList.push(item.title);
                    blogList.push(item.link);
                }
            }
        });
        feed.on('end', function() {
            res.send(blogList);
        });

    });
};
