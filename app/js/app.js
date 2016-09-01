$(document).ready(function(){

  clearCache();
  // setView();
  setSummaryList()

}) // close doc ready

var baseUrl = "http://localhost:3000/"
function clearCache() {
  $.ajax({
    // Clears cache
    url: baseUrl,
    cache: false
  })
}

$(window).bind('hashchange', function(e) {
  var hash = '';
  console.log(e)
  // var hashlength = 0;
  // hashwith = '';
  if (location.hash !== '') {
    setDetailPage();
  }
  setSummaryList();
  document.title = 'Boot Badge'
  // hash = location.hash;
  // hashlength = hash.length;

})

function setView(){
  window.location.hash

}

function setSummaryList() {
  $.getJSON( baseUrl, function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'><a href='#" + val.id + "'>" + val.name + "</a></li>" );
      });
      $( "#boots-list").append(items.join( "" ) )
  }); // close get json
}

function setDetailPage(){
  $('#summary').hide();
  var bootId = location.hash.slice(1)
  $.ajax({
    url: baseUrl + "boots/" + bootId + "/badges"
  })
  .done(function(response) {
    console.log(response)
    console.log("In the setDetailPage done")
      $("#boot-badges").load('_badges.html', function(){
        console.log("Tyring to load")
        // $.each( response, function( key , val) {
        $('div.description').html(val.description)
        $('div.points').html(val.total_votes)


        // $('this').show().append( loaded _badges )

    }) // close load
  })  // close done
}  // set detail page function

$("a").on("click", function(e){
  // e.preventDefault();
  // show the boot/:id page
  // pull through object ????
  $("h2").append(val.name)
  // ajax hit server  boot.badges []  .forEach(badge) badge.description badge.total_votes
})
