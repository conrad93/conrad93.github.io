"use client";

import { useToast } from "@/contexts/ToastContext";
import { useState } from "react";

const ContactMe = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const { addToast } = useToast();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
    };
    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSubject(e.target.value);
    };
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(e.target.value);
    };

    const resetForm = (): void => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const validateForm = (): boolean => {
        if (!name || !email || !subject || !message) {
            addToast('Please fill in all fields', 'fail', 3000);
            return false;
        }
        return true;
    };

    const postData = async (): Promise<{ status: boolean, message: string }> => {
        try {
            const res = await fetch('/api/contact-message', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message })
            });
            const data = await res.json();

            const response = { status: false, message: '' };
            if(data.status) {
                response.status = true;
                response.message = "Message sent.";
            } else {
                response.message = data.message;
            }

            return response;

        } catch (error) {
            console.error("Server Error: ", error);
            return { status: false, message: "Server error." };
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        if (!validateForm()) return;
        
        const data = await postData();
        if(data.status) {
            addToast('Message sent.', 'pass', 3000);
            resetForm();
        } else {
            addToast(data.message, 'fail', 3000);
        }
    };

    return (
        <section className="bg-white text-dark border-2 border-black flex items-center justify-center">
            <div className="px-4 py-8 md:py-16 lg:py-24 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left">
                    Contact Me
                </h2>
                <form className="space-y-4 max-w-2xl mx-auto md:mx-0" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type='text' placeholder='Name' id="name" name="name" autoComplete="name" 
                        value={name}
                        onChange={handleNameChange}
                        className="w-full py-3 px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm outline-black" />
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type='email' placeholder='Email' id="email" name="email" autoComplete="email" 
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full py-3 px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm outline-black" />
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input type='text' placeholder='Subject' id="subject" name="subject" 
                        value={subject}
                        onChange={handleSubjectChange}
                        className="w-full py-3 px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm outline-black" />
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea placeholder='Message' rows={6} id="message" name="message" 
                        value={message}
                        onChange={handleMessageChange}
                        className="w-full px-4 text-gray-800 bg-gray-200 focus:bg-transparent text-sm pt-3 outline-black"></textarea>
                    <button type='submit'
                        className="text-white bg-black hover:bg-gray-600 tracking-wide text-sm px-4 py-3 w-full">Send</button>
                </form>
            </div>
        </section>        
    );
};

export default ContactMe;