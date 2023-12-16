CREATE TABLE IF NOT EXISTS Developer(
    dev_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dev_name TEXT,
    dev_description TEXT,
    number_of_employees INT,
    website TEXT,
    founding_year INT,
    revenue INT,
    img_url TEXT,
    company_type TEXT
);

CREATE TABLE IF NOT EXISTS Publisher(
    pub_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    pub_name TEXT,
    pub_description TEXT,
    number_of_employees INT,
    website TEXT,
    founding_year INT,
    revenue INT,
    img_url TEXT,
    company_type TEXT
);

CREATE TABLE IF NOT EXISTS Videogame(
    vg_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    pub_id INT,
    vg_name TEXT,
    genre TEXT,
    vg_description TEXT,
    release_year INT,
    age_limit INT,
    price FLOAT,
    platform TEXT ARRAY,
    budget INT,
    engine TEXT,
    country TEXT,
    img_url TEXT,
    CONSTRAINT fk_publisher
        FOREIGN KEY(pub_id) 
	        REFERENCES Publisher(pub_id)
);

CREATE TABLE IF NOT EXISTS ParticipatedDevelopers(
    vg_id INT,
    dev_id INT,
    CONSTRAINT fk_videogame
        FOREIGN KEY(vg_id) 
	        REFERENCES Videogame(vg_id),
    CONSTRAINT fk_developer
        FOREIGN KEY(dev_id)
            REFERENCES Developer(dev_id)

);