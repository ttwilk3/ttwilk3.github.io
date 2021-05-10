describe('The menu service', function() {
  'use strict';

  var $httpBackend;
  var signUpService;
  let ApiPath = 'https://twilki15-course5.herokuapp.com';

  let testData = {
  	error: {
	  "status": "500",
	  "error": "Internal Server Error"
	},
  	menuItem: {
      id: 658,
      short_name: "A1",
      name: "Won Ton Soup with Chicken",
      description: "chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions",
      price_small: 2.55,
      price_large: 5,
      small_portion_name: "pint",
      large_portion_name: "quart",
      created_at: "2016-08-05T19:42:00.140Z",
      updated_at: "2016-08-06T11:25:51.229Z",
      category_short_name: "A",
      image_present: true
    }
  };

  /**
   * Gets called before each unit test it()
   */
  beforeEach(function() {
    // Load module
    module('public');

    // Load any dependencies
    inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      signUpService = $injector.get('SignUpService');
    });
  });

  it('should retrieve menu item information by menu item short name', function() {
    var shortName = 'A1';
    $httpBackend.expectGET(ApiPath + '/menu_items/' + shortName + '.json').respond(testData.menuItem);
    signUpService.getMenuItem(shortName).then(function(menuItem) {
      //console.log(menuItem);
      expect(menuItem.data).toEqual(testData.menuItem);
    });
    $httpBackend.flush();
  });

  it('should retrieve menu item information by invalid menu item short name', function() {
    var shortName = 'LL11';
    $httpBackend.expectGET(ApiPath + '/menu_items/' + shortName + '.json').respond(testData.error);
    signUpService.getMenuItem(shortName).then(function(menuItem) {
      //console.log(menuItem);
      expect(menuItem.data).toEqual(testData.error);
    });
    $httpBackend.flush();
  });

});
