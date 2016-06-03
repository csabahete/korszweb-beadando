'use strict';

var request = require('supertest');
var app = require('./index');

describe('BestMusicFinderAPI', function () {


    describe('GET /albums/:2/best?top=5', function () {

        it('should get an empty array if there is no album saved in the service', function (done) {
            request(app)
                .get('/albums/:2/best?top=5')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, {}, done);
        });
    });


});