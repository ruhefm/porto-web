---
title: Mikrotik NAT and Preserving Original Source IP
desc: Solving an issue where Mikrotik's dst-NAT causes the source IP to be replaced with the router's IP instead of preserving the original source.
images: []
size:
tools: []
tags: ['NAT', 'Mikrotik', 'Firewall', 'Networking',]
---

# Mikrotik NAT and Preserving Original Source IP

## 🧠 Problem

When using **dst-NAT** on Mikrotik, I expected the destination to see the **original source IP** (e.g., `192.168.1.1`).  
However, it saw the packet as coming from the **Mikrotik’s IP (`192.168.10.1`)**, which caused the destination to **reject** it.

## 🧪 Topology & IP Overview

```txt
+-------------+         +-------------+         +----------------+
| Foreign IP  | <-----> |  Mikrotik   | <-----> |  Another Node  |
| 192.168.1.1 |         | 192.168.10.1|         | 192.168.10.2   |
+-------------+         +-------------+         +--------+-------+
                                                   Exposed as:
                                                   172.168.1.1

src-NAT rule:
From: 192.168.1.1
To: 172.168.1.1
Src-NAT → 192.168.1.1
```



### Behavior Summary:

| Source        | Destination | Target Sees As | Result |
|---------------|-------------|----------------|------------|
| 192.168.1.1   | 172.168.1.1 | 192.168.10.1 from Interface   | Rejected ❌ |

### Solution:
```
/ip firewall nat add chain=srcnat src-address=192.168.1.1 dst-address=172.168.1.1 action=src-nat to-addresses=192.168.1.1
```
### Results:
| Source        | Destination | Target Sees As | Result |
|---------------|-------------|----------------|------------|
| 192.168.1.1 | 172.168.1.1 | 192.168.1.1 to 172.168.1.1 | ✅ Accepted |
