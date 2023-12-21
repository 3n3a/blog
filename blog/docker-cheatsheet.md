---
title: "Managing Docker - A Cheatsheet"
date: 2023-12-20 13:00:00
draft: false
authors: enk
tags: [docker, cheatsheet, cli]
---

Cheatsheet on commands I have used for my various docker setups. One of them being on a Centos Server and the other one on my NAS running Unraid.

<!--truncate-->

## Finding Huge Images / Containers / Volumes

Listing Comtainers with size;

```sh
docker ps --size --format "table {{.ID}}\t{{.Names}}\t{{.Size}}"
```

Listing every object in system, with sizes (Volumes etc.)

```sh
docker system df -v
```

### Cleaning up Huge Stuff

Delete all the volumes not attached to a running container:

```sh
docker volume prune -f
```

Clean all the stuff in docker which is not running:

```sh
docker system prune -a -f
```

## Force Remove "endpoint" from network

Occurred when container wasn't fully removed. Threw "endpoint with name xx already exists..."

```sh
docker network disconnect -f <network> <container>
```

## Run Docker (Rootful Mode) as normal User

Add current user to docker group

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```
