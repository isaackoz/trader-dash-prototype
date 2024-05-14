"use client";
import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { useWebSocket } from "@/websocket/websocket-provider";

export function OverViewPage() {
  return (
    <div className="w-full">
      {/*  */}
      <div className="grid grid-cols-2 gap-x-12">
        <Card className="bg-content4 text-content4-foreground h-full">
          <CardHeader className="text-2xl font-bold">
            Portfolio Overview
          </CardHeader>
          <CardBody className="h-[400px]">
            <MyResponsivePie data={data} />
          </CardBody>
        </Card>
        <div className="space-y-4 h-full">
          <Card>
            <CardHeader className="text-2xl font-bold text-content4-foreground">
              Portfolio Value
            </CardHeader>
            <CardBody>
              <ValueTotal />
            </CardBody>
          </Card>
          <Card className="h-[400px]">
            <CardHeader className="text-2xl font-bold">
              Recent Trades
            </CardHeader>
            <CardBody className="h-full">
              <RecentTradesTable />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

const tradesData = [
  {
    id: "btc",
    ticker: "BTC-USDT",
    entryPrice: 34000,
    quantity: 4,
    status: "Open",
  },
  {
    id: "ltc",
    ticker: "LTC-USDT",
    entryPrice: 150,
    quantity: 10,
    status: "Closed",
  },
  {
    id: "eth",
    ticker: "ETH-USDT",
    entryPrice: 2000,
    quantity: 2,
    status: "Open",
  },
  {
    id: "grp",
    ticker: "GRP-USDT",
    entryPrice: 2,
    quantity: 1000,
    status: "Open",
  },
  {
    id: "abc",
    ticker: "ABC-USDT",
    entryPrice: 0.5,
    quantity: 2000,
    status: "Closed",
  },
];

const RecentTradesTable = () => {
  return (
    <Table aria-label="Recent Trades" className="h-full">
      <TableHeader>
        <TableColumn>TICKER</TableColumn>
        <TableColumn>ENTRY</TableColumn>
        <TableColumn>QUANTITY</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        {tradesData.map((trade) => (
          <TableRow key={trade.id}>
            <TableCell>{trade.ticker}</TableCell>
            <TableCell>{trade.entryPrice}</TableCell>
            <TableCell>{trade.quantity}</TableCell>
            <TableCell>{trade.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const ValueTotal = () => {
  const { data } = useWebSocket();
  // Hard coded values for demonstration purposes
  const [val, setVal] = useState<number | undefined>();
  const quantity = 32;
  useEffect(() => {
    const valToSet = parseFloat(data["BTC-USD"]?.price) * quantity;
    setVal(valToSet);
  }, [data]);

  return (
    <>
      {!val ? (
        <Skeleton className="w-64 h-12 rounded-full" />
      ) : (
        <h2 className="text-3xl font-semibold">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(val)}
        </h2>
      )}
    </>
  );
};

const data = [
  {
    id: "btc",
    label: "btc",
    value: 490,
    color: "hsl(233, 70%, 50%)",
  },
  {
    id: "ltc",
    label: "ltc",
    value: 275,
    color: "hsl(75, 70%, 50%)",
  },
  {
    id: "eth",
    label: "eth",
    value: 262,
    color: "hsl(58, 70%, 50%)",
  },
  {
    id: "grp",
    label: "grp",
    value: 165,
    color: "hsl(116, 70%, 50%)",
  },
  {
    id: "abc",
    label: "abc",
    value: 178,
    color: "hsl(314, 70%, 50%)",
  },
];

type Data = typeof data;

const MyResponsivePie = ({ data }: { data: Data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 20, right: 40, bottom: 60, left: 40 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#fff"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["brighter", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "ruby",
        },
        id: "dots",
      },
      {
        match: {
          id: "c",
        },
        id: "dots",
      },
      {
        match: {
          id: "go",
        },
        id: "dots",
      },
      {
        match: {
          id: "python",
        },
        id: "dots",
      },
      {
        match: {
          id: "scala",
        },
        id: "lines",
      },
      {
        match: {
          id: "lisp",
        },
        id: "lines",
      },
      {
        match: {
          id: "elixir",
        },
        id: "lines",
      },
      {
        match: {
          id: "javascript",
        },
        id: "lines",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#fff",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);
