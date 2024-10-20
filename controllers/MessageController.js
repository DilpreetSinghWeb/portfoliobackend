const Message = require("../model/Message");

const MessageCreate = async (req, res) => {
    const { username, email, message } = req.body;

    try {
        const messageCount = await Message.countDocuments({ email });

        if (messageCount >= 5) {
            return res.status(400).json({ msg: "You can only submit up to 5 messages." });
        }

        
        const existingMessage = await Message.findOne({ username, email, message });

        if (existingMessage) {
            return res.status(400).json({ msg: "You have already submitted this message." });
        }

        const userDoc = await Message.create({ username, email, message });
        return res.status(201).json({ msg: "Successfully submitted", userDoc,messageCount:messageCount + 1 });
    } catch (error) {
        return res.status(500).json({ msg: "An error occurred", error: error.message });
    }
};

const dashboardAccess = async (req, res) => {
    try {
        const messages = await Message.find({});
        res.status(200).json({ msg: "Successful",messages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error retrieving data' });
    }
}
module.exports = { MessageCreate,dashboardAccess };
