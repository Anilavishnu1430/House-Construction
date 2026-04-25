const Reply = require('../models/replyModel')

exports.addReply = async (req, res) => {
    console.log("Inside add Reply");
    console.log(req.body);
    const { userEmail, message } = req.body
    try {
        const newReply  = new Reply({
            userEmail,message
        })
        await newReply.save()
        res.status(200).json({ message: "Reply added successfully...", newReply })
    }
    catch (err) {
        res.status(500).json({ message: "Server error", err });
    }
}