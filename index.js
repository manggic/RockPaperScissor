
function back(){

    document.getElementById('flexy').innerHTML =
    `<img id="rock.jpg" onclick="rpsGame(this)" src="./images/rock.jpg"  alt=""> 
    <img id="paper.jpg" onclick="rpsGame(this)" src="./images/paper.jpg"  alt="">
    <img id="scissor.png" onclick="rpsGame(this)" src="./images/scissor.png"  alt=""></img>`
}

function rpsGame(yourChoice){
    var rand = Math.floor(Math.random() * 3)
    var arr =['rock.jpg', 'paper.jpg', 'scissor.png' ]
    var obj = {
       "paper.jpg"  :"rock.jpg",
        "scissor.png" : "paper.jpg",
        "rock.jpg" : "scissor.png",
    }    

    if(arr[rand] === yourChoice.id){
        document.getElementById('flexy').innerHTML=`
        <div>
        <img id=${ yourChoice.id }   src="./images/${ yourChoice.id }"  alt="">
        <h4 class="text-center" >Your choice </h4>
        </div>
        <div class="">
          <h2 class='text-center' > DRAW</h2>
          <button onclick="back()" class="ml-3 btn btn-dark">Back</button>
        </div>  
        <div>
        <img id=${ arr[rand] }   src="./images/${arr[rand]}"  alt="">
        <h4 class="text-center" >Computer choice </h4>
        </div>`
    }  

    else{

       if(obj[yourChoice.id] === arr[rand] ){ 
        document.getElementById('flexy').innerHTML=`
        <div>
        <img id=${ yourChoice.id  }   src="./images/${yourChoice.id}"  alt="">
        <h4 class="text-center" >Your choice </h4>
        </div>
        <div>
          <h2> YOU WON</h2>
          <button onclick="back()" class="btn btn-dark ml-5">Back</button>
        </div>
        <div>
        <img id=${ arr[rand] }   src="./images/${arr[rand]}"  alt="">
        <h4 class="text-center" >Computer choice </h4>
        </div>`   
       }
     else{
        
        document.getElementById('flexy').innerHTML=`
        <div>
        <img id=${ yourChoice.id  }   src="./images/${yourChoice.id}"  alt="">
        <h4 class="text-center" >Your choice </h4>
        </div>
        <div>
          <h2> YOU LOSS</h2>
          <button onclick="back()" class="btn btn-dark ml-5">Back</button>
        </div>
        <div>
        <img id=${ arr[rand] }   src="./images/${arr[rand]}"  alt="">
        <h4 class="text-center" >Computer choice </h4>
        </div>`  
     }

        
    }  
}



