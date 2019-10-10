var expect = require('chai').expect;

const validateUserID = require('../index')

describe('medium', function() {

    // we set const response equal to the function we made in the index
    // use a response.then to expect our userID to equal true because this one is correct
    it('Should let user have access to application', () => {
        const response = validateUserID('Johncena5@');
        response.then(res => expect(res).to.equal(true));
    })

    // we use the same setup we did above, but we want this to be false
    // this userID is invalid and will be rejected from being input
    it('should be an invalid userID since requirements are not met', () => {
        const response = validateUserID('smallman3');
        response.then(res => expect(res).to.equal(false));
    })

    // this will simply deny access from the site
    it('should deny access to the user from the site', () => {
        const response = validateUserID('smallman3');
        response.then(res => expect(res).to.equal('Deny Access'));
    })
});