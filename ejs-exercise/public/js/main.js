var USAstates = "https://raw.githubusercontent.com/Physsi07/New-York-Code-Design-Academy-Bootcamp/master/JSON%20Files/USA-States.json";

$("#ctry").on("change", function() {
  if ($(this).val() === 'CH') {
    console.log("ch");
    console.log("chossing ");
    $("div:nth-of-type(3)").removeClass("display");
  } else if ($(this).val() === 'USA') {
    $("div:nth-of-type(3)").toggleClass("display");
    console.log("usa");
    console.log("chose USA ");
  }
});

// GETTING STATES FROM AJAX FILE
$.ajax({
  url: USAstates,
  dataType: "json",
  type: "GET",
  success: (data) => {
    for (var i = 0; i < data.length; i++) {
      $("div:nth-of-type(3) #stts").append("<option>" + data[i].name + ", " + data[i].abbreviation + "</option>");
    }
  }
});
