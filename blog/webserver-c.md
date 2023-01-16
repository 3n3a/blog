---
title: "A Guide to Creating a \"Hello World\" Webserver in C"
date: 2023-01-16 16:42:00
draft: false
authors: enk
tags: [tutorial, c, webserver]
---

Creating a basic webserver in C is a relatively straightforward process. In this guide, we will walk through the steps of setting up a simple webserver that will output the message "Hello World" in plain text.

<!--truncate-->

## Step 1: Import Required Libraries

To begin, we will need to import the necessary libraries for our webserver. The most commonly used libraries for creating a webserver in C are socket.h and netinet/in.h. These libraries provide the necessary functions for creating and managing network connections.

```c
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
```

## Step 2: Define Constants

Next, we will define some constants that will be used throughout our program. These include the port number that our webserver will listen on, as well as the maximum number of incoming connections that can be queued.

```c
#define PORT 8080
#define MAX_CONNECTIONS 5
```

## 3 Step 3: Create the Server Socket

Now we will create the server socket that will be used to listen for incoming connections. The socket() function is used to create a new socket, and the bind() function is used to associate the socket with a specific port number.

```c
int server_fd = socket(AF_INET, SOCK_STREAM, 0);
struct sockaddr_in address;
address.sin_family = AF_INET;
address.sin_addr.s_addr = INADDR_ANY;
address.sin_port = htons( PORT );
bind(server_fd, (struct sockaddr *)&address, sizeof(address));
```

## Step 4: Listen for Incoming Connections

With our server socket created, we can now listen for incoming connections using the listen() function.

```c
listen(server_fd, MAX_CONNECTIONS);
```

## Step 5: Accept Incoming Connections

Once we have begun listening for connections, we can use the accept() function to accept incoming connections and create a new socket for communicating with the client.

```c
int addrlen = sizeof(address);
int new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen);
```

## Step 6: Send the "Hello World" Response

With our connection established, we can now send the "Hello World" response to the client using the send() function.

```c
char *hello = "Hello World";
send(new_socket , hello , strlen(hello) , 0 );
```

## Step 7: Close the Connection

Finally, we can close the connection using the close() function.

```c
close(new_socket);
```

The above code snippet will create a simple webserver that listens on port 8080, accepts incoming connections and sends "Hello World" as response.

Note that this is a basic example and should be used for learning and testing purposes only. A production-ready webserver would require additional error handling and security measures.

## Final Result

```c
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>

#define PORT 8080
#define MAX_CONNECTIONS 5

int main(int argc, char const *argv[]) {
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in address;
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons( PORT );
    bind(server_fd, (struct sockaddr *)&address, sizeof(address));
    listen(server_fd, MAX_CONNECTIONS);
    int addrlen = sizeof(address);
    int new_socket = accept(server_fd, (struct sockaddr *)&address, (socklen_t*)&addrlen);
    char *hello = "Hello World";
    send(new_socket , hello , strlen(hello) , 0);
    close(new_socket);

    return 0;
}
```
