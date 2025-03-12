$("#tit1").css("color", "red");

$("#tit2").css("border", "1px solid blue");

$("#tit3").css("background-color", "#ff0").css("border", "2px solid #f00");

$(".tit4").css("background-color", "#ff0").css("border", "2px dashed #f00");

$("#tit5, h1").css("background-color", "#0ff").css("border", "2px dashed #f00");

$("h2#tit6").css("background-color", "#0f0").css("border", "2px dashed #000");

$("#list_1").parent().css("border", "2px dashed #f00");

$("#wrap1 h2").css({ "background-color": "yellow" });

$("#wrap2 > h2").css("border", "2px dashed #0f0");

$("#wrap2 > section")
  .children()
  .css({ "background-color": "yellow", border: "2px solid #0f0" });

var style_1 = { "background-color": "#0ff", border: "2px solid #f00" };
var style_2 = { "background-color": "#ff0", border: "2px dashed #f00" };

$(".txt").prev().css(style_1);
$(".txt + p").css(style_2);
$(".txt").next().next().css(style_2);

$(".txt2").prevAll().css(style_1);
$(".txt2").nextAll().css(style_2);

$(".txt3").siblings().css(style_1);

$(".txt4").prevUntil(".title").css(style_1);
$(".txt4").nextUntil(".txt5").css(style_1);

$(".txt6").parents("section").css({ border: "2px dashed #00f" });
$(".txt7").parents("div").css({ border: "2px solid #f00" });

$(".txt8").closest("div").css({ border: "2px solid #f00" });

var obj = [{ area: "서울" }, { area: "부산" }, { area: "전주" }];
$(obj).each(function (i, o) {
  console.log(i + 1 + ":", o);
});
console.log("=======End 1=======");

$.each($("#menu1 li"), function (i, o) {
  console.log(i + 1 + ":", o);
});
console.log("=======End 2=======");

$.each($("#menu1 li"), function (i) {
  console.log(i + 1 + ":", $(this));
});
