import mongoose from "mongoose";
import User from "../models/User.js";

export const getAdmin = async (req, res) => {
    try{
        const admin = await User.findOne({ role: "admin" }).select("-password");
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}