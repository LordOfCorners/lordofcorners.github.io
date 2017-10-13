---
layout: post
title:  "Open Health Networks"
date:   2016-05-29 10:59:56 -0400
categories: portfolio
featured-image: "ohn/open-health-networks.gif"
project-tags: "SMS, PHP, Ushahidi"
year: "2012–2014"
excerpt: Open Health Networks (OHN) is a system that allows individuals to send coded text messages which report the lack of medication, equipment and other concerns.
---

{% include image-row.html video1="171666241" %}

**[Project Site](http://vigilanciaysalud.com/plataforma/)**
<br>
**[Project Documentation/Code](http://cegss.osf.parsons.edu/)**

[Open Health Networks (OHN)](http://vigilanciaysalud.com/plataforma/) is a system that allows individuals to `send coded text messages, which report the lack of medication and equipment as well as other issues`. The goal is to increase citizen empowerment and knowledge of individual health care rights and to open up the communication channels between indigenous communities, [CEGSS (Centro de Estudios para la Equidad y Gobernanza en los Sistemas de Salud)](http://cegss.org.gt/) and the government. OHN was developed as part of the Parsons/Open Society Foundations Fellowship.

As the 2013 spring/summer fellow, I `led a team of students at Parsons` during the spring semester, and `spent the summer in Guatemala` working directly with CEGSS on user testing and final developments for the platform.

Guatemala has public health care, which means that every citizen is theoretically guaranteed access to medicine and care. However, besides issues of discrimination, there is a `lack of efficient communication between the health facilities in these communities and the government`, especially concerning levels of supplies. CEGSS helps indigenous communities report lack of essential medication and equipment to the government. Prior to OHN, the only way to get information from the health facilities to CEGSS was through paper forms. Because of the cost (monetary and time), the forms could only be filled out four times per year, and a community representative would often need to travel as much as eight hours to hand-deliver the report to CEGSS. With this method, there was no feedback for the community, and the process of replenishing medication and equipment was extremely inefficient. Our job was to `simplify and make the inventory reporting process more efficient in order to better meet the needs of the community`.

We wrote a `PHP plugin` for `Ushahidi` (an open source crisis reporting platform) to translate the coded text messages into Ushahidi Reports. Some features include:

* Create multiple Ushahidi reports by sending a single SMS
* Keep track of report status (awaiting action, legal case opened, resolved)
* Send an SMS back to the original reporter informing them of status updates
* Fully customizable (Plugin is now also in use by the International Center for Advocates Against Discrimination)

{% include image-row.html image1="portfolio/ohn/ohn-map.jpg" image2="portfolio/ohn/ohn-reporting-booklets.jpg" image3="portfolio/ohn/ohn-user-testing.jpg" image4="portfolio/ohn/ohn-report.jpg" %}
