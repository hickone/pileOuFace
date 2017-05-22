/*jslint browser:true, white:true, devel:true*/
/*global $*/

(function() {
  "use strict";

  var valeur;
  //


  function pileOuFace(){
      valeur = Math.floor(Math.random() * 2) + 1;
      console.log(valeur);
      if (valeur === 1) {
        console.log("pile");
      }
      else if (valeur === 2) {
        console.log("face");
      }
  }


  $(document).ready(function() {
      pileOuFace();
    });



}());
