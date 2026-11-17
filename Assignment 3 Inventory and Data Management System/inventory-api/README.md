# Inventory and Data Management System

## Setup
```
npm install
cp .env.example .env     # set MONGO_URI
npm run dev
```

## Endpoints
| Method | URL | Purpose |
|---|---|---|
| POST | /api/products | Create product |
| GET | /api/products | List (filter, sort, paginate) |
| GET | /api/products/:id | Single product |
| PUT | /api/products/:id | Update details |
| PATCH | /api/products/:id/stock | Body `{"change": 10}` restock / `{"change": -3}` sale |
| DELETE | /api/products/:id | Delete |
| GET | /api/products/low-stock | quantity <= reorderLevel |
| GET | /api/products/summary | Category-wise aggregation |

Query params for list: `category, supplier, search, minPrice, maxPrice, sort=price,-quantity, page, limit`
