var $signup = $('#signup');

// var API = {
//     getSignUpPage: function() {
//         return $.ajax({
//           url: "/signup",
//           type: "GET"
//         });
//       }
// };

// var goToSignUpPage = function(event) {
//     event.preventDefault();
//     console.log("here");
//     API.getSignUpPage();
// }

// $signup.on('click', goToSignUpPage);
$signup.on('click', function(event){ 
    event.preventDefault();
    console.log('click');
    location.replace("/signup");
    //$.ajax("/signup",{
        //type: "GET",
   // })
});
