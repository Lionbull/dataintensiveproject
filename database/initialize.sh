createdb docker
psql -d docker -a -f ./initdb.sql
psql -d difinland -a -f ./init_tables.sql
psql -d disweden -a -f ./init_tables.sql
psql -d dinorway -a -f ./init_tables.sql
psql -d didenmark -a -f ./init_tables.sql
psql -d diestonia -a -f ./init_tables.sql
psql -d difinland -a -f ./inserts_finland.sql
psql -d disweden -a -f ./inserts_sweden.sql
psql -d dinorway -a -f ./inserts_norway.sql
psql -d didenmark -a -f ./inserts_denmark.sql
psql -d diestonia -a -f ./inserts_estonia.sql