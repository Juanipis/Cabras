/**
* Script made by OMA [www.oma.netau.net]
**/

var concrete : AudioClip[];
var wood : AudioClip[];
var dirt : AudioClip[];
var metal : AudioClip[];
var glass : AudioClip[];
var sand: AudioClip [];
var snow: AudioClip [];
var floor: AudioClip [];
var grass: AudioClip [];
var water: AudioClip [];
private var step : boolean = true;
var audioStepLengthWalk : float = 0.45;
var audioStepLengthRun : float = 0.25;


function OnControllerColliderHit (hit : ControllerColliderHit) {
var controller : CharacterController = GetComponent(CharacterController);

if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Concrete"  && step == true || controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Untagged" && step == true ) {
		WalkOnConcrete();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Concrete" && step == true || controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Untagged" && step == true) {
		RunOnConcrete();
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Wood" && step == true) {
		WalkOnWood();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Wood" && step == true) {
		RunOnWood();
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Dirt" && step == true) {
		WalkOnDirt();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Dirt" && step == true) {
		RunOnDirt();
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Metal" && step == true) {
		WalkOnMetal();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Metal" && step == true) {
		RunOnMetal();		
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Glass" && step == true) {
		WalkOnGlass();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Glass" && step == true) {
		RunOnGlass();
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Sand" && step == true) {
		WalkOnSand();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Sand" && step == true) {
		RunOnSand();			
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Snow" && step == true) {
		WalkOnSnow();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Snow" && step == true) {
		RunOnSnow();
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Floor" && step == true) {
		WalkOnFloor();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Floor" && step == true) {
		RunOnFloor();	
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Grass" && step == true) {
		WalkOnGrass();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Grass" && step == true) {
		RunOnGrass();
	} else if (controller.isGrounded && controller.velocity.magnitude < 7 && controller.velocity.magnitude > 5 && hit.gameObject.tag == "Water" && step == true) {
		WalkOnWater();
	} else if (controller.isGrounded && controller.velocity.magnitude > 8 && hit.gameObject.tag == "Water" && step == true) {
		RunOnWater();			
																
	}		
}

/////////////////////////////////// CONCRETE ////////////////////////////////////////
function WalkOnConcrete() {
	step = false;
	GetComponent.<AudioSource>().clip = concrete[Random.Range(0, concrete.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnConcrete() {
	step = false;
	GetComponent.<AudioSource>().clip = concrete[Random.Range(0, concrete.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}	


////////////////////////////////// WOOD /////////////////////////////////////////////
function WalkOnWood() {
	step = false;
	GetComponent.<AudioSource>().clip = wood[Random.Range(0, wood.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnWood() {
	step = false;
	GetComponent.<AudioSource>().clip = wood[Random.Range(0, wood.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}


/////////////////////////////////// DIRT //////////////////////////////////////////////
function WalkOnDirt() {
	step = false;
	GetComponent.<AudioSource>().clip = dirt[Random.Range(0, dirt.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnDirt() {
	step = false;
	GetComponent.<AudioSource>().clip = dirt[Random.Range(0, dirt.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}


////////////////////////////////// METAL ///////////////////////////////////////////////
function WalkOnMetal() {	
	step = false;
	GetComponent.<AudioSource>().clip = metal[Random.Range(0, metal.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnMetal() {
	step = false;
	GetComponent.<AudioSource>().clip = metal[Random.Range(0, metal.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

////////////////////////////////// GLASS ///////////////////////////////////////////////
function WalkOnGlass() {	
	step = false;
	GetComponent.<AudioSource>().clip = glass[Random.Range(0, glass.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnGlass() {
	step = false;
	GetComponent.<AudioSource>().clip = glass[Random.Range(0, glass.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

////////////////////////////////// SAND ///////////////////////////////////////////////
function WalkOnSand() {	
	step = false;
	GetComponent.<AudioSource>().clip = sand[Random.Range(0, sand.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnSand() {
	step = false;
	GetComponent.<AudioSource>().clip = sand[Random.Range(0, sand.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

////////////////////////////////// SNOW ///////////////////////////////////////////////
function WalkOnSnow() {	
	step = false;
	GetComponent.<AudioSource>().clip = snow[Random.Range(0, snow.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnSnow() {
	step = false;
	GetComponent.<AudioSource>().clip = snow[Random.Range(0, snow.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

////////////////////////////////// FLOOR ///////////////////////////////////////////////
function WalkOnFloor() {	
	step = false;
	GetComponent.<AudioSource>().clip = floor[Random.Range(0, floor.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnFloor() {
	step = false;
	GetComponent.<AudioSource>().clip = floor[Random.Range(0, floor.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

////////////////////////////////// GRASS ///////////////////////////////////////////////
function WalkOnGrass() {	
	step = false;
	GetComponent.<AudioSource>().clip = grass[Random.Range(0, grass.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnGrass() {
	step = false;
	GetComponent.<AudioSource>().clip = grass[Random.Range(0, grass.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

////////////////////////////////// WATER ///////////////////////////////////////////////
function WalkOnWater() {	
	step = false;
	GetComponent.<AudioSource>().clip = water[Random.Range(0, water.length)];
	GetComponent.<AudioSource>().volume = .1;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthWalk);
	step = true;
}

function RunOnWater() {
	step = false;
	GetComponent.<AudioSource>().clip = water[Random.Range(0, water.length)];
	GetComponent.<AudioSource>().volume = .3;
	GetComponent.<AudioSource>().Play();
	yield WaitForSeconds (audioStepLengthRun);
	step = true;
}

