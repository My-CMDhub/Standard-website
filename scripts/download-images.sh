#!/bin/bash

# Create necessary directories
mkdir -p public/images/testimonials

# Download food images
curl -o public/images/pizza.jpg "https://images.unsplash.com/photo-1513104890138-7c749659a591"
curl -o public/images/pasta.jpg "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
curl -o public/images/burger.jpg "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
curl -o public/images/schnitzel.jpg "https://images.unsplash.com/photo-1599921841143-819065a55cc6"
curl -o public/images/salad.jpg "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
curl -o public/images/dessert.jpg "https://images.unsplash.com/photo-1587314168485-3236d6710814"
curl -o public/images/paella.jpg "https://images.unsplash.com/photo-1534080564583-6be75777b70a"
curl -o public/images/chocolate-cake.jpg "https://images.unsplash.com/photo-1578985545062-69928b1d9587"

# Download restaurant images
curl -o public/images/restaurant-interior.jpg "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
curl -o public/images/chef.jpg "https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1514933651103-005eec06c04b"

# Download testimonial images
curl -o public/images/testimonials/sarah.jpg "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
curl -o public/images/testimonials/michael.jpg "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
curl -o public/images/testimonials/emma.jpg "https://images.unsplash.com/photo-1534528741775-53994a69daeb" 