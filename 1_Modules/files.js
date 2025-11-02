const files = [
    {
        id : 1,
        fname : "DSA Sheet",
        content : "All DSA Questions",
        memory : "10MB",
        rootFolder : "DSA"
    },
    {
        id : 2,
        fname : "HTML Learning",
        content : "HTML full Content",
        memory : "300MB",
        rootFolder : "Frontend"
    },
    {
        id : 3,
        fname : "CSS Learning",
        content : "CSS full Content",
        memory : "200MB",
        rootFolder : "Frontend"
    },
    {
        id : 4,
        fname : "Java Script Learning",
        content : "JS Full content",
        memory : "300MB",
        rootFolder : "Frontend"
    },
    {
        id : 5,
        fname : "ReactJS Learning",
        content : "ReactJS Full Content",
        memory : "500MB",
        rootFolder : "Frontend"
    },
    {
        id : 6,
        fname : "NodeJS Learning",
        content : "NodeJS full Content",
        memory : "500MB",
        rootFolder : "Backend"
    }
]

function retriveFile(fileName){
    files.map((file)=>{
        if(file.fname == fileName){
            console.log(`The file named ${fileName} contains ${file.content} present in ${file.rootFolder} folder at index ${file.id}`);
        }else{
            console.log(`File not found at index ${file.id}`);
        }
    })
}

function addFile(id, fname, content, rootFolder){
    files.push({id,fname,content,rootFolder});
    console.log(`File Added Successfully`);
}
module.exports = ({retriveFile,addFile}); // Used to export the methods in this module(file)