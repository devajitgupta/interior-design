// app/api/contact/route.ts
import dbConnect from "@/app/lib/mongodb";
import Contact from "@/app/models/contactus";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await dbConnect();
    
    // Get form data from request
    const { name, email, mobile, message } = await req.json();

    // Basic validation
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create new contact document
    const newContact = new Contact({
      name,
      email,
      mobile,
      message
    });

    // Save to database
    await newContact.save();

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}