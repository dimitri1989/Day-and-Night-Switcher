
function Dark(){
     var light2  = document.getElementsByClassName("light-on")[0];
     var Dark2  = document.getElementsByClassName("Dark-on")[0];
     var g  = document.getElementsByClassName("mobile__eclipse")[0];
     var c  = document.getElementsByClassName("mobile__eclipse2")[0];
     var k  = document.getElementsByClassName("dark-circle")[0];
     var t = document.getElementsByClassName("container")[0];
     var b = document.getElementsByClassName("Ellipse")[0];
     var r = document.getElementsByClassName("mobile")[0];
     var footer__eclipse = document.getElementsByClassName("mobile")[0];
     var text = document.getElementsByClassName("mobile__title")[0];
     var mobileText = document.getElementsByClassName("mobile__text")[0];
     var skip = document.getElementsByClassName("foofter__skip")[0];
     var night = document.getElementsByClassName("Dark-on")[0];
     var light = document.getElementsByClassName("light-on")[0];
     var mobileHeader = document.getElementsByClassName("mobile__header")[0];
     mobileHeader.src = "img/Status\ bars-.svg"
     light2.classList.add("light-on2");
     Dark2.classList.add("Dark-on2");
     
      t.classList.add("container2");
      b.classList.add("Ellipse2");
      c.style.display="block";
      k.style.display="block";
      r.classList.add("mobile2");
      text.classList.add("mobile__title2");
      mobileText.classList.add("mobile__text2");
      skip.classList.add("foofter__skip2");
      footer__eclipse.classList.add("footer__eclipse2");
     

}
function light(){
      var light2  = document.getElementsByClassName("light-on")[0];
      var Dark2  = document.getElementsByClassName("Dark-on")[0];
      var mobileHeader = document.getElementsByClassName("mobile__header")[0];
      mobileHeader.src = "img/Status\ bars.svg"
      var c  = document.getElementsByClassName("mobile__eclipse2")[0];
      var k  = document.getElementsByClassName("dark-circle")[0];
      var t = document.getElementsByClassName("container")[0];
      var b = document.getElementsByClassName("Ellipse")[0];
      var r = document.getElementsByClassName("mobile")[0];
      var footer__eclipse = document.getElementsByClassName("mobile")[0];
      var text = document.getElementsByClassName("mobile__title")[0];
      var skip = document.getElementsByClassName("foofter__skip")[0];
      t.classList.remove("container2")
      b.classList.remove("Ellipse2");
      r.classList.remove("mobile2");
      footer__eclipse.classList.remove("footer__eclipse2");
      text.classList.remove("mobile__title2");
      var mobileText = document.getElementsByClassName("mobile__text")[0];
      mobileText.classList.remove("mobile__text2");
      skip.classList.remove("foofter__skip2");
      c.style.display="none";
      k.style.display="none";
      light2.classList.remove("light-on2");
      Dark2.classList.remove("Dark-on2");
      

}

