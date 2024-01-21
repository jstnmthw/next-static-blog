---
title: 'Linux motd displaying resources on your web server'
excerpt: 'Managing a team is a nuanced dance of personalities. The role of managing extends beyond project timelines and deliverables, delving into the intricacies of human dynamics within the team—a journey marked not only by successes but also by the challenges, _and failures_, that shape us.'
coverImage:
  url: '/images/linux-webserver-motd.jpg'
  author:
    name: Justin Rivera
    url: https://justin.ly
date: '2024-01-18T04:20:00.322Z'
categories:
  - Linux
  - Web Server
  - Motd
author:
  name: Justin Rivera
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/public/images/crosswalk-in-japan.jpg'
---

## Installing motd on linux

The existing motd file is usually located in `/etc/motd`. You can view the current motd with the following command:

```sh
cat /etc/motd
```

Empty this motd if you only want the new customized motd.

```sh
> /etc/motd
```
