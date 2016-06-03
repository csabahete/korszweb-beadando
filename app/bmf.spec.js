const emptyAlbum = [{}];
const album = [
    {"frequency": 197812, "title": "re_hash"},
    {"frequency": 78906, "title": "5_4"},
    {"frequency": 189518, "title": "tomorrow_comes_today"},
    {"frequency": 39453, "title": "new_genious"},
    {"frequency": 210492, "title": "clint_eastwood"},
    {"frequency": 26302, "title": "man_research"},
    {"frequency": 22544, "title": "punk"},
    {"frequency": 19727, "title": "sound_check"},
    {"frequency": 17535, "title": "double_bass"},
    {"frequency": 18782, "title": "rock_the_house"},
    {"frequency": 198189, "title": "19_2000"},
    {"frequency": 13151, "title": "latin_simone"},
    {"frequency": 12139, "title": "starshine"},
    {"frequency": 11272, "title": "slow_country"},
    {"frequency": 10521, "title": "m1_a1"}];
const n = 3;
var bestSongsFinderClass = require('./bmf');
const bestSongsFinder = new bestSongsFinderClass(album, n);


var expect = require('chai').expect;

describe('BestMusicFinder', function () {
    it('should throw an error on empty constructor', function () {
        expect(function () {new bestSongsFinderClass()}).to.throw('Missing parameter error');
    });

    it('should throw an error on missing parameter', function () {
        expect(function () {new bestSongsFinderClass(album)}).to.throw('Missing parameter error');
    });

    it('should be an instance of BestMusicFinder', function () {
        var result = new bestSongsFinderClass(album, n);
        expect(result).to.be.an.instanceof(Object);
    });

    it('should throw an error on n > |album|', function () {
        expect(function () {new bestSongsFinderClass(album, 16)}).to.throw('Parameter n with value greater than |album| is ambiguous');
    });

    it('should throw an error on empty album', function () {
        expect(function () {new bestSongsFinderClass(emptyAlbum, n)}).to.throw('Parameter n with value greater than |album| is ambiguous');
    });

    it('should throw an error on n = 0', function () {
        expect(function () {new bestSongsFinderClass(album, 0)}).to.throw('Parameter n with value 0 is ambiguous');
    });



    describe('#setTracksQualityIndex', function() {
       it('should set the track\'s quality index and id', function () {
           bestSongsFinder.setTracksQualityIndex();
           bestSongsFinder.albumWithQualityIndexes.forEach(function (track) {
               expect(track).to.include.keys('id', 'qualityIndex');
           });
       })
    });

    describe('#sortAlbumByQualityIndex', function() {
       it('should sort the tracks by their quality index (and id if quality indexes are equal)', function () {
           bestSongsFinder.sortAlbumByQualityIndex();
           var sortedAlbum = bestSongsFinder.albumWithQualityIndexes;
           for (i = 0; i < sortedAlbum.length-1; i++) {
               if (sortedAlbum[i].qualityIndex == sortedAlbum[i+1].qualityIndex)
                   expect(sortedAlbum[i].id).to.be.below(sortedAlbum[i+1].id);
               else
                   expect(sortedAlbum[i+1].qualityIndex).to.be.below(sortedAlbum[i].qualityIndex);
           }
       })
    });
});