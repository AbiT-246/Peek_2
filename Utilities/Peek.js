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

  async function testDictionary(word) {
    var res = [];
    var foundMatch = false;

    for (let i = 0; i < word.length - 3; i++) {
      for (let j = i + 3; j < word.length; j++) {
        var smn = word.substring(i, j + 1);
        console.log(smn);
        var url = `https://www.dictionaryapi.com/api/v3/references/sd3/json/${smn}?key=db07b340-d7ad-41cf-b150-9efdf351ec75`;
        const response = await fetch(url);
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
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

  $("form").on("submit", function (e) {
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
      for (let i = 0; i < hashArray.length; i++) {
        const hash = hashArray[i].split(":");
        if (hash[0] === suffix.toUpperCase()) {
          const numBreaches = parseInt(hash[1]);

          // var dictionary = "null";
          // try {
          //   dictionary = await testDictionary(newVal);
          // } catch {
          //   dictionary = "hello";
          // }

          const resultText1 = `This password has been leaked <h6 class = "part">${numBreaches}</h6> times.`;
          const resultText2 = `This password contains the <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" href="Utilities/About.html#jumpTo"> common dictionary words: </a> <h6 class = "part">${"dictionary"}</h6>`;
          const resultText3 = `Assuming a set length, this password would take up to <h6 class = "part">brute</h6> to hack using <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" class="navbar-brand" href="Utilities/About.html#jumpTo">brute-force.</a
                >`;
          const resultText4 = `However, the password would take <h6 class = "part">timegiven</h6> times as long as the most hacked password <br> (which could take mere seconds) to crack using a <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" class="navbar-brand" href="Utilities/About.html#jumpTo">standard dictionary attack.</a
                                      >`;
          $("<div>")
            .attr("id", "result1")
            .addClass("results")
            .insertAfter(".navbar")
            .html(resultText1);
          // changeColors(answer);
          setTimeout(function () {
            $("<div>")
              .attr("id", "result2")
              .addClass("results")
              .insertAfter("#result1")
              .html(resultText2);
            // changeColors(answer);
          }, 2500);
          setTimeout(function () {
            $("<div>")
              .attr("id", "result3")
              .addClass("results")
              .insertAfter("#result2")
              .html(resultText3);
            // changeColors(answer);
          }, 5000);
          setTimeout(function () {
            $("<div>")
              .attr("id", "result4")
              .addClass("results")
              .insertAfter("#result3")
              .html(resultText4);
            // changeColors(answer);
          }, 7500);
          break;
        }
      }
    });
  });
});
