# AWS-and-docker-project-
# Interactive Resume Website - Docker Deployment on AWS EC2

## Project Overview

This project is a responsive personal portfolio/resume website built using:

* HTML5
* CSS3
* JavaScript

The website showcases:

* About Me section
* Technical Skills
* Education Timeline
* Training & Experience
* Contact Information

## Project Structure

```bash
.
├── index.html
├── style.css
├── script.js
├── Dockerfile
└── README.md
```

## Prerequisites

Before deployment, ensure:

* AWS Account
* EC2 Instance (Ubuntu 24.04 LTS recommended)
* Docker installed
* Security Group allows:

  * SSH (22)
  * HTTP (80)
  * HTTPS (443) (optional)

---

## Step 1: Launch EC2 Instance

1. Log in to the AWS Console.
2. Navigate to EC2 Dashboard.
3. Launch a new instance:

   * OS: Ubuntu Latest LTS
   * Instance Type: t2.micro (Free Tier Eligible)
4. Configure Security Group:

   * Port 22 → SSH
   * Port 80 → HTTP
   * port 8080 → Custon TCP
5. Download Key Pair (.pem file).

Connect to the server:

```bash
ssh -i mykey.pem ubuntu@<EC2_PUBLIC_IP>
```

---

## Step 2: Install Docker

Update packages:

```bash
sudo apt update && sudo apt upgrade -y
```

Install Docker:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

Add current user to Docker group:

```bash
sudo usermod -aG docker ubuntu
newgrp docker
```

Verify installation:

```bash
docker --version
```

---

## Step 3: Create Dockerfile

Create a file named `Dockerfile`:

```dockerfile
FROM nginx: alpine

COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80
```

Build Docker image:

```bash
docker build -t resume-website.
```

---

## Step 4: Run Docker Container

Start container:

```bash
docker run -d \
--name resume-app \
-p 80:80 \
resume-website
```

Verify:

```bash
docker ps
```

---

## Step 5: Access Website

Open browser:

```text
http://<EC2_PUBLIC_IP>
```

Your portfolio website should now be live.

---

## Docker Commands

View running containers:

```bash
docker ps
```

Stop container:

```bash
docker stop resume-app
```

Start container:

```bash
docker start resume-app
```

Remove container:

```bash
docker rm -f resume-app
```

Rebuild image:

```bash
docker build -t resume-website.
```

---

## Optional: Run Container Automatically

Enable Docker service:

```bash
sudo systemctl enable docker
```

Run container with restart policy:

```bash
docker run -d \
--restart always \
--name resume-app \
-p 8080:80 \
resume-website
```

---

## Future Improvements

* Add custom domain name.
* Configure HTTPS using Let's Encrypt.
* Deploy using Docker Compose.
* Integrate CI/CD pipeline using GitHub Actions.
* Host Docker image on Docker Hub or AWS ECR.

## Author

**Mehul Lohiya**

* DevOps & Cloud Enthusiast
* AWS | Linux | Docker | Azure DevOps
* LinkedIn: https://www.linkedin.com/in/Mehul-Lohiya

