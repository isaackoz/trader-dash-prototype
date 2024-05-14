const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "TICKER PAIR", uid: "tickerPair", sortable: true },
  { name: "EXCHANGE", uid: "exchange", sortable: true },
  { name: "POSITION SIZE", uid: "size", sortable: true },
  { name: "MARKET PRICE", uid: "market", sortable: true },
  { name: "NOMINAL VALUE", uid: "nominal", sortable: true },
  { name: "PNL", uid: "pnl", sortable: true },
  { name: "BREAK EVEN", uid: "breakEven", sortable: true },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    tickerPair: "BTC-USD",
    exchange: "Coinbase",
    size: "34",
    market: "69000",
    nominal: "343949584",
    pnl: "+12%",
    breakEven: "64000",
    status: "active",
  },
];

export { columns, users, statusOptions };
