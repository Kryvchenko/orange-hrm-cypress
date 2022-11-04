class Helper {
    
     selectWithKeyboard () {
         browser.keys(['Down arrow'])
         browser.keys(['Down arrow'])
         return browser.keys(['Down arrow','Enter']); 
     }
}

module.exports = new Helper();