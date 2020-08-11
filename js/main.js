'use strict';

const modelViewer = document.querySelector('model-viewer');

let samples = ['https://modelviewer.dev/shared-assets/models/Astronaut.glb'];

function load() {
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

  let button = document.getElementById('sample-btn');
  button.addEventListener('click', function(e){
    setModel(samples[0]);
  });
}

function setModel(url) {
  console.log('setModel: ' + url);
  modelViewer.src = url;
}

window.onload = load;
