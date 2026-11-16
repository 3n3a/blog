---
title: "Hackernews Client with Hackerfeed API"
date: 2021-08-11 16:00:00
draft: false
authors: enk
tags: [hackernews, api]
---

My idea was to develop a hackernews client, I know so many others exist already. But I wanted to try for myself.

<!--truncate-->

I started out by finding an API that would allow me to lean back and relax. This API is called [hackerfeed.dev](https://hackerfeed.dev), I believe to have found it on hackernews.

Afterwards I moved onto designing the Frontend, for this I wanted to use pre-made bootstrap components. For that I used MDBootstrap, a Framework that combines Material, from Google and Bootstrap into one capitalistic creation.

![](https://ik.imagekit.io/njhey0rxzni/code_snippets/A1AF7D3E-67E1-4D94-BE20-8D9FEF870C1F_KG4KPathGn.png?updatedAt=1628745888583&tr=w-1104,h-736,fo-auto)

_A code snippet from the index.html. The classes correspond to MDBootstrap_

## Final Result

The result can be seen [here](https://gh.3n3a.ch/hnfee_mdb/). It doesn’t work aswell as I wanted it to. But upon preloding the API response times got a little bit better. 

## Reflection

For another project I would want to better know about fetching API responses from load or background fetching. Maybe even with a service worker.

Also I wouldn‘t use MDBootstrap again, first of all, because it’s not free and secondarily because I like Tailwind and co more :).
