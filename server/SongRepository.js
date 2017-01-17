var sqlite3 = require('sqlite3').verbose();
var defaults = require('defaults');
var db = new sqlite3.Database(__dirname + "/db/track_metadata.bin");

var SongRepository = {};
SongRepository.getData = function (options, success, error) {

    options = defaults(options,
        {
            searchFields: [],
            sortFields: {id: 'DESC'},
            pageSize: 100,
            page: 1
        }
    );
    var dataGrid = {};

    db.get("SELECT COUNT(*) as cnt FROM songs", function (err, row) {
        if (err) {
            error(err);
        }
        dataGrid.cnt = row.cnt;

        var offset = (options.page - 1) * options.pageSize;
        var limit = options.pageSize;
        db.all("SELECT * FROM songs LIMIT ?,? ", [offset, limit], function (err, data) {
            if (err) {
                error(err);
            }
            dataGrid.data = data;

            db.get("" +
                "SELECT GROUP_CONCAT(DISTINCT(artist_name)) as artists, " +
                "GROUP_CONCAT(DISTINCT(genre)) as genres, " +
                "GROUP_CONCAT(DISTINCT(year)) AS years " +
                "FROM songs", function (err, row) {
                if (err) {
                    error(err);
                }
                dataGrid.filters = {
                  author: row.artists.split(","),
                  genre: row.genres.split(","),
                  year: row.years.split(","),
                };
                success(dataGrid);
                db.close();
            });
        });
    });



};

module.exports = SongRepository;
