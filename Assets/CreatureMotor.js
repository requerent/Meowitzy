#pragma strict

@script RequireComponent(CameraRelative)
@script RequireComponent(Rigidbody)



private var gravityVelocity : Vector3;
private var moveDirection   : Vector3;
private var jumpVelocity    : Vector3;
private var isGrounded      : boolean;

public class State extends System.ValueType
{
	public var speed : float;	
	public var jump  : float;	
	public var fall  : float;	
	public var glide : float;
	public var name  : String;


	public function State(name:String,speed:float,jump:float,fall:float,glide:float)
	{
		this.name = name;
		this.speed = speed;	
		this.jump = jump;
		this.fall = fall;
		this.glide = glide;
	}

}


private var state : State;

public var sname  : String;
public var speed  : float;	
public var jump   : float;	
public var fall   : float;	
public var glide  : float;	


private var mesh     : GameObject;
private var animator : Animator;



function Start ()
{	
	state = new State(sname,speed,jump,fall,glide);	
	
	mesh = transform.FindChild("Mesh").gameObject;
	animator = mesh.GetComponent("Animator");
}

function PlayAnimation(name : String)
{
	animator.SetBool(name,true);	
	yield;
	animator.SetBool(name,false);
}


function Attack()
{
	PlayAnimation("Attack");
}

function FixedUpdate()
{
	gravityVelocity = Vector3(0, isGrounded ? -state.glide : -state.fall , 0);
	
	rigidbody.AddForce(moveDirection * state.speed + jumpVelocity + gravityVelocity, ForceMode.Acceleration);
	jumpVelocity = Vector3(0,0,0);
	moveDirection = Vector3(0,0,0);	
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
		DoJump();
}

function DoJump()
{
	jumpVelocity = Vector3(0,state.jump,0);
}