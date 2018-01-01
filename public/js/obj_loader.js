function load_object(scene, url) {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.load('../models/car1/car_02.mtl', function (materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader2();
		objLoader.setMaterials(materials.materials);
		objLoader.load('../models/car1/car_02.obj', function (event) {
			var object = event.detail.loaderRootNode;
			scene.add();
		}, null, null, null, false);
	});
}