module.exports = function () {
    function SongRepository() {

        let sqlite3 = require('sqlite3').verbose();
        let db = new sqlite3.Database(':memory:');
        
        function migrate() {
            db.serialize(function() {
                db.run("CREATE TABLE songs (id INTEGER PRIMARY KEY ASC, author CHAR(50), )");

                var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
                for (var i = 0; i < 10; i++) {
                    stmt.run("Ipsum " + i);
                }
                stmt.finalize();

                db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
                    console.log(row.id + ": " + row.info);
                });
            });

            db.close();
        }
        

    }

    return SongRepository;
};