 //variables and Const
let nairas, nairaOnes, nairaTwos, nairaThrees, nairaFours, nairaFivths, nairaSixths, nairaSevenths, nairaEights, nairaNinths, nairaTenths, nairaElevenths, nairaTwelvths, nairaThirteens, nairaFourteens, nairaFiveteens,nairaSixteens, nairaSeventeens, nairaEighteens, nairaNineteens, nairaTwentys, nairaTwentyOnes;
let firstExchangeRates, secondExchangeRates, thirdExchangeRates, fourthExchangeRates, fivthExchangeRates, sixthExchangeRates, seventhExchangeRates, eightExchangeRates, ninthExchangeRates, tenthExchangeRates, eleventhExchangeRates, twelvthExchangeRates, thirteenExchangeRates, fourteenExchangeRates, fiveteenExchangeRates, sixteenExchangeRates, seventeenExchangeRates, eighteenExchangeRates, ninteenExchangeRates, twentyExchangeRates, twentyOneExchangeRates, twentyTwoExchangeRates;
const canadaDollars = 325.17, dogeCoins = 29.85, palladuims = 890643, silvers = 8023.94, golds = 740982, etherum = 722154.38, bitcoins = 9138764.08, chineseYens = 62.18, newsZeaLand = 270.16, euross = 425.02, randss = 24.99, cediss = 45.32, britishPounds = 503.27, mexicos = 21.01, japaneseYens = 3.14, tanzaniaDollars = 0.18, centralAfricas = 0.66, swissFrancs = 440.10, liberiansDollar = 2.73, litCoins = 25940.62, qatars = 115.05, unitedStated = 419.867;    
 //firstinput
  document.getElementById("button_addExtraOne").onclick = function() {
     nairas = document.getElementById("myValue").value;
     nairas= Number(nairas);
     firstExchangeRates = nairas * canadaDollars;
      firstExchangeRates = Math.round(firstExchangeRates);
      firstExchangeRates = parseInt(firstExchangeRates);
      firstExchangeRates = firstExchangeRates.toLocaleString();
 document.getElementById("displayThere").innerHTML = `NGN ${firstExchangeRates}`;
 }
 document.getElementById("button_addExtraTwo").onclick = function () {
      firstExchangeRates = 0;
      let resetFirstExchangeRates;
      resetFirstExchangeRates = firstExchangeRates;
  document.getElementById("displayThere").innerHTML = `${resetFirstExchangeRates}`;
 }
  //secondinput
  document.getElementById("button_addExtraThree").onclick = function() {
    nairaOnes = document.getElementById("myValueOne").value;
      nairaOnes = Number(nairaOnes);
     secondExchangeRates = nairaOnes * dogeCoins;
      secondExchangeRates = Math.round(secondExchangeRates);
      secondExchangeRates = parseInt(secondExchangeRates);
      secondExchangeRates = secondExchangeRates.toLocaleString();
 document.getElementById("displayThereOne").innerHTML = `NGN ${secondExchangeRates}`;
 }
document.getElementById("button_addExtraFour").onclick = function (){
      secondExchangeRates = 0;
      let resetSecondExchangeRates;
      resetSecondExchangeRates = secondExchangeRates;
 document.getElementById("displayThereOne").innerHTML = `${resetSecondExchangeRates}`;
 }
// //  third input 
 document.getElementById("button_addExtraFive").onclick = function() {
    nairaTwos = document.getElementById("myValueTwo").value;
       nairaTwos = Number(nairaTwos);
      thirdExchangeRates = nairaTwos * palladuims;
    thirdExchangeRates = Math.round(thirdExchangeRates);
    thirdExchangeRates = parseInt(thirdExchangeRates);
    thirdExchangeRates = thirdExchangeRates.toLocaleString();
  document.getElementById("displayThereTwo").innerHTML = `NGN ${thirdExchangeRates}`;    
 }
  document.getElementById("button_addExtraSix").onclick = function (){
     thirdExchangeRates = 0;
     let resetThirdExchangeRates;
     resetThirdExchangeRates = thirdExchangeRates;
  document.getElementById("displayThereTwo").innerHTML = `${resetThirdExchangeRates}`;
}
 
//fourth input
  document.getElementById("button_addExtraSeven").onclick = function() {
    nairaThrees = document.getElementById("myValueThree").value;
       nairaThrees = Number(nairaThrees);
      fourthExchangeRates = nairaThrees * silvers;
      fourthExchangeRates = Math.round(fourthExchangeRates);
      fourthExchangeRates = parseInt(fourthExchangeRates);
      fourthExchangeRates = fourthExchangeRates.toLocaleString();
  document.getElementById("displayThereThree").innerHTML = `NGN ${fourthExchangeRates}`;
}
 document.getElementById("button_addExtraEight").onclick = function () {
    fourthExchangeRates = 0;
     let resetFourthExchangeRates;
     resetFourthExchangeRates = fourthExchangeRates;
 document.getElementById("displayThereThree").innerHTML = `${resetFourthExchangeRates}`;
 } 
//fivth input 
document.getElementById("button_addExtraNine").onclick = function() {
  nairaFours = document.getElementById("myValueFour").value;
     nairaFours = Number(nairaFours);
    fivthExchangeRates = nairaFours * golds;
    fivthExchangeRates = Math.round(fivthExchangeRates);
    fivthExchangeRates = parseInt(fivthExchangeRates);
    fivthExchangeRates = fivthExchangeRates.toLocaleString();
    document.getElementById("displayThereFour").innerHTML = `NGN ${fivthExchangeRates}`;
}
document.getElementById("button_addExtraTen").onclick = function () {
    fivthExchangeRates = 0;
    let resetFivthExchangeRates;
     resetFivthExchangeRates = fivthExchangeRates;
  document.getElementById("displayThereFour").innerHTML = `${resetFivthExchangeRates}`;
} 
//sixth input 
  document.getElementById("button_addExtraEleven").onclick = function() {
    nairaFivths = document.getElementById("myValueFive").value;
       nairaFivths = Number(nairaFivths);
      sixthExchangeRates = nairaFivths * newsZeaLand;
      sixthExchangeRates = Math.round(sixthExchangeRates);
      sixthExchangeRates = Math.round(sixthExchangeRates);
      sixthExchangeRates = Math.round(sixthExchangeRates);
  document.getElementById("displayThereFive").innerHTML = `NGN ${sixthExchangeRates}`;
  }
 document.getElementById("button_addExtraTwelve").onclick = function () {
    sixthExchangeRates = 0;
    let resetSixthExchangeRates;
     resetSixthExchangeRates = sixthExchangeRates;
  document.getElementById("displayThereFive").innerHTML = `${resetSixthExchangeRates}`;
 }
 //seventh
  document.getElementById("button_addExtraThirteen").onclick = function() {
   nairaSixths = document.getElementById("myValueSix").value;
       nairaSixths = Number(nairaSixths);
     seventhExchangeRates = nairaSixths * bitcoins;
     seventhExchangeRates = Math.round(seventhExchangeRates);
     seventhExchangeRates = parseInt(seventhExchangeRates);
     seventhExchangeRates = seventhExchangeRates.toLocaleString();
  document.getElementById("displayThereSix").innerHTML = `NGN ${seventhExchangeRates}`;
  }
 document.getElementById("button_addExtraFourteen").onclick = function () {
          seventhExchangeRates = 0;
    let resetSeventhExchangeRates;
     resetSeventhExchangeRates = seventhExchangeRates;
  document.getElementById("displayThereSix").innerHTML = `${resetSeventhExchangeRates}`;
 }

  //eight
  document.getElementById("button_addExtraFivteen").onclick = function() {
      nairaSevenths = document.getElementById("myValueSeven").value;
      eightExchangeRates = nairaSevenths * chineseYens;
      eightExchangeRates = Math.round(eightExchangeRates);
      eightExchangeRates = parseInt(eightExchangeRates);
      eightExchangeRates = eightExchangeRates.toLocaleString();
  document.getElementById("displayThereSeven").innerHTML = `NGN ${eightExchangeRates}`;
  }
  document.getElementById("button_addExtraSixteen").onclick = function () {
        eightExchangeRates = 0;
    let resetEightExchangeRates;
     resetEightExchangeRates = eightExchangeRates;
 document.getElementById("displayThereSeven").innerHTML = `${resetEightExchangeRates}`;
 }
//nine
 document.getElementById("button_addExtraSeventeen").onclick = function() {
    nairaEights = document.getElementById("myValueEight").value;
       nairaEights = Number(nairaEights);
     ninthExchangeRates = nairaEights * etherum;
    ninthExchangeRates = Math.round(ninthExchangeRates);
    ninthExchangeRates = parseInt(ninthExchangeRates);
    ninthExchangeRates = ninthExchangeRates.toLocaleString();
 document.getElementById("displayThereEight").innerHTML = `NGN ${ninthExchangeRates}`;
  }
 document.getElementById("button_addExtraEighteen").onclick = function () {
    ninthExchangeRates = 0;
    let resetNinthExchangeRates;
     resetNinthExchangeRates = ninthExchangeRates;
 document.getElementById("displayThereEight").innerHTML = `${resetNinthExchangeRates}`;
  }
 //tenth
 document.getElementById("button_addExtraNineteen").onclick = function() {
   nairaNinths = document.getElementById("myValueNine").value;
      nairaNinths = Number(nairaNinths);
     tenthExchangeRates = nairaNinths * euross;
      tenthExchangeRates = Math.round(tenthExchangeRates);
      tenthExchangeRates  = parseInt(tenthExchangeRates);
      tenthExchangeRates = tenthExchangeRates.toLocaleString();
 document.getElementById("displayThereNine").innerHTML = `NGN ${tenthExchangeRates}`;
  }
  document.getElementById("button_addExtraTwenty").onclick = function () {
    tenthExchangeRates = 0;
    let resetTenthExchangeRates;
     resetTenthExchangeRates = tenthExchangeRates;
 document.getElementById("displayThereNine").innerHTML = `${resetTenthExchangeRates}`;
}
// // eleventh
 document.getElementById("button_addJustOne").onclick = function () {
     nairaTenths = document.getElementById("myValueTen").value;
    nairaTenths = Number(nairaTenths);
       eleventhExchangeRates = nairaTenths * britishPounds;
     eleventhExchangeRates = Math.round(eleventhExchangeRates);
     eleventhExchangeRates = parseInt(eleventhExchangeRates);
     eleventhExchangeRates = eleventhExchangeRates.toLocaleString();
       document.getElementById("displayThereTen").innerHTML = `NGN ${eleventhExchangeRates}`;
  }
  document.getElementById("button_addJustTwo").onclick = function () {
     eleventhExchangeRates = 0;
     let resetEleventhExchangeRates;
      resetEleventhExchangeRates = eleventhExchangeRates;
  document.getElementById("displayThereTen").innerHTML = `${resetEleventhExchangeRates}`;
  }
   //twelve
   document.getElementById("button_addJustThree").onclick = function() {
     nairaElevenths = document.getElementById("myValueEleven").value;
        nairaElevenths = Number(nairaElevenths);
       twelvthExchangeRates = nairaElevenths * swissFrancs;
      twelvthExchangeRates = Math.round(twelvthExchangeRates);
      twelvthExchangeRates = parseInt(twelvthExchangeRates);
      twelvthExchangeRates = twelvthExchangeRates.toLocaleString();
  document.getElementById("displayThereEleven").innerHTML = `NGN ${twelvthExchangeRates}`;
  }
  document.getElementById("button_addJustFour").onclick = function () {
            twelvthExchangeRates = 0;
     let resetTwelvthExchangeRates;
      resetTwelvthExchangeRates = twelvthExchangeRates;
   document.getElementById("displayThereEleven").innerHTML = `${resetTwelvthExchangeRates}`;
   }
   //thirteen
   document.getElementById("button_addJustFive").onclick = function() {
       nairaTwelvths = document.getElementById("myValueTwelve").value;
       nairaTwelvths = Number(nairaTwelvths);
       thirteenExchangeRates = nairaTwelvths * japaneseYens;
      thirteenExchangeRates = Math.round(thirteenExchangeRates);
      thirteenExchangeRates = parseInt(thirteenExchangeRates);
      thirteenExchangeRates = thirteenExchangeRates.toLocaleString();
  document.getElementById("displayThereTwelve").innerHTML = `NGN ${thirteenExchangeRates}`;
   }
  document.getElementById("button_addJustSix").onclick = function () {
          thirteenExchangeRates = 0;
     let resetThirteenExchangeRates;
      resetThirteenExchangeRates = thirteenExchangeRates;
  document.getElementById("displayThereTwelve").innerHTML = `${resetThirteenExchangeRates}`;
   }
   //fourteen
 document.getElementById("button_addJustSeven").onclick = function () {
     nairaThirteens = document.getElementById("myValueThirteen").value;
     nairaThirteens = Number(nairaThirteens);
     fourteenExchangeRates = nairaThirteens * liberiansDollar;
     fourteenExchangeRates = Math.round(fourteenExchangeRates);
     fourteenExchangeRates = parseInt(fourteenExchangeRates);
     fourteenExchangeRates = fourteenExchangeRates.toLocaleString();
     document.getElementById("displayThereThirteen").innerHTML = `NGN ${fourteenExchangeRates}`;
 }
       document.getElementById("button_addJustEight").onclick = function () {
      fourteenExchangeRates = 0;
     let resetFourteenExchangeRates;
      resetFourteenExchangeRates = fourteenExchangeRates;
      document.getElementById("displayThereThirteen").innerHTML = `${resetFourteenExchangeRates}`;
  }
   //fivteen
   document.getElementById("button_addJustNine").onclick = function() {
     nairaFourteens = document.getElementById("myValueFourteen").value;
        nairaFourteens = Number(nairaFourteens);
       fiveteenExchangeRates = nairaFourteens * litCoins;
       fiveteenExchangeRates = Math.round(fiveteenExchangeRates);
       fiveteenExchangeRates = parseInt(fiveteenExchangeRates);
       fiveteenExchangeRates = fiveteenExchangeRates.toLocaleString();
   document.getElementById("displayThereFourteen").innerHTML = `NGN ${fiveteenExchangeRates}`;
   }
  document.getElementById("button_addJustTen").onclick = function () {
          fiveteenExchangeRates = 0;
    let resetFiveteenExchangeRates;
     resetFiveteenExchangeRates = fiveteenExchangeRates;
  document.getElementById("displayThereFourteen").innerHTML = `${resetFiveteenExchangeRates}`;
  }
  //sixteen
  document.getElementById("button_addJustEleven").onclick = function() {
    nairaFiveteens = document.getElementById("myValueFivteen").value;
       nairaFiveteens = Number(nairaFiveteens);
      sixteenExchangeRates = nairaFiveteens * mexicos;
      sixteenExchangeRates = Math.round(sixteenExchangeRates);
      sixteenExchangeRates = parseInt(sixteenExchangeRates);
      sixteenExchangeRates = sixteenExchangeRates.toLocaleString();
 document.getElementById("displayThereFivteen").innerHTML = `NGN ${sixteenExchangeRates}`;
 }
 document.getElementById("button_addJustTwelve").onclick = function () {
        sixteenExchangeRates = 0;
    let resetSixteenExchangeRates;
     resetSixteenExchangeRates = sixteenExchangeRates;
 document.getElementById("displayThereFivteen").innerHTML = `${resetSixteenExchangeRates}`;
 }
 //seventeen
 document.getElementById("button_addJustThirteen").onclick = function() {
   nairaSixteens = document.getElementById("myValueSixteen").value;
      nairaSixteens = Number(nairaSixteens);
     seventeenExchangeRates = nairaSixteens * qatars;
     seventeenExchangeRates = Math.round(seventeenExchangeRates);
     seventeenExchangeRates = parseInt(seventeenExchangeRates);
     seventeenExchangeRates = seventeenExchangeRates.toLocaleString();
 document.getElementById("displayThereSixteen").innerHTML = `NGN ${seventeenExchangeRates}`;
 }
 document.getElementById("button_addJustFourteen").onclick = function () {
          seventeenExchangeRates = 0;
    let resetSeventeenExchangeRates;
     resetSeventeenExchangeRates = seventeenExchangeRates;
 document.getElementById("displayThereSixteen").innerHTML = `${resetSeventeenExchangeRates}`;
 }
 //eighteen
 document.getElementById("button_addJustFivteen").onclick = function() {
   nairaSeventeens = document.getElementById("myValueSeventeen").value;
      nairaSeventeens = Number(nairaSeventeens);
     eighteenExchangeRates = nairaSeventeens * tanzaniaDollars;
     eighteenExchangeRates = parseInt(eighteenExchangeRates);
     eighteenExchangeRates = eighteenExchangeRates.toLocaleString();
 document.getElementById("displayThereSeventeen").innerHTML = `NGN ${eighteenExchangeRates}`;
 }
 document.getElementById("button_addJustSixteen").onclick = function () {
         eighteenExchangeRates = 0;
    let resetEighteenExchangeRates;
     resetEighteenExchangeRates = eighteenExchangeRates;
 document.getElementById("displayThereSeventeen").innerHTML = `${resetEighteenExchangeRates}`;
  }
  //ninteen
  document.getElementById("button_addJustSeventeen").onclick = function() {
    nairaEighteens = document.getElementById("myValueEighteen").value;
       nairaEighteens = Number(nairaEighteens);
      ninteenExchangeRates = nairaEighteens * centralAfricas;
      ninteenExchangeRates = Math.round(ninteenExchangeRates);
      ninteenExchangeRates = parseInt(ninteenExchangeRates);
      ninteenExchangeRates = ninteenExchangeRates.toLocaleString();
  document.getElementById("displayThereEighteen").innerHTML = `NGN ${ninteenExchangeRates}`;
  }
  document.getElementById("button_addJustEighteen").onclick = function () {
           ninteenExchangeRates = 0;
    let resetNinteenExchangeRates;
     resetNinteenExchangeRates = ninteenExchangeRates;
  document.getElementById("displayThereEighteen").innerHTML = `${resetNinteenExchangeRates}`;
  }
  //twenty
  document.getElementById("button_addJustNineteen").onclick = function() {
    nairaNineteens = document.getElementById("myValueNineteen").value;
       nairaNineteens = Number(nairaNineteens);
      twentyExchangeRates = nairaNineteens * unitedStated;
      twentyExchangeRates = Math.round(twentyExchangeRates);
      twentyExchangeRates = parseInt(twentyExchangeRates);
      twentyExchangeRates = twentyExchangeRates.toLocaleString();
  document.getElementById("displayThereNineteen").innerHTML = `NGN ${twentyExchangeRates}`;
  }
  document.getElementById("button_addJustTwenty").onclick = function () {
        twentyExchangeRates = 0;
    let resetTwentyExchangeRates;
     resetTwentyExchangeRates = twentyExchangeRates;
  document.getElementById("displayThereNineteen").innerHTML = `${resetTwentyExchangeRates}`;
}

  //twenty
  document.getElementById("button_addJustNew").onclick = function() {
    nairaTwentys = document.getElementById("myValueNew").value;
       nairaTwentys = Number(nairaTwentys);
      twentyOneExchangeRates = nairaTwentys * cediss;
      twentyOneExchangeRates = Math.round(twentyOneExchangeRates);
      twentyOneExchangeRates = parseInt(twentyOneExchangeRates);
      twentyOneExchangeRates = twentyOneExchangeRates.toLocaleString();
  document.getElementById("displayThereNew").innerHTML = `NGN ${twentyOneExchangeRates}`;
  }
document.getElementById("button_addJustOneNew").onclick = function () {
   twentyOneExchangeRates = 0;
   let resettwentyOneExchangeRates;
   resettwentyOneExchangeRates = twentyOneExchangeRates;
   document.getElementById("displayThereNew").innerHTML = `${resettwentyOneExchangeRates}`;
}
  document.getElementById("button_addJustNewTwo").onclick = function() {
    nairaTwentyOnes = document.getElementById("myValueNewOne").value;
       nairaTwentyOnes = Number(nairaTwentyOnes);
      twentyTwoExchangeRates = nairaTwentyOnes * randss;
      twentyTwoExchangeRates = Math.round(twentyTwoExchangeRates);
      twentyTwoExchangeRates = parseInt(twentyTwoExchangeRates);
      twentyTwoExchangeRates = twentyTwoExchangeRates.toLocaleString();
  document.getElementById("displayThereNewOne").innerHTML = `NGN ${twentyTwoExchangeRates}`;
  }
document.getElementById("button_addJustNewThree").onclick = function () {
   twentyTwoExchangeRates = 0;
   let resetTwentyTwoExchangeRates;
   resetTwentyTwoExchangeRates = twentyTwoExchangeRates;
   document.getElementById("displayThereNewOne").innerHTML = `${resetTwentyTwoExchangeRates}`;
}
 //end//
