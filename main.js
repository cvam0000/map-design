$(".down-arrow-icon").click(function(){
    $(".recent-shutdown-block").toggle(100)
    $(".lockdown-stats-table-block").toggle(100)
    $(".fa-chevron-down").toggle(100)
    $(".fa-angle-up").toggle(100)
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