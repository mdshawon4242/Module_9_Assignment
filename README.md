# Simple HTTP Server using Node.js

## 📌 Project Overview
এই প্রোজেক্টে Node.js এর **http module** ব্যবহার করে একটি Simple HTTP Server তৈরি করা হয়েছে।  
Server টি **Port 5000** এ Run করবে এবং বিভিন্ন Route অনুযায়ী HTML Response পাঠাবে।

---

## 🚀 Features
1. **HTTP Server Creation**  
   - Node.js এর `http` module ব্যবহার করে Server তৈরি করা হয়েছে।
   - Server সর্বদা Port **5000** এ Listen করবে।

2. **Routes**  
   নিম্নলিখিত Route গুলো তৈরি করা হয়েছে:
   - `/` → Home Page  
   - `/about` → About Page  
   - `/blog` → Blog Page  
   - `/contact` → Contact Page  

3. **HTML Response**  
   প্রতিটি Route এ একটি Heading, কিছু Description এবং Navigation Link থাকবে।  
   উদাহরণ:
   ```html
   <h1>Home Page</h1>
   <p>Welcome to our simple Node.js server!</p>
   <nav>
     <a href="/">Home</a> |
     <a href="/about">About</a> |
     <a href="/blog">Blog</a> |
     <a href="/contact">Contact</a>
   </nav>
