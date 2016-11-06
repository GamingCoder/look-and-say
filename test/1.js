var test = require('tape');
var look_and_say = require('../index.js');

test('Seed: 1', function(t) {
	t.test('without iterations arg', function(st) {
		st.plan(3);
		r = look_and_say(1);
		st.equal(r.length, 2, 'Array length should be 2');
		st.equal(r[0], '1', 'First element should equal 1');
		st.equal(r[1], '11', 'Second element should equal 11');
	});
	t.test('with iterations arg', function(st) {
		st.plan(12);
		r = look_and_say(1, 10);
		st.equal(r.length, 11, 'Array length should be 11');
		st.equal(r[0], '1');
		st.equal(r[1], '11');
		st.equal(r[2], '21');
		st.equal(r[3], '1211');
		st.equal(r[4], '111221');
		st.equal(r[5], '312211');
		st.equal(r[6], '13112221');
		st.equal(r[7], '1113213211');
		st.equal(r[8], '31131211131221');
		st.equal(r[9], '13211311123113112211');
		st.equal(r[10], '11131221133112132113212221');
	});
});
