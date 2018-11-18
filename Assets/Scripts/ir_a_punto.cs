using UnityEngine;
using System.Collections;

public class ir_a_punto : MonoBehaviour {
	public Transform m_punto;
	
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		GetComponent<UnityEngine.AI.NavMeshAgent>().destination = m_punto.position;
	}
}
