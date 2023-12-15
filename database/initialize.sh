createdb docker
psql -d docker -a -f ./database/init.sql
psql -d difinland -a -f ./database/initdb.sql
psql -d disweden -a -f ./database/initdb.sql
psql -d dinorway -a -f ./database/initdb.sql
psql -d didenmark -a -f ./database/initdb.sql
psql -d diestonia -a -f ./database/initdb.sql
psql -d difinland -a -f ./database/test_insert.sql
psql -d disweden -a -f ./database/test_insert.sql
psql -d dinorway -a -f ./database/test_insert.sql
psql -d didenmark -a -f ./database/test_insert.sql
psql -d diestonia -a -f ./database/test_insert.sql