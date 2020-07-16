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
  ];

  // new code
  const renderTweets = function(data) {
    for (const tweet of data) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
  };



  const createTweetElement = function(data) {

    let phrase = data.content.text;
    const newDate = new Date(data.created_at);
    // console.log(newDate);
    const today = Date.now();
    const daysAgo = Math.round((today - newDate) / 1000 / 60 / 60 / 24);

    const newTweet =
      $(`<article class="new-created-tweet">

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
            <h6 class="h6-element">${daysAgo} Days ago</h6>
            <h6 class="h6-element">
              <span>
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </span>
          </h6>
        </footer>

      </article>`);

    $(newTweet.find('.tweet-content')).text(phrase);
  
    return $(newTweet);
    
  };

  renderTweets(data);


  const loadTweets = function() {
    $.ajax({ url: '/tweets/', method: 'GET' })
    .then(function (res) {
      //console.log(res);
      $('.tweet').empty();
      renderTweets(res);
    });
    $('#tweet-text').val('');
    $('.counter').val(140);
  }

  loadTweets();

  $('#new-tweet-form').submit(function(event) {

    event.preventDefault();
      
    if ($('textarea').val().length === 0 ) {
      $('.alert-2').slideDown(1000);
      $('.alert').slideUp(1000);
    } else if ($("textarea").val().length > 140) {
      $('.alert').slideDown(1000);
      $('.alert-2').slideUp(1000);
    } else {
      $('.alert').slideUp(1000);
      $('.alert-2').slideUp(1000);
    $.ajax({ 
      url: '/tweets/', 
      method: 'POST', 
      data: $(this).find('textarea').serialize() 
    })
    .then(function(res) {
      //console.log('Success: ', res);
      loadTweets(res);
    });
      
    }

  });


});
