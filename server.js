const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const avatarLink = "https://api.dicebear.com/5.x/lorelei/svg?seed="

// Création du serveur Express
const app = express();



// Configuration du serveur
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// Connexion à la base de donnée SQlite
const db_name = path.join(__dirname, "data", "data.db");
const db = new sqlite3.Database(db_name, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connexion réussie à la base de données 'data.db'");
});

const sql_create = `CREATE TABLE IF NOT EXISTS Departement (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label VARCHAR(100) UNIQUE NOT NULL
);`;

db.run(sql_create, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Création réussie de la table 'Departement'");

    // Alimentation de la table
    const sql_insert = `insert into Departement (label)
                    values
                        ('Food Chemist'),
                        ('Systems Administrator IV'),
                        ('Web Developer III'),
                        ('Account Representative I'),
                        ('Librarian'),
                        ('Assistant Manager'),
                        ('Financial Analyst'),
                        ('Occupational Therapist'),
                        ('Associate Professor'),
                        ('Administrative Officer'),
                        ('Geologist IV'),
                        ('Staff Scientist'),
                        ('Executive Secretary'),
                        ('Teacher'),
                        ('Payment Adjustment Coordinator'),
                        ('Sales Associate'),
                        ('Engineer I'),
                        ('Geologist III'),
                        ('Account Executive'),
                        ('Developer III'),
                        ('Health Coach II'),
                        ('Registered Nurse'),
                        ('Physical Therapy Assistant'),
                        ('Help Desk Technician'),
                        ('Mechanical Systems Engineer')`

    // db.run(sql_insert, err => {
    //     if (err) {
    //         return console.error(err.message);
    //     }
    //     console.log("Alimentation réussie de la table 'Departement'");
    // });
});



const sql_create2 = `CREATE TABLE IF NOT EXISTS Poste (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    label VARCHAR(100) NOT NULL,
    idDepartement INTEGER NOT NULL,
    FOREIGN KEY (idDepartement) REFERENCES Departement(id)
);`;

db.run(sql_create2, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Création réussie de la table 'Poste'");


    // Alimentation de la table
    const sql_insert = `insert into
                            Poste (label, idDepartement)
                        values
                            ('Data Coordiator', 21),
                            ('Assistant Manager', 5),
                            ('Structural Engineer', 1),
                            ('Account Representative IV', 25),
                            ('VP Accounting', 12),
                            ('Environmental Tech', 13),
                            ('Computer Systems Analyst III', 2),
                            ('Help Desk Technician', 6),
                            ('Editor', 9),
                            ('Budget/Accounting Analyst II', 2),
                            ('VP Product Management', 2),
                            ('Community Outreach Specialist', 8),
                            ('Help Desk Operator', 4),
                            ('Nurse', 4),
                            ('Structural Analysis Engineer', 6),
                            ('Nurse Practicioner', 11),
                            ('Assistant Media Planner', 9),
                            ('Business Systems Development Analyst', 8),
                            ('VP Quality Control', 19),
                            ('Computer Systems Analyst II', 7),
                            ('Automation Specialist IV', 5),
                            ('Research Nurse', 5),
                            ('Software Consultant', 9),
                            ('Office Assistant III', 3),
                            ('Marketing Manager', 7),
                            ('Analyst Programmer', 18),
                            ('Professor', 19),
                            ('Quality Engineer', 6),
                            ('Geologist III', 5),
                            ('Senior Editor', 4),
                            ('Paralegal', 18),
                            ('Research Associate', 6),
                            ('Account Executive', 2),
                            ('Product Engineer', 13),
                            ('Financial Analyst', 3),
                            ('Web Designer IV', 13),
                            ('Associate Professor', 3),
                            ('Occupational Therapist', 6),
                            ('Staff Accountant II', 9),
                            ('Electrical Engineer', 8),
                            ('Programmer Analyst III', 9),
                            ('Safety Technician IV', 10),
                            ('Chemical Engineer', 9),
                            ('Technical Writer', 9),
                            ('Internal Auditor', 16),
                            ('Mechanical Systems Engineer', 3),
                            ('Programmer III', 23),
                            ('Senior Financial Analyst', 11),
                            ('Assistant Professor', 9),
                            ('Account Coordinator', 9),
                            ('Biostatistician I', 6),
                            ('Sales Representative', 1),
                            ('GIS Technical Architect', 7),
                            ('Dental Hygienist', 11),
                            ('Food Chemist', 22),
                            ('Financial Advisor', 5),
                            ('Analog Circuit Design manager', 3),
                            ('Quality Control Specialist', 9),
                            ('Administrative Officer', 14),
                            ('Geological Engineer', 9),
                            ('Director of Sales', 6),
                            ('General Manager', 8),
                            ('Speech Pathologist', 7),
                            ('Web Designer II', 5),
                            ('Sales Associate', 2),
                            ('Systems Administrator I', 9),
                            ('Senior Sales Associate', 9),
                            ('Information Systems Manager', 3),
                            ('Marketing Assistant', 4),
                            ('Media Manager III', 4),
                            ('Programmer Analyst IV', 3),
                            ('Junior Executive', 4),
                            ('Developer II', 3),
                            ('Senior Developer', 6)`;

    // db.run(sql_insert, err => {
    //     if (err) {
    //         return console.error(err.message);
    //     }
    //     console.log("Alimentation réussie de la table 'Poste'");
    // });
});

// Création de la table Employes 
const sql_create3 = `CREATE TABLE IF NOT EXISTS Employes (
    idEmploye INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    Nom VARCHAR(25) NOT NULL,
    Prénom VARCHAR(25) NOT NULL,
    Adresse VARCHAR(25) NOT NULL,
    NumeroSecuSociale VARCHAR(10) NOT NULL,
    Diplome VARCHAR(100) NOT NULL,
    idPoste INTEGER NOT NULL,
    FOREIGN KEY (idPoste) REFERENCES Postes(idPoste)
);`;

db.run(sql_create3, err => {
    if (err) {
        return console.error(err.message);
    }
    console.log("Création réussie de la table 'Employes'");


    // Alimentation de la table
    const sql_insert = `
    insert into employes (Nom, Prénom, Adresse, NumeroSecuSociale, Diplome, idPoste) values ('Larmet', 'Theresa', '30705 Debra Avenue', '9 97 18 861 36 80', 'Phasellus in felis.', 61),
    ('Blague', 'Eben', '5885 Springs Park', '0 80 62 728 36 02', 'Nunc purus.', 65),
    ('Montfort', 'Munroe', '09077 Dottie Drive', '2 64 56 763 05 58', 'Nulla mollis molestie lorem.', 79),
    ('Sloam', 'Guthrey', '51289 Waxwing Trail', '2 18 51 854 01 05', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 98),
    ('Filppetti', 'Filippo', '1 Kensington Drive', '0 95 87 949 68 67', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.', 5),
    ('Klammt', 'Bernarr', '06285 Glacier Hill Park', '8 57 14 650 38 60', 'Nulla justo.', 16),
    ('Gowanlock', 'Beryl', '05 Dottie Place', '6 79 32 797 93 09', 'Etiam justo.', 94),
    ('Richarz', 'Dulsea', '601 Forest Dale Court', '3 91 96 532 62 52', 'Nulla nisl.', 42),
    ('Jiggens', 'Maryl', '40872 Lakewood Gardens Terrace', '1 79 33 235 16 37', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 55),
    ('Hazlewood', 'Yolande', '44 Upham Point', '2 04 73 287 53 08', 'Proin interdum mauris non ligula pellentesque ultrices.', 14),
    ('L''Hommeau', 'Ravid', '9 Waxwing Avenue', '5 16 07 928 38 92', 'Mauris sit amet eros.', 46),
    ('Redmain', 'Beniamino', '3 Center Pass', '1 42 58 850 96 57', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 12),
    ('Keitch', 'Craig', '98913 Union Road', '7 50 01 202 34 72', 'Proin eu mi.', 34),
    ('Sallowaye', 'Tansy', '7466 Oakridge Trail', '9 06 45 674 29 09', 'Phasellus id sapien in sapien iaculis congue.', 68),
    ('Syer', 'Willa', '8688 Meadow Valley Way', '4 39 76 217 21 79', 'Maecenas rhoncus aliquam lacus.', 90),
    ('Godart', 'Conan', '59 Melrose Parkway', '8 92 17 030 55 45', 'Aenean lectus.', 33),
    ('McIlhatton', 'Leena', '6 Macpherson Point', '3 43 71 004 28 52', 'Curabitur convallis.', 97),
    ('Doding', 'Prentice', '439 Acker Way', '9 18 72 725 15 96', 'Donec dapibus.', 35),
    ('Laurencot', 'Eunice', '43 Cambridge Junction', '6 12 08 226 95 67', 'Quisque id justo sit amet sapien dignissim vestibulum.', 3),
    ('Tolossi', 'Dara', '84064 Thierer Way', '9 11 05 631 61 95', 'Nullam sit amet turpis elementum ligula vehicula consequat.', 9),
    ('Kerr', 'Amandi', '901 Lillian Street', '2 86 21 115 35 41', 'Nunc nisl.', 1),
    ('Skewis', 'Pat', '186 Bultman Pass', '7 54 89 038 18 38', 'Cras pellentesque volutpat dui.', 99),
    ('Cowins', 'Fredrick', '251 Towne Park', '9 13 82 514 00 17', 'Curabitur gravida nisi at nibh.', 35),
    ('Wooding', 'Noel', '109 Karstens Way', '3 33 63 895 80 45', 'Fusce consequat.', 81),
    ('Seilmann', 'Ardene', '67 Sheridan Way', '0 77 80 582 12 21', 'Pellentesque eget nunc.', 66),
    ('Carncross', 'Sissie', '093 Merry Way', '1 13 02 784 78 94', 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.', 84),
    ('Lawrinson', 'Ginnifer', '613 David Parkway', '8 46 13 368 63 50', 'Nam tristique tortor eu pede.', 80),
    ('Porcas', 'Orella', '54465 Montana Way', '7 00 95 693 06 60', 'Morbi vel lectus in quam fringilla rhoncus.', 14),
    ('Boyack', 'Madeleine', '33 Pankratz Park', '4 21 73 624 65 51', 'Duis aliquam convallis nunc.', 75),
    ('Grestye', 'Averyl', '6714 Village Avenue', '0 78 45 179 61 39', 'Etiam justo.', 87),
    ('Vearncomb', 'Henrik', '93 Bunting Junction', '3 39 88 797 01 08', 'Pellentesque at nulla.', 5),
    ('Rough', 'Lotta', '69536 Grayhawk Way', '9 96 04 838 43 68', 'Praesent lectus.', 36),
    ('Poplee', 'Trstram', '56 Mcguire Terrace', '5 14 92 542 75 59', 'Praesent lectus.', 57),
    ('Crepel', 'Saree', '17 Twin Pines Way', '9 10 76 656 06 00', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.', 54),
    ('Loughlin', 'Beryl', '6 Fordem Lane', '3 04 50 541 28 51', 'Morbi ut odio.', 21),
    ('Wheelan', 'Janessa', '2 Chinook Terrace', '4 27 78 587 76 41', 'Aliquam erat volutpat.', 85),
    ('Dronsfield', 'Anselm', '36422 Canary Hill', '5 78 03 483 53 23', 'Nulla ut erat id mauris vulputate elementum.', 65),
    ('Eisak', 'Ollie', '34179 Jay Road', '1 47 39 987 24 32', 'Aliquam quis turpis eget elit sodales scelerisque.', 41),
    ('Espinay', 'Jamie', '05285 Mariners Cove Hill', '7 20 92 959 68 34', 'Donec vitae nisi.', 76),
    ('Souness', 'Frasquito', '84 Northview Circle', '0 18 98 179 86 54', 'Nullam porttitor lacus at turpis.', 9),
    ('Beric', 'Gael', '63769 Dixon Junction', '7 47 09 464 43 17', 'Suspendisse accumsan tortor quis turpis.', 59),
    ('Darnell', 'Ceciley', '20 Merry Lane', '8 55 93 522 98 32', 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.', 33),
    ('Skelding', 'Glynnis', '87734 Burrows Plaza', '6 95 03 424 13 76', 'Mauris lacinia sapien quis libero.', 68),
    ('McPhillips', 'Raphael', '33842 Prairieview Pass', '8 28 71 882 17 36', 'Ut at dolor quis odio consequat varius.', 87),
    ('Kinkaid', 'Elana', '37 Butterfield Terrace', '4 43 55 656 62 30', 'Praesent lectus.', 72),
    ('Valti', 'Grover', '694 Chinook Pass', '0 28 48 441 61 16', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.', 46),
    ('Grabiec', 'Elden', '89 Riverside Parkway', '0 60 08 704 70 55', 'Cras in purus eu magna vulputate luctus.', 35),
    ('Trowbridge', 'Krystyna', '58 Maple Wood Alley', '6 50 19 693 04 75', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.', 46),
    ('Reidie', 'Eimile', '0 Pierstorff Road', '8 37 16 086 69 76', 'Nulla tellus.', 73),
    ('Recke', 'Ashely', '67283 Forest Run Trail', '3 10 74 209 58 14', 'Suspendisse potenti.', 74),
    ('Brunelli', 'Sephira', '4 Hansons Alley', '1 51 37 096 33 08', 'Sed vel enim sit amet nunc viverra dapibus.', 81),
    ('Brooker', 'Matti', '3320 Fordem Road', '7 24 51 941 23 23', 'Curabitur at ipsum ac tellus semper interdum.', 94),
    ('Majury', 'Minta', '0914 Ridge Oak Lane', '0 54 89 854 17 73', 'In congue.', 12),
    ('Jakubovski', 'Janeen', '69847 Kingsford Alley', '2 77 56 749 14 77', 'Morbi non quam nec dui luctus rutrum.', 46),
    ('Peasnone', 'Haslett', '08484 Mendota Road', '1 59 72 809 39 32', 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.', 22),
    ('Buxcy', 'Teodora', '03467 Petterle Point', '6 38 76 690 94 44', 'Suspendisse potenti.', 100),
    ('Andreucci', 'Freddie', '8420 Emmet Circle', '6 81 96 952 10 88', 'Integer tincidunt ante vel ipsum.', 80),
    ('Jouaneton', 'Tannie', '56689 Leroy Way', '2 90 35 896 99 34', 'Nulla suscipit ligula in lacus.', 23),
    ('Howen', 'Marthe', '89 Huxley Street', '8 92 41 033 17 98', 'Etiam faucibus cursus urna.', 85),
    ('Simms', 'Cordelia', '5517 Farragut Alley', '3 63 70 390 78 28', 'In hac habitasse platea dictumst.', 21),
    ('Tomkys', 'Eyde', '9 Carioca Junction', '2 84 66 447 26 31', 'Vivamus in felis eu sapien cursus vestibulum.', 63),
    ('Upton', 'Arleen', '50059 Division Terrace', '2 39 13 673 91 00', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 62),
    ('Grimm', 'Catlaina', '2504 Oak Valley Drive', '8 85 07 338 20 78', 'Mauris lacinia sapien quis libero.', 2),
    ('Housby', 'Sara', '7215 Grasskamp Junction', '5 24 06 604 95 71', 'Phasellus in felis.', 58),
    ('Fenny', 'Seamus', '23 Ridgeway Center', '8 61 50 160 94 87', 'Etiam vel augue.', 31),
    ('Schwandermann', 'Sharon', '4535 Banding Drive', '9 75 08 355 14 09', 'Nulla nisl.', 12),
    ('Mulvaney', 'Tomkin', '35065 Old Shore Hill', '1 47 27 940 90 38', 'Fusce posuere felis sed lacus.', 43),
    ('Channer', 'Brander', '02214 Fairfield Road', '2 90 65 730 78 48', 'Suspendisse ornare consequat lectus.', 55),
    ('Rains', 'Agustin', '5 Doe Crossing Way', '9 49 55 012 01 57', 'Suspendisse potenti.', 34),
    ('Gotfrey', 'Evelyn', '321 Riverside Plaza', '0 52 04 230 81 82', 'Nulla facilisi.', 29),
    ('Deinhardt', 'Cyndie', '193 Hagan Center', '2 99 25 655 97 75', 'Curabitur convallis.', 6),
    ('Farahar', 'Myranda', '80348 Barnett Alley', '9 60 79 892 40 73', 'Aenean fermentum.', 17),
    ('Brooksby', 'Violetta', '3 Eastlawn Avenue', '2 14 99 987 10 37', 'Donec dapibus.', 87),
    ('Troppmann', 'Valene', '97362 Corben Plaza', '4 08 21 708 96 14', 'Praesent blandit.', 66),
    ('Oehme', 'Otes', '12 Harbort Drive', '9 22 30 038 37 31', 'Suspendisse accumsan tortor quis turpis.', 34),
    ('Traynor', 'Daile', '7 Brentwood Center', '8 51 55 054 48 08', 'Nam tristique tortor eu pede.', 70),
    ('Gerrelts', 'Staffard', '266 Westridge Trail', '6 65 66 272 62 48', 'Donec semper sapien a libero.', 60),
    ('Muller', 'Kelby', '826 Butterfield Way', '7 99 23 921 49 69', 'Cras pellentesque volutpat dui.', 83),
    ('Baraclough', 'Vanni', '605 Memorial Lane', '4 70 19 654 15 49', 'Mauris lacinia sapien quis libero.', 85),
    ('Telezhkin', 'Monika', '80656 West Avenue', '0 51 45 549 06 00', 'In sagittis dui vel nisl.', 79),
    ('Volk', 'Gizela', '660 Beilfuss Center', '9 67 45 220 84 45', 'Curabitur gravida nisi at nibh.', 89),
    ('Grenshiels', 'Feliks', '9 Autumn Leaf Drive', '1 23 83 652 41 08', 'Vivamus in felis eu sapien cursus vestibulum.', 64),
    ('Telford', 'Dyan', '655 Rieder Junction', '5 14 22 850 79 78', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla.', 89),
    ('Cheasman', 'Land', '09 Londonderry Center', '1 11 75 778 30 67', 'In quis justo.', 33),
    ('Jamieson', 'Margie', '223 Kinsman Circle', '5 58 27 992 31 22', 'Pellentesque eget nunc.', 69),
    ('Storer', 'Dilan', '6 Granby Crossing', '5 81 09 921 81 87', 'Nulla facilisi.', 19),
    ('Babbs', 'Sibyl', '02 Kingsford Crossing', '6 21 67 125 68 97', 'Duis ac nibh.', 55),
    ('Boanas', 'Kendall', '39395 School Point', '9 80 12 213 90 53', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.', 82),
    ('Tomblings', 'Thalia', '24 Oak Hill', '4 78 88 193 69 04', 'Morbi vel lectus in quam fringilla rhoncus.', 90),
    ('Jinks', 'Kaitlin', '2606 Killdeer Lane', '6 50 00 402 36 67', 'Integer ac neque.', 83),
    ('Nobes', 'Dominic', '6 Moose Road', '9 15 66 300 01 92', 'Morbi non lectus.', 98),
    ('Scandwright', 'Murial', '844 Karstens Junction', '4 26 92 492 40 04', 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.', 27),
    ('Campo', 'Siffre', '276 La Follette Drive', '1 37 09 603 99 46', 'Morbi non lectus.', 77),
    ('Targett', 'Natale', '3215 Butterfield Pass', '1 02 68 857 65 31', 'Donec posuere metus vitae ipsum.', 9),
    ('Leggon', 'Rachele', '0 Pleasure Park', '8 11 70 195 05 82', 'Nunc nisl.', 9),
    ('MacAulay', 'Reginald', '3 Anzinger Terrace', '1 67 04 162 81 43', 'In hac habitasse platea dictumst.', 100),
    ('Annable', 'Lorilee', '724 Eastlawn Place', '1 36 75 468 84 27', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae, Mauris viverra diam vitae quam.', 2),
    ('Primarolo', 'Kennan', '6 Forest Run Trail', '8 81 00 267 94 58', 'Maecenas pulvinar lobortis est.', 64),
    ('Kinmond', 'Carmita', '3 Grover Junction', '3 55 20 291 80 58', 'Cras pellentesque volutpat dui.', 28),
    ('Crimmins', 'Cherida', '02 Granby Junction', '1 94 74 202 65 41', 'Duis ac nibh.', 56)`;

    // db.run(sql_insert, err => {
    //     if (err) {
    //         return console.error(err.message);
    //     }
    //     console.log("Alimentation réussie de la table 'Employes'");
    // });
});



// Démarrage du serveur
app.listen(3000, () => {
    console.log("Serveur démarré (http://localhost:3000/) !");
});

// GET /
app.get("/", (req, res) => {
    res.render("index");
});

// GET /about
app.get("/about", (req, res) => {
    res.render("about");
});

// GET /data
app.get("/data", (req, res) => {
    const test = {
        titre: "Test",
        items: ["un", "deux", "trois"]
    };
    res.render("data", { model: test });
});

// GET /employes
app.get("/employes", (req, res) => {
    const sql = `SELECT COUNT(*) AS Total FROM employes`;
    db.get(sql, [], (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        const sql = `SELECT '${avatarLink}' || Prénom AS Avatar, Nom, Prénom, Adresse, NumeroSecuSociale, Diplome, poste.labposte as Poste, poste.labdepartement as Departement 
        FROM Employes INNER JOIN (SELECT poste.id AS idPoste, poste.label AS labposte, departement.label AS labdepartement FROM Poste INNER JOIN Departement ON Poste.idDepartement = Departement.id) AS poste ON Employes.idPoste = poste.idPoste`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                return console.error(err.message);
            }
            res.render("employes", { model: rows, all: row.Total });
        });
    });
});


// GET /create
app.get("/create", (req, res) => {
    const sql = `SELECT Poste.id As idPoste, Poste.label AS labposte, Departement.label AS labdep FROM Poste INNER JOIN Departement ON Poste.idDepartement = Departement.id`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("create", { model: {}, postes: rows });
    })
});

// POST /create
app.post("/create", (req, res) => {
    const sql = "INSERT INTO employes (Nom, Prénom, Adresse, NumeroSecuSociale, Diplome, idPoste) VALUES (?,?,?,?,?,?)";
    const employe = [req.body.Nom, req.body.Prenom, req.body.Adresse, req.body.NumeroSecuSociale, req.body.Diplome, req.body.Poste];
    db.run(sql, employe, err => {
        if (err) {
            return console.error(err.message);
        }
        res.redirect("/employes");
    });
});

// GET /edit/5
app.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM Employes WHERE idEmploye = ?";
    db.get(sql, id, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
        res.render("edit", { model: row });
    });
});

// POST /edit/5
app.post("/edit/:id", (req, res) => {
    const id = req.params.id;
    const employes = [req.body.Nom, req.body.Prenom, req.body.Adresse, req.body.NumeroSecuSociale, req.body.Diplome, id];
    const sql = "UPDATE Employes SET Nom = ?, Prénom = ?, Adresse= ?,  NumeroSecuSociale = ?, Diplome = ? WHERE (idEmploye = ?)";
    db.run(sql, employes, err => {
        if (err) {
            return console.error(err.message);
        }
        res.redirect("/employes");
    });
});

// GET /delete/5
app.get("/delete/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM Employes WHERE idEmploye = ?";
    db.get(sql, id, (err, row) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect("/employes");
});
