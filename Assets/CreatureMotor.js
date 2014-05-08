#pragma strict

@script RequireComponent(CameraRelative)
@script RequireComponent(Rigidbody)




private var gravityVelocity : Vector3;
private var moveDirection   : Vector3;
private var jumpVelocity    : Vector3;
private var isGrounded      : boolean;


public var sname  : String;
public var speed  : float;	
public var jump   : float;	
public var fall   : float;	
public var glide  : float;	


private var mesh     : GameObject;
private var animator : Animator;



function Start ()
{	
	mesh = transform.FindChild("Mesh").gameObject;
	animator = mesh.GetComponent("Animator");
}

function PlayAnimation(name : String)
{
	animator.SetBool(name,true);	
	yield;
	animator.SetBool(name,false);
	
	//animator.
	//print(animator);
	
	//animator.GetCurrentAnimationClipState(0)
}


function Attack()
{
	PlayAnimation("Attack");
}

function FixedUpdate()
{
	gravityVelocity = Vector3(0, isGrounded ? -glide : -fall , 0);
		rigidbody.AddForce(moveDirection * speed + jumpVelocity + gravityVelocity, ForceMode.Acceleration);
	jumpVelocity = Vector3(0,0,0);
	moveDirection = Vector3(0,0,0);
	
	print(animator.GetAnimatorTransitionInfo(0).IsName("Base.Attack -> Base.Idle"));
	
		
}


function Move(direction : Vector3)
{
	moveDirection = direction;
	var mxform :Transform = transform.FindChild("Mesh");
	
	if(Mathf.Abs(moveDirection.x) > 0.0001)
	if(moveDirection.x < 0 && mxform.localScale.z > 0 || moveDirection.x > 0 && mxform.localScale.z < 0)
		mxform.localScale.z *= -1;

}

function Jump()
{
	if(isGrounded)
	{
		DoJump();
		PlayAnimation("Attack");
	}
}

function DoJump()
{
	jumpVelocity = Vector3(0,jump,0);
}