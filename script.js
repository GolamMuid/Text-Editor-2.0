let input = $("#input");

let buttonBold = $("#bold");
let buttonItalic = $("#italic");
let buttonUnderline = $("#underlined");

let leftAlign = $("#leftAlign");
let rightAlign = $("#rightAlign");
let centerAlign = $("#centerAlign");

let unorderedList = $("#unorderedList");
let orderedList = $("#orderedList");

let fontSize = $("#fontNumber");

let font1 = $("#1");
let font2 = $("#2");
let font3 = $("#3");
let font4 = $("#4");
let font5 = $("#5");
let font6 = $("#6");
let font7 = $("#7");

let color = $("#color");

let fileName = $("#fileName");
let save = $("#save");

$(buttonBold).on("click", function () {
  document.execCommand("bold");
});
$(buttonItalic).on("click", function () {
  document.execCommand("italic");
});
$(buttonUnderline).on("click", function () {
  document.execCommand("underline");
});

$(leftAlign).on("click", function () {
  document.execCommand("justifyLeft");
});
$(rightAlign).on("click", function () {
  document.execCommand("justifyRight");
});
$(centerAlign).on("click", function () {
  document.execCommand("justifyCenter");
});

$(unorderedList).on("click", function () {
  document.execCommand("insertUnorderedList");
});
$(orderedList).on("click", function () {
  document.execCommand("insertOrderedList");
});

$(fontSize).on("keyup", function (e) {
  console.log(this.value);
  document.execCommand("fontSize", false, this.value);
});

$(input).on("keyup", function (e) {
  let len = input.text().length;
  $("#letterCounter").html(len + "/264");
  if (len > 264) {
    $("#letterCounter").css("color", "red");
  } else {
    $("#letterCounter").css("color", "white");
  }
});

$(font1).on("click", function () {
  document.execCommand("fontSize", false, 1);
});
$(font2).on("click", function () {
  document.execCommand("fontSize", false, 2);
});
$(font3).on("click", function () {
  document.execCommand("fontSize", false, 3);
});
$(font4).on("click", function () {
  document.execCommand("fontSize", false, 4);
});
$(font5).on("click", function () {
  document.execCommand("fontSize", false, 5);
});
$(font6).on("click", function () {
  document.execCommand("fontSize", false, 6);
});
$(font7).on("click", function () {
  document.execCommand("fontSize", false, 7);
});

$(color).on("input", function () {
  document.execCommand("foreColor", false, this.value);
});

// $(save).on("click", function () {
//   html2pdf().from(input).save();
// });

function pdf() {
  html2pdf().from(input).save();
}
