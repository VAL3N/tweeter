/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const userInfoLocation = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  };

  const createTweetElement = function(userData) {

    const user = { 
      name: userData.user.name, 
      avatar: userData.user.avatar, 
      handle: userData.user.handle, 
      tweetText: userData.content.text, 
      createdAt: userData.created_at 
    };

    $('.tweet header .user').text(user.name);
    $('.tweet header .user-handle').text(user.handle);
    $('.tweet .tweet-content').text(user.tweetText);
    $('.tweet footer h6').text(user.createdAt);

    console.log(user.name);
    return user;
  }

  console.log(createTweetElement(userInfoLocation));
  
  // const newTweet = (user) => {
  //   $('.tweet header div p').text(user.name);
  //   $('.tweet header p').text(user.handle);
  //   $('.tweet .tweet-content').text(user.tweetText);
  //   $('.tweet footer h6').text(user.createdAt);
  // }


  // new code
  // const newTweet = function(user) {
  //   for (const user of userInfoLocation) {
  //     $('.tweet header .user').text(user.name);
  //     $('.tweet header .user-handle').text(user.handle);
  //     $('.tweet .tweet-content').text(user.tweetText);
  //     $('.tweet footer h6').text(user.createdAt);
  //   }
  // }

});