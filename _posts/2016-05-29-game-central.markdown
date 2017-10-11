---
layout: post
title:  "Game Central"
date:   2016-06-22 10:59:56 -0400
categories: portfolio
featured-image: "gamecentral/gc_thumbnail_square.gif"
project-tags: "Physical Computing"
awards: "2015 Gold ADDY"
year: "April 2015"
noindex: true
---
To highlight `Norfolk Southern's` culture of innovation, `RP3 Agency` built a scoreboard for the club level they sponsor at the Washington Nationals' stadium. The scoreboard uses G-scale model trains driven by stepper motors to indicate the stats of the game, such as strikes, balls, and outs.

{% include image-row.html image1="portfolio/gamecentral/scoreboard.jpg" image2="portfolio/gamecentral/gc_thumbnail_6x4.gif" image3="portfolio/gamecentral/scoreboard-process.jpg" %}

Our partner `The Character Shop` fabricated the scoreboard, but it was my responsibility to interface the stepper driver with the `Node.js` software which we wrote at RP3 Agency. It connects to the same data feed that drives the main scoreboard at the stadium and sets our own scoreboard's state. An open source G-code parsing library called [grbl](https://github.com/grbl/grbl) that runs on `Arduinos` allowed us to send g-code serial messages from our server to the Arduinos, which then send the commands to the stepper drivers. For example, to send the Balls train out to show three balls, we can send `G1 F500 X63 \r` to tell the stepper motor to push the train out to position 63 at a feedrate of 500 mm/min.

If the optical limit switches that help the motors locate the zero position were to fail, the motors would force the trains into the scoreboard. Should any sensor fail, grbl provides a serial message, and when that happens, we can automatically disable that train and get notified via a scoreboard `Slack bot`. Another challenge that presented itself during installation was that the electromagnetic interferance created by all nine of the stepper drivers/motors ruined the sensor values, and the code that worked on our test setup in the office was failing. This was solved by insulating the sensor cables.

We attached screw shields to the Arduinos to allow for a secure installation that could still be easily repaired if needed. I modeled and `3D printed` an RP3 branded case for the Arduinos + screw shields.

{% include image-row.html image2="portfolio/gamecentral/rp3-arduino-model.jpg" image3="portfolio/gamecentral/rp3-arduino-case.gif" %}

We also needed to serve the score and inning number to the TVs mounted in the scoreboard using the `Raspberry Pi`. Rather than having a separate installation of Raspbian on each Raspberry Pi, we decided to mount Raspbian as a read only NFS on our server to allow for easy updates and to prevent file system corruptions. The Pis autoboot to full screen Chromium, and each Pi has a unique URL stored on their SD cards that gets written to RAM so that the Pis are able to load different pages even though they have indentical file systems. I wrote a shell script to automatically install Raspbian on the server and set up the Pis to netboot from it.

{% include image-row.html image1="portfolio/gamecentral/scoreboard-back.jpg" %}

[Full project credits](http://www.mediapost.com/digitaloohawards/winners/)
