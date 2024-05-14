"use client";

import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";

const connections = [
  {
    id: "coinbase",
    name: "Coinbase",
    letter: "C",
  },
  {
    id: "binance",
    name: "Binance",
    letter: "B",
  },
  {
    id: "traderdash",
    name: "TraderDash",
    letter: "T",
  },
];

export function ConnectionsPage() {
  return (
    <div className="grid grid-cols-3 gap-12">
      {connections.map((connection) => (
        <Card key={connection.id}>
          <CardBody>
            <div className="flex items-center space-x-4">
              <Avatar showFallback name={connection.letter} />
              <h2 className="text-xl">{connection.name}</h2>
            </div>
            <div className="mt-4 flex w-full justify-end">
              <Button>View Details &rarr;</Button>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
