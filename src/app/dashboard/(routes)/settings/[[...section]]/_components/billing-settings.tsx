"use client";
import { Button, Chip } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
export function BillingSettings() {
  return (
    <div className="space-y-4">
      <div className="bg-content1 text-content1-foreground p-4 rounded-xl flex justify-between items-center">
        <h2>Subscription Status</h2>
        <Chip color="success">Active</Chip>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Billing history</h2>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Date</TableColumn>
            <TableColumn>Price</TableColumn>
            <TableColumn>Item</TableColumn>
            <TableColumn>Card Charged</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>1/1/2024</TableCell>
              <TableCell>$20.00</TableCell>
              <TableCell>Pro Subscription</TableCell>
              <TableCell>**** **** **** 5432</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>2/1/2024</TableCell>
              <TableCell>$20.00</TableCell>
              <TableCell>Pro Subscription</TableCell>
              <TableCell>**** **** **** 5432</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>3/1/2024</TableCell>
              <TableCell>$20.00</TableCell>
              <TableCell>Pro Subscription</TableCell>
              <TableCell>**** **** **** 5432</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>4/1/2024</TableCell>
              <TableCell>$20.00</TableCell>
              <TableCell>Pro Subscription</TableCell>
              <TableCell>**** **** **** 5432</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>5/1/2024</TableCell>
              <TableCell>$20.00</TableCell>
              <TableCell>Pro Subscription</TableCell>
              <TableCell>**** **** **** 5432</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="bg-content1 text-content1-foreground p-4 rounded-xl flex justify-between items-center">
        <h2>Cancel Subscription</h2>
        <Button color="danger">Cancel</Button>
      </div>
    </div>
  );
}
