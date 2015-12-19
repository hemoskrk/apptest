

var d = new Date();

//var str = d.toLocaleDateString();



//var month = str.slice(0, 2);


//var day = str.slice(3, 5);
//var year = str.slice(6, 10);



var month = d.getUTCMonth()+1;


var day = d.getUTCDate();
var year = d.getUTCFullYear();




day_3 = day - 3;
day_2 = day - 2;
day_1 = day - 1;
day0 = day;
day1 = day - 0 + 1;
day2 = day - 0 + 2;
day3 = day - 0 + 3




month_3 = month;
month_2 = month;
month_1 = month;
month0 = month;
month1 = month;
month2 = month;
month3 = month;


year_3 = year;
year_2 = year;
year_1 = year
year0 = year;
year1 = year;
year2 = year;
year3 = year;




function init() {






    document.getElementById("b1").value = day_3 + "-" + month_3 + "-" + year_3;
    document.getElementById("b2").value = day_2 + "-" + month_2 + "-" + year_2;
    document.getElementById("b3").value = day_1 + "-" + month_1 + "-" + year_1;
    document.getElementById("b4").value = day0 + "-" + month0 + "-" + year0;
    document.getElementById("b5").value = day1 + "-" + month1 + "-" + year1;
    document.getElementById("b6").value = day2 + "-" + month2 + "-" + year2;
    document.getElementById("b7").value = day3 + "-" + month3 + "-" + year3;


}


function next() {



    if (month3 == 1 || month3 == 3 || month3 == 5 || month3 == 7 || month3 == 8 || month3 == 10 || month3 == 12) {


        if (day_3 < 31) {
            day_3 = day_3 - 0 + 1;
        }
        else {
            day_3 = 1; if (month_3 < 12) { month_3 = month_3 - 0 + 1; }
            else { month_3 = 1; year_3 = year_3 - 0 + 1 }

        }



        if (day_2 < 31) {
            day_2 = day_2 - 0 + 1;
        }
        else {
            day_2 = 1; if (month_2 < 12) { month_2 = month_2 - 0 + 1; }
            else { month_2 = 1; year_2 = year_2 - 0 + 1 }
        }


        if (day_1 < 31) {
            day_1 = day_1 - 0 + 1;
        }
        else {
            day_1 = 1; if (month_1 < 12) { month_1 = month_1 - 0 + 1; }
            else { month_1 = 1; year_1 = year_1 - 0 + 1 }
        }


        if (day0 < 31) {
            day0 = day0 - 0 + 1;
        }
        else {
            day0 = 1; if (month0 < 12) { month0 = month0 - 0 + 1; }
            else { month0 = 1; year0 = year0 - 0 + 1 }
        }



        if (day1 < 31) {
            day1 = day1 - 0 + 1;
        }
        else {
            day1 = 1; if (month1 < 12) { month1 = month1 - 0 + 1; }
            else { month1 = 1; year1 = year1 - 0 + 1 }
        }

        if (day2 < 31) {
            day2 = day2 - 0 + 1;
        }
        else {
            day2 = 1; if (month2 < 12) { month2 = month2 - 0 + 1; }
            else { month2 = 1; year2 = year2 - 0 + 1 }
        }



        if (day3 < 31) {
            day3 = day3 - 0 + 1;
        }
        else {
            day3 = 1; if (month3 < 12) { month3 = month3 - 0 + 1; }
            else { month3 = 1; year3 = year3 - 0 + 1 }
        }

    }

        //else if(month3==2)
        //{
        //  var d=year3%4;
        //  if (d!=0)

        //  {


        //      if (day_3 < 28) {
        //          day_3 = day_3 - 0 + 1;
        //      }
        //      else {
        //          day_3 = 1; if (month_3 < 12) { month_3 = month_3 - 0 + 1; }
        //          else { month_3 = 1; year_3 = year_3 - 0 + 1 }

        //      }



        //      if (day_2 < 28) {
        //          day_2 = day_2 - 0 + 1;
        //      }
        //      else {
        //          day_2 = 1; if (month_2 < 12) { month_2 = month_2 - 0 + 1; }
        //          else { month_2 = 1; year_2 = year_2 - 0 + 1 }
        //      }


        //      if (day_1 < 28) {
        //          day_1 = day_1 - 0 + 1;
        //      }
        //      else {
        //          day_1 = 1; if (month_1 < 12) { month_1 = month_1 - 0 + 1; }
        //          else { month_1 = 1; year_1 = year_1 - 0 + 1 }
        //      }


        //      if (day0 < 28) {
        //          day0 = day0 - 0 + 1;
        //      }
        //      else {
        //          day0 = 1; if (month0 < 12) { month0 = month0 - 0 + 1; }
        //          else { month0 = 1; year0 = year0 - 0 + 1 }
        //      }



        //      if (day1 < 28) {
        //          day1 = day1 - 0 + 1;
        //      }
        //      else {
        //          day1 = 1; if (month1 < 12) { month1 = month1 - 0 + 1; }
        //          else { month1 = 1; year1 = year1 - 0 + 1 }
        //      }

        //      if (day2 < 28) {
        //          day2 = day2 - 0 + 1;
        //      }
        //      else {
        //          day2 = 1; if (month2 < 12) { month2 = month2 - 0 + 1; }
        //          else { month2 = 1; year2 = year2 - 0 + 1 }
        //      }



        //      if (day3 < 28) {
        //          day3 = day3 - 0 + 1;
        //      }
        //      else {
        //          day3 = 1; if (month3 < 12) { month3 = month3 - 0 + 1; }
        //          else { month3 = 1; year3 = year3 - 0 + 1 }
        //      }
        //  }
        //  else
        //  {

        //      if (day_3 < 29) {
        //          day_3 = day_3 - 0 + 1;
        //      }
        //      else {
        //          day_3 = 1; if (month_3 < 12) { month_3 = month_3 - 0 + 1; }
        //          else { month_3 = 1; year_3 = year_3 - 0 + 1 }

        //      }



        //      if (day_2 < 29) {
        //          day_2 = day_2 - 0 + 1;
        //      }
        //      else {
        //          day_2 = 1; if (month_2 < 12) { month_2 = month_2 - 0 + 1; }
        //          else { month_2 = 1; year_2 = year_2 - 0 + 1 }
        //      }


        //      if (day_1 < 29) {
        //          day_1 = day_1 - 0 + 1;
        //      }
        //      else {
        //          day_1 = 1; if (month_1 < 12) { month_1 = month_1 - 0 + 1; }
        //          else { month_1 = 1; year_1 = year_1 - 0 + 1 }
        //      }


        //      if (day0 < 29) {
        //          day0 = day0 - 0 + 1;
        //      }
        //      else {
        //          day0 = 1; if (month0 < 12) { month0 = month0 - 0 + 1; }
        //          else { month0 = 1; year0 = year0 - 0 + 1 }
        //      }



        //      if (day1 < 29) {
        //          day1 = day1 - 0 + 1;
        //      }
        //      else {
        //          day1 = 1; if (month1 < 12) { month1 = month1 - 0 + 1; }
        //          else { month1 = 1; year1 = year1 - 0 + 1 }
        //      }

        //      if (day2 < 29) {
        //          day2 = day2 - 0 + 1;
        //      }
        //      else {
        //          day2 = 1; if (month2 < 12) { month2 = month2 - 0 + 1; }
        //          else { month2 = 1; year2 = year2 - 0 + 1 }
        //      }



        //      if (day3 < 29) {
        //          day3 = day3 - 0 + 1;
        //      }
        //      else {
        //          day3 = 1; if (month3 < 12) { month3 = month3 - 0 + 1; }
        //          else { month3 = 1; year3 = year3 - 0 + 1 }
        //      }
        //  }



        //}




    else {


        if (day_3 < 30) {
            day_3 = day_3 - 0 + 1;
        }
        else {
            day_3 = 1; if (month_3 < 12) { month_3 = month_3 - 0 + 1; }
            else { month_3 = 1; year_3 = year_3 - 0 + 1 }

        }



        if (day_2 < 30) {
            day_2 = day_2 - 0 + 1;
        }
        else {
            day_2 = 1; if (month_2 < 12) { month_2 = month_2 - 0 + 1; }
            else { month_2 = 1; year_2 = year_2 - 0 + 1 }
        }


        if (day_1 < 30) {
            day_1 = day_1 - 0 + 1;
        }
        else {
            day_1 = 1; if (month_1 < 12) { month_1 = month_1 - 0 + 1; }
            else { month_1 = 1; year_1 = year_1 - 0 + 1 }
        }


        if (day0 < 30) {
            day0 = day0 - 0 + 1;
        }
        else {
            day0 = 1; if (month0 < 12) { month0 = month0 - 0 + 1; }
            else { month0 = 1; year0 = year0 - 0 + 1 }
        }



        if (day1 < 30) {
            day1 = day1 - 0 + 1;
        }
        else {
            day1 = 1; if (month1 < 12) { month1 = month1 - 0 + 1; }
            else { month1 = 1; year1 = year1 - 0 + 1 }
        }

        if (day2 < 30) {
            day2 = day2 - 0 + 1;
        }
        else {
            day2 = 1; if (month2 < 12) { month2 = month2 - 0 + 1; }
            else { month2 = 1; year2 = year2 - 0 + 1 }
        }



        if (day3 < 30) {
            day3 = day3 - 0 + 1;
        }
        else {
            day3 = 1; if (month3 < 12) { month3 = month3 - 0 + 1; }
            else { month3 = 1; year3 = year3 - 0 + 1 }
        }



    }






    document.getElementById("b1").value = day_3 + "-" + month_3 + "-" + year_3;
    document.getElementById("b2").value = day_2 + "-" + month_2 + "-" + year_2;
    document.getElementById("b3").value = day_1 + "-" + month_1 + "-" + year_1;
    document.getElementById("b4").value = day0 + "-" + month0 + "-" + year0;
    document.getElementById("b5").value = day1 + "-" + month1 + "-" + year1;
    document.getElementById("b6").value = day2 + "-" + month2 + "-" + year2;
    document.getElementById("b7").value = day3 + "-" + month3 + "-" + year3;


}




function back() {

    if (month_3 == 1 || month_3 == 3 || month_3 == 5 || month_3 == 7 || month_3 == 8 || month_3 == 10 || month_3 == 12) {


        if (day_3 > 1) {
            day_3 = day_3 - 1;
        }
        else {
            day_3 = 30; if (month_3 > 1) { month_3 = month_3 - 1; }
            else { month_3 = 12; year_3 = year_3 - 1 }

        }



        if (day_2 > 1) {
            day_2 = day_2 - 1;
        }
        else {
            day_2 = 30; if (month_2 > 1) { month_2 = month_2 - 1; }
            else { month_2 = 12; year_2 = year_2 - 1 }
        }


        if (day_1 > 1) {
            day_1 = day_1 - 1;
        }
        else {
            day_1 = 30; if (month_1 < 12) { month_1 = month_1 - 1; }
            else { month_1 = 12; year_1 = year_1 - 1 }
        }


        if (day0 > 1) {
            day0 = day0 - 1;
        }
        else {
            day0 = 30; if (month0 > 1) { month0 = month0 - 1; }
            else { month0 = 12; year0 = year0 - 0 + 1 }
        }



        if (day1 > 1) {
            day1 = day1 - 1;
        }
        else {
            day1 = 30; if (month1 > 1) { month1 = month1 - 1; }
            else { month1 = 12; year1 = year1 - 0 + 1 }
        }

        if (day2 > 1) {
            day2 = day2 - 1;
        }
        else {
            day2 = 30; if (month2 > 1) { month2 = month2 - 1; }
            else { month2 = 12; year2 = year2 - 0 + 1 }
        }



        if (day3 > 1) {
            day3 = day3 - 1;
        }
        else {
            day3 = 30; if (month3 > 1) { month3 = month3 - 1; }
            else { month3 = 12; year3 = year3 - 0 + 1 }
        }

    }



    else {


        if (day_3 > 1) {
            day_3 = day_3 - 1;
        }
        else {
            day_3 = 31; if (month_3 > 1) { month_3 = month_3 - 1; }
            else { month_3 = 12; year_3 = year_3 - 0 + 1 }

        }



        if (day_2 > 1) {
            day_2 = day_2 - 1;
        }
        else {
            day_2 = 31; if (month_2 > 1) { month_2 = month_2 - 1; }
            else { month_2 = 12; year_2 = year_2 - 0 + 1 }
        }


        if (day_1 > 1) {
            day_1 = day_1 - 1;
        }
        else {
            day_1 = 31; if (month_1 > 1) { month_1 = month_1 - 1; }
            else { month_1 = 12; year_1 = year_1 - 0 + 1 }
        }


        if (day0 > 1) {
            day0 = day0 - 1;
        }
        else {
            day0 = 31; if (month0 > 1) { month0 = month0 - 1; }
            else { month0 = 12; year0 = year0 - 0 + 1 }
        }



        if (day1 > 1) {
            day1 = day1 - 1;
        }
        else {
            day1 = 31; if (month1 > 1) { month1 = month1 - 1; }
            else { month1 = 12; year1 = year1 - 0 + 1 }
        }

        if (day2 > 1) {
            day2 = day2 - 1;
        }
        else {
            day2 = 31; if (month2 > 1) { month2 = month2 - 1; }
            else { month2 = 12; year2 = year2 - 0 + 1 }
        }



        if (day3 > 1) {
            day3 = day3 - 1;
        }
        else {
            day3 = 31; if (month3 > 1) { month3 = month3 - 1; }
            else { month3 = 12; year3 = year3 - 1 }
        }



    }







    document.getElementById("b1").value = day_3 + "-" + month_3 + "-" + year_3;
    document.getElementById("b2").value = day_2 + "-" + month_2 + "-" + year_2;
    document.getElementById("b3").value = day_1 + "-" + month_1 + "-" + year_1;
    document.getElementById("b4").value = day0 + "-" + month0 + "-" + year0;
    document.getElementById("b5").value = day1 + "-" + month1 + "-" + year1;
    document.getElementById("b6").value = day2 + "-" + month2 + "-" + year2;
    document.getElementById("b7").value = day3 + "-" + month3 + "-" + year3;


}