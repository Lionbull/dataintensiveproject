-- Estonia Publishers
INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('EstonianGame Studios', 'Leading game publisher in Estonia', 45, 'http://estoniangamestudios.ee', 2012, 3500000, 'http://estoniangamestudios.ee/logo.png', 'Game Publishing', 'EE'),
('NordicPixel Interactive Estonia', 'Publishing pixel-perfect games in Estonia', 30, 'http://nordicpixel.ee', 2006, 2200000, 'http://nordicpixel.ee/logo.png', 'Game Design', 'EE'),
('VirtualEstonia Publishing', 'Bringing virtual experiences to Estonia', 50, 'http://virtualestonia.ee', 2014, 3800000, 'http://virtualestonia.ee/logo.png', 'Virtual Reality Publishing', 'EE'),
('CodeNordic Games Estonia', 'Nordic experts in coding adventures in Estonia', 35, 'http://codenordicgames.ee', 2017, 2600000, 'http://codenordicgames.ee/logo.png', 'Game Development', 'EE'),
('PixelArctic Publishers Estonia', 'Publishing arctic adventures in pixels in Estonia', 25, 'http://pixelarctic.ee', 2013, 1800000, 'http://pixelarctic.ee/logo.png', 'Interactive Entertainment Publishing', 'EE');

-- Estonia Developers
INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type, country)
VALUES 
('ArcticTech Innovators Estonia', 'Leading the way in arctic technological advancements in Estonia', 35, 'http://arctictech.ee', 2011, 2000000, 'http://arctictech.ee/logo.png', 'Technology', 'EE'),
('CodeNinjas Estonia', 'Masters of coding, crafting epic games in Estonia', 20, 'http://codeninjas.ee', 2006, 1500000, 'http://codeninjas.ee/logo.png', 'Software', 'EE'),
('IceWeb Wizards Estonia', 'Crafting exceptional web solutions in the cold in Estonia', 15, 'http://icewebwizards.ee', 2013, 1200000, 'http://icewebwizards.ee/logo.png', 'Web Development', 'EE'),
('DataPolar Geniuses Estonia', 'Unlocking the power of polar data in Estonia', 18, 'http://datapolar.ee', 2009, 1400000, 'http://datapolar.ee/logo.png', 'Data Science', 'EE'),
('FrozenInnovation Hub Estonia', 'Fostering innovation in the frozen lands in Estonia', 30, 'http://frozeninnovation.ee', 2016, 1800000, 'http://frozeninnovation.ee/logo.png', 'Innovation', 'EE');

-- Estonia Videogames
INSERT INTO Videogame(pub_id, dev_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES 
(1, 1, 'Estonian Winter Tales', 'Adventure', 'Embark on chilly Estonian winter adventures', 2022, 10, 29.99, ARRAY['PC', 'Mac', 'Linux'], 3500000, 'EstonianFrostEngine', 'EE', 'http://arctictech.ee/estonian_winter_tales.png'),
(2, 2, 'NinjaCoder Estonia', 'Action', 'Become a master coder and ninja warrior in Estonia', 2020, 12, 19.99, ARRAY['PC', 'PlayStation', 'Xbox'], 2200000, 'NinjaCodeEngineEstonia', 'EE', 'http://codeninjas.ee/ninja_coder_estonia.png'),
(3, 3, 'FrozenWeb Magic Estonia', 'Simulation', 'Craft magic in a frozen web environment in Estonia', 2021, 9, 39.99, ARRAY['PC', 'Mac'], 3800000, 'IceMagicEstonia', 'EE', 'http://icewebwizards.ee/frozenweb_magic_estonia.png'),
(4, 4, 'PolarData Simulator Estonia', 'Simulation', 'Simulate polar data scenarios in Estonia', 2019, 13, 49.99, ARRAY['PC', 'Mac'], 1400000, 'DataSimulatorEstonia', 'EE', 'http://datapolar.ee/polar_data_simulator_estonia.png'),
(5, 5, 'FrozenInnovator Tycoon Estonia', 'Simulation', 'Build your own frozen innovation empire in Estonia', 2020, 15, 34.99, ARRAY['PC', 'Mac', 'Linux'], 1800000, 'FrozenInnovationCraftEstonia', 'EE', 'http://frozeninnovation.ee/frozeninnovator_tycoon_estonia.png');

INSERT INTO ParticipatedDevelopers(vg_id, dev_id)
VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);