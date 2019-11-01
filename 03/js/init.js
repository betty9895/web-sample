var camera, scene, renderer;

var num=40;
var geo=new Array(num);
var mesh=new Array(num);

init();
animate();

function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		var pre = 0;
		var cur = 1;
		var aa = 0;
		for (var i = 2; i <= n; i+=2) {
			
			cur = pre + cur;
			pre = cur - pre;
			aa=Math.pow(pre/cur,2)*5;
			geo[i] = new THREE.BoxGeometry(0.05, 0.05,  0.4*(aa+ 1));
			mesh[i] = new THREE.Mesh(geo[i], mat);
			scene.add(mesh[i]);
			mesh[i].position.set(0,1- 0.05 * i, -1);
			// console.log(mesh[i].position);
		}

		for (var j = 3; j <= n; j+=2) {		
			geo[j] = new THREE.BoxGeometry(0.05, 0.05, 0.5*(aa + 1));
			mesh[j] = new THREE.Mesh(geo[j], mat);
			scene.add(mesh[j]);
			mesh[j].position.set(0,1- 0.05 * j, -1);
			// console.log(geo[i].vertices);
		}
	}
}

function modelIncrement(){
	for(var i=0;i<num-1;i++){
		geo[i]=new THREE.BoxGeometry(0.05,0.05,0.02*(i+1));
		mesh[i]= new THREE.Mesh( geo[i], mat );
		scene.add(mesh[i]);
		mesh[i].position.set(0, 1-0.05*i, -1);
		console.log(mesh[i].position)
	}
}

function init() {

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.01, 1000 );
	camera.position.z = 1;
	
	mat = new THREE.MeshNormalMaterial();
	fibonacci(num);
	// modelIncrement();
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( window.innerWidth * 0.81, window.innerHeight * 0.81 );
	document.body.appendChild( renderer.domElement );

}

function animate() {

	requestAnimationFrame( animate );
	for (var i = 2; i <= num; i+=2) {
		mesh[i].rotation.y += (i-1)/1000;
	}
	for (var j = 3; j <= num; j+=2) {
		mesh[j].rotation.y += (j-1)/1000;
	}
	for (var i = 2; i <= num; i+=2) {
	}
	renderer.render( scene, camera );

}
