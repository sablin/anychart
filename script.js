var stage = acgraph.create('stage-container');
var grath = stage.path();
var i, x, y,textX,textY;
function create(){
    var a = document.getElementById('arr').value;
    var result = a.split(",");
    grath.moveTo(0,0).lineTo(0,400);
    grath.moveTo(0,400).lineTo(400,400);
    textX = stage.text();
    textX.x(385);
    textX.y(375);
    textX.text('X');
    textX.fontSize(18);
    textX.fontWeight('bold');
    textY = stage.text();
    textY.x(5);
    textY.y(0);
    textY.text('Y');
    textY.fontSize(18);
    textY.fontWeight('bold');
    for(i=0; i<result.length; i++){
        x = i*20;
        if(isNaN(result[i])){
            y = Math.round(Math.random()* 400);
            alert('В вашем массиве присутствовали текстовые значения.' + result[i] + ' было заменено на случайное число' + y)
        }else{
           y = result[i];
        }

        stage.circle(x,y, 2).stroke('red');
        if(i>0){
            grath.moveTo( x-20, result[i-1]).lineTo(x,y).stroke('red');
        }
        console.log('x'  + ' : ' + x + ', ' + 'y' + ':' + y);
         }
    document.querySelector('#create').disabled = true;

}
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('arr').value = '';
    grath.clear();
    textX.text('');
    textY.text('');
    var circles = document.querySelectorAll('circle');
    for( i=0; i<circles.length;i++){
        circles[i].style.display = 'none';
    };
    document.querySelector('#create').disabled = false;
});


