document.querySelector('#select').addEventListener('click', runMap);

function runMap(){
  let value = document.querySelector('#locationSelect').value;
  if(value == "1"){ document.getElementById("imageMap").src="https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467661/Sharikava/Map_1_u0z0g3.png";
  }else if(value == "2"){ document.getElementById("imageMap").src="https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467666/Sharikava/Map_2_hfygqk.png";
  }else if(value == "3"){ document.getElementById("imageMap").src="https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467671/Sharikava/Map_3_ubwh3j.png";
  }else if(value == "4"){ document.getElementById("imageMap").src="https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467676/Sharikava/Map_4_nlsdyt.png";
  }else{  document.getElementById("imageMap").src="https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467661/Sharikava/Map_1_u0z0g3.png";
  }
}



let leftCup = document.querySelector('#leftCupStill');
let rightCup = document.querySelector('#rightCupStill');


leftCup.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.src = "https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467521/Sharikava/Sharikava_3.2_dyh34m.png";
  // reset the img after a short delay
  setTimeout(function() {
    event.target.src = "https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467501/Sharikava/Sharikava_3_hf3jjg.png";
  }, 700);
}, false);
rightCup.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.src = "https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467511/Sharikava/Sharikava_2.2_tknlrg.png";
  // reset the img after a short delay
  setTimeout(function() {
    event.target.src = "https://res.cloudinary.com/oceana-web-designs/image/upload/v1610467494/Sharikava/Sharikava_2_ggz85f.png";
  }, 700);
}, false);


