$(document).ready(function () {
  $("#strength").on("click", function (e) {
    const pass = $("#modifiedValueDisplay").text();
    console.log(pass);
    var url = "../Index.html";
    url += "?research=" + encodeURIComponent(pass);

    window.location.href = url;
  });
});
