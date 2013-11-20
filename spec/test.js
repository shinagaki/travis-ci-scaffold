var expect = chai.expect;

describe("Travis CI scaffold", function() {

    describe("target.js#returnTrue", function() {
        it("return true", function() {
            expect(returnTrue()).to.equal(true);
        });
        it("return true", function() {
            expect(returnTrue()).to.not.equal(false);
        });
    });

    describe("target.js#returnFalse", function() {
        it("return false", function() {
            expect(returnFalse()).to.equal(false);
        });
        it("return false", function() {
            expect(returnFalse()).to.not.equal(true);
        });
    });
});