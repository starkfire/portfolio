<template>
	<div class="portfolio">
        <div class="head">
            <div id="basic" data-aos="fade-left" data-aos-duration="1000">
                <img id="profile-img" src="../assets/img/dev.jpg" />
                <div id="info" data-aos="fade-left" data-aos-duration="1500">
                    <p id="name">Pocholo L. Pantoja</p>
                    <p id="title">Software Developer & Researcher</p>
                </div>
            </div>
            <div id="stack" data-aos="fade-up" data-aos-duration="1500">
                <p id="heading">TECH STACK</p>
                <a-row id="category">
                    <a-col :span="8">
                        <p>LANGUAGES</p>
                    </a-col>
                    <a-col :span="8">
                        <p>FRAMEWORKS / LIBRARIES</p>
                    </a-col>
                    <a-col :span="8">
                        <p>TECHNOLOGIES</p>
                    </a-col>
                </a-row>
                <a-row id="tech">
                    <a-col :span="8">
                        <p>JavaScript</p>
                        <p>Python</p>
                        <p>PHP</p>
                        <p>Go</p>
                        <p>Dart</p>
                        <p>C#</p>
                        <p>C / C++</p>
                        <p>Java</p>
                        <p>HTML & CSS</p>
                    </a-col>
                    <a-col :span="8">
                        <p>Vue</p>
                        <p>React</p>
                        <p>Express</p>
                        <p>Hapi</p>
                        <p>Nest</p>
                        <p>Fastapi</p>
                        <p>Flask</p>
                        <p>Django</p>
                        <p>React Native</p>
                        <p>Flutter</p>
                        <p>Ionic</p>
                        <p>NativeScript</p>
                        <p>PyTorch</p>
                        <p>TensorFlow</p>
                        <p>OpenCV</p>
                    </a-col>
                    <a-col :span="8">
                        <p>GraphQL</p>
                        <p>MongoDB</p>
                        <p>FaunaDB</p>
                        <p>Redis</p>
                        <p>PostgreSQL / MySQL / SQLite</p>
                        <p>Neo4j</p>
                        <p>Figma (Prototyping)</p>
                        <p>Git (SCM)</p>
                        <p>Unity (Game Dev)</p>
                        <p>Blender (3D Modelling)</p>
                    </a-col>
                </a-row>
            </div>
        </div>
        <div class="background">
            <p id="title" data-aos="fade-right" data-aos-duration="1000">BACKGROUND</p>
            <a-row id="section" :gutter="36" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">EXPERIENCE</p>
                    <div id="item">
                        <p id="head">Bedlyft</p>
                        <p id="body">Co-Founder, Developer (2020 - Present)</p>
                        <p id="subtitle">Currently working on the core idea, business plan, and the technical aspects of the product/service.</p>
                    </div>
                    <div id="item">
                        <p id="head">Freelancing</p>
                        <p id="body">Software Developer (2016 - Present)</p>
                        <p id="subtitle">Worked on several projects focusing on Internet-of-Things, robotics, web development, data processing, and scripting.</p>
                    </div>
                    <div id="item">
                        <p id="head">UltrAssist</p>
                        <p id="body">Co-Founder, Chief Hacker (2019 - 2020)</p>
                        <p id="subtitle">A tech startup which focused on smart driving solutions. Formerly in charge of the software development process and coordination with stakeholders.</p>
                    </div>
                    <div id="item">
                        <p id="head">Commission on Population and Development</p>
                        <p id="body">Research Collaborator (2019)</p>
                        <p id="subtitle">Collaborated with a research focusing on mapping and visualizing data related to teenage pregnancy cases in the country.</p>
                    </div>
                    <div id="item">
                        <p id="head">Arlekin Technologies</p>
                        <p id="body">Intern - Bioinformatics (2018)</p>
                        <p id="subtitle">Learned about genetic distance models, phylogenetic tree building methods, and tools for gene sequencing.</p>
                    </div>
                    <div id="item">
                        <p id="head">OpeniT Philippines</p>
                        <p id="body">Intern - Software Quality Assurance (2018)</p>
                        <p id="subtitle">Developed a PDF Crawler for detecting documentation errors in OpeniT's products.</p>
                    </div>
                </a-col>
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">EDUCATION</p>
                    <div id="item">
                        <p id="head">Map&#250;a University</p>
                        <p id="body">2018 - 2019</p>
                    </div>
                    <div id="item">
                        <p id="head">Quezon Science High School</p>
                        <p id="body">2012 - 2016; 2016 - 2018 (STEM - SHS)</p>
                    </div>
                    <div id="item">
                        <p id="head">Catanauan Central School</p>
                        <p id="body">2008 - 2012</p>
                    </div>
                    <div id="item">
                        <p id="head">Malate Catholic School</p>
                        <p id="body">2007 - 2008</p>
                    </div>
                </a-col>
            </a-row>
            <a-row :gutter="36" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">ACHIEVEMENTS</p>
                    <div id="item">
                        <p id="head">15<sup>th</sup> Smart Wireless Engineering Education Program</p>
                        <p id="body">National Finalist</p>
                        <p id="body">Smart Communications</p>
                    </div>
                    <div id="item">
                        <p id="head">The Cardinal Excellence Awards 2019</p>
                        <p id="body">Map&#250;a University</p>
                    </div>
                    <div id="item">
                        <p id="head">NASA International Space Apps Challenge 2018</p>
                        <p id="body">Global Nominee</p>
                        <p id="body">NASA, Microsoft Philippines, Womensphere</p>
                    </div>
                    <div id="item">
                        <p id="head">StartupWeekend MNL Education 2019</p>
                        <p id="body">1<sup>st</sup> Runner-Up</p>
                        <p id="body">Techstars, Asian Institute of Management</p>
                    </div>
                    <div id="item">
                        <p id="head">StartupWeekend Philippines: COVID-19 Edition</p>
                        <p id="body">National Finalist</p>
                        <p id="body">Techstars</p>
                    </div>
                    <div id="item">
                        <p id="head">HackForGov: CERT-PH CTF Cyber Challenge</p>
                        <p id="body">National Finalist</p>
                        <p id="body">Dept. of Information and Communications Technology (DICT)</p>
                    </div>
                    <div id="item">
                        <p id="head">Excellence in Science Research</p>
                        <p id="body">Quezon Science High School</p>
                    </div>
                </a-col>
                <a-col :xs="24" :lg="12" id="topic">
                    <p id="category">AFFILIATIONS</p>
                    <div id="item">
                        <p id="head">VR Philippines</p>
                        <p id="body">Student Ambassador (2019 - 2020)</p>
                    </div>
                    <div id="item">
                        <p id="head">Junior Philippine Computer Society</p>
                        <p id="body">Member, Project Committee (2018 - 2019)</p>
                    </div>
                    <div id="item">
                        <p id="head">QSHS - Department of Science and Technology</p>
                        <p id="body">Department Head (2016 - 2018)</p>
                    </div>
                    <p id="category">CAPTURE THE FLAG</p>
                    <div id="item">
                        <p id="head">ISSS UTCTF 2019</p>
                        <p id="body">University of Texas at Austin - Information & Systems Security Society</p>
                    </div>
                    <div id="item">
                        <p id="head">MITRE STEM CTF Cyber Challenge 2019</p>
                        <p id="body">MITRE Cyber Academy</p>
                    </div>
                    <div id="item">
                        <p id="head">TAMU CTF 2019</p>
                        <p id="body">Texas A&M University</p>
                    </div>
                </a-col>
            </a-row>
        </div>
        <div class="projects">
            <p id="projects-title" data-aos="fade-right" data-aos-duration="1000">PROJECTS</p>
            <p id="projects-category" data-aos="fade-up" data-aos-duration="1500">Open Source (Public)</p>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="6">
                    <p id="title">Beep for Jeepneys</p>
                    <p id="description">
                        An affordable and lightweight Contactless Payment solution for Public Utility Jeepneys (PUJs).
                        It uses the Raspberry Pi, reloadable RFID cards, MFRC522 RFID Module, and Smartphone GPS for automatic travel cost computation using the Haversine Formula.
                    </p>
                    <a href="https://github.com/starkfire/MFRC522-RPi3"><a-icon type="github" /> Source Code</a>
                </a-col>
                <a-col :xs="24" :lg="6">
                    <p id="title">Mobile Tor Router</p>
                    <p id="description">
                        Developed for our 2017 research paper - A plug-and-play solution for setting up a WiFi hotspot which anonymizes traffic for all LAN clients with Tor. Clients also don't need to install Tor.
                    </p>
                    <a href="https://github.com/KEMOsabe456/Onion-Pi"><a-icon type="github" /> Source Code</a>
                </a-col>
                <a-col :xs="24" :lg="6">
                    <p id="title">Classicrack</p>
                    <p id="description">
                        A Python library for implementing and cracking classical ciphers (without a secret key).
                    </p>
                    <a href="https://github.com/starkfire/classicrack"><a-icon type="github" /> Source Code (wip)</a>
                </a-col>
                <a-col :xs="24" :lg="6">
                    <p id="title">FaunaDB ORM</p>
                    <p id="description">
                        A JavaScript ORM for interacting with FaunaDB without FQL (Fauna Query Language).
                    </p>
                    <a href="https://github.com/starkfire/faun"><a-icon type="github" /> Source Code (wip)</a>
                </a-col>
            </a-row>
            <p id="projects-category" data-aos="fade-up" data-aos-duration="1500">Closed Source (Private)</p>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Soteria</p>
                    <p id="description">
                        Featured in <a href="https://news.abs-cbn.com/focus/10/23/18/disaster-readiness-fisherfolk-apps-are-ph-entries-to-space-apps-challenge">ABS-CBN</a> 
                        and a Global Finalist during the <a href="https://2018.spaceappschallenge.org/locations/makati-city-bonifacio-global-city/">2018 NASA Space Apps Challenge</a>. 
                        Soteria is designed for wildfire detection, prediction, analysis, and mitigation. It relies on aggregated data from IoT sensors, open weather data, and satellite data from NASA-FIRMS.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">Passcan</p>
                    <p id="description">
                        An experimental travel pass alternative which also relies on QR Codes but with a different approach to tokenization.
                        Passcan is designed to be accessible, tamper-proof, and a privacy-preserving alternative to other existing tools which supplement contact tracing.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">FishNet</p>
                    <p id="description">
                        Combines a web application and a cluster of custom RPi modules for data gathering. FishNet is designed as a better alternative to fish
                        finding tools. It uses a custom-trained object detection model for fish classification, maps their location, and predicts their path and density in real-time.
                    </p>
                </a-col>
            </a-row>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Optix</p>
                    <p id="description">
                        Featured during the 2019 AngelHack in Makati City. Optix is a neural network for detecting and classifying eye cataracts (e.g. morgagnian, nuclear, etc.) from photographs.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">AI-Driven Traffic Light</p>
                    <p id="description">
                        A traffic light which relies on a convolutional neural network (YOLOv3) for guiding itself based on pedestrian count and traffic density.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">QRPay</p>
                    <p id="description">
                        A combination of a Node.js API and an Ionic app for quick drive-thru payments. It is a secure QR Code Payment Solution built on top of the PayMongo API.
                    </p>
                </a-col>
            </a-row>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">Watchbird</p>
                    <p id="description">
                        Featured during the 15<sup>th</sup> Smart SWEEP: Watchbird is an autonomous drone designed for disaster response and rescue operations.
                    </p>
                </a-col>
                <a-col :xs="24" :lg="8">
                    <p id="title">Fire Rescue Robot</p>
                    <p id="description">
                        Featured during the 2015 QSHS Science Fair - a self-guided fire rescue robot using only an RC car, an ultrasonic sensor, and a hacked, on-board motor driver.
                    </p>
                </a-col>
                
                <a-col :xs="24" :lg="8">
                    <p id="title">InceptionV3 MLaaS</p>
                    <p id="description">
                        A Flask API for self-hosting the InceptionV3 image recognition model and classifying objects from uploaded images.
                    </p>
                </a-col>
            </a-row>
            <a-row :gutter="36" id="projects-row" data-aos="fade-up" data-aos-duration="1500">
                <a-col :xs="24" :lg="8">
                    <p id="title">STT Assistance Tool</p>
                    <p id="description">
                        Featured during the 2016 QSHS Science Fair - a Raspberry Pi Module which uses IBM Watson, Api.ai (now called Dialogflow), and CMU Sphinx for converting speech to text.
                        This project is intended to facilitate educational material delivery for students with hearing disabilities.
                    </p>
                </a-col>
            </a-row>
        </div>
        <div class="contact">
            <a id="facebook" href="#"><a-icon type="facebook" /></a>
            <a id="github" href="https://github.com/starkfire"><a-icon type="github" /></a>
            <a id="twitter" href="#"><a-icon type="twitter" /></a>
            <a id="google" href="#"><a-icon type="google" /></a>
        </div>
	</div>
</template>
<script>
export default {
    name: 'Portfolio'
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700;900&display=swap');

.head {
    background-color: #0f0f0f;
    min-height: 667px;
    padding: 5% 15%;

    #basic {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;

        #profile-img {
            border-radius: 50%;
            height: 200px;
        }
    }

    #info {
        color: white;
        font-family: 'Manrope', sans-serif;
        margin: 5% 5%;
        
        #name {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 0;
        }

        #title {
            font-size: 21px;
            font-weight: 300;
        }
    }

    #stack {
        color: #fff;
        font-family: 'Inter', sans-serif;
        margin: 3% 0px;

        #heading {
            font-size: 28px;
            font-weight: 600;
        }

        #category {
            font-size: 18px;
            font-weight: 600;
        }

        #tech {
            font-size: 16px;
            font-weight: 300;
        }
    }
}

@media (max-width: 944px) {
    .head {
        padding: 5% 5%;

        #profile-img {
            display: none;
        }

        #info {
            margin: 10% auto;

            & > * {
                text-align: center;
            }
        }

        #stack {
            #heading {
                display: none;
            }

            & > * {
                text-align: center;
            }
        }
    }
}

.projects {
    background-color: #0f0f0f;
    color: #fff;
    min-height: 667px;
    padding: 5% 10% 5% 10%;
    font-family: 'Inter', sans-serif;

    #projects-title {
        text-align: center;
        font-size: 52px;
        font-weight: 900;
    }

    #projects-category {
        font-size: 28px;
        font-weight: 900;
    }

    #title {
        font-size: 21px;
        font-weight: 600;
        margin-top: 8px;
    }

    #projects-row {
        margin-bottom: 36px;
    }

    &:last-child {
        padding-bottom: 12%;
    }
}

@mixin brand-background-transition($color) {
    &:hover {
        background-color: $color;
        transition: background-color 0.4s ease-in-out;
    }
}

.contact {
    text-align: center;

    a {
        display: inline-block;
        color: #000;
        padding: 16px 32px;
        margin: 5% 5%;
        border-radius: 12px;

        &:hover {
            color: #fff;
        }
    }

    #facebook {
        @include brand-background-transition(#3b5998);
    }

    #twitter {
        @include brand-background-transition(#1da1f2);
    }

    #github {
        @include brand-background-transition(#333);
    }

    #google {
        @include brand-background-transition(#ea4335);
    }

    i {
        font-size: 28px;
    }
}

a {
    color: rgb(97, 231, 255);
}

.background {
    color: #000;
    font-family: 'Inter', sans-serif;
    min-height: 667px;
    margin: 5% 16%;

    #section {
        margin: 4%;
    }

    #title {
        font-size: 64px;
        font-weight: 900;
    }

    %topic-template {
        #category {
            font-size: 32px;
            font-weight: 600;
        }

        #item {
            margin: 5% 0px;

            p {
                margin: 0;
            }

            #head {
                font-size: 18px;
                font-weight: 600;
            }

            #body {
                font-size: 18px;
                font-weight: 300;
            }

            #subtitle {
                font-size: 14px;
                font-weight: 400;
            }
        }
    }

    #topic {
        @extend %topic-template
    }
}
</style>