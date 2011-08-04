(function() {
  /**
   * Jadedown for browsers.
   * 
   * Usage:
   *    
   *    <script src="jadedown.js"></script>
   *
   *    jadedown('*Example*');
   *
   */
  var exports = {};

  function require(m) {
    if (m === './parser') {
      return exports;
    }
  }

