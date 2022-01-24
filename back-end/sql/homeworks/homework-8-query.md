-- 1.test veritabanınızda employee isimli sütun bilgileri id(INTEGER), 
-- name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

CREATE TABLE employee (
	id INT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(120) NOT NULL,
	birthday DATE
);

--2. Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.

insert into employee (id, name, email, birthday) values (1, 'Dora', 'dlemerle0@livejournal.com', '1999-04-02');
insert into employee (id, name, email, birthday) values (2, 'Gareth', 'gbeachem1@mozilla.com', '1999-07-29');
insert into employee (id, name, email, birthday) values (3, 'Irving', 'ipaulillo2@craigslist.org', '1994-03-18');
insert into employee (id, name, email, birthday) values (4, 'Raynor', 'ralvis3@weebly.com', '1991-06-02');
insert into employee (id, name, email, birthday) values (5, 'Kristel', 'karonstein4@wufoo.com', null);
insert into employee (id, name, email, birthday) values (6, 'Major', 'mwinterflood5@indiegogo.com', '1991-07-04');
insert into employee (id, name, email, birthday) values (7, 'Aristotle', 'aambroz6@weibo.com', '1999-05-17');
insert into employee (id, name, email, birthday) values (8, 'Addy', 'akliesl7@moonfruit.com', '1999-12-09');
insert into employee (id, name, email, birthday) values (9, 'Antonella', 'aartinstall8@comcast.net', null);
insert into employee (id, name, email, birthday) values (10, 'Jabez', 'jgraveney9@4shared.com', '1994-04-22');
insert into employee (id, name, email, birthday) values (11, 'Abner', 'aridholea@deliciousdays.com', null);
insert into employee (id, name, email, birthday) values (12, 'Porty', 'pwestfalenb@cloudflare.com', '1995-09-12');
insert into employee (id, name, email, birthday) values (13, 'Fabiano', 'fqueyeiroc@noaa.gov', null);
insert into employee (id, name, email, birthday) values (14, 'Bronson', 'bbuggsd@hatena.ne.jp', '1999-06-01');
insert into employee (id, name, email, birthday) values (15, 'Ulrike', 'ukeenere@plala.or.jp', '1997-07-29');
insert into employee (id, name, email, birthday) values (16, 'Amby', 'adezamoraf@gizmodo.com', '1998-12-31');
insert into employee (id, name, email, birthday) values (17, 'Gwenni', 'gohagertyg@a8.net', '1993-11-17');
insert into employee (id, name, email, birthday) values (18, 'Felike', 'fmatesh@oaic.gov.au', '1994-01-03');
insert into employee (id, name, email, birthday) values (19, 'Ardyth', 'ahuelini@hc360.com', '1991-08-08');
insert into employee (id, name, email, birthday) values (20, 'Avictor', 'agarbuttj@gravatar.com', '1996-05-16');
insert into employee (id, name, email, birthday) values (21, 'Fraser', 'fvanyardk@house.gov', '1990-03-18');
insert into employee (id, name, email, birthday) values (22, 'Theresa', 'tdequinceyl@answers.com', '1997-08-23');
insert into employee (id, name, email, birthday) values (23, 'Lizette', 'lcleavesm@themeforest.net', '1998-04-10');
insert into employee (id, name, email, birthday) values (24, 'Jackie', 'jadicotn@github.io', '1998-02-06');
insert into employee (id, name, email, birthday) values (25, 'Alvina', 'abartkeo@webs.com', null);
insert into employee (id, name, email, birthday) values (26, 'Adah', 'acochep@slideshare.net', null);
insert into employee (id, name, email, birthday) values (27, 'Kaye', 'kmartinsq@dot.gov', '1999-09-12');
insert into employee (id, name, email, birthday) values (28, 'Irvin', 'ielietr@biglobe.ne.jp', '1999-05-09');
insert into employee (id, name, email, birthday) values (29, 'Elinore', 'erizzolos@google.com', '1995-09-05');
insert into employee (id, name, email, birthday) values (30, 'Erika', 'egonint@infoseek.co.jp', '1991-10-08');
insert into employee (id, name, email, birthday) values (31, 'Jaclyn', 'jlorkingsu@discovery.com', '1995-04-08');
insert into employee (id, name, email, birthday) values (32, 'Daphne', 'drankenv@photobucket.com', '1990-03-27');
insert into employee (id, name, email, birthday) values (33, 'Hendrika', 'heilhartw@marketwatch.com', '1991-10-26');
insert into employee (id, name, email, birthday) values (34, 'Thatcher', 'tyoungerx@sciencedaily.com', '1995-11-07');
insert into employee (id, name, email, birthday) values (35, 'Maxwell', 'mmcmichany@youtube.com', '1995-04-23');
insert into employee (id, name, email, birthday) values (36, 'Bryce', 'bjurkowskiz@smh.com.au', '1993-08-11');
insert into employee (id, name, email, birthday) values (37, 'Florentia', 'fsturgess10@howstuffworks.com', '1998-03-02');
insert into employee (id, name, email, birthday) values (38, 'Evangelia', 'ebletso11@histats.com', '1990-11-05');
insert into employee (id, name, email, birthday) values (39, 'Fanny', 'fcull12@webs.com', null);
insert into employee (id, name, email, birthday) values (40, 'Ellette', 'emccahey13@wikipedia.org', null);
insert into employee (id, name, email, birthday) values (41, 'Andree', 'aatthowe14@abc.net.au', null);
insert into employee (id, name, email, birthday) values (42, 'Barnabas', 'babarrow15@sciencedaily.com', '1997-09-26');
insert into employee (id, name, email, birthday) values (43, 'Tiffie', 'tkitchinham16@illinois.edu', '1995-10-22');
insert into employee (id, name, email, birthday) values (44, 'Isac', 'ibitcheno17@marketwatch.com', null);
insert into employee (id, name, email, birthday) values (45, 'Veronique', 'vyounger18@networkadvertising.org', null);
insert into employee (id, name, email, birthday) values (46, 'Bobbe', 'bbannell19@jigsy.com', '1996-09-29');
insert into employee (id, name, email, birthday) values (47, 'Tasha', 'thumber1a@wordpress.com', '1992-06-04');
insert into employee (id, name, email, birthday) values (48, 'Carlee', 'calibone1b@nyu.edu', '1990-06-07');
insert into employee (id, name, email, birthday) values (49, 'Luke', 'lbruhnsen1c@nasa.gov', '1997-10-01');
insert into employee (id, name, email, birthday) values (50, 'Rufe', 'rvalintine1d@ask.com', null);
insert into employee (id, name, email, birthday) values (51, 'Gale', 'gguard1e@arstechnica.com', '1993-11-26');
insert into employee (id, name, email, birthday) values (52, 'Aubree', 'agergus1f@ftc.gov', '1998-11-08');
insert into employee (id, name, email, birthday) values (53, 'Barbabas', 'bhydes1g@smugmug.com', '1994-11-16');
insert into employee (id, name, email, birthday) values (54, 'Chelsie', 'ctrinder1h@goo.gl', '1991-07-29');
insert into employee (id, name, email, birthday) values (55, 'Sallee', 'suwins1i@histats.com', '1996-11-23');
insert into employee (id, name, email, birthday) values (56, 'Allister', 'asilverman1j@webs.com', '1996-02-19');
insert into employee (id, name, email, birthday) values (57, 'Karney', 'kgoring1k@earthlink.net', '1993-11-10');
insert into employee (id, name, email, birthday) values (58, 'Marne', 'mmoggle1l@geocities.com', '1992-12-11');
insert into employee (id, name, email, birthday) values (59, 'Giana', 'gattwater1m@macromedia.com', '1993-10-30');
insert into employee (id, name, email, birthday) values (60, 'Tanny', 'teastup1n@google.ca', null);
insert into employee (id, name, email, birthday) values (61, 'Eadmund', 'emcelwee1o@cargocollective.com', null);
insert into employee (id, name, email, birthday) values (62, 'Dallis', 'ddingsdale1p@google.com.au', '1993-03-21');
insert into employee (id, name, email, birthday) values (63, 'Johnathan', 'jfossey1q@usgs.gov', '1992-07-04');
insert into employee (id, name, email, birthday) values (64, 'Carita', 'cseery1r@usatoday.com', '1994-11-20');
insert into employee (id, name, email, birthday) values (65, 'Belia', 'bsnarie1s@google.com', '1990-10-12');
insert into employee (id, name, email, birthday) values (66, 'Alberta', 'alewington1t@instagram.com', null);
insert into employee (id, name, email, birthday) values (67, 'Kerk', 'kmagnar1u@diigo.com', '1992-12-09');
insert into employee (id, name, email, birthday) values (68, 'Almire', 'amarkos1v@patch.com', '1998-09-12');
insert into employee (id, name, email, birthday) values (69, 'Kellina', 'kconrath1w@about.me', '1993-10-17');
insert into employee (id, name, email, birthday) values (70, 'Alfreda', 'ascotson1x@rakuten.co.jp', '1997-06-27');
insert into employee (id, name, email, birthday) values (71, 'Welbie', 'wrozycki1y@nps.gov', '2000-01-04');
insert into employee (id, name, email, birthday) values (72, 'Derry', 'dmcclintock1z@epa.gov', '2000-01-18');
insert into employee (id, name, email, birthday) values (73, 'Malissa', 'mquinney20@army.mil', '1997-04-12');
insert into employee (id, name, email, birthday) values (74, 'Taddeo', 'tpillinger21@java.com', '1990-05-11');
insert into employee (id, name, email, birthday) values (75, 'Gabe', 'gjolland22@hatena.ne.jp', '1994-09-11');
insert into employee (id, name, email, birthday) values (76, 'Arabella', 'abrogioni23@theatlantic.com', '1991-06-09');
insert into employee (id, name, email, birthday) values (77, 'Julie', 'jcurle24@whitehouse.gov', '1998-02-22');
insert into employee (id, name, email, birthday) values (78, 'Nissy', 'nswanston25@wired.com', '1999-08-07');
insert into employee (id, name, email, birthday) values (79, 'Kerry', 'kfrost26@github.com', '1997-12-22');
insert into employee (id, name, email, birthday) values (80, 'Matteo', 'mrenault27@msn.com', '1995-02-26');
insert into employee (id, name, email, birthday) values (81, 'Callie', 'clawille28@walmart.com', '1995-07-27');
insert into employee (id, name, email, birthday) values (82, 'Gale', 'gstinson29@com.com', null);
insert into employee (id, name, email, birthday) values (83, 'Almeta', 'avasichev2a@icq.com', null);
insert into employee (id, name, email, birthday) values (84, 'Carrol', 'cbeningfield2b@flavors.me', null);
insert into employee (id, name, email, birthday) values (85, 'Shea', 'somalley2c@businessinsider.com', '1997-11-05');
insert into employee (id, name, email, birthday) values (86, 'Alica', 'aclissell2d@springer.com', '1998-09-06');
insert into employee (id, name, email, birthday) values (87, 'Tamera', 'tsmallacombe2e@furl.net', null);
insert into employee (id, name, email, birthday) values (88, 'Warde', 'wterron2f@cdc.gov', null);
insert into employee (id, name, email, birthday) values (89, 'Kennie', 'kchrisp2g@prnewswire.com', '1997-02-21');
insert into employee (id, name, email, birthday) values (90, 'Chevalier', 'cpizzie2h@vimeo.com', '1999-04-16');
insert into employee (id, name, email, birthday) values (91, 'Glenda', 'gorry2i@friendfeed.com', '1997-08-17');
insert into employee (id, name, email, birthday) values (92, 'Agnola', 'achiene2j@admin.ch', '1990-03-23');
insert into employee (id, name, email, birthday) values (93, 'Thedric', 'tedlington2k@earthlink.net', null);
insert into employee (id, name, email, birthday) values (94, 'Rinaldo', 'rguyver2l@baidu.com', '1999-08-24');
insert into employee (id, name, email, birthday) values (95, 'Nariko', 'nattyeo2m@studiopress.com', '1995-01-26');
insert into employee (id, name, email, birthday) values (96, 'Stephine', 'shaycock2n@livejournal.com', null);
insert into employee (id, name, email, birthday) values (97, 'Wilhelm', 'wwoolager2o@booking.com', '1990-05-17');
insert into employee (id, name, email, birthday) values (98, 'Iver', 'ibarroux2p@nba.com', '1995-12-19');
insert into employee (id, name, email, birthday) values (99, 'Zak', 'zmorcomb2q@soup.io', null);
insert into employee (id, name, email, birthday) values (100, 'Hall', 'hcromleholme2r@harvard.edu', null);


-- 3. Sütunların her birine göre diğer sütunları güncelleyecek 2 adet UPDATE işlemi yapalım.


UPDATE employee
SET name = 'John',
	email = 'doe@gmail.com'
WHERE id = 10;

UPDATE employee
	SET birthday = null
WHERE id IN(9, 11);


-- 5 Sütunların her birine göre ilgili satırı silecek 1 adet DELETE işlemi yapalım.

DELETE FROM employee
WHERE id < 10;