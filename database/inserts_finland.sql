-- Finland Publishers
INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('Legends Publishing', 'Leading game publisher in Finland', 60, 'http://legendspublishing.fi', 2010, 4000000, 'http://legendspublishing.fi/logo.png', 'Game Publishing', 'FI'),
('Foundation Interactive', 'Publishing pixel-perfect games in the Nordics', 40, 'http://foundationiteractive.fi', 2005, 3000000, 'http://foundationiteractive.fi/logo.png', 'Game Design', 'FI'),
('Finnish Publishing', 'Bringing virtual experiences to Finland', 80, 'http://finnishpublishing.fi', 2012, 5000000, 'http://finnishpublishing.fi/logo.png', 'Virtual Reality Publishing', 'FI'),
('Julkaisu Alusta Oy', 'Nordic experts in coding adventures', 50, 'http://julkaisualusta.fi', 2015, 3500000, 'http://julkaisualusta.fi/logo.png', 'Game Development', 'FI'),
('Sauna Publishing', 'Publishing arctic adventures in pixels', 30, 'http://saunapublishing.fi', 2011, 2500000, 'http://saunapublishing.fi/logo.png', 'Interactive Entertainment Publishing', 'FI');

-- Finland Developers
INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('Kanttarelli Gaming', 'Leading the way in arctic technological advancements', 50, 'http://kanttarelligaming.fi', 2010, 3000000, 'http://kanttarelligaming.fi/logo.png', 'Technology', 'FI'),
('Saunalaude Oy', 'Masters of coding, crafting epic games', 30, 'http://saunalaude.fi', 2005, 2000000, 'http://saunalaude.fi/logo.png', 'Software', 'FI'),
('Kolmetoista Muurahaista', 'Crafting exceptional web solutions in the cold', 20, 'http://kolmetoistamuurahaista.fi', 2012, 1500000, 'http://kolmetoistamuurahaista.fi/logo.png', 'Web Development', 'FI'),
('Data Miehet', 'Unlocking the power of polar data', 25, 'http://datamiehet.fi', 2008, 1800000, 'http://datamiehet.fi/logo.png', 'Data Science', 'FI'),
('Innovaattori Oy', 'Fostering innovation in the frozen lands', 40, 'http://innovaattori.fi', 2015, 2500000, 'http://innovaattori.fi/logo.png', 'Innovation', 'FI');

-- Finland Videogames
INSERT INTO Videogame(pub_id, dev_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES 
(1, 1, 'Sauna Simulator 2020', 'Simulation', 'Embark on chilly arctic adventures', 2020, 10, 29.99, ARRAY['PC', 'Mac', 'Linux'], 4000000, 'Unreal Engine 5', 'FI', 'http://legendspublishing.fi/arctic_adventures.png'),
(2, 2, 'Finnish Civil War', 'Action', 'Experience the thrill of finnish civil war', 2018, 12, 19.99, ARRAY['PC', 'PlayStation', 'Xbox'], 3000000, 'Unity 3D', 'FI', 'http://foundationiteractive.fi/ninja_coder.png'),
(3, 3, 'Sisu Survival', 'Survival', 'Stay alive and craft resources in frozen environment', 2021, 8, 39.99, ARRAY['PC', 'Mac'], 5000000, 'Godot', 'FI', 'http://finnishpublishing.fi/frozenweb_magic.png'),
(4, 4, 'Sled hill', 'Simulation', 'Cozy fun with friends', 2019, 13, 49.99, ARRAY['PC', 'Mac'], 1800000, 'SledHillEngine', 'FI', 'http://julkaisualusta.fi/polar_data_simulator.png'),
(5, 5, 'Tykinkuula', 'Strategy', 'Build your own frozen empire', 2020, 15, 34.99, ARRAY['PC', 'Mac', 'Linux'], 2500000, 'Unity 3D', 'FI', 'http://saunapublishing.fi/frozeninnovator_tycoon.png');

INSERT INTO ParticipatedDevelopers(vg_id, dev_id)
VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);