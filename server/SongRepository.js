var sqlite3 = require('sqlite3').verbose();
var defaults = require('defaults');
var db = new sqlite3.Database(__dirname + "/db/track_metadata.bin");

var SongRepository = {};
SongRepository.getData = function (options, success, error) {

    options = defaults(options,
        {
            filter: {},
            sort: {author: 'ASC'},
            pageSize: 100,
            page: 1
        }
    );
    var dataGrid = {};

    let whereFilter = Object.keys(options.filter).map((key) => {
        let value = options.filter[key];
        return value.trim() ? "`" + key + "`" + 'LIKE' + "'%" + value.trim() + "%'" : null;
    });
    var where = whereFilter.filter(function (value) {
        return value !== null;
    }).join(" AND ");
    // Итак сойдет с иньекциями
    where = where ? "WHERE " + where : "";
    let sort = options.sort ? "ORDER BY " + Object.keys(options.sort)[0] + " " + options.sort[Object.keys(options.sort)[0]] : "";

    db.get("SELECT COUNT(*) as cnt FROM songs " + where + " " + sort, function (err, row) {
        if (err) {
            error(err);
        }
        dataGrid.cnt = row.cnt;
        var offset = (options.page - 1) * options.pageSize;
        var limit = options.pageSize;

        db.all("SELECT * FROM songs " + where + " " + sort + "  LIMIT ?,? ", [offset, limit], function (err, data) {
            if (err) {
                error(err);
            }
            dataGrid.data = data;

            db.get("" +
                "SELECT GROUP_CONCAT(DISTINCT(author)) as artists, " +
                "GROUP_CONCAT(DISTINCT(genre)) as genres, " +
                "GROUP_CONCAT(DISTINCT(year)) AS years " +
                "FROM songs", function (err, row) {
                if (err) {
                    error(err);
                }
                dataGrid.filters = {
                    // author: row.artists.split(","),
                    genre: row.genres.split(","),
                    year: row.years.split(","),
                };
                success(dataGrid);
            });
        });
    });


};

module.exports = SongRepository;
