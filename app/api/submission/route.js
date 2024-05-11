"use server"
import connectDB from "@/db/connectDb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    await connectDB();
    const data = await req.json();
    const name =  data.name;
    const email = data.email;
    const message = data.message;
    const newUser = new User({ name, email, message });
    await newUser.save();
    return NextResponse.json({success : true})
} 