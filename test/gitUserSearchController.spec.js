describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));

  it('initializes with empty search result and term', function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});

describe('when searching for a user', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;
  var httpBackend;

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when('GET', 'https://api.github.com/search/users?q=possum')
      .respond(
          { items: items }
        );
  }));

  beforeEach(inject(function($controller){
    ctrl = $controller('GitUserSearchController');
  }));


  var items = [
    {
      'login': 'tansaku',
      'avatar_url': 'https://avatars.githubusercontent.com/u/30216?v=3',
      'html_url': 'https://github.com/tansaku'
    },
    {
      'login': 'stephenlloyd',
      'avatar_url': 'https://avatars.githubusercontent.com/u/196474?v=3',
      'html_url': 'https://github.com/stephenlloyd'
    }
  ];

  it('displays search results', function(){
		ctrl.searchTerm = 'possum';
		ctrl.doSearch();
    httpBackend.flush();
    expect(ctrl.searchResult.items).toEqual(items);
  });
});
