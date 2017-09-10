$(function() {
    var userLink = 'https://www.codeschool.com/users/MattStubenhofer.json';
    $.ajax({
      url: userLink,
      dataType: 'jsonp',
      success: function(response) {
        displayBadges(response.courses.completed);
      }
    })
  });
  
  function displayBadges(courses) {
    $.each(courses, function() {
      console.log($(this));
      $('#badges').append('<div class="course"><h3>' + this.title + '</h3><img src="' + this.badge + '"><a href="' + this.url + '" class="btn btn-primary" target="_blank">See Course</a></div>');
    });
  }