function Change(){
    this.body = document.getElementById("backgroundColor");
    this.circle = document.getElementById("circle")
    this.firstgridBoxes = document.querySelectorAll(".Box")
    this.secondgridBoxes = document.querySelectorAll(".box2")
    this.TextColor = document.querySelectorAll(".c")
    this.number_TopText_Colors = document.querySelectorAll(".c2")
    this.button = document.querySelector("button")

    this.changeBackground = function(){
        this.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    }
    this.circlePositionChange = function(){
        this.circle.style.marginLeft = "0px"
        this.circle.style.transition = "marginLeft , 0.5s"
        this.circle.style.backgroundColor = "hsl(228, 28%, 20%)";
    }
    this.change_boxes_background_Color = function(){
        this.firstgridBoxes.forEach(x =>  x.style.backgroundColor = "hsl(228, 28%, 20%)")
        this.secondgridBoxes.forEach(y => y.style.backgroundColor = "hsl(228, 28%, 20%)")
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
    this.secondgridBoxes = document.querySelectorAll(".box2")
    this.TextColor = document.querySelectorAll(".c")
    this.number_TopText_Colors = document.querySelectorAll(".c2")
    this.button = document.querySelector("button")

    this.changeBackground = function(){
        this.body.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
    this.circlePositionChange = function(){
        this.circle.style.marginLeft = "26px"
        this.circle.style.transition = "marginLeft , 0.5s"
        this.circle.style.backgroundColor = "white";
    }
    this.change_boxes_background_Color = function(){
        this.firstgridBoxes.forEach(x =>  x.style.backgroundColor = "hsl(227, 47%, 96%)")
        this.secondgridBoxes.forEach(y => y.style.backgroundColor = "hsl(227, 47%, 96%)")
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
