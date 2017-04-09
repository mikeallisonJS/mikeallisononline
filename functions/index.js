'use strict';

// const http = require('http');
const functions = require('firebase-functions');
// const FeedParser = require('feedparser');
//
// exports.feed = functions.https.onRequest((req, res) => {
//   let blogList = [];
//   const options = {
//     host: 'mikeallisononline.wordpress.com',
//     path: 'feed/',
//     port: '443'
//   };
//   let feed = new FeedParser();
//   let wp = http.request(options, (response) => {
//     response.pipe(feed);
//   });
//   wp.end();
//
//   feed.on('error', function (error) {
//     res.status(500).send(error);
//   });
//   feed.on('readable', function () {
//     // This is where the action is!
//     let stream = this;
//     let item;
//
//     while (item = stream.read()) {
//       console.log(item);
//       // if (blogList.length < 6) {
//       //   blogList.push({title: item.title, url: item.link});
//       // }
//     }
//   });
//   feed.on('end', function () {
//     res.send(blogList);
//   });
// });
