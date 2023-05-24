$(document).ready(function () {
  $("#meme1").hide();
  $("#Happy").hide();

  function formatTime(seconds) {
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const week = 7 * day;
    const year = 365 * day;
    const decade = 10 * year;
    const century = 100 * year;
    const millennium = 1000 * year;

    if (seconds < minute) {
      return Math.floor(seconds) + " seconds";
    } else if (seconds < hour) {
      return (
        Math.floor(seconds / minute) +
        " minutes, " +
        Math.floor(seconds % minute) +
        " seconds"
      );
    } else if (seconds < day) {
      return (
        Math.floor(seconds / hour) +
        " hours, " +
        Math.floor((seconds % hour) / minute) +
        " minutes"
      );
    } else if (seconds < week) {
      return (
        Math.floor(seconds / day) +
        " days, " +
        Math.floor((seconds % day) / hour) +
        " hours"
      );
    } else if (seconds < year) {
      return (
        Math.floor(seconds / week) +
        " weeks, " +
        Math.floor((seconds % week) / day) +
        " days"
      );
    } else if (seconds < decade) {
      return (
        Math.floor(seconds / year) +
        " years, " +
        Math.floor((seconds % year) / day) +
        " days"
      );
    } else if (seconds < century) {
      return (
        Math.floor(seconds / decade) +
        " decades, " +
        Math.floor((seconds % decade) / year) +
        " years"
      );
    } else if (seconds < millennium) {
      return (
        Math.floor(seconds / century) +
        " centuries, " +
        Math.floor((seconds % century) / year) +
        " years"
      );
    } else {
      return (
        Math.floor(seconds / millennium) +
        " millenia, " +
        Math.floor((seconds % millennium) / year) +
        " years"
      );
    }
  }

  function brute_attack(password) {
    var alpha_nums, alpha_nums_special, alpha_only, length;
    length = password.length;
    alpha_only = Math.pow(26, length);
    alpha_nums = Math.pow(36, length);
    alpha_nums_special = Math.pow(69, length);
    alpha_nums_special = formatTime(alpha_nums_special);
    return [alpha_only, alpha_nums, alpha_nums_special];
  }

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
    //
    var newVal = $("#password").val(); // Get the value of the password input field
    // var dict = dict_attack(newVal);
    var brute = brute_attack(newVal)[2];

    const sha1Hash = CryptoJS.SHA1(newVal).toString();

    var prefix = sha1Hash.slice(0, 5);
    var suffix = sha1Hash.substr(5);

    var url = `https://api.pwnedpasswords.com/range/${prefix}`;
    $.get(url, function (string) {
      const hashArray = string.split("\n");
      var numBreaches = null;
      for (let i = 0; i < hashArray.length; i++) {
        const hash = hashArray[i].split(":");
        if (hash[0] === suffix.toUpperCase()) {
          numBreaches = parseInt(hash[1]);
          console.log(numBreaches);

          var most_hacked = 37615083;
          var time_given = parseFloat(
            most_hacked / parseInt(numBreaches)
          ).toFixed(0);

          var answer = parseFloat(
            ((most_hacked - numBreaches) / most_hacked) * 100
          ).toFixed(3);
          // var brute = brute_attack(newVal)[2];

          const resultText1 = `This password has been leaked <h6 class = "part">${numBreaches}</h6> times.`;
          const resultText2 = `That is approximately <h6 class = "part">${answer}%</h6> less than the <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" href="Utilities/About.html#jumpTo">most leaked password.</a
            >`;
          const resultText3 = `Assuming a set length, this password would take up to <h6 class = "part">${brute}</h6> to hack using <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" class="navbar-brand" href="Utilities/About.html#jumpTo">brute-force.</a
            >`;
          const resultText4 = `However, the password would take <h6 class = "part">${time_given}</h6> times as long as the most hacked password <br> (which could take mere seconds) to crack using a <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" class="navbar-brand" href="Utilities/About.html#jumpTo">standard dictionary attack.</a
                                  >`;

          $("<div>")
            .attr("id", "result1")
            .addClass("results")
            .insertAfter(".navbar")
            .html(resultText1);
          changeColors(answer);
          setTimeout(function () {
            $("<div>")
              .attr("id", "result2")
              .addClass("results")
              .insertAfter("#result1")
              .html(resultText2);
            changeColors(answer);
          }, 2500);
          setTimeout(function () {
            $("<div>")
              .attr("id", "result3")
              .addClass("results")
              .insertAfter("#result2")
              .html(resultText3);
            changeColors(answer);
          }, 5000);
          setTimeout(function () {
            $("<div>")
              .attr("id", "result4")
              .addClass("results")
              .insertAfter("#result3")
              .html(resultText4);
            changeColors(answer);
          }, 7500);
          if (answer <= 95) {
            setTimeout(function () {
              $("#meme1").show();
            }, 10000);
          }
          break;
        }
      }
      if (numBreaches == null) {
        numBreaches = 0;
        var most_hacked = 37615083;

        var answer = ((most_hacked - numBreaches) / most_hacked) * 100;
        // var brute = brute_attack(newVal)[2];

        const resultText1 = `This password has been leaked <h6 class = "part">${numBreaches}</h6> times.`;
        const resultText2 = `That is approximately <h6 class = "part">${answer}%</h6> less than the <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" href="Utilities/About.html#jumpTo">most leaked password.</a
          >`;
        const resultText3 = `Assuming set length, it'd take up to <h6 class = "part">${brute}</h6> to hack via <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" class="navbar-brand" href="Utilities/About.html#jumpTo">brute-force.</a
          >`;
        const resultText4 = `This password would probably not be cracked using a <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" class="navbar-brand" href="Utilities/About.html#jumpTo">standard dictionary attack.</a
          >`;
        const resultText5 = `...Congratulations`;
        $("<div>")
          .attr("id", "result1")
          .addClass("results")
          .insertAfter(".navbar")
          .html(resultText1);
        changeColors(answer);
        setTimeout(function () {
          $("<div>")
            .attr("id", "result2")
            .addClass("results")
            .insertAfter("#result1")
            .html(resultText2);
          changeColors(answer);
        }, 2500);
        setTimeout(function () {
          $("<div>")
            .attr("id", "result3")
            .addClass("results")
            .insertAfter("#result2")
            .html(resultText3);
          changeColors(answer);
        }, 5000);
        setTimeout(function () {
          $("<div>")
            .attr("id", "result4")
            .addClass("results")
            .insertAfter("#result3")
            .html(resultText4);
          changeColors(answer);
        }, 7500);
        setTimeout(function () {
          $("<div>")
            .attr("id", "result5")
            .addClass("results")
            .insertAfter("#result4")
            .html(resultText5);
          changeColors(answer);
        }, 10000);
        setTimeout(function () {
          $("#Happy").show();
        }, 11000);
      }
    });
  });
});
