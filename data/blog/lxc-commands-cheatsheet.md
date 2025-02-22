---
title: "LXC Commands CheatSheet"
date: "2025-02-22"
summary: "Learn the essential LXC commands for managing Linux containers"
tags: ['LXD', 'Linux', 'Containers', 'Ubuntu', 'DevOps', 'SysAdmin']
authors: ['default']
---

# **LXC Commands Cheat Sheet: A Comprehensive Guide**

Linux Containers (LXC) provide lightweight virtualization, enabling the running of multiple isolated Linux systems on a single host. In this guide, we dive deep into the most essential LXC commands on Ubuntu 24.04, explaining each one in detail to empower you in efficiently managing your containers.

---

## 1. `lxc launch`

### Detailed Explanation:
The `lxc launch` command creates and starts a new container from an existing image. It combines the creation (`lxc init`) and start (`lxc start`) processes into one command, making it a convenient way to get a container running quickly.

**Syntax:**
```bash
lxc launch <image> <container-name>
```
- `<image>`: The image to use for the container. You can list available images using `lxc image list`.
- `<container-name>`: A unique name for the new container.

**Example:**
```bash
lxc launch ubuntu:24.04 mycontainer
```
This command creates and starts a container named `mycontainer` using the Ubuntu 24.04 image.

---

## 2. `lxc list`

### Detailed Explanation:
Displays a list of all containers, including their current state, IP addresses, and other relevant information. It's useful for getting an overview of the containers running on your host.

**Syntax:**
```bash
lxc list
```

**Example:**
```bash
lxc list
```
This command provides a table of all containers, showing their name, status, IP addresses, and other details.

---

## 3. `lxc stop`

### Detailed Explanation:
Stops a running container. This is useful when you need to shut down a container for maintenance or resource management.

**Syntax:**
```bash
lxc stop <container-name>
```

- `<container-name>`: The name of the container you want to stop.

**Example:**
```bash
lxc stop mycontainer
```
This command stops the container named `mycontainer`.

---

## 4. `lxc start`

### Detailed Explanation:
Starts a stopped container. This is the counterpart to `lxc stop`, allowing you to resume operations on a previously halted container.

**Syntax:**
```bash
lxc start <container-name>
```

**Example:**
```bash
lxc start mycontainer
```
This starts the container named `mycontainer`.

---

## 5. `lxc exec`

### Detailed Explanation:
Executes a command inside a running container. It is similar to SSH but is more efficient since it does not require an SSH server within the container.

**Syntax:**
```bash
lxc exec <container-name> -- <command>
```

- `<container-name>`: The name of the container.
- `<command>`: The command you want to run inside the container.

**Example:**
```bash
lxc exec mycontainer -- bash
```
This opens an interactive bash shell inside `mycontainer`.

---

## 6. `lxc delete`

### Detailed Explanation:
Deletes a stopped container permanently. Be cautious as this action is irreversible.

**Syntax:**
```bash
lxc delete <container-name>
```

**Example:**
```bash
lxc delete mycontainer
```
This deletes the container named `mycontainer`.

---

## 7. `lxc info`

### Detailed Explanation:
Displays detailed information about a specific container, including its status, resource usage, network configuration, and more.

**Syntax:**
```bash
lxc info <container-name>
```

**Example:**
```bash
lxc info mycontainer
```
This shows comprehensive details about `mycontainer`.

---

## 8. `lxc snapshot`

### Detailed Explanation:
Creates a snapshot of the container's current state, enabling you to roll back to this state later if needed.

**Syntax:**
```bash
lxc snapshot <container-name> <snapshot-name>
```

- `<container-name>`: The name of the container.
- `<snapshot-name>`: A unique name for the snapshot.

**Example:**
```bash
lxc snapshot mycontainer initial-setup
```
This creates a snapshot named `initial-setup` for `mycontainer`.

---

## 9. `lxc restore`

### Detailed Explanation:
Restores a container to a previously created snapshot. This is useful for reverting changes or recovering from errors.

**Syntax:**
```bash
lxc restore <container-name> <snapshot-name>
```

**Example:**
```bash
lxc restore mycontainer initial-setup
```
This restores `mycontainer` to the state saved in the `initial-setup` snapshot.

---

## 10. `lxc config`

### Detailed Explanation:
Manages container configurations, including resource limits and device mappings. It allows you to modify the settings of a container dynamically.

**Syntax:**
```bash
lxc config set <container-name> <key> <value>
```

- `<container-name>`: The name of the container.
- `<key>`: The configuration option to change.
- `<value>`: The new value for the configuration option.

**Example:**
```bash
lxc config set mycontainer limits.cpu 2
```
This sets the CPU limit of `mycontainer` to 2 cores.

---

## Conclusion

These LXC commands are fundamental for efficiently managing containers on Ubuntu 24.04. Mastering them enhances your system administration and DevOps skills, making it easier to deploy and maintain isolated environments for development and production.

---

## Related Posts
- [Understanding LXD Containers: An Introduction](#)
- [Installing LXD on Ubuntu 24.04](#)
- [LXD Command Cheatsheet](#)

---

## References
- [LXC Documentation](https://linuxcontainers.org/lxc/introduction/)
- [Ubuntu LXC Guide](https://help.ubuntu.com/community/LXC)

---

## Join the Discussion
Have questions or tips about LXC commands? Share your thoughts in the comments below!