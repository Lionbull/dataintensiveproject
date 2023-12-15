-- Game 2
INSERT INTO Videogame (
    vg_name,
    genre,
    vg_description,
    release_year,
    age_limit,
    price,
    platform,
    budget,
    engine,
    country,
    img_url
) VALUES (
    'Another Game',
    'Adventure',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo eget lacus fermentum euismod.',
    2005,
    16,
    45,
    ARRAY['PS4', 'Xbox'],
    15 000 000,
    'Unity Engine',
    'NO',
    'another_img_url_here'
);

-- Game 3
INSERT INTO Videogame (
    vg_name,
    genre,
    vg_description,
    release_year,
    age_limit,
    price,
    platform,
    budget,
    engine,
    country,
    img_url
) VALUES (
    'Fantasy Quest',
    'RPG',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod urna in ullamcorper varius.',
    2021,
    18,
    60,
    ARRAY['PC', 'PS5'],
    30000000,
    'Frostbite Engine',
    'SE',
    'fantasy_img_url_here'
);

-- Game 4
INSERT INTO Videogame (
    vg_name,
    genre,
    vg_description,
    release_year,
    age_limit,
    price,
    platform,
    budget,
    engine,
    country,
    img_url
) VALUES (
    'Sci-Fi Shooter',
    'Shooter',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper urna ut ex tempus, a bibendum justo fermentum.',
    2013,
    12,
    55,
    ARRAY['Xbox', 'PS3'],
    25000000,
    'CryEngine',
    'FI',
    'scifi_img_url_here'
);