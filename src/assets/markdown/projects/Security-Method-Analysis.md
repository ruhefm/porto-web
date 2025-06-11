---
title: Security Method Analysis on Mikrotik
desc: This research demonstrates that using raw rules provides better performance compared to filter rules in Mikrotik. The evaluation was conducted using the TOPSIS multi-criteria decision-making method.
images: ['/skripsi.png']
size: w-32 sm:max-w-screen-xl
tools: [
    {imagePath: '/python.svg', alt: 'Python'},
    {imagePath: '/mikrotik.svg', alt: 'Mikrotik'},
    {imagePath: '/figma.svg', alt: 'Figma'},
    {imagePath: '/canva.svg', alt: 'Canva'},
]
---

# **Security Method Analysis on Mikrotik**
This research demonstrates that using raw rules provides better performance compared to filter rules in Mikrotik. The evaluation was conducted using the TOPSIS multi-criteria decision-making method.

## **How it Works?**

![Topsis-Entropy](/skripsi2.png)
The topology is: there are server / internal network to be defended by Mikrotik Router. All of the traffic from outside is filtered through Mikrotik, I ignore the use of Honeypot at DMZ, because it is using external power from Mikrotik. So the focused is using all the feature inside Mikrotik like filter rule drop, tarpit, reject and raw drop.
![Topsis-Entropy](/topsis.png) I recorded all of the data starting from CPU Load, Memory Usage, and Traffic when I launch a DDoS Attack. After gather all the data I input it to the TOPSIS algorithm using entropy weight.
![Results](/skripsi3.png) So the best, efficient, and effective method are the Raw Drop method.


![Skripsi Image](/skripsi.png)
