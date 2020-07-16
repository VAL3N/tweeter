/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // new code
  const renderTweets = function(data) {
    for (const tweet of data) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };



  // const createTweetElement = function(data) {

  //   // const user = { 
  //   //   name: data.user.name, 
  //   //   avatar: data.user.avatar, 
  //   //   handle: data.user.handle, 
  //   //   tweetText: data.content.text, 
  //   //   createdAt: data.created_at 
  //   // };

  //   $('.tweet header .name').text(data.user.name);
  //   $('.tweet header .user-handle').text(data.user.handle);
  //   $('.tweet .tweet-content').text(data.content.text);
  //   $('.tweet footer h6').text(data.created_at);

  // };




  const createTweetElement = function(data) {
    const newTweet = 
      `<article class="new-created-tweet">

        <header class="username-background">
          <div class="center-user">
            <img class="user" src=${data.user.avatars}">
            <p class="name">${data.user.name}</p>
          </div>
          <p class="user-handle">${data.user.handle}</p>

        </header>

        <p class="tweet-content">
          ${data.content.text}
        </p>

        <footer class="center-footer">
            <h6 class="h6-element">${data.created_at}</h6>
            <h6 class="h6-element">reactions</h6>
        </footer>

      </article>`;
  
    return $(newTweet);
    
  }

    renderTweets(data);



    $('#new-tweet-form').submit(function(event) {

      event.preventDefault();

      if ($('textarea').val().length === 0 ) {
        alert('Your text area is empty!');
      } else if ($("textarea").val().length > 140) {
        alert('Woah there cowboy, you\'ve gone too far!');
      } else {
      $.ajax({ 
        url: '/tweets/', 
        method: 'POST', 
        data: $(this).find('textarea').serialize() 
      })
      .then(function(res) {
        console.log('Success: ', res);
        loadTweets(res);
      });
      
    }

    });


    const loadTweets = function() {
      $.ajax({ url: '/tweets/', method: 'GET' })
      .then(function (res) {
        console.log(res);
        $('.tweet').empty();
        renderTweets(res);
      });
    }
});
