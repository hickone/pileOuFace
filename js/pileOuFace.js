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
        $( "#message" ).text( "Pile" );
      }
      else if (valeur === 2) {
        $( "#message" ).text( "Face" );
      }
  }

  function addClick(){
    $('button').click(function(){
      pileOuFace();
    });
  }


  $(document).ready(function() {
      addClick();
    });



}());
