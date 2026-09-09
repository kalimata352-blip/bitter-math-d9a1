# Krishok Bazer - কৃষক বাজার 🛒

A simple e-commerce shop API + Frontend built with Cloudflare Workers & GitHub Pages.

**Live Site:** https://kalimata352-blip.github.io/bitter-math-d9a1/
**Live API:** https://prasenjit-shop-api.krishokbazer.workers.dev

## Features
- ✅ Cloudflare Worker API (GET / POST / DELETE)
- ✅ D1 Database for products
- ✅ GitHub Pages Frontend with Cart
- ✅ Add to Cart, Search, Admin Panel

## API Endpoints
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product {name, price, image}
- `DELETE /api/products?id=1` - Delete product

## Tech Stack
- Cloudflare Workers + Wrangler
- JavaScript (Worker.js)
- HTML / CSS / JS Frontend

## How to Deploy
1. Clone repo
2. `npx wrangler deploy` for API
3. Push `index.html` to main for GitHub Pages

Made by Prasenjit Mondal
