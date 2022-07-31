/*-- Document Ready Starts --*/
$(document).ready(function () {

    var myTimer;
    var currentTime = 30;
    var totalScore = 0;
    var creamctr1 = 0;
    var creamctr2 = 0;
    var creamctr3 = 0;
    var myfinalctr = 0;
    var facialbubblesCtr1 = 0;
    var facialbubblesCtr2 = 0;
    var facialbubblesCtr3 = 0;
    var facialbubblesCtr4 = 0;
    var facialbubblesCtr5 = 0;
    var facialbubblesCtr6 = 0;
    var facialbubblesCtr7 = 0;
    var facialbubblesCtr8 = 0;
    var facialbubblesCtr9 = 0;
    var facialbubblesCtr10 = 0;
    var facialbubblesCtr11 = 0;
    var facialbubblesCtr12 = 0;

    var isMobileCtr1 = 0;
    var isMobileCircleCtr1 = 0;
    var isMobilehandImg1Ctr1 = 0;
    var isMobileCircle2Ctr1 = 0;

    $("#playgame").hide();
    $('#gamescreen').hide();
    $("#litebg").hide();
    $("#mygame").show();

    $("#play").bind("click", function () {
        $('#cream').hide();
        $('#arrow').hide();
        $('.lasttag').hide();

        setTimeout(function () {
            tabfunction();
            $(".facialbubbles").show();
            $('#gamescreen').show();
            $('#startscreen').hide();
            $('#audiobgm').show();
            $('#showertap').css("pointer-events", "auto");
            $('#showertap').show();
            $('#showerarrow').show();
            $("#topscreen").fadeIn("slow");
        }, 600);

        $('#centerbox, #play, #strcreem').animate({
            top: 368,
            left: 233,
            width: 5,
            height: 3

        }, {
            duration: 1000
        })

        $("#logo").animate({
            top: 444,
            left: 106,
            width: 1,
            height: 1
        }, {
            duration: 1000
        })
    });

    for (var i = 1; i < 4; i++) {
        $("<div/>", {
            'id': 'circle' + i,
            'class': 'circleStyle'
        }).appendTo('#gamescreen');

        $("<div/>", {
            'id': 'circleMobile',
            'class': 'circleMobileStyle'
        }).appendTo('#gamescreen');

        $("<div/>", {
            'id': 'creamportion' + i,
            'class': 'creamportionstyle'
        }).appendTo('#gamescreen');
    }


    function facialbubbles() {
        for (var i = 1; i < 20; i++) {
            $("<div/>", {
                'id': 'facialbubbles' + i,
                'class': 'facialbubbles'
            }).appendTo('#faceboxcream');
        }

        $("<div/>", {
            'id': 'facialbubblesMobile',
            'class': 'facialbubblesMobile'
        }).appendTo('#faceboxcream');

    }

    facialbubbles();

    $("<div/>", {
        'id': 'score',
        'class': 'scoreStyle',
        'html': '00'
    }).appendTo('#topscreen');

    $("<div/>", {
        'id': 'time',
        'class': 'scoreStyle',
        'html': '00 : 00'
    }).appendTo('#topscreen');

    $("<div/>", {
        'id': 'scoretx',
        'class': 'scoretxStyle',
        'html': 'SCORE'
    }).appendTo('#topscreen');

    $("<div/>", {
        'id': 'timetx',
        'class': 'scoretxStyle',
        'html': 'TIME'
    }).appendTo('#topscreen');

    $("<div/>", {
        'id': 'startbox',
        'class': 'startbox',
        'html': 'GAME START'
    }).appendTo('#mygame');

    $("<div/>", {
        'id': 'timeupbox',
        'class': 'timeupbox',
        'html': 'TIME\'S UP'
    }).appendTo('#mygame');

    $("<div/>", {
        'id': 'gamecream',
        'class': 'gamecream'
    }).appendTo('#gamescreen');

    $("<div/>", {
        'id': 'daycream',
        'class': 'daycream'
    }).appendTo('#gamescreen');

    $("<div/>", {
        'id': 'gamearrow',
        'class': 'gamearrow gamearroimage'
    }).appendTo('#gamescreen');

    $("<div/>", {
        'id': 'tagtxt',
        'class': 'tagtxt'
    }).appendTo('#gamescreen');


    $("#cream").bind("click", function () {
        $("#litebg").show();
        $("#bomtxt").hide();
        $('#cream').hide();
        $("#arrow").hide();

        setTimeout(function () {
            $('#litebg').hide();
            $("#startbox").show();

            $("#bomtxt").show();
            showStartDiv();

        }, 1000);



    });

    function createhand() {
        $("<div/>", {
            'id': 'handimg',
            'class': 'handimgstyle'
        }).appendTo('#faceboxcream');
    }

    createhand();

    $("<div/>", {
        'id': 'showertap',
        'class': 'showertap'
    }).appendTo('#faceboxcream');

    $("<div/>", {
        'id': 'showerarrow',
        'class': 'showerarrow showeraimg'
    }).appendTo('#gamescreen');

    $("<div/>", {
        'id': 'bottomtxt',
        'class': 'bottomtxt',
        'html': 'TIME\'S UP'
    }).appendTo('#playgame');


    $("<div/>", {
        'id': 'centerbox1',
        'class': 'centerbox1',
        'html': 'YOUR SCORE'
    }).appendTo('#scorepanel');

    $("<div/>", {
        'id': 'replaytxt',
        'class': 'replaytxt',
        'html': 'CONTINUE'
    }).appendTo('#replay');

    $("<div/>", {
        'id': 'lasttag',
        'class': 'lasttag',
    }).appendTo('#gamescreen');

    function tabdraggable() {

        $('#showertap').draggable({

            scroll: false,
            zIndex: 100,
            revert: function (p_bDropped) {

                if (!p_bDropped) {

                } else {


                }
            },
            create: function (event, ui) {


            },
            start: function (event, ui) {

                try {

                } catch (error) {

                }


            },
            drag: function (event, ui) {

                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    if (collision("showertap", "facialbubblesMobile") == true) {
                        isMobileCtr1++;
                        if (isMobileCtr1 == 1) {
                            $("#facialbubbles1").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 20) {
                            $("#facialbubbles2").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 40) {
                            $("#facialbubbles3").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 60) {
                            $("#facialbubbles4").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 80) {
                            $("#facialbubbles5").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 100) {
                            $("#facialbubbles6").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 120) {
                            $("#facialbubbles7").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 140) {
                            $("#facialbubbles8").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 160) {
                            $("#facialbubbles9").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 180) {
                            $("#facialbubbles10").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 200) {
                            $("#facialbubbles11").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 220) {
                            $("#facialbubbles12").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 240) {
                            $("#facialbubbles13").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 260) {
                            $("#facialbubbles14").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 280) {
                            $("#facialbubbles15").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 300) {
                            $("#facialbubbles16").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 320) {
                            $("#facialbubbles17").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 340) {
                            $("#facialbubbles18").addClass("mydeactive");
                        }
                        if (isMobileCtr1 == 360) {
                            $("#facialbubbles19").addClass("mydeactive");
                        }

                        if (isMobileCtr1 == 361) {
                            $('#showertap').css("pointer-events", "none");
                            $('#showertap').hide();
                            text_150();
                            totalScore = totalScore + 150;
                            updateScore();
                            setTimeout(function () {
                                $('#cream').show();
                                $("#arrow").show();
                                $(".lasttag").hide();
                                $("#bomtxt").show();
                            }, 600);

                        }

                    }
                } else {

                    if (collision("showertap", "facialbubbles1") == true) {
                        $("#facialbubbles1").addClass("mydeactive");
                        $("#facialbubbles2").addClass("mydeactive");
                    } else if (collision("showertap", "facialbubbles2") == true) {
                        $("#facialbubbles2").addClass("mydeactive");
                    } else if (collision("showertap", "facialbubbles3") == true) {
                        $("#facialbubbles3").addClass("mydeactive");
                        $("#facialbubbles10").addClass("mydeactive");

                    } else if (collision("showertap", "facialbubbles4") == true) {
                        $("#facialbubbles4").addClass("mydeactive");
                        $("#facialbubbles5").addClass("mydeactive");

                    } else if (collision("showertap", "facialbubbles5") == true) {

                    } else if (collision("showertap", "facialbubbles6") == true) {
                        $("#facialbubbles6").addClass("mydeactive");

                    } else if (collision("showertap", "facialbubbles7") == true) {
                        $("#facialbubbles7").addClass("mydeactive");
                    } else if (collision("showertap", "facialbubbles8") == true) {
                        $("#facialbubbles8").addClass("mydeactive");
                        $("#facialbubbles13").addClass("mydeactive");
                        $("#facialbubbles14").addClass("mydeactive");
                        $("#facialbubbles15").addClass("mydeactive");
                        $("#facialbubbles16").addClass("mydeactive");
                        $("#facialbubbles17").addClass("mydeactive");
                        $("#facialbubbles18").addClass("mydeactive");
                        $("#facialbubbles19").addClass("mydeactive");
                        $("#facialbubbles12").addClass("mydeactive");

                    } else if (collision("showertap", "facialbubbles9") == true) {
                        $("#facialbubbles9").addClass("mydeactive");
                        $("#facialbubbles11").addClass("mydeactive");

                    } else if (collision("showertap", "facialbubbles10") == true) {

                    } else if (collision("showertap", "facialbubbles11") == true) {

                    } else if (collision("showertap", "facialbubbles12") == true) {
                        $("#facialbubbles12").addClass("mydeactive");
                    } else if (collision("showertap", "facialbubbles13") == true) {

                    } else if (collision("showertap", "facialbubbles14") == true) {

                    } else if (collision("showertap", "facialbubbles15") == true) {

                    } else if (collision("showertap", "facialbubbles16") == true) {

                    } else if (collision("showertap", "facialbubbles17") == true) {

                    } else if (collision("showertap", "facialbubbles18") == true) {

                    }
                    var newmyctr = 0;
                    for (var i = 1; i <= 19; i++) {
                        if ($("#facialbubbles" + i).css("opacity") == 0.1) {
                            newmyctr++;
                            if (newmyctr >= 19) {
                                myfinalctr++;
                                if (myfinalctr == 1) {
                                    $('#showertap').css("pointer-events", "none");
                                    $('#showertap').hide();
                                    text_150();
                                    totalScore = totalScore + 150;
                                    updateScore();
                                    setTimeout(function () {
                                        // $("#scorepanel").show();
                                        $('#cream').show();
                                        $("#arrow").show();
                                        $(".lasttag").hide();
                                        $("#bomtxt").show();
                                    }, 600);
                                }

                            }
                        }

                    }

                }

                var changeLeft = ui.position.left;
                var newLeft = changeLeft / scaleStage().split(",")[0]; //newScale u can get jquery
                var changeTop = ui.position.top;
                var newTop = changeTop / scaleStage().split(",")[0]; //newScale u can get jquery
                ui.position.left = newLeft;
                ui.position.top = newTop;

                $('body').mouseleave(function () {
                    $('body').mouseup();
                });

            },
            stop: function (event, ui) {

            }
        });

    }

    function showStartDiv() {
        $("#startbox").animate({
            left: "0px"
        }, 500, function () {
            $("#startbox").delay(800).animate({
                left: "500px"
            }, 500, function () {
                $('#gamecream').show();
                $("#gamearrow").show();
                $("#startbox").hide();
                $("#startbox").css("left", "-910px");
                startTimer();
            });
        });

    }

    $("#gamecream").bind("mousedown", function () {
        $("#gamearrow").hide();
        draggable();

        // alert("Wait, work in progress");
    });



    function startTimer() {
        myTimer = setInterval(function () {
            currentTime = currentTime - 1;
            if (currentTime < 10) {
                $("#time").html("00 : 0" + currentTime);
            } else {
                $("#time").html("00 : " + currentTime);
            }

            if (currentTime == 0) {
                clearInterval(myTimer);
                showTimeup();

            }
        }, 1000);
    }

    function showTimeup() {
        $("#timeupbox").animate({
            left: "0px"
        }, 500, function () {
            $("#timeupbox").delay(800).animate({
                left: "500px"
            }, 500, function () {

                $("#scorepanel").show();
                $("#gamecream").hide();
                $("#score").hide();
                $("#time").hide();
                $("#arrow").hide();
                $("#handimg").hide();
                $("#topscreen").removeClass("topscreen");
                $("#scoretx").hide();
                $("#timetx").hide();
                $("#audio").hide();

            });
        });

    }

    function collision(div1, div2) {
        $div1 = $("#" + div1);
        $div2 = $("#" + div2);
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }



    function draggable() {

        $('#gamecream').draggable({
            //containment:,
            scroll: false,
            zIndex: 100,
            revert: function (p_bDropped) {
                ////console.log("p_bDropped: is droped obj $(this) is drag item");
                if (!p_bDropped) {


                } else {


                }
            },
            create: function (event, ui) {


            },
            start: function (event, ui) {

                try {

                } catch (error) {

                }


            },
            drag: function (event, ui) {
                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    if (collision("gamecream", "circleMobile") == true) {
                        isMobileCircleCtr1++;
                        if (isMobileCircleCtr1 == 10) {
                            $("#creamportion1").show();
                        }
                        if (isMobileCircleCtr1 == 30) {
                            $("#creamportion2").show();
                        }
                        if (isMobileCircleCtr1 == 50) {
                            $("#creamportion3").show();

                            try {
                                $('#gamecream').mouseup();
                            } catch (error) {

                            }
                            $('#gamecream').css("pointer-events", "none");

                            text_100();
                            totalScore = 250;
                            $("#score").html(totalScore);

                            $("#bomtxt").hide();
                            $("#tagtxt").show();

                            try {
                                $('#gamecream').animate({
                                    left: 38,
                                    top: 499,
                                }, {
                                    duration: 1000
                                });

                                $("#arrow").show();
                                $("#handimg").show();

                            } catch (error) {

                            }

                        }


                    }
                } else {



                    if (collision("gamecream", "circle1") == true) {
                        creamctr1 = 1;
                        $("#creamportion1").show();
                    } else if (collision("gamecream", "circle2") == true) {
                        creamctr2 = 1;
                        $("#creamportion2").show();
                    } else if (collision("gamecream", "circle3") == true) {
                        creamctr3 = 1;
                        $("#creamportion3").show();
                    }

                    var creamctrSum = creamctr1 + creamctr2 + creamctr3;

                    if (creamctrSum == 3) {
                        try {
                            $('#gamecream').mouseup();
                        } catch (error) {

                        }
                        $('#gamecream').css("pointer-events", "none");

                        text_100();
                        totalScore = 250;
                        $("#score").html(totalScore);


                        $("#bomtxt").hide();
                        $("#tagtxt").show();

                        try {
                            $('#gamecream').animate({
                                left: 38,
                                top: 499,
                            }, {
                                duration: 1000
                            });

                            $("#arrow").show();
                            $("#handimg").show();

                        } catch (error) {

                        }
                    }

                }
                var changeLeft = ui.position.left;

                var newLeft = changeLeft / scaleStage().split(",")[0]; //newScale u can get jquery

                var changeTop = ui.position.top;
                var newTop = changeTop / scaleStage().split(",")[0]; //newScale u can get jquery
                ui.position.left = newLeft;
                ui.position.top = newTop;

                $('body').mouseleave(function () {
                    $('body').mouseup();
                });

            },
            stop: function (event, ui) {

            }
        });



    }


    $("#daycream").bind("mousedown", function () {

        $("#gamearrow").hide();
        daycreamdraggable();

        // alert("Wait, work in progress");
    });

    var demiset = 0;
    function daycreamdraggable() {

        $('#daycream').draggable({
            //containment:,
            scroll: false,
            zIndex: 100,
            revert: function (p_bDropped) {
                ////console.log("p_bDropped: is droped obj $(this) is drag item");
                if (!p_bDropped) {


                } else {


                }
            },
            create: function (event, ui) {


            },
            start: function (event, ui) {

                try {

                } catch (error) {

                }


            },
            drag: function (event, ui) {
                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    if (collision("daycream", "circleMobile") == true) {
                        isMobileCircle2Ctr1++;
                        if (isMobileCircle2Ctr1 == 10) {
                            $("#creamportion1").css("opacity", "1");
                        }
                        if (isMobileCircle2Ctr1 == 30) {
                            $("#creamportion2").css("opacity", "1");
                        }
                        if (isMobileCircle2Ctr1 == 50) {
                            $("#creamportion3").css("opacity", "1");

                            try {
                                $('#daycream').mouseup();
                            } catch (error) {

                            }
                            $('#daycream').css("pointer-events", "none");
                            text_200();
                            totalScore = totalScore + 200;
                            //console.log("testingscore::" + totalScore);
                            updateScore();
                            $("#bomtxt").hide();
                            $("#tagtxt").show();

                            //console.log("set.......")
                            $("#arrow").show();
                            $("#handimg").show();
                            $('#handimg').animate({
                                left: 153,
                                top: 286
                            });
                            $("#handimg").css("display", "block");
                            $("#handimg").css("pointer-events", "auto");
                            try {

                                $('#daycream').animate({
                                    left: 38,
                                    top: 499,
                                }, {
                                    duration: 1000
                                });

                            } catch (error) {
                            }

                        }

                    }
                } else {


                    if (collision("daycream", "circle1") == true) {
                        //console.log("11")
                        creamctr1 = 1;
                        $("#creamportion1").show().css("opacity", "1");
                    } else if (collision("daycream", "circle2") == true) {
                        //console.log("22")
                        creamctr2 = 1;
                        $("#creamportion2").css("opacity", "1");
                    } else if (collision("daycream", "circle3") == true) {
                        //console.log("33")
                        creamctr3 = 1;
                        $("#creamportion3").css("opacity", "1");
                    }

                    var creamctrSum = creamctr1 + creamctr2 + creamctr3;
                    //console.log("44")
                    if (creamctrSum == 3) {
                        demiset++;
                        if (demiset == 1) {
                            try {
                                $('#daycream').mouseup();
                            } catch (error) {

                            }
                            $('#daycream').css("pointer-events", "none");
                            text_200();
                            totalScore = totalScore + 200;
                            //console.log("testingscore::" + totalScore);
                            updateScore();
                            $("#bomtxt").hide();
                            $("#tagtxt").show();

                            //console.log("set.......")
                            $("#arrow").show();
                            $("#handimg").show();
                            $('#handimg').animate({
                                left: 153,
                                top: 286
                            });
                            $("#handimg").css("display", "block");
                            $("#handimg").css("pointer-events", "auto");
                            try {
                                $('#daycream').animate({
                                    left: 38,
                                    top: 499,
                                }, {
                                    duration: 1000
                                });

                            } catch (error) {
                            }


                        }


                    }

                }

                var changeLeft = ui.position.left;

                var newLeft = changeLeft / scaleStage().split(",")[0]; //newScale u can get jquery

                var changeTop = ui.position.top;
                var newTop = changeTop / scaleStage().split(",")[0]; //newScale u can get jquery
                ui.position.left = newLeft;
                ui.position.top = newTop;

                $('body').mouseleave(function () {
                    $('body').mouseup();
                });

            },
            stop: function (event, ui) {

            }
        });



    }

    $("#handimg").bind("mousedown", function () {
        handdraggable();
        $("#arrow").hide();
        $(".facialbubbles").show();
    });


    function handdraggable() {

        $('#handimg').draggable({
            //containment:,
            scroll: false,
            zIndex: 100,
            revert: function (p_bDropped) {
                ////console.log("p_bDropped: is droped obj $(this) is drag item");
                if (!p_bDropped) {
                    // //console.log("revert the div")
                    // $(this).css("zIndex", "100");
                    // $(this).animate({ top: parseFloat($(this).attr('original-top')), left: parseFloat($(this).attr('original-left')) }, 300, function () {

                    // });
                } else {
                    // //console.log("droped on::" + p_bDropped.attr("id") + "-dragItem-" + $(this).attr("id"));

                    // chkDropCtr++;

                }
            },
            create: function (event, ui) {


            },
            start: function (event, ui) {

                try {

                } catch (error) {

                }


            },
            drag: function (event, ui) {

                var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                if (isMobile) {

                    if (collision("handimg", "facialbubblesMobile") == true) {
                        isMobilehandImg1Ctr1++;

                        if (isMobilehandImg1Ctr1 == 5) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                            $("#facialbubbles1").addClass("myhanddeactive");
                        }
                        if (isMobilehandImg1Ctr1 == 30) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                            $("#facialbubbles2").addClass("myhanddeactive");
                        }

                        if (isMobilehandImg1Ctr1 == 50) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();

                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();

                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles3").addClass("myhanddeactive");
                            $("#facialbubbles4").addClass("myhanddeactive");
                        }

                        if (isMobilehandImg1Ctr1 == 70) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();

                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();

                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles5").addClass("myhanddeactive");
                            $("#facialbubbles6").addClass("myhanddeactive");
                            $("#facialbubbles7").addClass("myhanddeactive");
                        }
                        if (isMobilehandImg1Ctr1 == 90) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();

                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();

                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles8").addClass("myhanddeactive");
                            $("#facialbubbles9").addClass("myhanddeactive");
                            $("#facialbubbles10").addClass("myhanddeactive");
                            for (var i = 1; i < 4; i++) {
                                $("#circle" + i).css("opacity", "0.5");
                                $("#creamportion" + i).css("opacity", "0.5");
                            }
                        }
                        if (isMobilehandImg1Ctr1 == 110) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();

                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();

                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles11").addClass("myhanddeactive");
                            $("#facialbubbles12").addClass("myhanddeactive");
                            $("#facialbubbles13").addClass("myhanddeactive");
                        }
                        if (isMobilehandImg1Ctr1 == 140) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();

                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();

                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles14").addClass("myhanddeactive");
                            $("#facialbubbles15").addClass("myhanddeactive");
                            $("#facialbubbles16").addClass("myhanddeactive");
                            for (var i = 1; i < 4; i++) {
                                $("#circle" + i).css("opacity", "0");
                                $("#creamportion" + i).css("opacity", "0");
                            }
                        }

                        if (isMobilehandImg1Ctr1 == 170) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();

                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();

                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles17").addClass("myhanddeactive");
                            $("#facialbubbles18").addClass("myhanddeactive");
                            $("#facialbubbles19").addClass("myhanddeactive");


                        }

                        if (isMobilehandImg1Ctr1 == 190) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                        }
                        if (isMobilehandImg1Ctr1 == 210) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                        }
                        if (isMobilehandImg1Ctr1 == 230) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                        }
                        if (isMobilehandImg1Ctr1 == 250) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            // $('#daycream').animate({
                            //     width: 52,
                            //     height: 139,
                            //     left: 392,
                            //     top: 521
                            // });

                            $("#daycream").show();
                            $("#daycream").css("display", "block");
                            $("#daycream").css("pointer-events", "auto");
                            $('#handimg').animate({
                                left: 153,
                                top: 284,
                            }, {
                                duration: 1000
                            });

                            daycreamfunction();


                            $('#gamecream').css("pointer-events", "none").hide();
                            $("#handimg").hide();

                        }

                    }
                } else {

                    if (collision("handimg", "facialbubbles1") == true) {
                        facialbubblesCtr1++;
                        if (facialbubblesCtr1 == 5) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                            $("#facialbubbles1").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr1 == 15) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                            $("#facialbubbles2").addClass("myhanddeactive");
                        }
                    } else if (collision("handimg", "facialbubbles2") == true) {
                        facialbubblesCtr12++;
                        if (facialbubblesCtr2 == 5) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();

                            $("#facialbubbles2").addClass("myhanddeactive");
                        }

                    } else if (collision("handimg", "facialbubbles3") == true) {
                        facialbubblesCtr3++;
                        if (facialbubblesCtr3 == 5) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles3").addClass("myhanddeactive");
                        }

                        if (facialbubblesCtr3 == 15) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles10").addClass("myhanddeactive");
                        }
                    } else if (collision("handimg", "facialbubbles4") == true) {
                        facialbubblesCtr4++;
                        if (facialbubblesCtr4 == 5) {
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles4").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr4 == 15) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles5").addClass("myhanddeactive");
                        }

                    } else if (collision("handimg", "facialbubbles5") == true) {

                    } else if (collision("handimg", "facialbubbles6") == true) {
                        facialbubblesCtr6++;
                        if (facialbubblesCtr6 == 5) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles6").addClass("myhanddeactive");
                        }


                    } else if (collision("handimg", "facialbubbles7") == true) {
                        facialbubblesCtr7++;
                        if (facialbubblesCtr7 == 5) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles7").addClass("myhanddeactive");
                        }

                    } else if (collision("handimg", "facialbubbles8") == true) {
                        facialbubblesCtr8++;


                        if (facialbubblesCtr8 == 3) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles8").addClass("myhanddeactive");

                            for (var i = 1; i < 4; i++) {
                                $("#circle" + i).css("opacity", "0.5");
                                $("#creamportion" + i).css("opacity", "0.5");
                            }

                        }

                        if (facialbubblesCtr8 == 8) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles13").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr8 == 16) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles14").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr8 == 24) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles15").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr8 == 32) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles16").addClass("myhanddeactive");

                            for (var i = 1; i < 4; i++) {
                                $("#circle" + i).css("opacity", "0");
                                $("#creamportion" + i).css("opacity", "0");
                            }
                        }
                        if (facialbubblesCtr8 == 40) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles17").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr8 == 48) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles18").addClass("myhanddeactive");
                        }
                        if (facialbubblesCtr8 == 56) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            $("#facialbubbles19").addClass("myhanddeactive");
                        }

                        if (facialbubblesCtr8 == 70) {
                            text_100();
                            totalScore = totalScore + 100;
                            updateScore();
                            $("#facialbubbles12").addClass("myhanddeactive");
                        }

                        if (facialbubblesCtr8 == 90) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_15();
                            totalScore = totalScore + 15;
                            updateScore();
                        }
                        if (facialbubblesCtr8 == 100) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                        }
                        if (facialbubblesCtr8 == 110) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                        }
                        if (facialbubblesCtr8 == 120) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                        }

                    } else if (collision("handimg", "facialbubbles9") == true) {
                        facialbubblesCtr9++;
                        if (facialbubblesCtr9 == 5) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            $("#facialbubbles9").addClass("myhanddeactive");
                        }

                        if (facialbubblesCtr9 == 10) {
                            text_20();
                            totalScore = totalScore + 20;
                            updateScore();
                            $("#facialbubbles11").addClass("myhanddeactive");
                        }
                    } else if (collision("handimg", "facialbubbles10") == true) {

                    } else if (collision("handimg", "facialbubbles11") == true) {

                    } else if (collision("handimg", "facialbubbles12") == true) {
                        facialbubblesCtr12++;
                        if (facialbubblesCtr12 == 5) {
                            text_10();
                            totalScore = totalScore + 10;
                            updateScore();
                            $("#facialbubbles12").addClass("myhanddeactive");
                        }
                    } else if (collision("handimg", "facialbubbles13") == true) {

                    } else if (collision("handimg", "facialbubbles14") == true) {

                    } else if (collision("handimg", "facialbubbles15") == true) {

                    } else if (collision("handimg", "facialbubbles16") == true) {

                    } else if (collision("handimg", "facialbubbles17") == true) {

                    } else if (collision("handimg", "facialbubbles18") == true) {

                    }
                    var myctr = 0;

                    for (var i = 1; i <= 19; i++) {
                        if ($("#facialbubbles" + i).css("opacity") == 0) {
                            myctr++;
                            if (myctr >= 19) {
                                //console.log("-----------")
                                // $('#daycream').animate({
                                //     width: 52,
                                //     height: 139,
                                //     left: 392,
                                //     top: 521
                                // });

                                $("#daycream").show();
                                $("#daycream").css("display", "block");
                                $("#daycream").css("pointer-events", "auto");
                                $('#handimg').animate({
                                    left: 153,
                                    top: 284,
                                }, {
                                    duration: 1000
                                });

                                daycreamfunction();


                                $('#gamecream').css("pointer-events", "none").hide();
                                $("#handimg").hide();

                            }
                        }

                    }
                }
                var changeLeft = ui.position.left;
                var newLeft = changeLeft / scaleStage().split(",")[0]; //newScale u can get jquery
                var changeTop = ui.position.top;
                var newTop = changeTop / scaleStage().split(",")[0]; //newScale u can get jquery
                ui.position.left = newLeft;
                ui.position.top = newTop;

                $('body').mouseleave(function () {
                    $('body').mouseup();
                });

            },
            stop: function (event, ui) {
                // //console.log("draggable stop");
            }
        });



    }


    var timupctr = 0;

    function daycreamfunction() {

        $("#gamearrow").show();
        for (var i = 1; i < 4; i++) {
            $("#circle" + i).show().css("opacity", "1");
            $("#creamportion" + i).show();
        }
        timupctr++;
        if (timupctr == 2) {

            for (var i = 1; i < 4; i++) {
                $("#circle" + i).hide();
                $("#creamportion" + i).hide();
            }
            $('#gamecream').css("pointer-events", "none");
            $("#girl").addClass("finalgirl");
            $("#gamearrow").hide();
            setTimeout(function () {
                $("#scorepanel").show();
            }, 2000);
        }
        isMobilehandImg1Ctr1 = 0;
        creamctr1 = 0;
        creamctr2 = 0;
        creamctr3 = 0;
        facialbubblesCtr1 = 0;
        facialbubblesCtr2 = 0;
        facialbubblesCtr3 = 0;
        facialbubblesCtr4 = 0;
        facialbubblesCtr5 = 0;
        facialbubblesCtr6 = 0;
        facialbubblesCtr7 = 0;
        facialbubblesCtr8 = 0;
        facialbubblesCtr9 = 0;
        facialbubblesCtr10 = 0;
        facialbubblesCtr11 = 0;
        facialbubblesCtr12 = 0;
        for (var i = 1; i <= 19; i++) {
            $("#facialbubbles" + i).removeClass("myhanddeactive");
        }
    }


    $("#replay").bind("click", function () {

        resetgame();

        $('#centerbox').animate({
            left: 0,
            top: 0,
            width: 500,
            height: 720

        }, {
            duration: 100
        })
        $('#play').animate({
            top: 567,
            left: 174,
            width: 150,
            height: 150,

        }, {
            duration: 100
        })
        $('#strcreem').animate({
            left: 369,
            top: 506,
            width: 95,
            height: 197

        }, {
            duration: 100
        })
        $("#logo").animate({
            width: 120,
            height: 120,
            left: 61,
            top: 81
        }, {
            duration: 100
        })

        $("#mygame").show();
        $("#startscreen").show();
        $("#scorepanel").hide();
        $('#gamescreen').hide();
        $("#litebg").hide();

    });

    $("#audiobgm").bind("click", playbgm);
    $("#pauseaudiobgm").bind("click", pausebgm);
    var objPlayPauseMusic = document.createElement("audio");
    objPlayPauseMusic.src = "media/audio/bgm.mp3";
    objPlayPauseMusic.addEventListener('ended', playbgm)

    function tabfunction() {
        $("#showertap").show();
        $("#showerarrow").show();
        $("#handimg").hide();

        // $("#girl").addClass("finalgirl");


        $(".lasttag").fadeIn();

        $("#showertap").bind("mousedown", function () {
            tabdraggable();
            $("#showerarrow").hide();

        })

    }

    function playbgm() {
        $("#pauseaudiobgm").show();
        $("#audiobgm").hide();
        objPlayPauseMusic.play();
    }

    function pausebgm() {
        objPlayPauseMusic.pause();
        $("#pauseaudiobgm").hide();
        $("#audiobgm").show();
    }

    function text_200() {
        $("#text_200").show();
        $("#text_200").animate({
            top: "150",
            opacity: 0.3

        },
            2000,

            function () {
                $("#text_200").hide();
                $("#text_200").css({
                    "left": "256px",
                    "top": "400px",
                    "opacity": "1"
                })
            }
        );

    }

    function text_100() {
        $("#text_100").show();
        $("#text_100").animate({
            top: "150",
            opacity: 0.3

        },
            2000,

            function () {
                $("#text_100").hide();
                $("#text_100").css({
                    "left": "255px",
                    "top": "395px",
                    "opacity": "1"
                })
            }
        );

    }

    function text_20() {
        $("#text_20").show();
        $("#text_20").animate({
            top: "150",
            opacity: 0.3

        },
            2000,

            function () {
                $("#text_20").hide();
                $("#text_20").css({
                    "left": "192px",
                    "top": "342px",
                    "opacity": "1"
                })
            }
        );

    }

    function text_15() {
        $("#text_15").show();
        $("#text_15").animate({
            top: "150",
            opacity: 0.3

        },
            2000,

            function () {
                $("#text_15").hide();
                $("#text_15").css({
                    "left": "334px",
                    "top": "354px",
                    "opacity": "1"
                })
            }
        );

    }

    function text_10() {
        $("#text_10").show();
        $("#text_10").animate({
            top: "150",
            opacity: 0.3

        },
            2000,

            function () {
                $("#text_10").hide();
                $("#text_10").css({
                    "left": "256px",
                    "top": "467px",
                    "opacity": "1"
                })

            }
        );

    }

    function text_150() {
        $("#text_150").show();
        $("#text_150").animate({
            top: "150",
            opacity: 0.3

        },
            2000,

            function () {
                $("#text_150").hide();
                $("#text_150").css({
                    "left": "256px",
                    "top": "467px",
                    "opacity": "1"
                })

            }
        );

    }

    function updateScore() {
        $("#score").html(totalScore);
        $("#finaltxScore").html(totalScore);
    }

    function resetgame() {

        isMobileCtr1 = 0;
        isMobileCircleCtr1 = 0;
        isMobilehandImg1Ctr1 = 0;
        isMobileCircle2Ctr1 = 0;
        demiset = 0;
        currentTime = 30;
        totalScore = 0;
        creamctr1 = 0;
        creamctr2 = 0;
        creamctr3 = 0;
        myfinalctr = 0;
        facialbubblesCtr1 = 0;
        facialbubblesCtr2 = 0;
        facialbubblesCtr3 = 0;
        facialbubblesCtr4 = 0;
        facialbubblesCtr5 = 0;
        facialbubblesCtr6 = 0;
        facialbubblesCtr7 = 0;
        facialbubblesCtr8 = 0;
        facialbubblesCtr9 = 0;
        facialbubblesCtr10 = 0;
        facialbubblesCtr11 = 0;
        facialbubblesCtr12 = 0;
        timupctr = 0;


        $("#topscreen").show();
        $("#daycream").hide();

        for (var i = 1; i < 20; i++) {
            $("#facialbubbles" + i).removeClass("mydeactive").css("display", "none");
        }
        updateScore();
        $("#timeupbox").hide();
        $("#girl").hide().removeClass("finalgirl");

        $("#showertap").hide();
        $("#showerarrow").hide();

        clearInterval(myTimer);
        $("#time").html("00 : 00");

        $('#gamescreen').hide();
        $('#audiobgm').hide();
        $("#topscreen").fadeOut("slow");

        $("#bomtxt").show();
        $('#cream').show();
        $("#arrow").show();

        $("#score").show();
        $("#time").show();
        $("#scoretx").show();
        $("#timetx").show();
        $("#topscreen").addClass("topscreen");
        $("#girl").show();

        $("#gamearrow").hide();
        $(".tagtxt").hide();

        $("#creamportion1").hide().css("opacity", "1");
        $("#creamportion2").hide().css("opacity", "1");
        $("#creamportion3").hide().css("opacity", "1");

        $('#gamecream').animate({
            left: 373,
            top: 514,
        }, {
            duration: 1000
        });

        $('#gamecream').css("pointer-events", "auto").hide();


        $("#lasttag").hide();
        $("#bomtxt").hide();
        

        $("#circle1").show().css("opacity", "1");
        $("#circle2").show().css("opacity", "1");
        $("#circle3").show().css("opacity", "1");


        $('#handimg').animate({
            left: 153,
            top: 284,
        }, {
            duration: 1000
        });


        $("#score").html("00");

        $('#showertap').animate({
            left: -202,
            top: 78,
        }, {
            duration: 1000
        });

        $('#showertap').css("pointer-events", "auto").hide();

        $('#daycream').animate({
            width: 52,
            height: 139,
            left: 392,
            top: 521
        });



    }

});