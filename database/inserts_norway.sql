-- Norway Publishers
INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('NorwegianGame Studios', 'Leading game publisher in Norway', 65, 'http://norwegiangamestudios.no', 2013, 4800000, 'http://norwegiangamestudios.no/logo.png', 'Game Publishing', 'NO'),
('NordicPixel Interactive Norway', 'Publishing pixel-perfect games in Norway', 42, 'http://nordicpixel.no', 2007, 2900000, 'http://nordicpixel.no/logo.png', 'Game Design', 'NO'),
('VirtualNorway Publishing', 'Bringing virtual experiences to Norway', 72, 'http://virtualnorway.no', 2014, 5100000, 'http://virtualnorway.no/logo.png', 'Virtual Reality Publishing', 'NO'),
('CodeNordic Games Norway', 'Nordic experts in coding adventures in Norway', 52, 'http://codenordicgames.no', 2017, 3500000, 'http://codenordicgames.no/logo.png', 'Game Development', 'NO'),
('PixelArctic Publishers Norway', 'Publishing arctic adventures in pixels in Norway', 32, 'http://pixelarctic.no', 2013, 2600000, 'http://pixelarctic.no/logo.png', 'Interactive Entertainment Publishing', 'NO');

-- Norway Developers
INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('ArcticTech Innovators Norway', 'Leading the way in arctic technological advancements in Norway', 52, 'http://arctictech.no', 2012, 3200000, 'http://arctictech.no/logo.png', 'Technology', 'NO'),
('CodeNinjas Norway', 'Masters of coding, crafting epic games in Norway', 32, 'http://codeninjas.no', 2007, 2100000, 'http://codeninjas.no/logo.png', 'Software', 'NO'),
('IceWeb Wizards Norway', 'Crafting exceptional web solutions in the cold in Norway', 22, 'http://icewebwizards.no', 2014, 1600000, 'http://icewebwizards.no/logo.png', 'Web Development', 'NO'),
('DataPolar Geniuses Norway', 'Unlocking the power of polar data in Norway', 27, 'http://datapolar.no', 2010, 1900000, 'http://datapolar.no/logo.png', 'Data Science', 'NO'),
('FrozenInnovation Hub Norway', 'Fostering innovation in the frozen lands in Norway', 42, 'http://frozeninnovation.no', 2017, 2600000, 'http://frozeninnovation.no/logo.png', 'Innovation', 'NO');

-- Norway Videogames
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES 
(1, 'Norwegian Winter Tales', 'Adventure', 'Embark on chilly Norwegian winter adventures', 2020, 10, 29.99, ARRAY['PC', 'Mac', 'Linux'], 4800000, 'NorwegianFrostEngine', 'NO', 'http://arctictech.no/norwegian_winter_tales.png'),
(2, 'NinjaCoder Norway', 'Action', 'Become a master coder and ninja warrior in Norway', 2018, 12, 19.99, ARRAY['PC', 'PlayStation', 'Xbox'], 2900000, 'NinjaCodeEngineNorway', 'NO', 'http://codeninjas.no/ninja_coder_norway.png'),
(3, 'FrozenWeb Magic Norway', 'Simulation', 'Craft magic in a frozen web environment in Norway', 2021, 9, 39.99, ARRAY['PC', 'Mac'], 5100000, 'IceMagicNorway', 'NO', 'http://icewebwizards.no/frozenweb_magic_norway.png'),
(4, 'PolarData Simulator Norway', 'Simulation', 'Simulate polar data scenarios in Norway', 2019, 13, 49.99, ARRAY['PC', 'Mac'], 1900000, 'DataSimulatorNorway', 'NO', 'http://datapolar.no/polar_data_simulator_norway.png'),
(5, 'FrozenInnovator Tycoon Norway', 'Simulation', 'Build your own frozen innovation empire in Norway', 2020, 15, 34.99, ARRAY['PC', 'Mac', 'Linux'], 2600000, 'FrozenInnovationCraftNorway', 'NO', 'http://frozeninnovation.no/frozeninnovator_tycoon_norway.png');
