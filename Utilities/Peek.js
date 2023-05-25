$(document).ready(function () {
  $("#meme1").hide();
  $("#Happy").hide();

  const changeColors = (calc) => {
    if (calc <= 95) {
      $("h6").css("color", "red");
      $("#container").addClass("indicatorRed");
    } else if ((96 <= calc) & (calc < 100)) {
      $("h6").css("color", "yellow");
      $("#container").addClass("indicatorYellow");
    } else {
      $("h6").css("color", "green");
      $("#container").addClass("indicatorGreen");
    }
  };

  $(".navbar").on("keyup", function (event) {
    $(this).removeClass("navbar1");
    $("#arrow").hide();
  });

  async function testDictionary(given) {
    const word = given.replace(/[^a-zA-Z ]/g, "");
    var res = [];
    var foundMatch = false;

    for (let i = 0; i < word.length - 3; i++) {
      for (let j = i + 3; j < word.length; j++) {
        var smn = word.substring(i, j + 1);
        console.log(smn);
        var url = `https://www.dictionaryapi.com/api/v3/references/sd2/json/${smn}?key=8bd7aebb-af8d-4d2d-837b-b72dd39c3011`;
        const response = await fetch(url);
        const data = await response.json();
        if (data[0].meta != null) {
          res.push(`'${smn}'`);
          foundMatch = true;
        }
      }
    }
    console.log(res);
    if (!foundMatch) {
      return null;
    }

    var result = "";

    if (res.length == 1) {
      result = res + ".";
    } else {
      result =
        res.slice(0, -1).join(", ") + ", and " + res[res.length - 1] + ".";
    }

    return result;
  }

  function checkChars(string) {
    var res = [];
    if (!/[A-Z]/.test(string)) {
      res.push("uppercase characters");
    }
    if (!/\d/.test(string)) {
      res.push("numbers");
    }
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!specialChars.test(string)) {
      res.push("symbols");
    }

    if (res.length == 0) {
      return null;
    }

    var result = "";

    if (res.length == 1) {
      result = res + ".";
    } else {
      result =
        res.slice(0, -1).join(", ") + ", and " + res[res.length - 1] + ".";
    }

    return result;
  }

  console.log(checkChars("Pass"));

  $("form").on("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    $(".navbar").removeClass("navbar1");
    $("#arrow").hide();
    $("#meme1").hide();
    $("#Happy").hide();
    $(".results").remove();
    $("#container").removeClass("indicatorRed");
    $("#container").removeClass("indicatorYellow");
    $("#container").removeClass("indicatorGreen");

    var newVal = $("#password").val();

    const sha1Hash = CryptoJS.SHA1(newVal).toString();
    var prefix = sha1Hash.slice(0, 5);
    var suffix = sha1Hash.substr(5);

    var url = `https://api.pwnedpasswords.com/range/${prefix}`;
    $.get(url, async function (string) {
      const hashArray = string.split("\n");
      var numBreaches = null;
      for (let i = 0; i < hashArray.length; i++) {
        const hash = hashArray[i].split(":");
        if (hash[0] === suffix.toUpperCase()) {
          numBreaches = parseInt(hash[1]);

          const resultText1 = `This password has been leaked <h6 class = "part">${numBreaches}</h6> times.`;

          $("<div>")
            .attr("id", "result1")
            .addClass("results")
            .insertAfter(".navbar")
            .html(resultText1);
          break;
        }
      }

      if (numBreaches == null) {
        numBreaches = 0;

        const resultText1 = `This password has been leaked <h6 class = "part">${numBreaches}</h6> times.`;
        $("<div>")
          .attr("id", "result1")
          .addClass("results")
          .insertAfter(".navbar")
          .html(resultText1);
      }
    });

    var dictionary;
    var resultText2;
    try {
      dictionary = await testDictionary(newVal);
      resultText2 = `This password contains the <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" href="Utilities/About.html#jumpTo"> English dictionary words: </a> <h6 class = "part">${dictionary}</h6>`;
    } catch {
      resultText2 = `This password doesn't contain any common dictionary words.`;
    }
    if (dictionary == null) {
      resultText2 = `This password doesn't contain any common dictionary words.`;
    }
    console.log(dictionary);

    setTimeout(function () {
      $("<div>")
        .attr("id", "result2")
        .addClass("results")
        .insertAfter("#result1")
        .html(resultText2);
    }, 1000);

    const length = newVal.length;
    const complexity = checkChars(newVal);
    var resultText3;
    if (complexity) {
      resultText3 = `This password is <h6 class = "part">${length}</h6> characters long; it does not contain any ${complexity}`;
    } else {
      resultText3 = `This password is <h6 class = "part">${length}</h6> characters long; it contains uppercase characters, numbers, and symbols.`;
    }

    setTimeout(function () {
      $("<div>")
        .attr("id", "result3")
        .addClass("results")
        .insertAfter("#result2")
        .html(resultText3);
    }, 5000);
  });
});
