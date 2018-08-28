const inputHex = document.getElementById("hex");
const inputRgb = document.getElementById("rgb");
const letters = '0123456789ABCDEF';
const button = document.getElementById("convhex");
const body = document.getElementById("color");

let hexRandomColor = '#';
for (let i = 0; i < 6; i++) {
   hexRandomColor += letters[Math.floor(Math.random() * 16)];
}
console.log(hexRandomColor);

const rgbRandomColor = 'rgb(' +
  + (Math.floor(Math.random() * 256)) + ',' +
  + (Math.floor(Math.random() * 256)) + ',' +
  + (Math.floor(Math.random() * 256)) + ')';
console.log(rgbRandomColor);

const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

const rgbStringToRgbObj = (rgbString) => {
  const res = rgbString.replace("rgb(", "").replace(")", "");
  const array = res.split(",");
  const result = {
      r: parseInt(array[0]),
      g: parseInt(array[1]),
      b: parseInt(array[2]),
  };
  return result;
}

$( "#hex" ).keyup(function() {
  body.style.backgroundColor = inputHex.value;
  const rygyby = hexToRgb(inputHex.value);
  const resultRgb = "rgb(" + rygyby.r + ", " + rygyby.g + ", " + rygyby.b +")";
  $("#rgb").val(resultRgb);
});

$( "#rgb" ).keyup(function() {
  body.style.backgroundColor = inputRgb.value;
  const rgbString = inputRgb.value;
  const rgbObj = rgbStringToRgbObj(rgbString);
  const resultHex = rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b);
  $("#hex").val(resultHex);
});
