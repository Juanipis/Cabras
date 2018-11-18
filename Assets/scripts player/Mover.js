#pragma strict
var animator : Animator;
var v : float;
var h : float;

function Start () {
animator = GetComponent (Animator);
}

function Update () {
	v = Input.GetAxis ("Vertical");
	h = Input.GetAxis ("Horizontal");
	if(Input.GetAxis("Mouse X")){
		animator.SetFloat ("girar", 0.3);
	}
	else{
		animator.SetFloat ("girar", 0.8);
	}
	if (Input.GetKey("s")){
		animator.SetBool("BWD", true);
	}
	if (Input.GetKeyUp("s")){
		animator.SetBool("BWD", false);
	}
}

function FixedUpdate (){
	animator.SetFloat ("FWD", v);
	animator.SetFloat ("Turn", h);
}
