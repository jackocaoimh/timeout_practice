
function countDown(time){
    let timer = setInterval(function(){
        time--;
        if (time <= 0){
            clearInterval(timer);
            console.log("DONE!");
        }
        else{
            console.log(time);
        }
    },1000)
}


function randomGame(){
    
    let random_num;
    let counter = 0;
    
    let answer = setInterval(function(){

        result = Math.random();
        counter++

        if (result > 0.75){
            clearInterval(answer);
            console.log('It took' + counter + 'times to be greater than 0.75');
        }
    },1000)
}

function randomGame(){
  let num;
  let times = 0;
  let timer = setInterval(function(){
    num = Math.random();
    times++
    if(num > .75) {
      clearInterval(timer);
      console.log("It took " + times + " try/tries.");
    }
  },1000)
}
    


