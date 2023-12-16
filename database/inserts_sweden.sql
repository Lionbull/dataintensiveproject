-- Sweden Publishers
INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('SwedishGame Studios', 'Leading game publisher in Sweden', 70, 'http://swedishgamestudios.se', 2011, 4500000, 'http://swedishgamestudios.se/logo.png', 'Game Publishing', 'SE'),
('NordicPixel Interactive Sweden', 'Publishing pixel-perfect games in Sweden', 45, 'http://nordicpixel.se', 2006, 3200000, 'http://nordicpixel.se/logo.png', 'Game Design', 'SE'),
('VirtualSweden Publishing', 'Bringing virtual experiences to Sweden', 75, 'http://virtualsweden.se', 2013, 5500000, 'http://virtualsweden.se/logo.png', 'Virtual Reality Publishing', 'SE'),
('CodeNordic Games Sweden', 'Nordic experts in coding adventures in Sweden', 55, 'http://codenordicgames.se', 2016, 3800000, 'http://codenordicgames.se/logo.png', 'Game Development', 'SE'),
('PixelArctic Publishers Sweden', 'Publishing arctic adventures in pixels in Sweden', 35, 'http://pixelarctic.se', 2012, 2800000, 'http://pixelarctic.se/logo.png', 'Interactive Entertainment Publishing', 'SE');

-- Sweden Developers
INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('ArcticTech Innovators Sweden', 'Leading the way in arctic technological advancements in Sweden', 55, 'http://arctictech.se', 2011, 3300000, 'http://arctictech.se/logo.png', 'Technology', 'SE'),
('CodeNinjas Sweden', 'Masters of coding, crafting epic games in Sweden', 35, 'http://codeninjas.se', 2006, 2300000, 'http://codeninjas.se/logo.png', 'Software', 'SE'),
('IceWeb Wizards Sweden', 'Crafting exceptional web solutions in the cold in Sweden', 25, 'http://icewebwizards.se', 2013, 1800000, 'http://icewebwizards.se/logo.png', 'Web Development', 'SE'),
('DataPolar Geniuses Sweden', 'Unlocking the power of polar data in Sweden', 30, 'http://datapolar.se', 2009, 2000000, 'http://datapolar.se/logo.png', 'Data Science', 'SE'),
('FrozenInnovation Hub Sweden', 'Fostering innovation in the frozen lands in Sweden', 45, 'http://frozeninnovation.se', 2016, 2800000, 'http://frozeninnovation.se/logo.png', 'Innovation', 'SE');

-- Sweden Videogames
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES 
(1, 'Swedish Winter Tales', 'Adventure', 'Embark on chilly Swedish winter adventures', 2019, 11, 29.99, ARRAY['PC', 'Mac', 'Linux'], 4500000, 'SwedishFrostEngine', 'SE', 'http://arctictech.se/swedish_winter_tales.png'),
(2, 'NinjaCoder Sweden', 'Action', 'Become a master coder and ninja warrior in Sweden', 2017, 13, 19.99, ARRAY['PC', 'PlayStation', 'Xbox'], 3200000, 'NinjaCodeEngineSweden', 'SE', 'http://codeninjas.se/ninja_coder_sweden.png'),
(3, 'FrozenWeb Magic Sweden', 'Simulation', 'Craft magic in a frozen web environment in Sweden', 2020, 9, 39.99, ARRAY['PC', 'Mac'], 5500000, 'IceMagicSweden', 'SE', 'http://icewebwizards.se/frozenweb_magic_sweden.png'),
(4, 'PolarData Simulator Sweden', 'Simulation', 'Simulate polar data scenarios in Sweden', 2018, 14, 49.99, ARRAY['PC', 'Mac'], 1800000, 'DataSimulatorSweden', 'SE', 'http://datapolar.se/polar_data_simulator_sweden.png'),
(5, 'FrozenInnovator Tycoon Sweden', 'Simulation', 'Build your own frozen innovation empire in Sweden', 2019, 16, 34.99, ARRAY['PC', 'Mac', 'Linux'], 2800000, 'FrozenInnovationCraftSweden', 'SE', 'http://frozeninnovation.se/frozeninnovator_tycoon_sweden.png');
