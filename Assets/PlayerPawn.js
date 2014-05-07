#pragma strict

@script RequireComponent(CameraRelative)
@script RequireComponent(Rigidbody)

/*
	How fast she falls
	How much she glides
	

*/

private var gravityVelocity : Vector3;
private var moveDirection   : Vector3;
private var jumpVelocity    : Vector3;
private var isGrounded      : boolean = true;

public var speed : float;	// Force applied when moving
public var jump  : float;	// Force applied when jumping
public var fall  : float;	// Gravity applied while in the air
public var glide : float;	// Gravity applied while on the ground

function Start ()
{

}

function Update ()
{

}

function FixedUpdate()
{
	gravityVelocity = Vector3(0, isGrounded ? -glide : -fall , 0);
	rigidbody.AddForce(moveDirection * speed + jumpVelocity + gravityVelocity, ForceMode.Acceleration);
	jumpVelocity = Vector3(0,0,0);
}


function Move(input : Vector2)
{
	moveDirection = transform.localToWorldMatrix * Vector3(-input.y, 0, input.x).normalized;
}

function Jump()
{
	if(isGrounded)
		DoJump();
	//Play the Jump animation which calls DoJump
}

function DoJump()
{
	jumpVelocity = Vector3(0,jump,0);
	//Actually apply the jumping logics
}

