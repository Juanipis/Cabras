using System.Collections;
using UnityEngine;

public class MoverAleatorioAve : MonoBehaviour {
	public float movementSpeed = 1f;
	public float rotationSpeed = 3f;
	Vector3 targetPosition;
	Vector3 towardsTarget;
	float wanderRadius = 10f;
	void RecalculateTargetPosition (){
		targetPosition = transform.position + Random.insideUnitSphere * wanderRadius;
		targetPosition.y = Random.Range(5,10);
    }
	// Use this for initialization
	void Start () {
		RecalculateTargetPosition ();
	}
	
	// Update is called once per frame
	void Update () {
		towardsTarget = targetPosition - transform.position;
			if (towardsTarget.magnitude < 0.25f)
				RecalculateTargetPosition ();
		Quaternion towardsTargetRotation = Quaternion.LookRotation (towardsTarget, Vector3.up);
		transform.rotation = Quaternion.Lerp (transform.rotation, towardsTargetRotation, rotationSpeed * Time.deltaTime);
		transform.position += transform.forward * movementSpeed * Time.deltaTime;
		Debug.DrawLine (transform.position, targetPosition, Color.green);
		
	}
}
