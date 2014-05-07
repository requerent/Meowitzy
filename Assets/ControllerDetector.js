#pragma strict


private var nCurrent = 0;
private var nPrevious = 0;
private var players = new Array();



function Start () {

}

function Update ()
{
	nCurrent = Input.GetJoystickNames().length;


	if(nPrevious < nCurrent)
	{
		//prompt to make a new player.
	}

	else if(players.Count > nCurrent)
	{
		// Pause-- allow P1 to continue, destroying disconnected players
		// Update the UI, 'remove prompt'
	}
	
	else if(nPrevious > nCurrent)
	{
		//remove prompt to make a new player
	}


	nPrevious = nCurrent;
}