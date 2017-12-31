function load_object(scene, url) {
	var mtlLoader = new THREE.MTLLoader();
	mtlLoader.setPath('../models/car1/');
	mtlLoader.load('car_02.mtl', function (materials) {
		materials.preload();
		var objLoader = new THREE.OBJLoader2();
		objLoader.setMaterials(materials);
		objLoader.setPath('../models/car1/');
		objLoader.load('car_02.obj', function (event) {
			scene.add(event.detail.loaderRootNode);
		}, null, null, null, false);
	});
}