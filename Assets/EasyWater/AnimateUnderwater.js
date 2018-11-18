#pragma strict


// Drag this to the Water Object for more freedom of animation 


//----------------------------------------------------


// Declare here the input properties for each 
// shader properties you want to animate

var distort1Speed : Vector2;
var distort2Speed : Vector2;

private var distortionMap1UV : Vector2;
private var distortionMap2UV : Vector2;


function Start () {

 
 distort1Speed = distort1Speed /10;
 distort2Speed = distort2Speed /10; 

}

function Update () {

// Declare here the UV properties for each
// shader properties you're animating

// Repeat it for each shader properties

distortionMap1UV.x = Time.time * distort1Speed.x;
distortionMap1UV.y = Time.time * distort1Speed.y;

distortionMap2UV.x =  (Time.time * distort2Speed.x);
distortionMap2UV.y =  (Time.time * distort2Speed.y);




// For each property copy this line and chage texture names and UV properties
GetComponent.<Renderer>().material.SetTextureOffset("_DistortionMap1", distortionMap1UV);
GetComponent.<Renderer>().material.SetTextureOffset("_DistortionMap2", distortionMap2UV);


}