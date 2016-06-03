'use strict';
class BestMusicFinder {
    constructor(album, n) {
        BestMusicFinder.checkParametersExistence(album, n);
        BestMusicFinder.checkIfParameterNIsAmbiguous(album, n);
        this.album = album;
        this.n = n;
    }

    find() {
        this.setTracksQualityIndex();
        this.sortAlbumByQualityIndex();
        return this.getFirstNMusicTitle();
    }

    getFirstNMusicTitle() {
        var titles = [];
        this.albumWithQualityIndexes.slice(0, this.n).forEach(function (track) {
            titles.push(track.title);
        });
        return titles;
    }

    setTracksQualityIndex() {
        this.albumWithQualityIndexes = [];
        for (var i = 0; i < this.album.length; i++) {
            var track = this.album[i];
            track.id = i+1;
            track.qualityIndex = track.frequency * track.id;
            this.albumWithQualityIndexes.push(track);
        }
    }

    sortAlbumByQualityIndex() {
        this.albumWithQualityIndexes.sort(function (a, b) {
            if (a.qualityIndex === b.qualityIndex)
                return a.id - b.id;
            else
                return b.qualityIndex - a.qualityIndex
        })
    }

    static checkIfParameterNIsAmbiguous(album, n) {
        if (n == 0)
            throw Error('Parameter n with value 0 is ambiguous');
        if (n > album.length)
            throw Error('Parameter n with value greater than |album| is ambiguous');
    }

    static checkParametersExistence(album, n) {
        if (!album || (!n && n != 0 ))
            throw Error('Missing parameter error');
    }


}

module.exports = BestMusicFinder;