"use server"
import connectDB from "@/db/connectDb";
import Submission from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    
    await connectDB();
    let name = await request.json().name;
    let email = await  request.json().email;
    let message = await  request.json().message;

    
    const newSubmission = new Submission({ name, email, message });
    await newSubmission.save();


    return NextResponse.json({success : true, data})
} 