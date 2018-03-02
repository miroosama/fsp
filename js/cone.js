class Cone{
  constructor(){
    this.geometry = new THREE.ConeGeometry( 1, 6, 32 )
    this.material = new THREE.MeshBasicMaterial( { color: 0xf9fb28, wireframe:true} );
  }

}
