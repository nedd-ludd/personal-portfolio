// languages
import HTML from "../../public/assets/skills/html.png";
import CSS from "../../public/assets/skills/css.png";
import JavaScript from "../../public/assets/skills/javascript.png";
import Python from "../../public/assets/skills/python.png";

// frameworks
import React from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import MUI from "../../public/assets/skills/mui.png";
import Django from "../../public/assets/skills/django.png";
import Django_REST from "../../public/assets/skills/djangorest.png";
import Node from "../../public/assets/skills/node.png";
import Bulma from "../../public/assets/skills/bulma.png";
import Express from "../../public/assets/skills/express.png";

//editors / tools / platforms
import VSCode from "../../public/assets/skills/vscode.png";
import DevTools from "../../public/assets/skills/chrome.png";
import Postman from "../../public/assets/skills/postman.png";
import TablePlus from "../../public/assets/skills/tableplus.png";

//dbs
import SQLite from "../../public/assets/skills/lite.png";
import Mongoose from "../../public/assets/skills/mongoose.png";
import MongoDB from "../../public/assets/skills/mongo.png";
import PostgresQL from "../../public/assets/skills/postgresql.png";

//version control
import GitHub from "../../public/assets/skills/github1.png";
import Git from "../../public/assets/skills/git.png";
import Git_Bash from "../../public/assets/skills/gitbash.png";

// storage/ cloud
import Cloudinary from "../../public/assets/skills/cloudinary.png";
import Heroku from "../../public/assets/skills/heroku.png";
import Netlify from "../../public/assets/skills/netlify.png";
import AWS from "../../public/assets/skills/aws.png";

//package
import npm from "../../public/assets/skills/npm.png";
import PIP from "../../public/assets/skills/pip.png";

//stacks
import MERN from "../../public/assets/skills/mern.png";

//design/ management
import Excalidraw from "../../public/assets/skills/excalidraw.png";
import Trello from "../../public/assets/skills/trello.png";

export const mySkills = {
  languages: [
    "languages",
    { HTML: HTML, JavaScript: JavaScript, CSS: CSS, Python: Python },
  ],
  frameworks: [
    "frameworks / libraries",

    {
      React: React,
      Tailwind: Tailwind,
      NextJS: NextJS,
      MUI: MUI,
      Django: Django,
      Django_REST: Django_REST,
      Node: Node,
      Bulma: Bulma,
      Express: Express,
    },
  ],
  tools: [
    "editors / tools / platforms",

    {
      VSCode: VSCode,
      DevTools: DevTools,
      Postman: Postman,
      TablePlus: TablePlus,
    },
  ],

  storage: [
    "storage / cloud",
    { Cloudinary: Cloudinary, Heroku: Heroku, Netlify: Netlify, AWS: AWS },
  ],
  Database: [
    "Database",
    {
      SQLite: SQLite,
      MongoDB: MongoDB,
      PostgresQL: PostgresQL,
      Mongoose: Mongoose,
    },
  ],
  design: ["design / management", { Excalidraw: Excalidraw, Trello: Trello }],
  stacks: ["stacks", { MERN: MERN }],
  package: ["package", { PIP: PIP, npm: npm }],
  version: [
    "version control",
    { GitHub: GitHub, Git: Git, Git_Bash: Git_Bash },
  ],
};
