createdb docker
psql -d docker -a -f ./database/initdb.sql
psql -d difinland -a -f ./database/init_tables.sql
psql -d disweden -a -f ./database/init_tables.sql
psql -d dinorway -a -f ./database/init_tables.sql
psql -d didenmark -a -f ./database/init_tables.sql
psql -d diestonia -a -f ./database/init_tables.sql
psql -d difinland -a -f ./database/test_insert.sql
psql -d disweden -a -f ./database/test_insert.sql
psql -d dinorway -a -f ./database/test_insert.sql
psql -d didenmark -a -f ./database/test_insert.sql
psql -d diestonia -a -f ./database/test_insert.sql