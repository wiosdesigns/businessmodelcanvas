let app;

function homepage(){
  if(localStorage.getItem('data')==null){
    localStorage.setItem('data',JSON.stringify({}))
  }
  
  var canvases = JSON.parse(localStorage.getItem('data'));
  
  app = new Vue({
    el: "#appContainer",
    data: {
      canvases: canvases,
      canvasname: '',
    },
    methods: {
      addnew: function(){
        var key = encodeURIComponent(this.canvasname);
        if(this.canvasname!='' && this.canvases[key]==undefined){
          this.canvases[key] = {
            name: this.canvasname,
            hash: key,
            partners: '',
            activities : '',
            resources : '',
            value : '',
            relationships : '',
            channels: '',
            segments: '',
            cost : '',
            revenue : ''
          };
          localStorage.setItem('data',JSON.stringify(this.canvases));
          location.reload();
        }
      }
    }
  })
}
