import {mkdir} from "fs/promises";
console.log("Current directory:", process.cwd());

await mkdir("uploads");
await  mkdir("uploads/images");
console.log("Folders created");


//await mkdir("docs/resumes/data", {recursive:true});

//removes only data folder
//await rm("docs/resumes/data", {recursive:true});

//removes main folder and sub folder also
//await rm ("docs", {recursive: true});