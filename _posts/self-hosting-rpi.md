---
title: 'Self host your projects with the Raspberry Pi'
excerpt: 'Self host at home with SSL encryption, containers and load balancer [tutorial for beginers]'
coverImage: '/assets/blog/raspberry-self-hosting/raspi.png'
date: '2023-01-03T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/raspberry-self-hosting/raspi.png'
---

Hi all, hosting your backend on Heroku is not free anymore.

It’s great because it’ll sharpen our skills, let’s do one of my favorite projects: self-host your backend at home on a tiny Raspberry Pi (RPI). Of course, you can host much more on it like a front-end or a database… Let me explain how 🧶

Tools used : #Linux ; #RaspberryPi ; #Docker ; #DockerCompose ; #NGINX

Skills : #DevOps ; #SysAdmin ; #Containerization ; #ReverseProxy

## 1. Get a raspberry or a NUC and set up it properly

### a. OS Installation

In this article, we’ll focus on an RPI setup but it follows the same logic for other devices! It’s time, you bought your brand-new RPI, take the sd card, put it in your everyday computer, and download RPI Imager to install the OS with SSH & a secure user.

Go ahead to [raspberrypi.com](https://www.raspberrypi.com/software/) to download the software 😎

Below a screenshot of my to-go config for RPI OS. Be sure to setup a secure password with 12+ chars, numbers, and special chars (important if you want to access your with SSH online)

![Enable SSH + change username & setup a secure password 12+char+@#!](https://images.mirror-media.xyz/publication-images/GuIFrpkc4dcjTza38gcph.png?height=424&width=601&size=large)

### .b SSH access

When the OS is installed on the SD card, put it in the RPI, and connect an RJ45 cable & alimentation cable. Then go into your local box config panel to set up a fixed IP address for your RPI (I’m with an Orange box so I access it by typing 192.168.1.1 in a web browser).

![Static IP setup to access RPI locally with SSH](https://images.mirror-media.xyz/publication-images/SSz0iFHAqCJ7MNpeQcRM0.png?height=238&width=460)

Then open your computer console and type the code below to connect to your RPI.

`ssh gnarkouille@192.168.1.25 -p 22`

You’ll be connected directly to your RPI after having entered your password. And yes we will not use the Raspberry graphic interface.

> 💡 For additional protection, it’s better to change the default SSH port connection (22) here. I’ve changed mine with port 2245 (choose what number you want between 1024 - 65000):
> 
> ```
> sudo -s
> nano /etc/ssh/sshd_config
> ```

Search for # default_port: 22, remove the “#” and change the port, next type cmd+X to exit, don’t forget to save your changes 👍🏻.

### c. Docker + docker-compose installation

To work with containers we’ll need docker on the machine, to install it type:

```
apt-get update
apt-get upgrade
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Docker will add another abstraction layer to our configuration so that you can decide which container is available online or not. It’s also a powerful way to share apps with a fixed configuration: no more “it works on my computer”, your docker container work on every computer 😁!

-   More secure
    
-   Reproductible & composable
    
-   Each container can talk to others in the same network
    

Make sure you’ve installed docker properly by typing :

`docker --version`