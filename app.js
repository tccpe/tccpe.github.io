$(document).ready(function() {

    var wall_menu_shown=false;
    $(".wall-menu").hide();
    $("#wall-menu-header-close").click(function() {
        $(".wall-menu").hide();
        wall_menu_shown=!wall_menu_shown;
    });
    $("#wall-menu-activate").click(function() {
        if(!wall_menu_shown) {
            $(".wall-menu").show();
            wall_menu_shown=!wall_menu_shown;
        } else if (wall_menu_shown) {
            $(".wall-menu").hide();
            wall_menu_shown=!wall_menu_shown;
        }
    });
    $("#wall-menu-body-reset").click(function() {
        $("#coordinate-x").val("");
        $("#coordinate-y").val("");
        $("#dimension-x").val("");
        $("#dimension-y").val("");
    });

    var boxes = {
        "box1": {
            "size": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            }
        },
        "box2": {
            "size": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            }
        },
        "box3": {
            "size": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            }
        },
        "box4": {
            "size": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            }
        },
        "box5": {
            "size": {
                "x": 0,
                "y": 0
            },
            "pos": {
                "x": 0,
                "y": 0
            }
        },
    };
    $("#wall-menu-body-submit").click(function() {
        const coordinate_x=($("#coordinate-x").val()==NaN?0:Number($("#coordinate-x").val()));
        const coordinate_y=($("#coordinate-y").val()==NaN?0:Number($("#coordinate-y").val()));
        const size_x=($("#dimension-x").val()==NaN?0:Number($("#dimension-x").val()));
        const size_y=($("#dimension-y").val()==NaN?0:Number($("#dimension-y").val()));

        boxes.box1.size.x=size_x;
        boxes.box1.size.y=size_y;
        boxes.box1.pos.x=coordinate_x;
        boxes.box1.pos.y=coordinate_y;

        console.log(boxes.box1);
        start();
    });

    function start() {
        // when window is ready
        $("#coordinate-x").val("");
        $("#coordinate-y").val("");
        $("#dimension-x").val("");
        $("#dimension-y").val("");

        const box=`<div class="box" style="position: absolute; height: ${boxes.box1.size.y*40}px; width: ${boxes.box1.size.x*40}px; left: ${boxes.box1.pos.x+20}px; top: ${boxes.box1.pos.y+20}px"></div>`;

        $(".playground").html($(".playground").html()+box);
    }
    function update() {
        setInterval(function() {

        }, );
    }
});