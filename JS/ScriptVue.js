//Sintaxis Básica

// Creamos una aplicación
var appVue = 
{
  // se pueden utilizar los siguientes objetos data, methods, props, mounted, created, computed, watch, destroyed

  // data es un objeto que contiene los datos que se van a utilizar en la aplicación   
  data() { 
    return { // retona dichos datos para ser usados después
      contador: 0,
      imagen: 'https://estaticos-cdn.prensaiberica.es/clip/f6db5a9f-02f6-4712-80aa-246657272e9c_16-9-discover-aspect-ratio_default_0.jpg'
    }
  }, 
  // methods es un objeto que contiene los métodos que se van a utilizar en la aplicación
  methods: {
    cambiarImagen(event) {
      this.imagen = event.target.value;
    }
  }
  
}; 

var mountedApp = Vue.createApp(appVue).mount('#app'); // crea una instancia de la aplicación con el selector de id app