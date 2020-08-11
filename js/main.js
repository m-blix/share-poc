'use strict';

const modelViewer = document.querySelector('model-viewer');

let modelSamples = ['https://modelviewer.dev/shared-assets/models/Astronaut.glb'];

function load() {
  let button = document.getElementById('sample-btn');
  button.addEventListener('click', function(e){
    let url = modelSamples[0];
    history.pushState({}, '', `?url=${url}`);
    processURL();
  });

  processURL();
}

function processURL() {
  let params = new URLSearchParams(location.search);

  for (const [key, value] of params) {
    console.log(`Key: ${key}, Value: ${value}`);
  }

  let url;
  if (params.has('url')) {
    url = params.get('url');
    console.log(`has 'url' param`);

    setModel(url);
  }
}

function setModel(url) {
  console.log('setModel: ' + url);
  modelViewer.src = url;
}

window.onload = load;
