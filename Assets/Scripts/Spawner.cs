using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Spawner : MonoBehaviour {
    public GameObject prefab;
    // Use this for initialization
    void Start() {
        
    }

    // Update is called once per frame
    void Update() {
        StartCoroutine("Esperar");
        StartCoroutine("Esperar2");

    }
    IEnumerator Esperar()
    {
        yield return new WaitForSeconds (3);
        Instantiate(prefab, new Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
    }
    IEnumerator Esperar2()
    {
        yield return new WaitForSeconds(3);
    }
}
