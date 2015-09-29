angular.module('MVM.filters', [])
    .filter('formatmdn', [function () {  
        return function (mdn) {
            if(mdn){
                var a = mdn.match(/(\d{3})(\d{3})(\d{4})/i);
                a.shift();
                return "(" + a[0] + ") " + a[1] + " - " + a[2];
            }
            return "";
        }
    }])
    
     .filter('displayusername', [function () {  
        return function (uname) {
            if(uname){
                var a = uname.match(/^[\d]+$/);
                return a ? "Kevin Johnathan" : uname;
            }
            return "";
        }
    }])

   .filter('validatecard', [function () {  
        return function (ccnumber) {
          if (!ccnumber) { return ''; }
          var len = ccnumber.length;
          var cardType, valid;
          mul = 0,
          prodArr = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]],
          sum = 0;

           while (len--) {
               sum += prodArr[mul][parseInt(ccnumber.charAt(len), 10)];
               mul ^= 1;
           }

           if (sum % 10 === 0 && sum > 0) {
             valid = "valid"
           } else {
             valid = "not valid"
           }
          ccnumber = ccnumber.toString().replace(/\s+/g, '');

          /*if(/^(34)|^(37)/.test(ccnumber)) {
            cardType = "american-express";
          }
          if(/^(62)|^(88)/.test(ccnumber)) {
            cardType = "china-unionPay";
          }
          if(/^30[0-5]/.test(ccnumber)) {
            cardType = "diners-club-carte-blanche";
          }
          if(/^(2014)|^(2149)/.test(ccnumber)) {
            cardType = "diners-club-enroute";
          }
          if(/^36/.test(ccnumber)) {
            cardType = "diners-club-international";
          }
          if(/^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/.test(ccnumber)) {
            cardType = "discover-card";
          }
          if(/^35(2[89]|[3-8][0-9])/.test(ccnumber)) {
            cardType = "jcb";
          }
          if(/^(6304)|^(6706)|^(6771)|^(6709)/.test(ccnumber)) {
            cardType = "laser";
          }
          if(/^(5018)|^(5020)|^(5038)|^(5893)|^(6304)|^(6759)|^(6761)|^(6762)|^(6763)|^(0604)/.test(ccnumber)) {
            cardType = "maestro";
          }*/
          if(/^5[1-5]/.test(ccnumber)) {
            cardType = "master-card";
          }
          else if (/^4/.test(ccnumber)) {
            cardType = "visa";
          }
		  else{
		    cardType = "american-express"
		  }
          /*if (/^(4026)|^(417500)|^(4405)|^(4508)|^(4844)|^(4913)|^(4917)/.test(ccnumber)) {
            cardType = "visa-electron"
          }*/
          return cardType;
        };
    }]);
