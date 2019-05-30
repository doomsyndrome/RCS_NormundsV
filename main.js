
function addtext() {
  var newtext = document.myform.inputtext.value;
  document.myform.outputtext.value += newtext;

}

// function addTask() {
//   var inputField = $('#input');
//   var liElement = '<p>';
//   var date = new Date();
//   liElement += '<h5>' + date + '</h5>';
//   liElement += '<p>' + inputField.val() + '</p>'
//   liElement += '</p>';
//   $('#output').append(liElement);
//   inputField.val('');
// }
// $('#send2').click(addTask);

// $('#task-name').keypress(function (event) {
// if (event.which == 13) {
//     addTask();
// }
// });








// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }

