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

  function testDictionary(given) {
    const string = given.replace(/[^a-zA-Z ]/g, "");
    var res = [];
    var foundMatch = false;

    const englishWords = new Set(require("word-list-json"));

    // Convert the string to lowercase for case-insensitive matching
    string = string.toLowerCase();

    // Check if any substring in the string is an English word
    for (let i = 0; i < string.length; i++) {
      for (let j = i; j < string.length; j++) {
        const smn = string.substring(i, j + 1);
        console.log(smn);
        if (englishWords.has(smn)) {
          res.push(smn);
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
          // changeColors(answer);
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
      changeColors(answer);
    }, 1000);
  });
});
