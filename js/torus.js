class Torus{
  constructor(){
    this.geometry = new THREE.TorusGeometry( 2.2, 0.5, 8, 100);
    this.material = new THREE.MeshBasicMaterial( { color: 0xd8bfd8, wireframe:true } );

  }

}
