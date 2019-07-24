let app;
let hash = '';

function gohome(){
  location.href = 'index.html'; 
}

function canvas(){
  if(localStorage.getItem('data')==null){
    gohome();
  }
  var canvases = JSON.parse(localStorage.getItem('data'));
  hash = location.hash.slice(1);
  if(hash=='' || canvases[hash]==undefined) gohome();
  
  document.querySelector("header span").innerHTML = canvases[hash].name;
  
  app = new Vue({
    el: "#appContainer",
    data: {
      canvases: canvases,
      hash: hash
    },
    methods: {
      save: function(){
        localStorage.setItem('data',JSON.stringify(app.canvases));
      }
    }
  });
}
