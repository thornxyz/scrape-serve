## Features

- Scrapes web data from a provided URL using Puppeteer.
- Saves the scraped data in JSON format.
- Exposes the data via a lightweight Python API.
- Fully Dockerized for ease of setup and deployment.

---

## Tech Stack

- **Puppeteer** – Used for headless browser-based scraping.
- **Python (Flask)** – Serves the scraped data through a REST API.
- **Docker** – Handles containerization and environment isolation.

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/thornxyz/scrape-serve.git
cd scrape-serve
```

### 2. Build the Docker image

Use the following command to build the Docker image, passing the URL to scrape as a build argument:

```bash
docker build --build-arg SCRAPE_URL="https://quotes.toscrape.com" -t scraper-server .
```

### 3. Run the container

Start the application and expose the server on port 5000:

```bash
docker run -p 5000:5000 scraper-server
```

Access the API at: `http://localhost:5000`

---

## API Endpoints

### `GET /`

Returns the data scraped from the specified URL in JSON format.

---
