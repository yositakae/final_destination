-- PostgreSQL equivalent; use $1, $2 placeholders in application queries.
WITH monthly AS (
  SELECT d.year,d.month,SUM(f.total_amount) revenue,
    LAG(SUM(f.total_amount)) OVER (ORDER BY d.year,d.month) previous_revenue
  FROM fact_sales f JOIN dim_date d ON d.date_key=f.date_key
  GROUP BY d.year,d.month
)
SELECT *,100*(revenue-previous_revenue)/NULLIF(previous_revenue,0) growth_pct,
  SUM(revenue) OVER (ORDER BY year,month) running_total
FROM monthly ORDER BY year,month;

SELECT p.category,SUM(f.total_amount) revenue,
  DENSE_RANK() OVER (ORDER BY SUM(f.total_amount) DESC) revenue_rank
FROM fact_sales f JOIN dim_product p ON p.product_key=f.product_key
GROUP BY p.category HAVING SUM(f.total_amount)>0;
