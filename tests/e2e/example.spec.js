describe('Frondend Test', function() {
  
  
  it('should succesfully load JSON data', function() {
     browser.driver.wait(function() {
      if (element(by.id('city')).value !== "") {
          return true;
      }
      return false;
    }, 5000);
    
    expect(element(by.id('city').getText())).toBe('Breukelen');
  });

  
  it('should succesfully submit the form', function() {
    browser.get('http://localhost:1338');

    element(by.id('postalcode')).clear().then(function() {
      element(by.id('postalcode')).sendKeys('3621 ZA');
    });
 
    element(by.id('street')).clear().then(function() {
      element(by.id('street')).sendKeys('5');
    });  

    element(by.id('street')).clear().then(function() {
      element(by.id('street')).sendKeys('De Corridor');
    });
     
    element(by.id('city')).clear().then(function() {
      element(by.id('city')).sendKeys('Amsterdam');
    });
    
    element(by.css('input[type=submit')).click();

    expect(element(by.id('successful')).isDisplayed()).toBe(true);

    browser.sleep(10000);

  });
});