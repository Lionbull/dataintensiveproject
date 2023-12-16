-- Denmark Publishers
INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('DanishGame Studios', 'Leading game publisher in Denmark', 80, 'http://danishgamestudios.dk', 2014, 5500000, 'http://danishgamestudios.dk/logo.png', 'Game Publishing', 'DK'),
('NordicPixel Interactive Denmark', 'Publishing pixel-perfect games in Denmark', 50, 'http://nordicpixel.dk', 2008, 3300000, 'http://nordicpixel.dk/logo.png', 'Game Design', 'DK'),
('VirtualDenmark Publishing', 'Bringing virtual experiences to Denmark', 85, 'http://virtualdenmark.dk', 2015, 5800000, 'http://virtualdenmark.dk/logo.png', 'Virtual Reality Publishing', 'DK'),
('CodeNordic Games Denmark', 'Nordic experts in coding adventures in Denmark', 60, 'http://codenordicgames.dk', 2018, 4000000, 'http://codenordicgames.dk/logo.png', 'Game Development', 'DK'),
('PixelArctic Publishers Denmark', 'Publishing arctic adventures in pixels in Denmark', 40, 'http://pixelarctic.dk', 2014, 3000000, 'http://pixelarctic.dk/logo.png', 'Interactive Entertainment Publishing', 'DK');

-- Denmark Developers
INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('ArcticTech Innovators Denmark', 'Leading the way in arctic technological advancements in Denmark', 60, 'http://arctictech.dk', 2013, 3700000, 'http://arctictech.dk/logo.png', 'Technology', 'DK'),
('CodeNinjas Denmark', 'Masters of coding, crafting epic games in Denmark', 40, 'http://codeninjas.dk', 2008, 2500000, 'http://codeninjas.dk/logo.png', 'Software', 'DK'),
('IceWeb Wizards Denmark', 'Crafting exceptional web solutions in the cold in Denmark', 30, 'http://icewebwizards.dk', 2015, 2000000, 'http://icewebwizards.dk/logo.png', 'Web Development', 'DK'),
('DataPolar Geniuses Denmark', 'Unlocking the power of polar data in Denmark', 35, 'http://datapolar.dk', 2011, 2300000, 'http://datapolar.dk/logo.png', 'Data Science', 'DK'),
('FrozenInnovation Hub Denmark', 'Fostering innovation in the frozen lands in Denmark', 50, 'http://frozeninnovation.dk', 2018, 3000000, 'http://frozeninnovation.dk/logo.png', 'Innovation', 'DK');

-- Denmark Videogames
INSERT INTO Videogame(pub_id, dev_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES 
(1, 1, 'Danish Winter Tales', 'Adventure', 'Embark on chilly Danish winter adventures', 2021, 10, 29.99, ARRAY['PC', 'Mac', 'Linux'], 5500000, 'DanishFrostEngine', 'DK', 'http://arctictech.dk/danish_winter_tales.png'),
(2, 2, 'NinjaCoder Denmark', 'Action', 'Become a master coder and ninja warrior in Denmark', 2019, 12, 19.99, ARRAY['PC', 'PlayStation', 'Xbox'], 3300000, 'NinjaCodeEngineDenmark', 'DK', 'http://codeninjas.dk/ninja_coder_denmark.png'),
(3, 3, 'FrozenWeb Magic Denmark', 'Simulation', 'Craft magic in a frozen web environment in Denmark', 2022, 9, 39.99, ARRAY['PC', 'Mac'], 5800000, 'IceMagicDenmark', 'DK', 'http://icewebwizards.dk/frozenweb_magic_denmark.png'),
(4, 4, 'PolarData Simulator Denmark', 'Simulation', 'Simulate polar data scenarios in Denmark', 2020, 13, 49.99, ARRAY['PC', 'Mac'], 2300000, 'DataSimulatorDenmark', 'DK', 'http://datapolar.dk/polar_data_simulator_denmark.png'),
(5, 5, 'FrozenInnovator Tycoon Denmark', 'Simulation', 'Build your own frozen innovation empire in Denmark', 2021, 15, 34.99, ARRAY['PC', 'Mac', 'Linux'], 3000000, 'FrozenInnovationCraftDenmark', 'DK', 'http://frozeninnovation.dk/frozeninnovator_tycoon_denmark.png');

INSERT INTO ParticipatedDevelopers(vg_id, dev_id)
VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);