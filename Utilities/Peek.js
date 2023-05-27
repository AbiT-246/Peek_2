$(document).ready(function () {
  var info = [];
  $("#meme1").hide();
  $("#Happy").hide();
  $(".scale").hide();

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
    var list1 = [
      "a, about, above, across, act, active, activity, add, afraid, after, again, age, ago, agree, air, all, alone, along, already, always, am, amount, an, and, angry, another, answer, any, anyone, anything, anytime, appear, apple, are, area, arm, army, around, arrive, art, as, ask, at, attack, aunt, autumn, away, baby, base, back, bad, bag, ball, bank, basket, bath, be, bean, bear, beautiful, beer, bed, bedroom, behave, before, begin, behind, bell, below, besides, best, better, between, big, bird, birth, birthday, bit, bite, black, bleed, block, blood, blow, blue, board, boat, body, boil, bone, book, border, born, borrow, both, bottle, bottom, bowl, box, boy, branch, brave, bread, break, breakfast, breathe, bridge, bright, bring, brother, brown, brush, build, burn, business, bus, busy, but, buy, b, cake, call, can, candle, cap, car, card, care, careful, careless, carry, case, cat, catch, central, century, certain, chair, chance, change, chase, cheap, cheese, chicken, child, children, chocolate, choice, choose, circle, city, class, clever, clean, clear, climb, clock, cloth, clothes, cloud, cloudy, close, coffee, coat, coin, cold, collect, colour, comb, comfortable, common, compare, come, complete, computer, condition, continue, control, cook, cool, copper, corn, corner, correct, cost, contain, count, country, course, cover, crash, cross, cry, cup, cupboard, cut, dance, dangerous, dark, daughter, day, dead, decide, decrease, deep, deer, depend, desk, destroy, develop, die, different, difficult, dinner, direction, dirty, discover, dish, direction, do, dog, door, double, down, draw, dream, dress, drink, drive, drop, dry, duck, dust, duty, each, ear, early, earn, earth, east, easy, eat, education, effect, egg, eight, either, electric, elephant, else, empty, end, enemy, enjoy, enough, enter, equal, entrance, escape, even, evening, event, ever, every, everyone, exact, everybody, examination, example, except, excited, exercise, expect, expensive, explain, extremely, eye, face, fact, fail, fall, false, family, famous, far, farm, father, fast, fat, fault, fear, feed, feel, female, fever, few, fight, fill, film, find, fine, finger, finish, fire, first, fit, five, fix, flag, flat, float, floor, flour, flower, fly, fold, food, fool, foot, football, for, force, foreign, forest, forget, forgive, fork, form, fox, four, free, freedom, freeze, fresh, friend, friendly, from, front, fruit, full, fun, funny, furniture, further, future, game, garden, gate, general, gentleman, get, gift, give, glad, glass, go, goat, god, gold, good, goodbye, grandfather, grandmother, grass, grave, great, green, grey, ground, group, grow, gun, hair, half, hall, hammer, hand, happen, happy, hard, hat, hate, have, he, head, healthy, hear, heavy, hello, help, heart, heaven, height, help, hen, her, here, hers, hide, high, hill, him, his, hit, hobby, hold, hole, holiday, home, hope, horse, hospital, hot, hotel, house, how, hundred, hungry, hour, hurry, husband, hurt, I, ice, idea, if, important, in, increase, inside, into, introduce, invent, iron, invite, is, island, it, its, jelly, job, join, juice, jump, just, keep, key, kill, kind, king, kitchen, knee, knife, knock, know, ladder, lady, lamp, land, large, last, late, lately, laugh, lazy, lead, leaf, learn, leave, leg, left, lend, length, less, lesson, let, letter, library, lie, life, light, like, lion, lip, list, listen, little, live, lock, lonely, long, look, lose, lot, love, low, lower, luck, machine, main, make, male, man, many, map, mark, market, marry, matter, may, me, meal, mean, measure, meat, medicine, meet, member, mention, method, middle, milk, million, mind, minute, miss, mistake, mix, model, modern, moment, money, monkey, month, moon, more, morning, most, mother, mountain, mouth, move, much, music, must, my, name, narrow, nation, nature, near, nearly, neck, need, needle, neighbour, neither, net, never, new, news, newspaper, next, nice, night, nine, no, noble, noise, none, nor, north, nose, not, nothing, notice, now, number, obey, object, ocean, of, off, offer, office, often, oil, old, on, one, only, open, opposite, or, orange, order, other, our, out, outside, over, own, page, pain, paint, pair, pan, paper, parent, park, part, partner, party, pass, past, path, pay, peace, pen, pencil, people, pepper, per, perfect, period, person, petrol, photograph, piano, pick, picture, piece, pig, pin, pink, place, plane, plant, plastic, plate, play, please, pleased, plenty, pocket, point, poison, police, polite, pool, poor, popular, position, possible, potato, pour, power, present, press, pretty, prevent, price, prince, prison, private, prize, probably, problem, produce, promise, proper, protect, provide, public, pull, punish, pupil, push, put, queen, question, quick, quiet, quite, radio, rain, rainy, raise, reach, read, ready, real, really, receive, record, red, remember, remind, remove, rent, repair, repeat, reply, report, rest, restaurant, result, return, rice, rich, ride, right, ring, rise, road, rob, rock, room, round, rubber, rude, rule, ruler, run, rush, sad, safe, sail, salt, same, sand, save, say, school, science, scissors, search, seat, second, see, seem, sell send, sentence, serve, seven, several, sex, shade, shadow, shake, shape, share, sharp, she, sheep, sheet, shelf, shine, ship, shirt, shoe, shoot, shop, short, should, shoulder, shout, show, sick, side, signal, silence, silly, silver, similar, simple, single, since, sing, sink, sister, sit, six, size, skill, skin, skirt, sky, sleep, slip, slow, smoke, small, smell, smile, smoke, snow, so, soap, sock, soft, some, someone, something, sometimes, son, soon, sorry, sound, soup, south, space, speak, special, speed, spell, spend, spoon, sport, spread, spring, square, stamp, stand, star, start, station, stay, steal, steam, step, still, stomach, stone, stop, store, storm, story, strange, street, strong, structure, student, study, stupid, subject, substance, successful, such, sudden, sugar, suitable, summer, sun, sunny, support, sure, surprise, sweet, swim, sword, table, take, talk, tall, taste, taxi, tea, teach, team, tear, telephone, television, tell, ten, tennis, terrible, test, than, that, the, their, then, there, therefore, these, thick, thin, thing, think, third, this, though, threat, three, tidy, tie, title, to, today, toe, together, tomorrow, tonight, too, tool, tooth, top, total, touch, town, train, tram, travel, tree, trouble, true, trust, twice, try, turn, type, uncle, under, understand, unit, until, up, use, useful, usual, usually, vegetable, very, village, voice, visit, wait, wake, walk, want, warm, wash, waste, watch, water, way, we, weak, wear, weather, wedding, week, weight, welcome, well, west, wet, what, wheel, when, where, which, while, white, who, why, wide, wife, wild, will, win, wind, window, wine, winter, wire, wise, wish, with, without, woman, wonder, word, work, world, worry, worry, worst, write, wrong, year, yes, yesterday, yet, you, young, your, zero",
    ];

    var list2 = list1[0].split(", ");
    list2 = list2.map((i) => i);
    const word = given.replace(/[^a-zA-Z ]/g, "");
    var res = [];

    for (let i = 0; i < word.length - 2; i++) {
      for (let j = i + 2; j < word.length; j++) {
        var smn = word.substring(i, j + 1);
        if (list2.includes(smn)) {
          res.push(`"${smn}"`);
        }
      }
    }
    info.push(res.length);
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

    info.push(res.length);
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

  function checkPattern(word) {
    const list0 = ["1234567890", "12345678", "123456", "12345", "1234", "123"];
    const list1 = [
      "111111",
      "000",
      "123456789",
      "qwerty",
      "password",
      "qwerty123",
      "1q2w3e",
    ];
    var res = ["x"];
    var count = false;
    for (let i = 0; i < word.length - 2; i++) {
      for (let j = i + 2; j < word.length; j++) {
        var smn = word.substring(i, j + 1);
        console.log(smn);
        for (const k of list0) {
          if (k == smn && k.length > res[0].length) {
            res.push(smn);
            count = true;
            break;
          }
        }
        if (list1.includes(smn)) {
          res.push(`"${smn}"`);
          count = true;
        }
      }
    }
    console.log(res[1]);

    if (res.length == 1 && count == false) {
      info.push(0);
      return null;
    }

    var result = "";

    if (res.length == 2) {
      const index = res.indexOf("x");
      res.splice(index, 1);
      info.push(1);
      result = res + ".";
    } else {
      const index = res.indexOf("x");
      res.splice(index, 1);
      info.push(res.length);
      result =
        res.slice(0, -1).join(", ") + ", and " + res[res.length - 1] + ".";
    }
    console.log(res);
    return result;
  }

  function calculate(values) {
    const [word, complexity, pattern, numBreaches, length] = values;
    var leaked = null;
    if (numBreaches == 0) {
      leaked = 45;
    } else if (numBreaches >= 1 && numBreaches <= 20) {
      leaked = 40;
    } else if (numBreaches >= 21 && numBreaches <= 100) {
      leaked = 35;
    } else if (numBreaches >= 101 && numBreaches <= 1000) {
      leaked = 30;
    } else if (numBreaches >= 1001 && numBreaches <= 5000) {
      leaked = 25;
    } else if (numBreaches >= 5001 && numBreaches <= 20000) {
      leaked = 20;
    } else if (numBreaches >= 20001 && numBreaches <= 100000) {
      leaked = 15;
    } else if (numBreaches >= 100001 && numBreaches <= 1000000) {
      leaked = 10;
    } else if (numBreaches >= 1000001 && numBreaches <= 10000000) {
      leaked = 5;
    } else if (numBreaches >= 10000001) {
      leaked = 0;
    }
    console.log(leaked);
    const patternP = 15 - (15 / 1) * pattern;
    console.log(patternP);
    const complexityP = 15 - (15 / 3) * complexity;
    console.log(complexityP);
    const wordP = 10 - (10 / 3) * word;
    console.log(wordP);
    const result = leaked + length + patternP + complexityP + wordP;
    return result;
  }

  $("form").on("submit", async function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    info = [];
    $(".scale").show();
    $("#inner").removeClass("red");
    $("#inner").removeClass("yellow");
    $("#inner").removeClass("green");
    $("#inner").css("height", "0%");

    $(".navbar").removeClass("navbar1");
    $("#arrow").hide();
    $("#meme1").hide();
    $("#Happy").hide();
    $(".results").remove();
    $("#container").removeClass("indicatorRed");
    $("#container").removeClass("indicatorYellow");
    $("#container").removeClass("indicatorGreen");

    var newVal = $("#password").val();

    var dictionary;
    var resultText2;
    try {
      dictionary = testDictionary(newVal);
      resultText2 = `It contains the <a style = "text-decoration: underline; font-size: 16px; color: white" class="navbar-brand" href="Utilities/About.html#jumpTo"> common dictionary words: </a> <h6 class = "part">${dictionary}</h6>`;
    } catch {
      resultText2 = `This password doesn't contain any common dictionary words.`;
    }
    if (dictionary == null) {
      resultText2 = `This password doesn't contain any common dictionary words.`;
    }

    setTimeout(function () {
      $("<div>")
        .attr("id", "result2")
        .addClass("results")
        .insertAfter("#result1")
        .html(resultText2);
    }, 2500);

    const length = newVal.length;
    const complexity = checkChars(newVal);
    var resultText3;
    var resultText31;
    if (complexity) {
      resultText3 = `This password is <h6 class = "part">${length}</h6> characters long...`;
      resultText31 = `It does not contain any ${complexity}`;
    } else {
      resultText3 = `This password is <h6 class = "part">${length}</h6> characters long`;
      resultText31 = `it contains uppercase characters, numbers, and symbols.`;
    }

    setTimeout(function () {
      $("<div>")
        .attr("id", "result3")
        .addClass("results")
        .insertAfter("#result2")
        .html(resultText3);
    }, 5000);

    setTimeout(function () {
      $("<div>")
        .attr("id", "result31")
        .addClass("results")
        .insertAfter("#result3")
        .html(resultText31);
    }, 7500);

    var resultText4;
    const patterns = checkPattern(newVal);
    if (patterns != null) {
      resultText4 = `This password contains the common password patterns: <h6 class = "part">${patterns}</h6>`;
    } else {
      resultText4 = `This password does not contain any common password patterns.`;
    }

    setTimeout(function () {
      $("<div>")
        .attr("id", "result4")
        .addClass("results")
        .insertAfter("#result31")
        .html(resultText4);
    }, 10000);

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

        const resultText1 = `This password has been leaked <h6 id = "numBreaches" class = "part">${numBreaches}</h6> times.`;
        $("<div>")
          .attr("id", "result1")
          .addClass("results")
          .insertAfter(".navbar")
          .html(resultText1);
      }
      info.push(numBreaches);
      info.push(newVal.length);
      console.log(info);

      const result = calculate(info);

      console.log(result);
      $(".newDiv")
        .addClass("border-left border-secondary")
        .css("box-shadow: 3px -1px 15px #565353ad inset");
      if (result <= 25) {
        $("#inner").addClass("red");
      } else if (result <= 50) {
        $("#inner").addClass("yellow");
      } else {
        $("#inner").addClass("green");
      }
      $("#inner").animate(
        {
          height: "0%",
          height: `${result}%`,
        },
        3000
      );
    });
  });
});
