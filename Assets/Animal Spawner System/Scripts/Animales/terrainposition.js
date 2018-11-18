#pragma strict
var spawner : Transform;
var animal : Transform;
var x : float;
var z : float;
var y : float;
var radio : int;
function Start () {
animal = transform.parent.gameObject.transform;
spawner = animal.transform.parent.gameObject.transform;
x = Random.Range (spawner.transform.position.x - radio, spawner.transform.position.x + radio);
z = Random.Range (spawner.transform.position.z - radio, spawner.transform.position.z + radio);

}

function Update () {
transform.position = Vector3 (x,y,z);

var foundHit : boolean = false;
var hit : RaycastHit;
var layerUse : int = (1<<4) | (1<<8);
var rayLenght : float = 10;

//Si encuentra terreno:
foundHit = Physics.Raycast(transform.position, transform.up, hit, Mathf.Infinity);
	if (foundHit){
		if (hit.collider.gameObject.tag == "Terrain"){
			y = hit.point.y - 0.2;
		}
	}
}

function Player(){
	animal = transform.parent.gameObject.transform;
	spawner = GameObject.FindGameObjectWithTag("Player").transform;
	radio = 20;
	
	x = Random.Range (spawner.transform.position.x - radio, spawner.transform.position.x + radio);
	z = Random.Range (spawner.transform.position.z - radio, spawner.transform.position.z + radio);
}