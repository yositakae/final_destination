# Requirements Traceability Matrix

| ID | Description | Source fields | Tables | Measures | Dimensions | Formula | Filters | SQL | API | UI | Expected | Verification | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DEMO-01 | Total sales revenue | quantity, unit_price, discount_amount | fact_sales | total_amount | date/product/customer | SUM(total_amount) | year/month/category/region | repository aggregate | GET /api/analytics | KPI card | 582,000 demo | unit + DB parity test | Complete |
| DEMO-02 | Monthly revenue | full_date, total_amount | fact_sales, dim_date | total_amount | month | SUM by month | same | grouped query | GET /api/analytics | Line chart | six points | unit + visual check | Complete |
| EXAM-* | Replace with paper requirements | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | TBD | Pending paper |
