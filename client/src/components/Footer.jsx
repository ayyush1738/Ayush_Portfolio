import React from "react";
import ConnectBtn from "./ConnectBtn.jsx";
import link from './assets/link.png';
import insta from './assets/insta.png';
import git from './assets/git.png';


class Contact extends React.Component {

  render() {
    return (
      <section className="paralax-mf footer-paralax bg-cover bg-no-repeat bg-center py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 bg-black" >
          <div className="relative bg-gray-300 rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-2xl font-semibold mb-4">Send A Message</h5>
                <form
                  action="https://formspree.io/f/mwkgdrey"
                  method="POST"
                  className="contactForm"
                >
                  <div id="sendmessage" className="mb-4 text-green-600 hidden">
                    Your message has been sent. Thank you!
                  </div>
                  <div id="errormessage" className="mb-4 text-red-600 hidden"></div>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        className="form-control w-full border-gray-300 rounded-lg px-4 py-2"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control w-full border-gray-300 rounded-lg px-4 py-2"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control w-full border-gray-300 rounded-lg px-4 py-2"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                    </div>
                    <div>
                      <textarea
                        className="form-control w-full border-gray-300 rounded-lg px-4 py-2"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="button button-a button-big button-rouded py-2 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div>
                <h5 className="text-2xl font-semibold mb-4">Get in Touch</h5>
                <p className="lead mb-8">
                  Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the form and send me an email.
                </p>
                <div className="socials">
                  <ul className="flex space-x-4">
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        <i className="ion-social-codepen text-xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        <i className="ion-social-github text-xl"></i>
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300">
                        <i className="ion-social-linkedin text-xl"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="h-2/3 rounded-lg bg-gray-700 p-10 flex justify-between">
                  {/* <ConnectBtn />
                  <input className="bg-green-200 absolute hidden" type="text" value="0xd4f672F72fC75ddF9f5F6C793884157150442F60" style={{top:'200px'}} /> */}
                  <a target="_blank" href="https://www.linkedin.com/in/ayush-singh-rathore-17943b220/"><img className="rounded-full h-20 mt-14 cursor-pointer" src={link} alt="" /></a>
                  <a target="_blank" href="https://github.com/ayyush1738"><img  className="rounded-full h-20 mt-14"  src={git} alt="" /></a>
                  <a target="_blank" href="https://www.instagram.com/defnot_ayyush/"><img  className="rounded-full h-20 mt-14" src={insta} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              © {new Date().getFullYear()} Developed by Ayush Singh Rathore.
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Contact;
