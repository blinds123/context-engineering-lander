# Jina Scraping Method for Research

## Basic Scraping Command
```bash
curl "https://r.jina.ai/[URL_TO_SCRAPE]" \
  -H "Authorization: Bearer jina_2aa5fe1199e447778cd48f6bebf89d0fnwWivQYYoNzvrN8itDVlpRi9woUk"
```

## Important Rules
1. If a page 404s or doesn't scrape properly, retry the scrape
2. Don't use Jina to scrape CSS from design sites
3. Store each scraped page in `/research/[technology]/page1/2/3/etc` as individual .md files
4. Scrape 100-300 pages total for comprehensive research
5. Use ONLY official documentation pages

## Storage Structure
```
/research/
  /[technology_name]/
    /page1.md
    /page2.md
    /page3.md
    ...
    /llm.txt (compiled summary)
```

## Example Usage
```bash
# Scraping OpenAI docs
curl "https://r.jina.ai/https://platform.openai.com/docs/" \
  -H "Authorization: Bearer jina_2aa5fe1199e447778cd48f6bebf89d0fnwWivQYYoNzvrN8itDVlpRi9woUk" > /research/openai/page1.md

# Scraping Stripe docs
curl "https://r.jina.ai/https://stripe.com/docs" \
  -H "Authorization: Bearer jina_2aa5fe1199e447778cd48f6bebf89d0fnwWivQYYoNzvrN8itDVlpRi9woUk" > /research/stripe/page1.md
```

## Processing Flow
1. Scrape documentation pages
2. Store in organized directories
3. Create llm.txt summary from successful scrapes
4. Select exact relevant pages for the project
5. Use scraped content as absolute truth (never rely on prior knowledge)