'use strict';
class BestMusicFinder {
    constructor(album, n) {
        BestMusicFinder.checkParametersExistence(album, n);
        BestMusicFinder.checkIfParameterNIsAmbiguous(album, n);
        this.album = album;
        this.n = n;
    }

    setTracksQualityIndex() {
        var c = 1;
        this.albumWithQualityIndexes = this.album;
        this.albumWithQualityIndexes.forEach(function (track) {
            track.id = c;
            track.qualityIndex = track.frequency * c;
            c++;
        });
    }

    sortAlbumByQualityIndex() {
        this.albumWithQualityIndexes.sort(function (a, b) {
            if (a.qualityIndex === b.qualityIndex)
                return a.id - b.id;
            else 
                return b.qualityIndex - a.qualityIndex
        });
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