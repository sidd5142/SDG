using System.Collections.Generic;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public GameObject LoadingScreen;
public Image LoadingBarFill;

public void LoadScene(int sceneId)
{
    StartCoroutine(LoadSceneAsync(sceneId));
}

IEnumerator LoadSceneAsync(int sceneId)
{
    AsyncOperation operation = SceneManager.LoadSceneAsync(sceneId);

    LoadingScreen.SetActive(true);

    while(!operation.isDone)
    {
        float progressValue = mathf.Clamp01(operation.progress / 0.9f);

        LoadingBarFill.fillAmount = progressValue;

        yield return null;

    }
}