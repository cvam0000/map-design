$(".down-arrow-icon").click(function(){
    $(".recent-shutdown-block").slideToggle(400)
    $(".lockdown-stats-table-block").slideToggle(400)
    $(".fa-chevron-down").slideToggle()
    $(".fa-angle-up").slideToggle()
  });

// world-map toggle
$(".fa-toggle-off").click(function(){
    $(".fa-toggle-on").show(50);
    $(".fa-toggle-off").hide(50);
    document.getElementById("india-active").classList.remove("active-map");
    document.getElementById("world-active").classList.add("active-map")
  });

  $(".fa-toggle-on").click(function(){
    $(".fa-toggle-off").show(50);
    $(".fa-toggle-on").hide(50);
    document.getElementById("india-active").classList.add("active-map");
    document.getElementById("world-active").classList.remove("active-map")
  });
// video trigger

  $("#play-btn").click(function () {
     
      // $("#nav-header").css("position","unset");
  
  });
  
  $("#close-btn").click(function () {
      $("#yt-video").fadeOut(400);
      // $("#nav-header").css("position","fixed");
  });

$(".video-play-btn-img").click(function()
{
  $("#yt-video").fadeIn(400);
  $(".youtube-video").attr('src',$(this).attr('data-url'))
})