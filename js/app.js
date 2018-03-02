var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 80, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

document.addEventListener("click", (event) =>{

  changeShape()
})

let counter = 0
function changeShape(){
  let shape = [torus, pyramid, cone]
  let theShape = shape[counter]
  counter ++
  return theShape()
}



function torus(){
  let torus = new Torus
  torus = new THREE.Mesh(torus.geometry, torus.material );
  scene.add(torus);
  camera.position.z = 7;
  var animate = function () {
    requestAnimationFrame( animate );

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
}

function pyramid(){
  let pyramid = new Pyramid
  pyramid = new THREE.Mesh(pyramid.geometry, pyramid.material );
  scene.add(pyramid);
  camera.position.z = 7;
  var animate = function () {
    requestAnimationFrame( animate );

    // torus.rotation.x += 0.01;
    pyramid.rotation.y += 0.05;
    renderer.render(scene, camera);
  };
  animate();

}

function cone(){
  let cone = new Cone
  cone = new THREE.Mesh(cone.geometry, cone.material );
  scene.add(cone);
  camera.position.z = 7;
  var animate = function () {
    requestAnimationFrame( animate );

    // torus.rotation.x += 0.01;
    cone.rotation.y += 0.05;
    renderer.render(scene, camera);
  };
  animate();
}
