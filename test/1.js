var test = require('tape')
var look_and_say = require('look-and-say');

test('Seed: 1', function(t) {
	t.test('without iterations arg', function(st) {
		st.plan(3);
		r = look_and_say(1)
		t.equal(r.length, 2, 'Array length should be 2');
		t.equal(r[0], 1, 'First element should equal 1');
		t.equal(r[1], 11, 'Second element should equal 11');
	});
	t.test('with iterations arg', function(st) {
		st.plan(2);
		r = look_and_say(1, 10)
		t.equal(r.length, 11, 'Array length should be 11');
		t.equal(r[0], 1);
		t.equal(r[1], 11);
		t.equal(r[2], 21);
		t.equal(r[3], 1211);
		t.equal(r[4], 111221);
		t.equal(r[5], 312211);
		t.equal(r[6], 13112221);
		t.equal(r[7], 1113213211);
		t.equal(r[8], 31131211131221);
		t.equal(r[9], 13211311123113112211);
		t.equal(r[10], 11131221133112132113212221);
		t.equal(r[11], 3113112221232112111312211312113211);
	});
});