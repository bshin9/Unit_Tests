var expect  = require('chai').expect;
var request = require('request');

it('should merge the two arrays and sort them in order', function(done) {
    // test for joining the arrays together and ordering them properly
    request('http://localhost:4000/merge', (error, response, body)=>{
        expect(body).to.equal('[1,2,3,4,5,6,7,8]')
        done()
    })
});
 
it('should reverse the word we give it', function(done) {
    // test for status code of 200 to make sure our connection works
    request('http://localhost:4000/merge', (error, response, body)=>{
        expect(response.statusCode).to.equal(200)
        done()
    })
});
 
it('should respond with a 404 error because the http call is incorrect', function(done) {
    // testing for the status code of 404 because its the wrong http call
    request('http://localhost:4000/timw', (error, response, body) => {
        expect(response.statusCode).to.equal(404)
        done()
    })
});