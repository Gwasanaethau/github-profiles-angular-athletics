describe ('GitUserSearchController', function() {
	beforeEach(module('GitUserSearch'));

	var ctrl;

	// beforeEach(inject( function($controller) {
	// 	ctrl = $controller('GitUserSearchController');
	// }));

	it ('initializes with an empty search result and term', function() {
		expect(ctrl.searchResult).toBeUndefined();
		expect(ctrl.searchTerm).toBeUndefined();
	});
});