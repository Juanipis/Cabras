#pragma strict
var Motor : CharacterMotor;

function Start () {
	Motor = GetComponent (CharacterMotor);
}

function Update () {
	if (gameObject.transform.position.y < 174){
		nadar();
	}
	if (gameObject.transform.position.y > 174){
	
	}
}

function nadar() {
	
	if (Input.GetKey(KeyCode.Space)){
		GetComponent.<ConstantForce>().relativeForce = Vector3 (0, 100, 0);
	}
}