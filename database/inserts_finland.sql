-- Finland Publishers
INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('FinnishGame Studios', 'Leading game publisher in Finland', 60, 'http://finnishgamestudios.fi', 2010, 4000000, 'http://finnishgamestudios.fi/logo.png', 'Game Publishing', 'FI'),
('NordicPixel Interactive', 'Publishing pixel-perfect games in the Nordics', 40, 'http://nordicpixel.fi', 2005, 3000000, 'http://nordicpixel.fi/logo.png', 'Game Design', 'FI'),
('VirtualFinland Publishing', 'Bringing virtual experiences to Finland', 80, 'http://virtualfinland.fi', 2012, 5000000, 'http://virtualfinland.fi/logo.png', 'Virtual Reality Publishing', 'FI'),
('CodeNordic Games', 'Nordic experts in coding adventures', 50, 'http://codenordicgames.fi', 2015, 3500000, 'http://codenordicgames.fi/logo.png', 'Game Development', 'FI'),
('PixelArctic Publishers', 'Publishing arctic adventures in pixels', 30, 'http://pixelarctic.fi', 2011, 2500000, 'http://pixelarctic.fi/logo.png', 'Interactive Entertainment Publishing', 'FI');

-- Finland Developers
INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('ArcticTech Innovators', 'Leading the way in arctic technological advancements', 50, 'http://arctictech.fi', 2010, 3000000, 'http://arctictech.fi/logo.png', 'Technology', 'FI'),
('CodeNinjas', 'Masters of coding, crafting epic games', 30, 'http://codeninjas.fi', 2005, 2000000, 'http://codeninjas.fi/logo.png', 'Software', 'FI'),
('IceWeb Wizards', 'Crafting exceptional web solutions in the cold', 20, 'http://icewebwizards.fi', 2012, 1500000, 'http://icewebwizards.fi/logo.png', 'Web Development', 'FI'),
('DataPolar Geniuses', 'Unlocking the power of polar data', 25, 'http://datapolar.fi', 2008, 1800000, 'http://datapolar.fi/logo.png', 'Data Science', 'FI'),
('FrozenInnovation Hub', 'Fostering innovation in the frozen lands', 40, 'http://frozeninnovation.fi', 2015, 2500000, 'http://frozeninnovation.fi/logo.png', 'Innovation', 'FI');

-- Finland Videogames
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES 
(1, 'Arctic Adventures', 'Adventure', 'Embark on chilly arctic adventures', 2020, 10, 29.99, ARRAY['PC', 'Mac', 'Linux'], 4000000, 'FrostEngine', 'FI', 'http://arctictech.fi/arctic_adventures.png'),
(2, 'NinjaCoder', 'Action', 'Become a master coder and ninja warrior', 2018, 12, 19.99, ARRAY['PC', 'PlayStation', 'Xbox'], 3000000, 'NinjaCodeEngine', 'FI', 'http://codeninjas.fi/ninja_coder.png'),
(3, 'FrozenWeb Magic', 'Simulation', 'Craft magic in a frozen web environment', 2021, 8, 39.99, ARRAY['PC', 'Mac'], 5000000, 'IceMagic', 'FI', 'http://icewebwizards.fi/frozenweb_magic.png'),
(4, 'PolarData Simulator', 'Simulation', 'Simulate polar data scenarios', 2019, 13, 49.99, ARRAY['PC', 'Mac'], 1800000, 'DataSimulator', 'FI', 'http://datapolar.fi/polar_data_simulator.png'),
(5, 'FrozenInnovator Tycoon', 'Simulation', 'Build your own frozen innovation empire', 2020, 15, 34.99, ARRAY['PC', 'Mac', 'Linux'], 2500000, 'FrozenInnovationCraft', 'FI', 'http://frozeninnovation.fi/frozeninnovator_tycoon.png');
