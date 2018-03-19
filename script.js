var stage = acgraph.create('stage-container');
function create(){
    var grath = stage.path();
     var i, x, y,textX,textY,
    a = document.getElementById('arr').value;
    var result = a.split(",");
    grath.moveTo(0,0).lineTo(0,375);
    grath.moveTo(0,375).lineTo(400,375);
    textX = stage.text();
    textX.x(385);
    textX.y(345);
    textX.text('X');
    textX.fontSize(18);
    textX.fontWeight('bold');
    textY = stage.text();
    textY.x(5);
    textY.y(5);
    textY.text('Y');
    textY.fontSize(18);
    textY.fontWeight('bold');
    for(i=0; i<result.length; i++){

        x = i*20;
        y = result[i];
        stage.circle(x,y, 2).stroke('red');
        if(i>0){
            grath.moveTo( x-20, result[i-1]).lineTo(x,y).stroke('red');
        }

        console.log('x'  + ' : ' + x + ', ' + 'y' + ':' + y);
    }

}
document.getElementById('clear').addEventListener('click',function(){

});
function clear(){

}

