function load_object(scene, url) {
	var mtlLoader = new THREE.MTLLoader();
	var objLoader = new THREE.OBJLoader2();
	mtlLoader.load('../models/_on.mtl', function (materials) {
		materials.preload();
		objLoader.setMaterials(materials.materials);
		objLoader.load('../models/_on.obj', function (event) {
			var object = event.detail.loaderRootNode;
			object.position.x = -450;
			object.position.y = -100;
			object.position.z = 50;
			scene.add(object);
			
		}, null, null, null, false);
	});
}