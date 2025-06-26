# 🚀 Handyman Website - Self-Hosted Deployment Guide

## Prerequisites

1. **Ubuntu 22.04 Server** (AWS Lightsail, Hetzner, DigitalOcean, etc.)
2. **Domain name** (optional but recommended)
3. **Basic server access** (SSH)

## Step 1: Server Setup

### Connect to your server
```bash
ssh root@your-server-ip
# or
ssh ubuntu@your-server-ip
```

### Install Docker and Docker Compose
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group
sudo usermod -aG docker $USER

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Verify installation
docker --version
docker compose version
```

### Install other prerequisites
```bash
# Install Git, Nginx tools, and Certbot for SSL
sudo apt install git nginx-extras certbot python3-certbot-nginx -y
```

## Step 2: Deploy Your Website

### Clone your project
```bash
# Upload your project files or clone from Git
git clone <your-repo-url> handyman-website
cd handyman-website

# Or upload files via SCP
scp -r /home/ramonc/appihandy/handyman-website/ user@server-ip:/home/user/
```

### Configure domain (if using custom domain)
```bash
# Edit nginx.conf and replace 'your-domain.com' with your actual domain
nano nginx.conf
```

### Deploy the application
```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

## Step 3: SSL Certificate Setup (Let's Encrypt)

### For custom domain:
```bash
# Stop nginx container temporarily
docker-compose stop nginx

# Generate SSL certificate
sudo certbot certonly --standalone -d your-domain.com -d www.your-domain.com

# Copy certificates to project directory
sudo mkdir -p ./ssl
sudo cp /etc/letsencrypt/live/your-domain.com/fullchain.pem ./ssl/
sudo cp /etc/letsencrypt/live/your-domain.com/privkey.pem ./ssl/
sudo chown -R $USER:$USER ./ssl

# Restart all services
docker-compose up -d
```

### For IP-only access:
```bash
# Use the simple HTTP configuration
# Comment out the SSL server block in nginx.conf
# Uncomment the HTTP-only server block
```

## Step 4: Firewall Configuration

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## Step 5: Monitoring and Maintenance

### Check running services
```bash
docker-compose ps
docker-compose logs -f
```

### Update the application
```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose build --no-cache
docker-compose up -d
```

### Database backup
```bash
# Backup SQLite database
cp prisma/dev.db prisma/backup-$(date +%Y%m%d).db
```

### SSL certificate renewal (automatic)
```bash
# Add to crontab for automatic renewal
sudo crontab -e

# Add this line:
0 12 * * * /usr/bin/certbot renew --quiet && docker-compose restart nginx
```

## Troubleshooting

### Check logs
```bash
docker-compose logs handyman-website
docker-compose logs nginx
```

### Restart services
```bash
docker-compose restart
```

### Access database
```bash
docker-compose exec handyman-website npx prisma studio
```

## Cost Estimate

- **DigitalOcean Droplet**: $6/month (1GB RAM, 1 CPU)
- **AWS Lightsail**: $5/month (1GB RAM, 1 CPU)
- **Hetzner Cloud**: €4.15/month (2GB RAM, 1 CPU)
- **Domain**: $10-15/year
- **Total**: ~$5-10/month

## Security Best Practices

1. **Regular updates**: `sudo apt update && sudo apt upgrade`
2. **SSH key authentication**: Disable password auth
3. **Fail2ban**: Install for brute force protection
4. **Backups**: Regular database and file backups
5. **Monitoring**: Set up uptime monitoring

## Support

Your handyman website is now live! Features included:
- ✅ Professional marketing website
- ✅ Lead capture form
- ✅ Project gallery
- ✅ Mobile responsive
- ✅ SSL encryption
- ✅ Database storage
- ✅ Easy updates via Docker
