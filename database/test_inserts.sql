-- Developers (Generated with ChatGPT)

INSERT INTO Developer(dev_name, dev_description, number_of_employees, website, founding_year, revenue, img_url, company_type)
VALUES 
('GameGenius Studios', 'Crafting immersive gaming experiences', 150, 'http://gamegenius.com', 2010, 7000000, 'http://gamegenius.com/logo.png', 'Game Development'),
('PixelPioneers Interactive', 'Pioneering the world of pixel-perfect games', 100, 'http://pixelpioneers.com', 2005, 5000000, 'http://pixelpioneers.com/logo.png', 'Game Design'),
('VirtualRealms Entertainment', 'Bringing virtual worlds to life', 250, 'http://virtualrealms.net', 2012, 8000000, 'http://virtualrealms.net/logo.png', 'Virtual Reality'),
('CodeCraft Games', 'Crafting code for epic gaming adventures', 120, 'http://codecraftgames.com', 2015, 3000000, 'http://codecraftgames.com/logo.png', 'Game Development'),
('ByteBlast Interactive', 'Blasting bytes for thrilling gaming experiences', 180, 'http://byteblast.io', 2011, 4500000, 'http://byteblast.io/logo.png', 'Interactive Entertainment'),
('QuestMasters Studios', 'Masters of quest-driven gaming', 200, 'http://questmasters.com', 2014, 5500000, 'http://questmasters.com/logo.png', 'Game Development'),
('VRInnovate Games', 'Innovating games for virtual reality', 130, 'http://vrinnovategames.com', 2008, 4000000, 'http://vrinnovategames.com/logo.png', 'Virtual Reality'),
('EpicPixel Creations', 'Creating epic pixelated adventures', 160, 'http://epicpixelcreations.net', 2007, 3500000, 'http://epicpixelcreations.net/logo.png', 'Game Design'),
('NextLevel Gaming Solutions', 'Taking gaming to the next level', 220, 'http://nextlevelgaming.com', 2013, 6000000, 'http://nextlevelgaming.com/logo.png', 'Game Development'),
('Immersive Play Labs', 'Labs for creating truly immersive play', 300, 'http://immersiveplaylabs.org', 2009, 4800000, 'http://immersiveplaylabs.org/logo.png', 'Interactive Entertainment');

-- Publishers (Generated with ChatGPT)

INSERT INTO Publisher(pub_name, pub_description, number_of_employees, website, founding_year, revenue, img_url, company_type)
VALUES 
('GamePublish Pro', 'Your Gateway to Gaming Excellence', 75, 'http://gamepublishpro.com', 2012, 3000000, 'http://gamepublishpro.com/logo.png', 'Game Publishing'),
('PixelPlay Publishers', 'Publishing Pixel-Perfect Entertainment', 50, 'http://pixelplaypublishers.com', 2008, 2500000, 'http://pixelplaypublishers.com/logo.png', 'Entertainment Publishing'),
('VirtualRealms Publishing', 'Bringing Virtual Worlds to Your Devices', 120, 'http://virtualrealmspublishing.net', 2015, 5000000, 'http://virtualrealmspublishing.net/logo.png', 'Virtual Reality Publishing'),
('EpicGamer Studios', 'Publishing Epically Entertaining Games', 80, 'http://epicgamerstudios.com', 2010, 4000000, 'http://epicgamerstudios.com/logo.png', 'Game Publishing'),
('PixelParade Interactive', 'Parading Pixels for Interactive Fun', 60, 'http://pixelparadeinteractive.net', 2014, 3500000, 'http://pixelparadeinteractive.net/logo.png', 'Interactive Entertainment Publishing'),
('AdventureQuest Publishers', 'Publishing Adventures for Every Gamer', 90, 'http://adventurequestpublishers.com', 2011, 2800000, 'http://adventurequestpublishers.com/logo.png', 'Game Publishing'),
('VRInnovate Publishing', 'Innovating in the World of VR Publishing', 110, 'http://vrinnovatepublishing.com', 2013, 4500000, 'http://vrinnovatepublishing.com/logo.png', 'Virtual Reality Publishing'),
('NextLevel Publishers', 'Taking Entertainment to the Next Level', 70, 'http://nextlevelpublishers.com', 2009, 3200000, 'http://nextlevelpublishers.com/logo.png', 'Entertainment Publishing'),
('Immersive Entertainment Solutions', 'Solutions for Truly Immersive Entertainment', 100, 'http://immersiveentertainmentsolutions.org', 2006, 6000000, 'http://immersiveentertainmentsolutions.org/logo.png', 'Entertainment Solutions'),
('Game Haven Publishing', 'Creating Havens for Gamers Worldwide', 130, 'http://gamershavenpublishing.org', 2016, 7000000, 'http://gamershavenpublishing.org/logo.png', 'Game Publishing');


-- Games (Generated with ChatGPT)

-- GameGenius Studios
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (1, 'Tech Tycoon', 'Simulation', 'Build and manage your own tech empire', 2020, 12, 29.99, ARRAY['PC', 'Mac', 'Linux'], 5000000, 'TechCraft', 'USA', 'http://gamegenius.com/tech_tycoon.png');

-- PixelPioneers Interactive
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (2, 'PixelQuest', 'Adventure', 'Embark on a pixelated journey of quests', 2018, 10, 19.99, ARRAY['PC', 'Nintendo Switch', 'PlayStation', 'Xbox'], 3000000, 'PixelEngine', 'USA', 'http://pixelpioneers.com/pixel_quest.png');

-- VirtualRealms Entertainment
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (3, 'VirtualRacer VR', 'Racing', 'Experience high-speed racing in virtual reality', 2021, 8, 39.99, ARRAY['PlayStation VR', 'Oculus Rift', 'HTC Vive'], 8000000, 'VRSpeed', 'USA', 'http://virtualrealms.net/virtual_racer_vr.png');

-- CodeCraft Games
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (4, 'CodeQuest', 'Action RPG', 'Embark on an epic coding adventure', 2019, 13, 49.99, ARRAY['PC', 'PlayStation', 'Xbox'], 3000000, 'CodeEngine', 'USA', 'http://codecraftgames.com/code_quest.png');

-- ByteBlast Interactive
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (5, 'ByteBlast Arena', 'Multiplayer Shooter', 'Blast your way through byte-filled arenas', 2020, 16, 29.99, ARRAY['PC', 'PlayStation', 'Xbox'], 4500000, 'BlastEngine', 'USA', 'http://byteblast.io/byteblast_arena.png');

-- QuestMasters Studios
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (6, 'QuestMasters: Kingdoms', 'Strategy', 'Conquer kingdoms and fulfill quests', 2017, 10, 39.99, ARRAY['PC', 'Mac'], 5500000, 'KingdomEngine', 'USA', 'http://questmasters.com/kingdoms.png');

-- VRInnovate Games
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (7, 'VRInnovate Adventures', 'Adventure', 'Embark on immersive VR adventures', 2020, 12, 34.99, ARRAY['Oculus Quest', 'PlayStation VR'], 4500000, 'VRAdventure', 'USA', 'http://vrinnovategames.com/vrinnovate_adventures.png');

-- EpicGamer Studios
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (8, 'EpicPixel Quest', 'Platformer', 'Embark on an epic pixelated quest', 2016, 8, 19.99, ARRAY['PC', 'Nintendo Switch'], 3500000, 'EpicPixelEngine', 'USA', 'http://epicgamerstudios.com/epicpixel_quest.png');

-- NextLevel Gaming Solutions
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (9, 'NextLevel Racing', 'Racing', 'Experience next-level racing excitement', 2018, 10, 49.99, ARRAY['PC', 'PlayStation', 'Xbox'], 6000000, 'NextLevelSpeed', 'USA', 'http://nextlevelgaming.com/nextlevel_racing.png');

-- Immersive Play Labs
INSERT INTO Videogame(pub_id, vg_name, genre, vg_description, release_year, age_limit, price, platform, budget, engine, country, img_url)
VALUES (10, 'Immersive Odyssey', 'Action Adventure', 'Embark on an odyssey in a truly immersive world', 2019, 15, 59.99, ARRAY['PC', 'PlayStation', 'Xbox'], 4800000, 'ImmersiveEngine', 'USA', 'http://immersiveplaylabs.org/immersive_odyssey.png');
