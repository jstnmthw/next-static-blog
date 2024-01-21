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

Have you ever logged into your Linux server and wished for a more informative and stylish welcome message? The Message of the Day (MOTD) is the first thing you see when connecting to your server via SSH, and with a few simple steps, you can customize it to display essential system information in a visually appealing manner.

## Remove existing motd's (optional)

Remove execution of the existing update-motd sections, leaving required updates and system reboot.

```sh
sudo chmod -x /etc/update-motd.d/*
sudo rm /etc/update-motd.d/*landscape*
sudo chmod +x /etc/update-motd.d/*updates-available
sudo chmod +x /etc/update-motd.d/*reboot-required
```

The existing motd file is usually located in `/etc/motd`. You can empty this motd if you only want the new customized motd:

```sh
> /etc/motd
```

## Download &amp; install motd

You can view the script [here](https://raw.githubusercontent.com/jstnmthw/webserver-spot-instance/master/motd.sh), which is a part of a repo that can be used as AWS Spot Instance linux web server.

```sh
curl -s https://raw.githubusercontent.com/jstnmthw/webserver-spot-instance/master/motd.sh > /tmp/motd.sh
chmod +x /tmp/motd.sh
sudo mv /tmp/motd.sh /etc/update-motd.d/00-motd
```
