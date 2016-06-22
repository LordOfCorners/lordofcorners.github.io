---
layout: post
title:  "Breath & Brass"
date:   2016-05-29 10:59:56 -0400
categories: portfolio
featured-image: "bb/breath-and-brass.gif"
project-tags: "Arduino, openFrameworks"
year: "December 2013"
excerpt: “Breath and Brass” visualizes the act of musical performance—both the physicality of the musician’s breathing and the technical nature of the generated music. It newly illuminates the interplay between the instruments and incorporates a more conscious awareness of the musician’s exertion into the audience’s experience.
---

{% include image-row.html video1="87206691" %}

“Breath and Brass” visualizes the act of musical performance—both the physicality of the musician’s breathing and the technical nature of the generated music. It newly illuminates the interplay between the instruments and incorporates a more conscious awareness of the musician’s exertion into the audience’s experience.

Working with Poulenc’s Sonata for Horn, Trumpet and Trombone we visualize inhales and exhales together with the notes, volume and speed of the music to reveal the connection between the physicality of music making and the relationships of the sounds and instruments to each other.

To measure the breathing we built custom hardware, consisting of a velcro and elastic band that wraps around the musician’s torso. The front of the band is made of conductive rubber, which measures the expansion and contraction as he or she breathes. A WiFly unit attached to the band sends the data wirelessly to the computer running the software.

My primary responsibilities on the project involved work on the breathing sensor, capturing the data, and sending it in a usable format to our openFrameworks application.

[Final Software Movement 1](https://github.com/LordOfCorners/SymphonyCollab/tree/master/integratedCodeFinal3)
<br>
[Final Software Movement 2](https://github.com/LordOfCorners/SymphonyCollab/tree/master/Mesh)
<br>
[Final Firmware](https://github.com/LordOfCorners/SymphonyCollab/tree/master/wirelessArduino)

{% include image-row.html image1="portfolio/bb/trombone.jpg" image2="portfolio/bb/breathing-sensor-fritz.jpg" image3="portfolio/bb/breathing-sensor.jpg" image4="portfolio/bb/breath-and-brass-performance.jpg" %}