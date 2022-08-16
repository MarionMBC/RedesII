
var scene = document.getElementById('scene');
console.log(scene);
var parallaxInstance = new Parallax(scene);
console.log(parallaxInstance);

document.getElementById('btnAlert').addEventListener('click', function(){
    Swal.fire({
        title: 'Gracias por la mejor clase, Ing. Alex Moncada',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://c.tenor.com/Rdz9M0h2BoQAAAAC/confetti.gif)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.pinimg.com/originals/e5/93/ab/e593ab0589d5f1b389e4dfbcce2bce20.gif")
          left top
          no-repeat
        `,
        confirmButtonText: 'Terminar Periodo',
      })
});
    
        
    
            
    

