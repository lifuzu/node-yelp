var test = require('blue-tape');
var merge = require('merge');
var yelp = require('../');

var options = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
};

var parameters = {
  term: 'food',
  location: 'Montreal',
};

test('yelp search', (t) => {
  t.plan(3);
  yelp.search(merge(options, parameters), (data) => {
    t.equal(typeof data.region, 'object');
    t.equal(typeof data.total, 'number');
    t.ok(Array.isArray(data.businesses), 'businesses is array');
  }, null/*(err) => {
    t.error(err);
  }*/);
});