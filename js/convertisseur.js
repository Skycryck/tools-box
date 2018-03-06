(function () {

  'use strict';

  var SgConverter = function () {
    var that = this;

    this.converters = ['decimal', 'hexadecimal', 'binary'];
    this.inputElements = {};

    this.decimalToHexadecimal = function (decimalValue) {
        return dToH(decimalValue);
    };

    this.decimalToBinary = function (decimalValue) {
        return dToB(decimalValue);
    };

    this.hexadecimalToDecimal = function (hexadecimalValue) {
        return hToD(hexadecimalValue);
    };

    this.hexadecimalToBinary = function (hexadecimalValue) {
        return hToB(hexadecimalValue);
    };

    this.binaryToDecimal = function (binaryValue) {
        return bToD(binaryValue);
    };

    this.binaryToHexadecimal = function (binaryValue) {
        return bToH(binaryValue);
    };

    this.convert = function (sourceType) {
      var sourceValue = this.inputElements[sourceType].value;
      this.converters.forEach(function (converter) {
        if (converter !== sourceType) {
          var ucConverter = converter.charAt(0).toUpperCase() + converter.slice(1);
          var converterMethod = sourceType + 'To' + ucConverter;
          that.inputElements[converter].value = that[converterMethod](sourceValue);
        }
      });
    }; // convert

    this.update = function (event) {
      that.convert(event.target.id);
    };
  }; // onEnterKey

  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('decimal').focus();
    var sgConverter = new SgConverter();
    sgConverter.converters.forEach(function (converter) {
      sgConverter.inputElements[converter] = document.getElementById(converter);
      document.getElementById(converter).nextElementSibling.addEventListener('click', function () {
        sgConverter.convert(converter);
      }, false );

      ['keyup', 'change'].forEach(function (event) {
        document.getElementById(converter).addEventListener(event, sgConverter.update, false);
      });

    });
  }); // DOMContentLoaded

}()); // IIFE

//Prend un nombre decimal en paramétre et renvoie un nombre binaire
function dToB(d){
    var b = "";
    d = Number(d);
    do {
        var r = d % 2;
        b = b + r;
        d = (d - r) / 2;
    } while(d != 0);
    return reverse(b);
}

//Prend un nombre binaire en paramétre et renvoie un nombre decimal
function bToD(b) {
    var d = 0;
    b = reverse(b)
    for(var i = 0; i < b.length; i++) {
        if(b[i] === "1") {
            d = d + (Math.pow(2, i));
        }
    }
    return d.toString();
}

//Prend un nombre binaire en paramétre et renvoie un nombre hexadecimal
function bToH(b) {
    var h = "";
    
    b = reverse(b);
    while(b.length % 4 != 0) {
        b = b + "0";
    }
    b = reverse(b);
    
    var bit = [];
    for(var i = 0; i < b.length; i = i + 4) {
        bit.push(b.substr(i,4));
    }
    
    for(var j = 0; j < bit.length; j++) {
        switch(bit[j]) {
            case "0000" : 
                h = h + "0";
                break;
            case "0001" :
                h = h + "1";
                break;
            case "0010" :
                h = h + "2";
                break;
            case "0011" :
                h = h + "3";
                break;
            case "0100" :
                h = h + "4";
                break;
            case "0101" :
                h = h + "5";
                break;
            case "0110" :
                h = h + "6";
                break;
            case "0111" :
                h = h + "7";
                break;
            case "1000" : 
                h = h + "8";
                break;
            case "1001" :
                h = h + "9";
                break;
            case "1010" :
                h = h + "A";
                break;
            case "1011" :
                h = h + "B";
                break;
            case "1100" :
                h = h + "C";
                break;
            case "1101" :
                h = h + "D";
                break;
            case "1110" :
                h = h + "E";
                break;
            case "1111" :
                h = h + "F";
                break;
        }
    }
    return h;
}

//Prend un nombre hexadecimal en paramétre et renvoie un nombre binaire
function hToB(h) {
    var b = "";
    
    for(var i = 0; i < h.length; i++) {
        switch(h[i]) {
            case "0": 
                b = b + "0000";
                break;
            case "1":
                b = b + "0001";
                break;
            case "2":
                b = b + "0010";
                break;
            case "3":
                b = b + "0011";
                break;
            case "4":
                b = b + "0100";
                break;
            case "5":
                b = b + "0101";
                break;
            case "6":
                b = b + "0110";
                break;
            case "7":
                b = b + "0111";
                break;
            case "8": 
                b = b + "1000";
                break;
            case "9":
                b = b + "1001";
                break;
            case "A": case "a":
                b = b + "1010";
                break;
            case "B": case "b":
                b = b + "1011";
                break;
            case "C": case "c":
                b = b + "1100";
                break;
            case "D": case "d":
                b = b + "1101";
                break;
            case "E": case "e":
                b = b + "1110";
                break;
            case "F": case "f":
                b = b + "1111";
                break;
        }
    }
    
    return b;
}

//Prend un nombre decimal en paramétre et renvoie un nombre hexadecimal
function dToH(d) {
    return bToH(dToB(d));
}

//Prend un nombre hexadecimal en paramétre et renvoie un nombre decimal
function hToD(h) {
    return bToD(hToB(h));
}

//Renvoie le string inverse de celui passer en paramétre
function reverse(s) {
    return s.split("").reverse().join("");
}
