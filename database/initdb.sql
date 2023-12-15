CREATE TABLE Developer(
    dev_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    dev_name TEXT(128),
    dev_description TEXT(512),
    number_of_employees NUMBER,
    website TEXT(64),
    founding_year NUMBER,
    revenue NUMBER,
    img_url TEXT,
    company_type TEXT(64)
)

CREATE TABLE Publisher(
    pub_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    pub_name TEXT(128),
    pub_description TEXT(512),
    number_of_employees NUMBER,
    website TEXT(64),
    founding_year NUMBER,
    revenue NUMBER,
    img_url TEXT,
    company_type TEXT(64)
)

CREATE TABLE Videogame(
    vg_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    pub_id INT,
    vg_name TEXT(128),
    genre TEXT(32),
    vg_description TEXT(512),
    release_year NUMBER,
    age_limit NUMBER,
    price NUMBER,
    platform ARRAY[],
    budget NUMBER,
    engine TEXT,
    country TEXT,
    img_url TEXT,
    CONSTRAINT fk_publisher
        FOREIGN KEY(pub_id) 
	        REFERENCES Publisher(pub_id)
)

CREATE TABLE ParticipatedDevelopers(
    vg_id INT,
    dev_id INT,
    CONSTRAINT fk_videogame
        FOREIGN KEY(vg_id) 
	        REFERENCES Videogame(vg_id),
    CONSTRAINT fk_developer
        FOREIGN KEY(dev_id)
            REFERENCES Developer(dev_id)

)