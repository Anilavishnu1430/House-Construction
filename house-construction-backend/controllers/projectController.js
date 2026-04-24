const projects = require('../models/projectModel')

exports.addProject=async(req,res)=>{
    console.log("Inside add Project");
    console.log(req.body);
    const { projectname,location,type,plotsize,direction,price,imageUrl} =req.body
    console.log(req.files);
    const uploadedImages = []
    req.files.map(item=>uploadedImages.push(item.filename))
    console.log(projectname,location,type,plotsize,direction,price,imageUrl,uploadedImages);

    const existingProject = await projects.findOne({projectname})
    if(existingProject){
        res.status(401).json({message:"project already existing..."})
    }
    else{
        const newProject = projects({
            projectname,location,type,plotsize,direction,price,imageUrl,uploadedImages
        })
        await newProject.save()
        res.status(200).json({message:"Project added successfully...",newProject})
    }
}

//View Project
exports.viewProject=async(req,res)=>{
    console.log("Inside the view project");
    console.log(req.query);
    searchKey = req.query.search
    try{
        const query={
            projectname:{
                $regex:searchKey,
                $options:"i"
            }
        }
        const viewProject = await projects.find(query)
        res.status(200).json({message:"All Projects Fetched",viewProject})
    }
    catch(err){
        res.status(500).json({message:"Server Err",err})
    }
}

//GET a Project
exports.getAProject=async(req,res)=>{
    console.log("Inside the project");
    const { id } = req.params
    try{
        const project = await projects.findOne({_id:id})
        res.status(200).json({message:"Project Fetched",project})
    }
    catch(err){
        res.status(500).json({message:"Server Err",err})
    }
}