# System-Monitor

<p align="center">
 <a href="https://github.com/alipirpiran/System-Monitor/blob/master/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-GNU-yellow.svg">
 </a>
 <a href="https://github.com/alipirpiran/System-Monitor">
  <img src="https://badges.frapsoft.com/os/v2/open-source.png?v=103">
 </a>
 <a href="https://t.me/mralpr">
  <img src="https://img.shields.io/badge/Chat%20on-telegram-blue" alt="Telegram">
  </a>
 </p>
 <br />
 
 System Monitor, created with Socket.IO, Express, Cron
 
when a client connects to application server, new socket connection oppens, and a cron job start. server send information of system base on config.js[refreshRate], by default it sends information every 10 secconds.<br>
you can config which information you want to get by editing config/config.js<br>
Server only have one cron job that sends information to all connected clients.if all clients disconnect from server, cron job become destroyed.


## Instalation

 Clone the git repo:
 
    git clone https://github.com/alipirpiran/System-Monitor.git
 
 cd to project and Install packages

    cd System-Monitor & npm i
 
 Run index.js with node
 
    node index.js
    
<hr>

 * config application with editing config.js file in config/


### todos
- [ ] add authentication
- [ ] improve frontend, add chart ...
- [ ] add routes for configuring app
