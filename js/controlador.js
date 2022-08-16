var scene = document.getElementById('scene');
console.log(scene);
var parallaxInstance = new Parallax(scene);
console.log(parallaxInstance);

function sweer () {
    Swal.isVisible()
    
}

Swal.fire({
    title: 'Custom width, padding, color, background.',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  })