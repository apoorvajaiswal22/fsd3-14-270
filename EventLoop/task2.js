import fs from "fs/promises";

const writeData= async ()=>{
    try {
        await fs.writeFile('stud.txt',"Name:Apoorva Jaiswal")
        console.log("file written")
    } catch (error) {
        console.log(error);
    }
}
const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

const main = () => {
    console.log("main");
    setTimeout(f1,5000);
    //setInterval(f2,0);      
    setImmediate(f2);
    ProcessingInstruction.nextTick(f3); //promise
    writeData();
    console.log("end");
};

main();