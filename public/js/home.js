var $signup = $('#signup');

var API = {
    getSignUpPage: function() {
        return $.ajax({
          url: "signup",
          type: "GET"
        });
      }
};

var goToSignUpPage = function(event) {
    console.log("here");
    getSignUpPage();
}

$signup.on('click', goToSignUpPage);