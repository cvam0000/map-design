
backedcollength = document.getElementById("sixth-container-inner").children.length;
var backedcol = document.getElementById("sixth-container-inner").children;
var backedcurrentid = [0, 1, 2]
var backedprevid=0

function FirstLoad(backedcol, backedcurrentid) {

    for (let index = 0; index < backedcurrentid.length; index++) {
        if (index == 0) {
            backedcol[index].classList.add("sixth-first")
            backedcol[index].style.display = "flex";
        }
        else if (index == 1) {
            backedcol[index].classList.add("sixth-second")
            backedcol[index].style.display = "flex";
        }
        else if (index == 2) {
            backedcol[index].classList.add("sixth-third")
            backedcol[index].style.display = "flex";
        }
    }
}

function ShowColumn(backedcol,backedcurrentid)
{
    for (let index = 0; index < backedcurrentid.length; index++) {
        if (index == 0) {
            backedcol[backedcurrentid[index]].classList.add("sixth-first","sixth-container-animation")
            backedcol[backedcurrentid[index]].style.display = "flex";
        }
        else if (index == 1) {
            backedcol[backedcurrentid[index]].classList.add("sixth-second","sixth-container-animation")
            backedcol[backedcurrentid[index]].style.display = "flex";
        }
        else if (index == 2) {
            backedcol[backedcurrentid[index]].classList.add("sixth-third","sixth-container-animation")
            backedcol[backedcurrentid[index]].style.display = "flex";
        }
    }
    
}
function HideColumn(backedcol, backedcurrentid) {

    for (let index = 0; index < backedcurrentid.length; index++) {
        if (index == 0) {
            backedcol[backedcurrentid[index]].classList.remove("sixth-first","sixth-container-animation")
            backedcol[backedcurrentid[index]].style.display = "none"
        }
        else if (index == 1) {
            backedcol[backedcurrentid[index]].classList.remove("sixth-second","sixth-container-animation")
            backedcol[backedcurrentid[index]].style.display = "none"

        }
        else if (index == 2) {
            backedcol[backedcurrentid[index]].classList.remove("sixth-third","sixth-container-animation")
            backedcol[backedcurrentid[index]].style.display = "none"

        }

    }
}

function Backedbutton(direction) {
    if (direction == "prev") {
        HideColumn(backedcol, backedcurrentid)
        if (backedcurrentid[0] == 0) {
            var backedcount = backedcurrentid.length
            for (let index = 0; index < backedcurrentid.length; index++) {
                backedcurrentid[index] = backedcollength - backedcount
                backedcount -= 1
            }
            ShowColumn(backedcol, backedcurrentid)
        }
        else {

            for (let index = 0; index < backedcurrentid.length; index++) {
                backedcurrentid[index] -= 1
                if (index == 0) {
                    backedcol[backedcurrentid[index]].classList.add("sixth-first")
                    backedcol[backedcurrentid[index]].style.display = "flex";
                }
                else if (index == 1) {
                    backedcol[backedcurrentid[index]].classList.add("sixth-second")
                    backedcol[backedcurrentid[index]].style.display = "flex";
                }
                else if (index == 2) {
                    backedcol[backedcurrentid[index]].classList.add("sixth-third")
                    backedcol[backedcurrentid[index]].style.display = "flex";
                }
            }
        }
    }
    if (direction == "next") {
        HideColumn(backedcol, backedcurrentid)
        for (let index = 0; index < backedcurrentid.length; index++) {
            backedcurrentid[index] += 1
        }
        if(backedcurrentid[2]===backedcollength)
        {
            backedcurrentid[2]=0
            HideColumn(backedcol, backedprevid)
            backedcurrentid=[0,1,2]
           FirstLoad(backedcol, backedcurrentid)
        }

        else
        {
            ShowColumn(backedcol, backedcurrentid)
            backedprevid=backedcurrentid
        }
        
    }

}


window.onload = () => {
    FirstLoad(backedcol, backedcurrentid)
};

$("#overlay-right").click(function(){
    Backedbutton("next")
  });

  $("#overlay-left").click(function(){
    Backedbutton("prev")
  });