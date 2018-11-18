#pragma strict
var se_puede_acercar : boolean;
var se_puede_alejar : boolean;
function Start () {
se_puede_alejar = true;
se_puede_acercar = true;
}

function Update () {
	if(GetComponent.<Camera>().fieldOfView <= 30){
		se_puede_acercar = false;
	}
	if(GetComponent.<Camera>().fieldOfView >= 30){
		se_puede_acercar = true;
	}
	if(GetComponent.<Camera>().fieldOfView >= 60){
		se_puede_alejar = false;
	}
	if(GetComponent.<Camera>().fieldOfView < 60){
		se_puede_alejar = true;
		}
	
	if (Input.GetAxis("Mouse ScrollWheel") < 0 && se_puede_alejar == true){
        GetComponent.<Camera>().fieldOfView += 3;
    }
     if (Input.GetAxis("Mouse ScrollWheel") > 0 && se_puede_acercar == true){
        GetComponent.<Camera>().fieldOfView -= 3;
    }
}
