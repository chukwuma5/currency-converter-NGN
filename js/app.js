 //variables and Const
 let naira, nairaOne, nairaTwo, nairaThree, nairaFour, nairaFivth, nairaSixth, nairaSeventh, nairaEight, nairaNinth, nairaTenth, nairaEleventh, nairaTwelvth, nairaThirteen, nairaFourteen, nairaFiveteen, nairaSixteen, nairaSeventeen, nairaEighteen, nairaNineteen, nairaTwenty, nairaTwentyOne;
let firstExchangeRate, secondExchangeRate, thirdExchangeRate, fourthExchangeRate, fivthExchangeRate, sixthExchangeRate, seventhExchangeRate, eightExchangeRate, ninthExchangeRate, tenthExchangeRate,
 eleventhExchangeRate, twelvthExchangeRate, thirteenExchangeRate, fourteenExchangeRate, fiveteenExchangeRate, sixteenExchangeRate, seventeenExchangeRate, eighteenExchangeRate, ninteenExchangeRate, twentyExchangeRate,twentyOneExchangeRate, twentyTwoExchangeRate;
const canadaDollar = 325.17, euros = 425.02, rands = 25.99, cedis = 45.32, newZeaLand = 270.16, bitcoin = 8738764.08, chineseYen = 62.18, britishPound = 502.27, mexico = 21.01, japaneseYen = 3.14, tanzaniaDollar = 0.18, centralAfrica = 0.66, swissFranc = 440.10, dogeCoin = 29.85, etheruim = 650154.38, litCoin = 25940.62,silver = 8123.94, gold = 740982, palladuim = 903643, qatar = 115.05, UnitedStates = 422.867, liberianDollar = 2.73;  
 //firstinput
  document.getElementById("button_addOne").onclick = function() {
     naira = document.getElementById("nairaValue").value;
     naira = Number(naira);
     firstExchangeRate = naira * canadaDollar;
      firstExchangeRate = Math.round(firstExchangeRate);
      firstExchangeRate = parseInt(firstExchangeRate);
      firstExchangeRate = firstExchangeRate.toLocaleString();
 document.getElementById("displayHere").innerHTML = `NGN ${firstExchangeRate}`;
 }
 document.getElementById("button_addTwo").onclick = function () {
     firstExchangeRate = 0;
     let resetFirstExchangeRate;
     resetFirstExchangeRate = firstExchangeRate;
 document.getElementById("displayHere").innerHTML = `${resetFirstExchangeRate}`;
 }
 //secondinput
 document.getElementById("button_addThree").onclick = function() {
   nairaOne = document.getElementById("nairaValueOne").value;
     nairaOne = Number(nairaOne);
    secondExchangeRate = nairaOne * newZeaLand;
     secondExchangeRate = Math.round(secondExchangeRate);
     secondExchangeRate = parseInt(secondExchangeRate);
     secondExchangeRate = secondExchangeRate.toLocaleString();
document.getElementById("displayHereOne").innerHTML = `NGN ${secondExchangeRate}`;
}
document.getElementById("button_addFour").onclick = function (){
     secondExchangeRate = 0;
     let resetSecondExchangeRate;
     resetSecondExchangeRate = secondExchangeRate;
document.getElementById("displayHereOne").innerHTML = `${resetSecondExchangeRate}`;
}
//  third input 
 document.getElementById("button_addFive").onclick = function() {
    nairaTwo = document.getElementById("nairaValueTwo").value;
       nairaTwo = Number(nairaTwo);
      thirdExchangeRate = nairaTwo * chineseYen;
    thirdExchangeRate = Math.round(thirdExchangeRate);
    thirdExchangeRate = parseInt(thirdExchangeRate);
    thirdExchangeRate = thirdExchangeRate.toLocaleString();
  document.getElementById("displayHereTwo").innerHTML = `NGN ${thirdExchangeRate}`;    
 }
  document.getElementById("button_addSix").onclick = function (){
     thirdExchangeRate = 0;
     let resetThirdExchangeRate;
     resetThirdExchangeRate = thirdExchangeRate;
  document.getElementById("displayHereTwo").innerHTML = `${resetThirdExchangeRate}`;
}
 
// //fourth input
  document.getElementById("button_addSeven").onclick = function() {
    nairaThree = document.getElementById("nairaValueThree").value;
       nairaThree = Number(nairaThree);
      fourthExchangeRate = nairaThree * euros;
      fourthExchangeRate = Math.round(fourthExchangeRate);
      fourthExchangeRate = parseInt(fourthExchangeRate);
      fourthExchangeRate = fourthExchangeRate.toLocaleString();
  document.getElementById("displayHereThree").innerHTML = `NGN ${fourthExchangeRate}`;
}
 document.getElementById("button_addEight").onclick = function () {
    fourthExchangeRate = 0;
     let resetFourthExchangeRate;
     resetFourthExchangeRate = fourthExchangeRate;
 document.getElementById("displayHereThree").innerHTML = `${resetFourthExchangeRate}`;
 } 
// fivth input 
document.getElementById("button_addNine").onclick = function() {
  nairaFour = document.getElementById("nairaValueFour").value;
     nairaFour = Number(nairaFour);
    fivthExchangeRate = nairaFour * britishPound;
    fivthExchangeRate = Math.round(fivthExchangeRate);
    fivthExchangeRate = parseInt(fivthExchangeRate);
    fivthExchangeRate = fivthExchangeRate.toLocaleString();
    document.getElementById("displayHereFour").innerHTML = `NGN ${fivthExchangeRate}`;
}
document.getElementById("button_addTen").onclick = function () {
    fivthExchangeRate = 0;
    let resetFivthExchangeRate;
     resetFivthExchangeRate = fivthExchangeRate;
  document.getElementById("displayHereFour").innerHTML = `${resetFivthExchangeRate}`;
} 
//sixth input 
  document.getElementById("button_addEleven").onclick = function() {
    nairaFivth = document.getElementById("nairaValueFive").value;
       nairaFivth = Number(nairaFivth);
      sixthExchangeRate = nairaFivth * swissFranc;
      sixthExchangeRate = Math.round(sixthExchangeRate);
      sixthExchangeRate = parseInt(sixthExchangeRate);
      sixthExchangeRate = sixthExchangeRate.toLocaleString();
  document.getElementById("displayHereFive").innerHTML = `NGN ${sixthExchangeRate}`;
  }
 document.getElementById("button_addTwelve").onclick = function () {
    sixthExchangeRate = 0;
    let resetSixthExchangeRate;
     resetSixthExchangeRate = sixthExchangeRate;
  document.getElementById("displayHereFive").innerHTML = `${resetSixthExchangeRate}`;
 }
//  seventh
  document.getElementById("button_addThirteen").onclick = function() {
   nairaSixth = document.getElementById("nairaValueSix").value;
       nairaSixth = Number(nairaSixth);
     seventhExchangeRate = nairaSixth * japaneseYen;
     seventhExchangeRate = Math.round(seventhExchangeRate);
     seventhExchangeRate = parseInt(seventhExchangeRate);
     seventhExchangeRate = seventhExchangeRate.toLocaleString();
  document.getElementById("displayHereSix").innerHTML = `NGN ${seventhExchangeRate}`;
  }
 document.getElementById("button_addFourteen").onclick = function () {
          seventhExchangeRate = 0;
    let resetSeventhExchangeRate;
     resetSeventhExchangeRate = seventhExchangeRate;
  document.getElementById("displayHereSix").innerHTML = `${resetSeventhExchangeRate}`;
 }

  //eight
  document.getElementById("button_addFivteen").onclick = function() {
      nairaSeventh = document.getElementById("nairaValueSeven").value;
      eightExchangeRate = nairaSeventh * liberianDollar;
      eightExchangeRate = Math.round(eightExchangeRate);
      eightExchangeRate = parseInt(eightExchangeRate);
      eightExchangeRate = eightExchangeRate.toLocaleString();
  document.getElementById("displayHereSeven").innerHTML = `NGN ${eightExchangeRate}`;
  }
  document.getElementById("button_addSixteen").onclick = function () {
        eightExchangeRate = 0;
    let resetEightExchangeRate;
     resetEightExchangeRate = eightExchangeRate;
 document.getElementById("displayHereSeven").innerHTML = `${resetEightExchangeRate}`;
 }
// //nine
 document.getElementById("button_addSeventeen").onclick = function() {
    nairaEight = document.getElementById("nairaValueEight").value;
       nairaEight = Number(nairaEight);
     ninthExchangeRate = nairaEight * mexico;
    ninthExchangeRate = Math.round(ninthExchangeRate);
    ninthExchangeRate = parseInt(ninthExchangeRate);
    ninthExchangeRate = ninthExchangeRate.toLocaleString();
 document.getElementById("displayHereEight").innerHTML = `NGN ${ninthExchangeRate}`;
  }
 document.getElementById("button_addEighteen").onclick = function () {
    ninthExchangeRate = 0;
    let resetNinthExchangeRate;
     resetNinthExchangeRate = ninthExchangeRate;
 document.getElementById("displayHereEight").innerHTML = `${resetNinthExchangeRate}`;
  }
//  //tenth
 document.getElementById("button_addNineteen").onclick = function() {
   nairaNinth = document.getElementById("nairaValueNine").value;
      nairaNinth = Number(nairaNinth);
     tenthExchangeRate = nairaNinth * qatar;
      tenthExchangeRate = Math.round(tenthExchangeRate);
      tenthExchangeRate = parseInt(tenthExchangeRate);
      tenthExchangeRate = tenthExchangeRate.toLocaleString();
 document.getElementById("displayHereNine").innerHTML = `NGN ${tenthExchangeRate}`;
  }
  document.getElementById("button_addTwenty").onclick = function () {
    tenthExchangeRate = 0;
    let resetTenthExchangeRate;
     resetTenthExchangeRate = tenthExchangeRate;
 document.getElementById("displayHereNine").innerHTML = `${resetTenthExchangeRate}`;
}
// eleventh
document.getElementById("button_addFreshOne").onclick = function () {
    nairaTenth = document.getElementById("nairaValueTen").value;
   nairaTenth = Number(nairaTenth);
      eleventhExchangeRate = nairaTenth * tanzaniaDollar;
    eleventhExchangeRate = Math.round(eleventhExchangeRate);
    eleventhExchangeRate = parseInt(eleventhExchangeRate);
    eleventhExchangeRate = eleventhExchangeRate.toLocaleString();
      document.getElementById("displayHereTen").innerHTML = `NGN ${eleventhExchangeRate}`;
 }
 document.getElementById("button_addFreshTwo").onclick = function () {
    eleventhExchangeRate = 0;
    let resetEleventhExchangeRate;
     resetEleventhExchangeRate = eleventhExchangeRate;
 document.getElementById("displayHereTen").innerHTML = `${resetEleventhExchangeRate}`;
 }
  //twelve
  document.getElementById("button_addFreshThree").onclick = function() {
    nairaEleventh = document.getElementById("nairaValueEleven").value;
       nairaEleventh = Number(nairaEleventh);
      twelvthExchangeRate = nairaEleventh * centralAfrica;
     twelvthExchangeRate = Math.round(twelvthExchangeRate);
     twelvthExchangeRate = parseInt(twelvthExchangeRate);
     twelvthExchangeRate = twelvthExchangeRate.toLocaleString();
 document.getElementById("displayHereEleven").innerHTML = `NGN ${twelvthExchangeRate}`;
 }
 document.getElementById("button_addFreshFour").onclick = function () {
           twelvthExchangeRate = 0;
    let resetTwelvthExchangeRate;
     resetTwelvthExchangeRate = twelvthExchangeRate;
  document.getElementById("displayHereEleven").innerHTML = `${resetTwelvthExchangeRate}`;
  }
  //thirteen
  document.getElementById("button_addFreshFive").onclick = function() {
      nairaTwelvth = document.getElementById("nairaValueTwelve").value;
      nairaTwelvth = Number(nairaTwelvth);
      thirteenExchangeRate = nairaTwelvth * UnitedStates;
     thirteenExchangeRate = Math.round(thirteenExchangeRate);
     thirteenExchangeRate = parseInt(thirteenExchangeRate);
     thirteenExchangeRate = thirteenExchangeRate.toLocaleString();
 document.getElementById("displayHereTwelve").innerHTML = `NGN ${thirteenExchangeRate}`;
  }
 document.getElementById("button_addFreshSix").onclick = function () {
         thirteenExchangeRate = 0;
    let resetThirteenExchangeRate;
     resetThirteenExchangeRate = thirteenExchangeRate;
 document.getElementById("displayHereTwelve").innerHTML = `${resetThirteenExchangeRate}`;
  }
  //fourteen
document.getElementById("button_addFreshSeven").onclick = function () {
    nairaThirteen = document.getElementById("nairaValueThirteen").value;
    nairaThirteen = Number(nairaThirteen);
    fourteenExchangeRate = nairaThirteen * dogeCoin;
    fourteenExchangeRate = Math.round(fourteenExchangeRate);
    fourteenExchangeRate = parseInt(fourteenExchangeRate);
    fourteenExchangeRate = fourteenExchangeRate.toLocaleString();
    document.getElementById("displayHereThirteen").innerHTML = `NGN ${fourteenExchangeRate}`;
}
      document.getElementById("button_addFreshEight").onclick = function () {
     fourteenExchangeRate = 0;
    let resetFourteenExchangeRate;
     resetFourteenExchangeRate = fourteenExchangeRate;
     document.getElementById("displayHereThirteen").innerHTML = `${resetFourteenExchangeRate}`;
 }
  //fivteen
  document.getElementById("button_addFreshNine").onclick = function() {
    nairaFourteen = document.getElementById("nairaValueFourteen").value;
       nairaFourteen = Number(nairaFourteen);
      fiveteenExchangeRate = nairaFourteen * litCoin;
      fiveteenExchangeRate = Math.round(fiveteenExchangeRate);
      fiveteenExchangeRate = parseInt(fiveteenExchangeRate);
      fiveteenExchangeRate = fiveteenExchangeRate.toLocaleString();
  document.getElementById("displayHereFourteen").innerHTML = `NGN ${fiveteenExchangeRate}`;
  }
  document.getElementById("button_addFreshTen").onclick = function () {
          fiveteenExchangeRate = 0;
    let resetFiveteenExchangeRate;
     resetFiveteenExchangeRate = fiveteenExchangeRate;
  document.getElementById("displayHereFourteen").innerHTML = `${resetFiveteenExchangeRate}`;
  }
  //sixteen
  document.getElementById("button_addFreshEleven").onclick = function() {
    nairaFiveteen = document.getElementById("nairaValueFivteen").value;
       nairaFiveteen = Number(nairaFiveteen);
      sixteenExchangeRate = nairaFiveteen * etheruim;
      sixteenExchangeRate = Math.round(sixteenExchangeRate);
      sixteenExchangeRate = parseInt(sixteenExchangeRate);
      sixteenExchangeRate = sixteenExchangeRate.toLocaleString();
 document.getElementById("displayHereFivteen").innerHTML = `NGN ${sixteenExchangeRate}`;
 }
 document.getElementById("button_addFreshTwelve").onclick = function () {
        sixteenExchangeRate = 0;
    let resetSixteenExchangeRate;
     resetSixteenExchangeRate = sixteenExchangeRate;
 document.getElementById("displayHereFivteen").innerHTML = `${resetSixteenExchangeRate}`;
 }
 //seventeen
 document.getElementById("button_addFreshThirteen").onclick = function() {
   nairaSixteen = document.getElementById("nairaValueSixteen").value;
      nairaSixteen = Number(nairaSixteen);
     seventeenExchangeRate = nairaSixteen * gold;
     seventeenExchangeRate = Math.round(seventeenExchangeRate);
     seventeenExchangeRate = parseInt(seventeenExchangeRate);
     seventeenExchangeRate = seventeenExchangeRate.toLocaleString();
 document.getElementById("displayHereSixteen").innerHTML = `NGN ${seventeenExchangeRate}`;
 }
 document.getElementById("button_addFreshFourteen").onclick = function () {
          seventeenExchangeRate = 0;
    let resetSeventeenExchangeRate;
     resetSeventeenExchangeRate = seventeenExchangeRate;
 document.getElementById("displayHereSixteen").innerHTML = `${resetSeventeenExchangeRate}`;
 }
 //eighteen
 document.getElementById("button_addFreshFivteen").onclick = function() {
   nairaSeventeen = document.getElementById("nairaValueSeventeen").value;
      nairaSeventeen = Number(nairaSeventeen);
     eighteenExchangeRate = nairaSeventeen * palladuim;
     eighteenExchangeRate = parseInt(eighteenExchangeRate);
     eighteenExchangeRate = eighteenExchangeRate.toLocaleString();
 document.getElementById("displayHereSeventeen").innerHTML = `NGN ${eighteenExchangeRate}`;
 }
 document.getElementById("button_addFreshSixteen").onclick = function () {
         eighteenExchangeRate = 0;
    let resetEighteenExchangeRate;
     resetEighteenExchangeRate = eighteenExchangeRate;
 document.getElementById("displayHereSeventeen").innerHTML = `${resetEighteenExchangeRate}`;
  }
  //ninteen
  document.getElementById("button_addFreshSeventeen").onclick = function() {
    nairaEighteen = document.getElementById("nairaValueEighteen").value;
       nairaEighteen = Number(nairaEighteen);
      ninteenExchangeRate = nairaEighteen * silver;
      ninteenExchangeRate = Math.round(ninteenExchangeRate);
      ninteenExchangeRate = parseInt(ninteenExchangeRate);
      ninteenExchangeRate = ninteenExchangeRate.toLocaleString();
  document.getElementById("displayHereEighteen").innerHTML = `NGN ${ninteenExchangeRate}`;
  }
  document.getElementById("button_addFreshEighteen").onclick = function () {
           ninteenExchangeRate = 0;
    let resetNinteenExchangeRate;
     resetNinteenExchangeRate = ninteenExchangeRate;
  document.getElementById("displayHereEighteen").innerHTML = `${resetNinteenExchangeRate}`;
  }
  //twenty
  document.getElementById("button_addFreshNineteen").onclick = function() {
    nairaNineteen = document.getElementById("nairaValueNineteen").value;
       nairaNineteen = Number(nairaNineteen);
      twentyExchangeRate = nairaNineteen * bitcoin;
      twentyExchangeRate = Math.round(twentyExchangeRate);
      twentyExchangeRate = parseInt(twentyExchangeRate);
      twentyExchangeRate = twentyExchangeRate.toLocaleString();
  document.getElementById("displayHereNineteen").innerHTML = `NGN ${twentyExchangeRate}`;
  }
  document.getElementById("button_addFreshTwenty").onclick = function () {
        twentyExchangeRate = 0;
    let resetTwentyExchangeRate;
     resetTwentyExchangeRate = twentyExchangeRate;
  document.getElementById("displayHereNineteen").innerHTML = `${resetTwentyExchangeRate}`;
}
  //twenty
  document.getElementById("button_addFreshNineteened").onclick = function() {
    nairaTwenty = document.getElementById("nairaValueNineteened").value;
       nairaTwenty = Number(nairaTwenty);
      twentyOneExchangeRate = nairaTwenty * cedis;
      twentyOneExchangeRate = Math.round(twentyOneExchangeRate);
      twentyOneExchangeRate = parseInt(twentyOneExchangeRate);
      twentyOneExchangeRate = twentyOneExchangeRate.toLocaleString();
  document.getElementById("displayHereNineteened").innerHTML = `NGN ${twentyOneExchangeRate}`;
  }
  document.getElementById("button_addFreshTwentyed").onclick = function () {
        twentyOneExchangeRate = 0;
    let resetTwentyOneExchangeRate;
     resetTwentyOneExchangeRate = twentyOneExchangeRate;
  document.getElementById("displayHereNineteened").innerHTML = `${resetTwentyOneExchangeRate}`;
}
  //twenty-One
  document.getElementById("button_addFreshNineteeneds").onclick = function() {
    nairaTwentyOne = document.getElementById("nairaValueNineteeneds").value;
       nairaTwentyOne = Number(nairaTwentyOne);
      twentyTwoExchangeRate = nairaTwentyOne * rands;
      twentyTwoExchangeRate = Math.round(twentyTwoExchangeRate);
      twentyTwoExchangeRate = parseInt(twentyTwoExchangeRate);
      twentyTwoExchangeRate = twentyTwoExchangeRate.toLocaleString();
  document.getElementById("displayHereNineteeneds").innerHTML = `NGN ${twentyTwoExchangeRate}`;
  }
  document.getElementById("button_addFreshTwentyeds").onclick = function () {
        twentyTwoExchangeRate = 0;
    let resetTwentyTwoExchangeRate;
     resetTwentyTwoExchangeRate = twentyTwoExchangeRate;
  document.getElementById("displayHereNineteeneds").innerHTML = `${resetTwentyTwoExchangeRate}`;
}
//end//

//date-injections
let todayDate;
todayDate = new Date();
document.getElementById("newUpdate").innerHTML = `${todayDate}`;
