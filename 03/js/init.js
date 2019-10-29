const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
scene.add(camera);
const renderer=new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth*0.81,window.innerHeight*0.81);
// what is this
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z=5;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y+=0.1;
    renderer.render(scene,camera);
}

animate();