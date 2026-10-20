const tables = [
  ["fact_sales", "One row per order item", "quantity, unit_price, discount_amount, total_amount"],
  ["dim_date", "One row per calendar date", "day, month, quarter, year"],
  ["dim_product", "One row per product", "name, category, brand"],
  ["dim_customer", "One row per customer", "name, province, region"],
  ["dim_store", "One row per store", "name, province"],
];
export default function DatabaseDesign(){return <><h2 className="text-3xl font-black">Database design</h2><p className="muted mt-2">Demo star schema. Replace it only after tracing every exam requirement.</p><div className="panel mt-6 overflow-auto"><table className="w-full text-left text-sm"><thead><tr className="border-b border-[#20344f]">{["Table","Grain","Key attributes"].map(x=><th className="p-4" key={x}>{x}</th>)}</tr></thead><tbody>{tables.map(r=><tr className="border-b border-[#20344f] last:border-0" key={r[0]}>{r.map(c=><td className="p-4" key={c}>{c}</td>)}</tr>)}</tbody></table></div></>}
