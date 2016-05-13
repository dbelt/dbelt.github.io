function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  
   
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(160,85,60,0,2);
    ctx.fill();
  
   
  
    
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(105,175,70,0,2*Math.PI);
    ctx.fill();
    
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(105,165,50,0,2*Math.PI);
    ctx.fill();
    
    
    ctx.fillStyle="black";
    ctx.beginPath();
    ctx.arc(100,75,50,0,2*Math.PI);
    ctx.fill();
    
     
    ctx.fillStyle="white";
    ctx.fillRect(112, 50, 20, 2);
    ctx.fillRect(65, 50, 20, 2);
    
    ctx.fillStyle="orange";
    ctx.beginPath();
    ctx.moveTo(100, 90);
    ctx.lineTo(90, 70);
    ctx.lineTo(110, 70);
    ctx.fill();
   
     ctx.fillStyle="purple";
    ctx.beginPath();
    ctx.arc(160,105,60,0,2);
    ctx.fill();
    
  }
}

