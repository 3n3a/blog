---
title: "Create a Blog with Phoenix in Elixir."
date: 2022-07-16 13:42:00
draft: true
authors: enk
tags: [tutorial, phoenix, elixir, webframework]
---

In this Tutorial you will learn how to setup a Phoenix Project and the database.
You'll also learn how to use Phoenix amd create a simple Blog, but there's also a section about the final
Deployment of your Phoenix Blog. 

<!--truncate-->

> You should already have installed Erlang 22 or later, with Elixir 1.12 or later. Also the Hex Package manager should be installed (`mix local.hex`) and also `phx_new` (`mix archive.install hex phx_new`) 
> 
> *[Source](https://hexdocs.pm/phoenix/installation.html)* 


:::warning 
**Linux Users**: If you want live-reload to work in your Dev-Environment be sure to install [inotify-tools](https://github.com/inotify-tools/inotify-tools/wiki) 

::: 

## Create the Application 

```bash 
mix phx.new <name/folder> --database postgres --no-mailer 
``` 

`name` is a placeholder for the Name of your Application. It generates the new bootstrapped application in a folder with that name and names the main module after it. 

`--database` selects the database you want to use in your Application, in our case Postgres, which is also the recommended DB by the Team behind Phoenix. 

Finally `--no-mailer` excludes the Email-Sending component from being generated. 

*[Source](https://hexdocs.pm/phoenix/Mix.Tasks.Phx.New.html)* 

## Setup Database 

Since it‘s so simple to setup a Postgres Database in our Dev-Environment with Docker, I have written this config, which comes with Pgadmin a Postgres Web Admin UI. 

[See here for mor Info](https://github.com/3n3a/docker-compose-templates/tree/master/postgres-database) 

Simply copy the contents of that Folder into your project and run your Database. 

## Initialize Database 


:::warning 
Database needs to be running for this 

::: 

Run `mix ecto.create` which will configure the Database specified in the config file `config/dev.exs`. 

*[Source](https://hexdocs.pm/phoenix/up_and_running.html)* 

## Start Server 

Run either of those commands to start the Development server. 

```bash 
mix phx.server 
``` 

Or run the server inside of Interactive Elixir 

```bash 
iex -S mix phx.server 
``` 


:::info 
Your Phoenix Application should now be running at [http://127.0.0.1:4000](http://127.0.0.1:4000/) 

::: 

If you can see this picture you have yourself a working Phoenix Application. 

![](/api/attachments.redirect?id=9f7eb94e-7568-4144-ad84-89f429c6d294) 

*[Source](https://hexdocs.pm/phoenix/up_and_running.html)*
