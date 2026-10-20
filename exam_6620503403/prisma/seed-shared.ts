type Client = any;
export async function seed(client: Client) {
  const dates = Array.from({length:6},(_,i)=>({dateKey:20260101+i*100,fullDate:new Date(Date.UTC(2026,i,1)),day:1,month:i+1,quarter:Math.ceil((i+1)/3),year:2026}));
  for(const row of dates) await client.dimDate.upsert({where:{dateKey:row.dateKey},update:row,create:row});
  const products=[{productId:"P001",productName:"Notebook Pro",category:"Electronics",brand:"Demo"},{productId:"P002",productName:"Office Set",category:"Office",brand:"Demo"},{productId:"P003",productName:"Home Kit",category:"Home",brand:"Demo"}];
  for(const row of products) await client.dimProduct.upsert({where:{productId:row.productId},update:row,create:row});
  const customers=[{customerId:"C001",customerName:"Demo Central",province:"Bangkok",region:"Central"},{customerId:"C002",customerName:"Demo North",province:"Chiang Mai",region:"North"},{customerId:"C003",customerName:"Demo South",province:"Songkhla",region:"South"},{customerId:"C004",customerName:"Demo East",province:"Chonburi",region:"East"}];
  for(const row of customers) await client.dimCustomer.upsert({where:{customerId:row.customerId},update:row,create:row});
  await client.dimStore.upsert({where:{storeId:"S001"},update:{storeName:"Demo Store",province:"Bangkok"},create:{storeId:"S001",storeName:"Demo Store",province:"Bangkok"}});
  const [ps,cs,store]=await Promise.all([client.dimProduct.findMany(),client.dimCustomer.findMany(),client.dimStore.findUniqueOrThrow({where:{storeId:"S001"}})]);
  const amounts=[92000,68000,111000,87000,99000,125000];
  for(let i=0;i<6;i++){ const product=ps[i%ps.length],customer=cs[i%cs.length]; const quantity=10+i; await client.factSale.upsert({where:{orderId_orderItemId:{orderId:`ORD-${i+1}`,orderItemId:"1"}},update:{},create:{orderId:`ORD-${i+1}`,orderItemId:"1",dateKey:dates[i].dateKey,productKey:product.productKey,customerKey:customer.customerKey,storeKey:store.storeKey,quantity,unitPrice:amounts[i]/quantity,discountAmount:0,totalAmount:amounts[i]}}); }
}
