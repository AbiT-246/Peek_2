$(document).ready(function () {
  var symbols = 0;
  $("#symbolChooser").on("click", function (event) {
    $(this).toggleClass("symbol");
    if (symbols == 0) {
      symbols = 1;
    } else if (symbols == 1) {
      symbols = 0;
    }
  });

  $(".generator").on("click", function (e) {
    const qnlist = [];
    var q1 = $(".security1").val();
    qnlist.push(q1);
    var q2 = $(".security2").val();
    qnlist.push(q2);
    var q3 = $(".security3").val();

    console.log(qnlist);
    for (i in qnlist) {
      const val = qnlist[i];
      console.log(val);
      if (
        !/^[A-Za-z]*$/.test(val) ||
        val.length > 12 ||
        val.length < 4 ||
        /\s/.test(val)
      ) {
        alert(
          "Please make sure the first two security question responses are only letters with no spaces, no more than 12 characters and no less than 4 characters!"
        );
        return;
      }
    }
    if (
      !/^[0-9]*$/.test(q3) ||
      q3.length > 6 ||
      q3.length < 3 ||
      /\s/.test(q3)
    ) {
      alert(
        "Please make sure the third security question is a 3 to 6 digit number with no spaces!"
      );
      return;
    }
    var length = $(".length").val();
    length = parseInt(length);
    if (isNaN(length) || length > 15 || length < 5) {
      alert(
        "Please make sure the specified length is an integer between 5 and 15 inclusive!"
      );
    } else {
      console.log(symbols);
      var display = hash_u(qnlist, q3, symbols, length);
      console.log(display);

      $("body").empty();
      var url = "Display.html";
      url +=
        "?password=" +
        encodeURIComponent(display) +
        "&q1=" +
        encodeURIComponent(q1) +
        "&q2=" +
        encodeURIComponent(q2) +
        "&q3=" +
        encodeURIComponent(q3) +
        "&symbols=" +
        encodeURIComponent(symbols) +
        "&length=" +
        encodeURIComponent(length);
      window.location.href = url;
    }
  });
});
