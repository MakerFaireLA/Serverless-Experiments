# Serverless-Experiments/drag_raphael

This experiment is my first attempt to experiment with drag-and-drop in Raphael.  It clearly works, but there 
are some kinks to be worked out.

I am considering replacing Processing/p5 with Raphael.  Processing is intended for beginners and is not well 
targeted for our needs.  Raphael provides an object model with robust user event trapping that will be 
quite useful to us.

Before you can run this code you will need to install Raphael.  I was unable to install it 
using npm.  You can follow the instructions at https://github.com/DmitryBaranovskiy/raphael, notably

    git clone https://github.com/DmitryBaranovskiy/raphael.git
    npm run start
    npm run build

Be sure to insert the correct path to your Raphael install in index.html.
