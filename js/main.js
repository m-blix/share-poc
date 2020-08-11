'use strict';

function load() {
  let params = new URLSearchParams(location.search);

  for (const [key, value] of params) {
    console.log(`Key: ${key}, Value: ${value}`);
  }

  let url;
  if (params.has('url')) {
    url = params.get('url');
    console.log(`has 'url' param`);
  }
}

window.onload = load;
