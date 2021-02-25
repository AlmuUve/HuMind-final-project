from werkzeug.security import generate_password_hash

data = {
    "User": [
        {   
            "id": 1,
            "email": "jessakirke@gmail.com",
            "_password": generate_password_hash("jes6758_k765"),
            "description": "HR Professional with 8+ years of recruitment experience in Human Resources; Psychologist with solid ability to conduct different types of interviews (structured, competency based, stress etc). and Ability to design and organise assessment center (in tray activities, work samples, psychometric and IQ/EQ tests etc)",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": True, 
        },

       {   
            "id": 2,
            "email": "frankspacey@yahoo.com",
            "_password": generate_password_hash("1234567"),
            "description": "I am a highly dedicated and resourceful professional who possesses good interpersonal, analytical and perceptive skills. My goal is to continue gaining experience in different areas of intervention and take on new challenges in order to advance both professionally and personally.",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": True, 
        },

        {   
            "id": 3,
            "email": "crisj@gmail.com",
            "password": generate_password_hash("CoolCris96"),
            "description": "I have developed myself deeply in soft HR skills related to Training and Talent Development. As a Psychologist in Labor and Pedagogy professional, I am looking to work directly with people, helping to empower, searching tools to motivate, identifying strengths, saving inequalities, and inspiring the potential of people and teams to achieve more together.",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": True, 
        },

        {   
            "id": 4,
            "email": "jigsaw@msn.com",
            "password": generate_password_hash("65798876980065"),
            "description": "Working in the psychology field has been my lifelong calling. A desire to help people is what I have always wanted and what gives me total gratification. Always with a smile. Looking for the positive side of things and learning of everything that life brings us.",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": True, 
        },

        {   
            "id": 5,
            "email": "juan@yahoo.com",
            "password": generate_password_hash("LoLJ38J"),
            "description": "Psychologist and Executive & Personal Coach",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": True, 
        },

        {   
            "id": 6,
            "email": "Jimena4Geeks@4GeeksAcademy.com",
            "password": generate_password_hash("g56867uty6rewe"),
            "description": "4Geeks Academy’s motto is Breathe Coding. Just the will to become a developer isn’t enough. We are looking for people with the pure desire to give coding a chance in their lives. It is an important professional decision and it cannot be based solely on the availability of jobs or the higher salaries. Our students need to become part of the coding culture. ",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": False, 
        },

        {   
            "id": 7,
            "email": "ravenloop@ravenloop.io",
            "password": generate_password_hash("sjhbwy_r$DTG_HS567"),
            "description": "In a digital and interconnected world, with increasingly sophisticated, personalized and numerous attacks, we provide critical information and in-depth knowledge about threats, essential to extract the full potential of your cybersecurity solutions and guarantee the resilience of your organization.",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": False, 
        },

        {   
            "id": 8,
            "email": "talenthackers@talenthackers.com",
            "password": generate_password_hash("re46DFDG_ycgdvf"),
            "description": "Talent Hackers is the first nodal distributed network platform for the search and recruitment of technology and digital professionals based on paid referrals. Through the dynamic distribution of offers, performed by our algorithm, these reach key profiles, activating passive talent, the one that is not actively looking for a job.",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": False, 
        },

        {   
            "id": 9,
            "email": "modis@modis.com",
            "password": generate_password_hash("56843_$F888"),
            "description": "Modis delivers cross-industry IT and digital engineering expertise to accelerate innovation and digital transformation. By combining a unique service offering of Tech Consulting, Tech Talent Services and Tech Academy solutions Modis enables businesses to progress, scale and perform.",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": False, 
        },

        {   
            "id": 10,
            "email": "amazonians@amazon.com",
            "password": generate_password_hash("xnuej_87t54euh"),
            "description": "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. ",
            "is_active": True,
            "facebook": "",
            "instagram": "",
            "twitter": "",
            "linkedIn": "",
            "youTube": "",
            "is_psychologist": False, 
        },
    ],


    "User_Psychologist": [
        {
            "id": 1,
            "name": "Jessa",
            "lastname": "Kirke",
            "identity_number": "08752672P",
            "association_number": "A34363266",
            "speciality": "Clinical Neuropsychology",
            "user_id": 1,
        },

        {
            "id": 2,
            "name": "Frank",
            "lastname": "Spacey",
            "identity_number": "68934578P",
            "association_number": "P08634517",
            "speciality": "Clinical Child and Adolescent Psychology",
            "user_id": 2,
        },

        {
            "id": 3,
            "name": "Cristina",
            "lastname": "Martínez",
            "identity_number": "47584686P",
            "association_number": "C34027381",
            "speciality": "Psychoanalysis",
            "user_id": 3
        },

        {
            "id": 4,
            "name": "Juno",
            "lastname": "Helder",
            "identity_number": "95568493P",
            "association_number": "A08863266",
            "speciality": "Psychoanalysis",
            "user_id": 4,
        },

        {
            "id": 5,
            "name": "Juan",
            "lastname": "Gonzalez",
            "identity_number": "75593743P",
            "association_number": "P67875784",
            "speciality": "Clinical Health Psychology",
            "user_id": 5,
        }
    ]
}