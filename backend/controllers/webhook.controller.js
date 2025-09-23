import User from "../models/user.model.js";
import { Webhook } from "svix";


export const clerkWebHook = async (req, res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if(!WEBHOOK_SECRET){
        throw new Error("CLERK_WEBHOOK_SECRET is not defined") 
    }
     const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        console.error("Webhook verification failed:", err.message);
        return res.status(400).json({message: "Webhook verification failed"});
    }

    if (evt.type === "user.created") {
        try {
            const newUser = new User({
                clerkId: evt.data.id,
                username: evt.data.username || evt.data.email_addresses[0].email_address,
                email: evt.data.email_addresses[0].email_address,
                img: evt.data.image_url, 
            });
            await newUser.save();
            return res.status(201).json({message: "User created successfully."});
        } catch (err) {
            console.error("Error creating user:", err);
            return res.status(500).json({ message: "Internal server error while creating user." });
        }
    }
    // Acknowledge other webhook events with a success response
    return res.status(200).json({ message: "Webhook received, but no action taken." });
}