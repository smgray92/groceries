$(document).ready(function() {
  $("#lists form").submit(function(event) {
    event.preventDefault();
    var lists = ["item1", "item2", "item3"];
    var sortedList = [];
    // var capLists =[];
    lists.forEach(function(list) {
      var userInput = $("input#" + list).val();
      sortedList.push(userInput);
      // capLists.push(userInput);
      // $("<li>" + list + "</li>").text(userInput);
      // $("." + list).sort(userInput);
      // lists.sort(function(a, b, c) {
      // var item1=a.);
      // var capLists = lists.map(function(list) {
      //   return list.toUpperCase();
      // });

      });

      sortedList.sort();
    // var capLists = lists.map(function(list) {
    //   return list.toUpperCase();
    // });
     sortedList.forEach(function(item){
       $(".item1").append("<li>"+item+"</li>");
     });
      console.log(sortedList);
  $("#output").show();
  });
});
