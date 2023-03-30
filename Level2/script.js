//toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section active link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //secticky navbar

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link(scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Contact form
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Set up middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection
mongoose.connect("mongodb://localhost/my-database", { useNewUrlParser: true });

// Define schema for contact form submissions
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

// Define model for contact form submissions
// const Contact = mongoose.model("Contact", contactSchema);

// // Set up route to handle form submissions
// app.post("/submit-form", (req, res) => {
//   const { name, email, message } = req.body;

//   const newContact = new Contact({
//     name,
//     email,
//     message,
//   });

//   newContact
//     .save()
//     .then(() => {
//       res.status(200).send("Form submission successful!");
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Internal server error.");
//     });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const formData = new FormData(form);
  
  const response = await fetch('/contact', {
    method: 'POST',
    body: formData
  });
  
  if (response.ok) {
    form.reset();
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Thank you for contacting us!';
    form.appendChild(successMessage);
  }
});

