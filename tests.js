QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test( "Errors thrown for getAreaCode", function(assert) {
    assert.throws( function() {
        getAreCode("415) 444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(41) 444-5555");
    }, "Missing digit. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );
});

QUnit.test("Test the getCoCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getCoCode(num);
    assert.deepEqual(result, " 555", "Valid CO code test passed.");
});

QUnit.test( "Errors thrown for getCoCode", function( assert ) {
    assert.throws( function() {
        getCoCode("(415)4445555");
    }, "Missing '-'. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415)444-5555");
    }, "Missing 'Space'. An error should have been thrown." );
    assert.throws( function() {
        getCoCode("(415) 44-5555");
    }, "Missing digit. An error should have been thrown.");
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");

});

QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415) 444-555");
    }, "Missing 'Digit'. An error should have been thrown." );

    assert.throws( function() {
        getLineCode("(415) 444-55555");
    }, "Extra 'Digit'. An error should have been thrown." );

    assert.throws( function() {
        getAreCode("(415) 444-5555");
    }, "Missing '-'. An error should have been thrown." );
});

QUnit.test("Test the validPhoneNumber function.", function (assert) {
    var num = "(415) 555-5555";
    var result = validPhoneNumber(num);
    assert.deepEqual(result, "(415) 555-5555", "Valid Phone Number test passed.");
});
