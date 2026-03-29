## Architecture design
<img width="2229" height="1273" alt="architectural diagram" src="https://github.com/user-attachments/assets/213f85ca-251f-48c4-9211-704f97235826" />

## Overview

This project implements a containerized full-stack application deployed on AWS using
-   **Backend**: Django REST Framework
-   **Frontend**: React
-   **Database**: PostgreSQL
-   **Reverse Proxy**: Nginx
-   **Containerization**: Docker & Docker Compose
-   **Cloud Services**: AWS EC2, S3, IAM

------------------------------------------------------------------------

##  2. Deployment Steps

### Local Development

docker-compose -f docker-compose.dev.yaml --env-file .env.dev up --build

------------------------------------------------------------------------

### AWS Deployment

1.  Launch EC2 (t2.micro, amazon Linux)

2.  Install Docker: sudo yum update sudo apt install docker.io
    docker-compose -y

3.  Clone repo: git clone `<https://github.com/Tharakalx/infrastructure-project>`

4.  Run: docker-compose -f docker-compose.prod.yaml --env-file .env.prod
    up -d --build
 -----------------------------------------------------------------------
##  3. IAM Configuration

-   Use IAM Role attached to EC2
-   Avoid hardcoded credentials
-   Grant least privilege S3 access

------------------------------------------------------------------------

##  4. Security Group Rules

Inbound: - 80 (HTTP) - 443 (HTTPS) - 22 (SSH restricted)

Database (5432) is NOT exposed

------------------------------------------------------------------------
## 💰 5. AWS Free Tier Setup

-   EC2 (t2.micro)
-   S3 bucket

Limitations: - No auto scaling - Single instance

------------------------------------------------------------------------


