$(document).ready(function () {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  function hash_u(arr, numb, symbols, lengthy) {
    var asList,
      combined,
      combined_org,
      newPass,
      num_asString,
      numb1,
      numb2,
      rand_num1,
      rand_num2,
      rand_num3,
      rand_num4,
      special;
    special = [
      " ",
      "!",
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "]",
      "^",
      "",
      "`",
      "{",
      "|",
      "}",
      "~",
    ];
    combined_org = arr[0] + arr[1];
    combined = [];

    for (var i = 0, _pj_a = combined_org.length; i < _pj_a; i += 3) {
      if (combined_org.length - i <= 4) {
        combined.push(combined_org.slice(i));
      } else {
        combined.push(combined_org.slice(i, i + 3));
      }
    }

    asList = combined;
    asList = shuffle(asList);
    rand_num1 = Math.floor(Math.random() * combined.length);
    rand_num2 = Math.floor(Math.random() * combined.length);
    num_asString = numb.toString();
    numb1 = num_asString.slice(0, num_asString.length / 2);
    numb2 = num_asString.slice(num_asString.length / 2);
    asList.splice(rand_num1, 0, numb1);
    asList.splice(rand_num2, 0, numb2);

    newPass = asList.join("");

    if (symbols === 1) {
      rand_num3 = Math.floor(Math.random() * special.length - 1);
      rand_num4 = Math.floor(Math.random() * combined.length);
      asList.splice(rand_num4, 0, special[rand_num3]);
      newPass = asList.join("");

      while (newPass.length < lengthy) {
        var rand_num5 = Math.floor(Math.random() * asList.length);
        var rand_symb = special[Math.floor(Math.random() * special.length)];
        asList.splice(rand_num5, 0, rand_symb);
        newPass = asList.join("");
      }
    } else {
      while (newPass.length < lengthy) {
        var rand_num5 = Math.floor(Math.random() * asList.length);
        asList.splice(rand_num5, 0, "0");
        newPass = asList.join("");
      }
    }

    newPass = asList.join("");
    return newPass;
  }

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
