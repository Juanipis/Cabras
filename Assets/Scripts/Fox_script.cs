using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fox_script : MonoBehaviour {
    public Transform target;
    public bool amenazado;
	// Use this for initialization
	void Start () {
        target = transform.Find("punto_way");
	}
	
	// Update is called once per frame
	void Update () {
		if (!amenazado)
        {
            Caminar ();
        }
	}
    void Caminar()
    {
        GetComponent<UnityEngine.AI.NavMeshAgent>().destination = target.position;
    }
}
