function load_object(scene, url) {
	var mtlLoader = new THREE.MTLLoader();
	var objLoader = new THREE.OBJLoader2();
	mtlLoader.load('../models/car1/car_02.mtl', function (materials) {
		materials.preload();
		objLoader.setMaterials(materials.materials);
		objLoader.load('../models/car1/car_02.obj', function (event) {
			var object = event.detail.loaderRootNode;
			// scene.add(object);
		}, null, null, null, false);
	});
}