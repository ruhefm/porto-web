---
title: Aws Global Accelerator
desc: AWS Global Accelerator helps improve the availability and performance of destinated server entrypoint by routing the traffic across multiple AWS Regions based on health checks and network performance.
images: []
size:
tools: []
tags: ['AWS']
---
# AWS Accelerator

AWS Global Accelerator helps improve the availability and performance of destinated server by routing traffic across multiple AWS Regions based on overall performance including health checks and network performance. It uses global static IP addresses and automatically directs traffic to the optimal endpoint.
## Create Accelerator
Name the accelerator, this accelerator will be the entry point to hit by the users.
![alt text](/awsAccel2.png)
## Listener
Add a listener by specifying the port (example: port 80 or 443) and the protocol (TCP or UDP). To choose accelerator open port.
![alt text](/awsAccel3.png)
## Region Traffic Distribution
Add one or more AWS Regions. For each region, configure the traffic percentage to control how much traffic is directed to that region. AWS Global Accelerator evaluates the health of the region and routes traffic accordingly.
![alt text](/awsAccel4.png)
## Endpoints
Within each region, define one or more endpoints such as an Application Load Balancer (ALB), Network Load Balancer (NLB), or EC2 instance. These endpoints will handle the actual traffic routed through the accelerator.
![alt text](/awsAccel5.png)