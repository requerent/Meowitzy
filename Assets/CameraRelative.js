#pragma strict

function Start () {

}

function Update ()
{
	
	
	//transform.forward = Camera.main.transform.right;

	
	
	transform.forward = Camera.main.transform.right;
	
	transform.FindChild("Mesh").LookAt(Camera.main.transform);
	
	transform.FindChild("Mesh").Rotate(Vector3.up,-90);	
}