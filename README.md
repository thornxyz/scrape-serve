## Features

- Scrapes web data from a provided URL using Puppeteer.
- Saves the scraped data in JSON format.
- Exposes the scraped data via a simple API built with Python.
- Fully Dockerized for easy setup and deployment.

## Tech Stack

- **Puppeteer**: Headless Chrome for web scraping.
- **Python**: Backend server to serve the scraped data.
- **Docker**: Containerization for easy deployment and isolation.

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/thornxyz/scrape-serve.git
cd scrape-serve
```

2. **Build the Docker image:**

Make sure you have Docker installed, then run the following command to build the image. You can pass a URL to scrape as a build argument.

```bash
docker build --build-arg SCRAPE_URL="https://quotes.toscrape.com" -t scraper-server .
```

3. **Run the Docker container:**

To start the application, run the following command:

```bash
docker run -p 5000:5000 scraper-server
```

This will start the application, and the data will be accessible on http://localhost:5000

## Endpoints

### GET `/scraped-data`

This endpoint returns the JSON data scraped from https://quotes.toscrape.com
