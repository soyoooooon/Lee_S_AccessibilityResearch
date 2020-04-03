// import videoComponent from "./components/videoComponent.js"


var vm = new Vue({
  el: "#app",

    data:{


        videodata: [
            { name: "Cinderella", thumb: "1950_cinderella.jpg", vidsource: "1950_cinderella.mp4", description: "1950s Movie" },
            { name: "All in the family", thumb: "1970_family.jpeg", vidsource: "allinthefamily.mp4", description: "1970s TV show" },
            { name: "Nirvana - Smells Like Teen Spirit", thumb: "1990_teenspirit.jpg", vidsource: "Nirvana - Smells Like Teen Spirit.mp3", description: "1990s Music, Rock and Roll!" }
          ],

          videotitle: "",
          videodescription: "",
          videosource: "",
      
          showDetails: false,
        
          isPlaying: false,

          $ref: ('videoElement')
       
        },
       
          

    

    methods: {
      showMovie({name, vidsource, description}){
       
      this.videotitle = name;
      this.videodescription = description;
      this.videosource = vidsource;
      this.showDetails = true;

    },

    xButton(){
      this.showDetails = false;
    },

    play() {
      
    
      this.isPlaying = true;

  },
}


});

//$refs is used to select/target HTML elements

