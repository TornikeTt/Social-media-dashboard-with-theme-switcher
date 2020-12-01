function Change(){
    this.body = document.getElementById("backgroundColor");
    this.circle = document.getElementById("circle")
    this.firstgridBoxes = document.querySelectorAll(".Box")
    /*second grid boxes colors*/
    this.secondgridBoxes_1 = document.querySelector(".facebook-Views")
    this.secondgridBoxes_2 = document.querySelector(".facebook-Like")
    this.secondgridBoxes_3 = document.querySelector(".instagram-Like")
    this.secondgridBoxes_4 = document.querySelector(".instagram-Views")
    this.secondgridBoxes_5 = document.querySelector(".Twitter-Retwwets")
    this.secondgridBoxes_6 = document.querySelector(".Twitter-Like")
    this.secondgridBoxes_7 = document.querySelector(".youtube-Like")
    this.secondgridBoxes_8 = document.querySelector(".YouTube-Views")
    /*second grid boxes colors*/
    this.TextColor = document.querySelectorAll(".c")
    this.number_TopText_Colors = document.querySelectorAll(".c2")
    this.button = document.querySelector(".button")

    this.changeBackground = function(){
        this.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    }
    this.circlePositionChange = function(){
        this.circle.style.marginLeft = "5px"
        this.circle.style.transition = "marginLeft , 0.5s"
        this.circle.style.backgroundColor = "hsl(228, 28%, 20%)";
    }
    this.change_boxes_background_Color = function(){
        this.firstgridBoxes.forEach(x =>  x.style.backgroundColor = "hsl(228, 28%, 20%)")
        /*background color change for second gird*/
        this.secondgridBoxes_1.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_2.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_3.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_4.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_5.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_6.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_7.style.backgroundColor = "hsl(228, 28%, 20%)";
        this.secondgridBoxes_8.style.backgroundColor = "hsl(228, 28%, 20%)";
        /*background color change for second gird*/
    }
    this.changeTextColors = function(){
        this.TextColor.forEach(x => x.style.color = "hsl(228, 34%, 66%)");
        this.number_TopText_Colors.forEach(y => y.style.color = "white" );
    }

    this.changeClick = function(){
        this.button.setAttribute( "onClick", "changed()" )
    }
}

function check() {
    var clicking = new Change();
    clicking.changeBackground();
    clicking.circlePositionChange();
    clicking.change_boxes_background_Color();
    clicking.changeTextColors();
    clicking.changeClick();
}


//changes start and change onClick method
function Changes(){
    this.body = document.getElementById("backgroundColor");
    this.circle = document.getElementById("circle")
    this.firstgridBoxes = document.querySelectorAll(".Box")
    /*second grid boxes colors*/
    this.secondgridBoxes_1 = document.querySelector(".facebook-Views")
    this.secondgridBoxes_2 = document.querySelector(".facebook-Like")
    this.secondgridBoxes_3 = document.querySelector(".instagram-Like")
    this.secondgridBoxes_4 = document.querySelector(".instagram-Views")
    this.secondgridBoxes_5 = document.querySelector(".Twitter-Retwwets")
    this.secondgridBoxes_6 = document.querySelector(".Twitter-Like")
    this.secondgridBoxes_7 = document.querySelector(".youtube-Like")
    this.secondgridBoxes_8 = document.querySelector(".YouTube-Views")
    /*second grid boxes colors*/
    this.TextColor = document.querySelectorAll(".c")
    this.number_TopText_Colors = document.querySelectorAll(".c2")
    this.button = document.querySelector(".button")

    this.changeBackground = function(){
        this.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
    this.circlePositionChange = function(){
        this.circle.style.marginLeft = "30px"
        this.circle.style.transition = "marginLeft , 0.5s"
        this.circle.style.backgroundColor = "white";
    }
    this.change_boxes_background_Color = function(){
        this.firstgridBoxes.forEach(x =>  x.style.backgroundColor = "hsl(227, 47%, 96%)")
        this.secondgridBoxes_1.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_2.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_3.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_4.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_5.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_6.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_7.style.backgroundColor = "hsl(227, 47%, 96%)";
        this.secondgridBoxes_8.style.backgroundColor = "hsl(227, 47%, 96%)";
    }
    this.changeTextColors = function(){
        this.TextColor.forEach(x => x.style.color = "hsl(228, 12%, 44%)");
        this.number_TopText_Colors.forEach(y => y.style.color = "black" );
    }

    this.changeClick = function(){
        this.button.setAttribute( "onClick", "check()" )
    }
}

function changed() {
    var change_clicking = new Changes();
    change_clicking.changeBackground();
    change_clicking.circlePositionChange();
    change_clicking.change_boxes_background_Color();
    change_clicking.changeTextColors();
    change_clicking.changeClick();
}
