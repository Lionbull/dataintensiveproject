CREATE USER docker;

SELECT 'CREATE DATABASE DISweden'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'DISweden')\gexec

SELECT 'CREATE DATABASE DIFinland'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'DIFinland')\gexec

SELECT 'CREATE DATABASE DINorway'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'DINorway')\gexec

SELECT 'CREATE DATABASE DIEstonia'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'DIEstonia')\gexec

SELECT 'CREATE DATABASE DIDenmark'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'DIDenmark')\gexec