var copyThot;

window.onload = function() {
  var d, dateObj, day, month, monthNames, monthno, year;
  window.zclip = new ZeroClipboard(document.getElementById("copy-thot"));
  $('[data-toggle="tooltip"]').tooltip();
  zclip.on("ready", function() {
    return typeof console !== "undefined" && console !== null ? console.log("ZeroClipboard is ready!") : void 0;
  });
  dateObj = new Date;
  monthno = dateObj.getUTCMonth();
  day = dateObj.getUTCDate();
  year = dateObj.getUTCFullYear();
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  month = monthNames[monthno];
  d = month + ' ' + day + ', ' + year;
  return document.getElementById('date-text').innerHTML = d;
};

copyThot = function() {
  var essay;
  essay = ("\t" + ($("#th").val())) + ("\r\t" + ($("#ts1").val()) + " " + ($("#ex1").val()) + " " + ($("#cs1").val()) + "\r\t") + (($("#ts2").val()) + " " + ($("#ex2").val()) + " " + ($("#cs2").val()) + "\r\t") + (($("#ts3").val()) + " " + ($("#ex3").val()) + " " + ($("#cs3").val()) + "\r\t") + ("" + ($("#co").val()));
  zclip.on("copy", (function(_this) {
    return function(event) {
      var clipboard;
      clipboard = event.clipboardData;
      return clipboard.setData("text/plain", essay);
    };
  })(this));
  return zclip.on("error", (function(_this) {
    return function(event) {
      return window.prompt("Copy to clipboard:\nCtrl+C, Enter", essay);
    };
  })(this));
};

// ---
// generated by coffee-script 1.9.2