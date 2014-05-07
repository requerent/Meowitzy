#pragma strict

@script RequireComponent(CreatureMotor)

public var controller = 5;

function Start ()
{



}

function FixedUpdate ()
{
	var p:CreatureMotor = gameObject.GetComponent("CreatureMotor");	
	
	var dir:Vector2;


	if(controller < 5 && controller > 0)
	{
		dir.x = Input.GetAxis("DPad_XAxis_"+controller) + Input.GetAxis("L_XAxis_"+controller);	
		dir.y = Input.GetAxis("L_YAxis_"+controller) + Input.GetAxis("DPad_YAxis_"+controller);
		
		if(Input.GetButtonDown("A_"+controller))
						p.Jump();
		
		if(dir.sqrMagnitude > 0.01)
		p.Move(transform.localToWorldMatrix * Vector3(-dir.y, 0, dir.x).normalized);	
	}	
	else
	{
		dir.x = Input.GetKey("a") ? -1 : Input.GetKey("d") ? 1 : 0;
		dir.y = Input.GetKey("s") ? -1 : Input.GetKey("w") ? 1 : 0;

		if(Input.GetKey("space"))
						p.Jump();		
		if(dir.sqrMagnitude > 0.01)
		
		p.Move(transform.localToWorldMatrix * Vector3(-dir.y, 0, dir.x).normalized);	
		
		
		if(Input.GetKey("z"))  p.Attack();
	}	        	       											        		
}