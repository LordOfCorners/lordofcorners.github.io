---
layout: post
title: 'Animatronic Show'
date: 2017-5-31 11:59:56 -0400
categories: portfolio
featured-image: 'animatronic/animatronic-show.png'
project-tags: 'Node, Arduino'
year: '2019'
noindex: true
excerpt: In June 2019 at Huge we built an animatronic show for our client to showcase their product.
---

In June 2019 at Huge we built an animatronic show for our client to showcase their product. The tech lead, under major time constraints and knowing I had worked with `Arduino` and `stepper motors` in the past, pulled me onto the project. The project consisted of 2 vertical stepper gantries each mounted onto a horizontal stepper gantry to provide both X and Y range of motion for the gantry plates. There would be magnets on the gantry plates and it would all be covered by a sheet of black acrylic. Magnetic characters would be attached on top of the acrylic made to move around and tip over a cup as if by magic. All of this was behind a transparent LED display which helps tell the story with animations.

We talked about writing Arduino code to control the stepper motors, but that would have been too large of a task for our timeline, not to mention that when you are working with moving physical parts, code needs to be bulletproof because simple mistakes can cost a lot of time and money when you have to get and install new components. I suggested that we use [grbl](https://github.com/grbl/grbl), the same open-source g-code parsing library I used for the Norfolk Southern scoreboard, as it would allow us to write a `Node.js` application that sends g-code (tells the motors what position to go to and at what speed) to the Arduino via the serial port.

Because there were moving parts, I bought shields with screw terminals for the Arduinos to make sure wires do not come loose. I initially had a lot of trouble with the limit switches, which the motors use to find the 0 position and to also make sure they don't try to go past 0. Sometimes they worked and sometimes they didn't. I knew electromagnetic interference was a big possibility due to encountering that with the scoreboard. I solved this problem by attaching 4.7K pull up resistors to 5v and 100nF capacitors to ground, which has a noise suppression effect.

I wrote a gantry class in Node that takes a serial port and name in the constructor. It first checks the status of the limit switches to ensure they are working properly before homing the motors, as homing with a failed limit switch could destroy the motor. The gantry class has two functions that use promises to simplify sending movement commands to the Arduino: sendLinearMovement and sendArcMovement. Another function, pollLocation, asks the Arduino for the current motor position and resolves the promise if the motor is within 10mm of its target. This allows us to easily use async/await to delay sending commands until the active command is completed.

The main part of the Node app uses `Electron` to display the video for the transparent LED display, and allows us to cut to different parts of it when we start and end our animatronic scene, as well as trigger the motors to perform different movements based on the the timecode of the video.

We had a problem with the gantries sliding down when mounted vertically. The scoreboard gantries were parallel to the floor so I never had to worry about gravity. By default the steppers don't remain powered when not in use, resulting in gravity forcing them to spin on their own. This was solved by setting the "step idle delay" setting to 255 which keeps the axes enabled all the time, thereby hold position.

{% include image-row.html image2="portfolio/animatronic/arduino.png" image3="portfolio/animatronic/fabrication.png" htmlVideo1="portfolio/animatronic/final.mp4" %}
