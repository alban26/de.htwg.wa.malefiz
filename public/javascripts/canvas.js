console.log("Hi")

var canvas = document.querySelector('canvas');


function createVariables() {
    for(i=0;i<3;i++) {
        var str1 = "elem"+i+" = document.getElementById('"+i+"')\n" +
            "elem"+i+"Left = elem"+i+".offsetLeft\n" +
            "elem"+i+"Top = elem"+i+".offsetTop\n" +
            "c"+i+" = elem"+i+".getContext('2d')"
        eval(str1)
    }

}
createVariables();
// c0.fillRect(300, 100, 100, 100)
//
// c2.fillRect(300, 100, 100, 100)

var centerX = elem1.width / 2;
var centerY = elem1.height / 2;

element1 = {
    colour: '#05EFFF',
    radius: 10,
    height: 0,
    top: 0,
    left: 0
};



c1.fillStyle = 'rgba(255,4,3,1)';
c1.arc(centerX, centerY, element1.radius, 0, Math.PI * 2, true);
c1.strokeStyle = 'red';
c1.stroke();


elem1.addEventListener('click', function(event) {
    var x = event.pageX - elem1Left,
        y = event.pageY - elem1Top;
    console.log(x, y);
    if (y > element1.top && y < element1.top + element1.height && x > element1.left && x < element1.left + element1.width) {
        alert('clicked an element');
    }
    }, false);

// function createVariables()
// {
//     for ( i=0; i<3; i++ )
//     {
//
//         var str ="c"+i +" = canvas.getContext('2d')";
//         //Declaring and Setting dynamic variable to undefined using eval
//         eval(str);
//     }
// }
// createVariables();



// console.log(can1)
//
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
//
// var c = canvas.getContext('2d');
//
// c.fillRect(300, 100, 100, 100);
//
// //rgba und stärke
// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100, 100, 100, 100);
//
//Circles
// c.fillStyle = 'rgba(255,4,3,1)';
// c.arc(500, 100, 20,0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();
//
// console.log(canvas)
//
// var x = 200;
//
// //in requestAnimationFrame wird eine Funktion übergeben
// //das ist wie eine loop eig.
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0, 0, innerWidth, innerHeight)
//     c.beginPath();
//     c.arc(x, 100, 20,0, Math.PI * 2, false);
//     c.strokeStyle = 'blue';
//     c.stroke();
//     x+=1;
// }
//
// animate();




/*

Auf ein Element kann ich mehrere EventListener setzen.

 */