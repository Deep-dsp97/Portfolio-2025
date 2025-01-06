import Button from './LetsTalkButton';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "232f527f-3096-43d7-81a7-ba650bd9b191");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            Swal.fire({
                title: "Sucess!!",
                text: "Message sent sucessfully!",
                icon: "success"
            });

            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

  return (
    <section className="contact-section pt-20 observe-section rounded-t-3xl" id="contact">
        <div className='max-w-6xl mx-auto flex flex-col items-center'>
            <h2 className="relative text-center font-outfit text-2xl md:text-4xl font-bold text-blue-900 bottom-after-border bottom-after-border-top-65-center">Contact Me</h2>
            <form className="flex flex-col justify-center mt-20 bg-white rounded-3xl" onSubmit={onSubmit}>
                <div className="input-box">
                    <label className="font-outfit font-bold">Full Name</label>
                    <input type="text" className="field" placeholder='Enter your name' name="name" required />
                </div>
                <div className="input-box">
                    <label className="font-outfit font-bold">Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' name="email" required />
                </div>
                <div className="input-box">
                    <label className="font-outfit font-bold">Your Message</label>
                    <textarea name="message" className="field mess" placeholder='Enter your message' required></textarea>
                </div>
                <Button customClass="mt-5 bg-indigo-600 border hover:border-indigo-600 text-white hover:bg-transparent hover:text-indigo-600" type="submit">Send Message</Button>
                { result && <p className="font-bold italic mt-3">{result}</p>}
            </form>
        </div>
    </section>
  )
}

export default Contact;