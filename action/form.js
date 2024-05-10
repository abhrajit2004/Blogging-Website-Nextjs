"use server";
import fs from "fs/promises";
import path from "path";

export const handleSubmit = async (e) => {

    const name = e.get("name");
    const email = e.get("email");
    const message = e.get("message");
    const formData = `${name}, ${email}, ${message}\n`;

    const excelFilePath = path.join(process.cwd(), 'contactData.csv');

    fs.appendFile(excelFilePath, formData);
}