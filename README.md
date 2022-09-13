# docker-flask

<!-- omit in toc -->
## Table of Contents

1. [Build the Image](#build-the-image)
1. [Run the Container](#build-the-container)
1. [Access via Browser](#access-via-browsers)

## Command Reference

### 1. Build the Image

```bash
docker build -t flask-image .
```

### 2. Run the Container

```bash
docker run -p 5001:5000 --rm --name flask-container flask-image
```

### 3. Access via Browser

http://localhost:5001

# Coffee Website

When I tell people that I worked in coffee for 3 years, I often get asked "how should I brew my coffee?"  There is no right answer for everyone, but every coffee drinker can find that answer. Hopefully this sight helps someone find that answer for themselves.

## Tools Used

- HTML
- CSS
- JS
- Docker

## Problems Solved

Brewing coffee is simple, brewing good coffee is complicated. This website provides help to those looking to start brewing good coffee at home.

## Author
* **Lartg**
