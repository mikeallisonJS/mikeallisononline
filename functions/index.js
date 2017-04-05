'use strict';

const functions = require('firebase-functions');
const feedparser = require('feedparser');
const request = require('request');

// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions

exports.feed = functions.https.onRequest((req, res) => {
    let blogList = [];
    const url = "http://mikeallisononline.wordpress.com/feed/";
    const feedreq = request(url);
    const feed = new feedparser();
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
        if (blogList.length < 6) {
          blogList.push({title: item.title, url: item.link});
        }
      }
    });
    feed.on('end', function() {
      res.send(blogList);
    });
});
