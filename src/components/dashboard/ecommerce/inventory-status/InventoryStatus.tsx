"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Icon } from "@iconify/react"
import Image from "next/image"

export type Inventory = {
  id: string
  product: string
  amount: number
  movement: number
  status: "In Stock" | "Low" | "Out"
  lastUpdated: string
  productImage: string
}

const data: Inventory[] = [
  {
    id: "m5gr84i9",
    product: "Lemon Tart - Box",
    amount: 24,
    movement: 18,
    status: "In Stock",
    lastUpdated: "28 Jun 2025",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png",
  },
  {
    id: "rx3fr28b",
    product: "Raspberry Muffin",
    amount: 6,
    movement: 30,
    status: "Low",
    lastUpdated: "29 Jun 2025",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/2.png",
  },
  {
    id: "lm8dq12a",
    product: "Banana Bread Loaf",
    amount: 0,
    movement: 12,
    status: "Out",
    lastUpdated: "27 Jun 2025",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/3.png",
  },
  {
    id: "cz8kp47n",
    product: "Chocolate Cookies",
    amount: 48,
    movement: 4,
    status: "In Stock",
    lastUpdated: "29 Jun 2025",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/4.png",
  },
  {
    id: "vb6mw19t",
    product: "Vegan Brownies",
    amount: 2,
    movement: 21,
    status: "Low",
    lastUpdated: "28 Jun 2025",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png",
  },
]

export const columns: ColumnDef<Inventory>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => {
      const { product, productImage } = row.original;
      return (
        <div className="flex items-center gap-2">
          <Image src={productImage} alt={product} width={38} height={38} className="rounded-md shrink-0" />
          <p className="text-sm font-medium text-muted whitespace-normal">{product}</p>
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "In Stock",
    cell: ({ row }) => <div className="text-sm font-medium text-muted">{row.getValue("amount")} units</div>,
  },
  {
    accessorKey: "movement",
    header: "Movement",
    cell: ({ row }) => <div className="text-sm font-medium text-muted"> {row.getValue("movement")}/week</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Inventory["status"];
      const statusStyle = {
        "In Stock": "bg-green-100 text-green-700",
        "Low": "bg-yellow-100 text-yellow-800",
        "Out": "bg-red-100 text-red-700",
      }[status];
      return (
        <span className={`text-xs font-medium px-2 py-1 rounded ${statusStyle}`}>{status}</span>
      );
    },
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
    cell: ({ row }) => <div className="text-sm font-medium text-muted">{row.getValue("lastUpdated")}</div>,
  },
]

export function InventoryStatus() {
  const [pagination, setPagination] = React.useState({ pageIndex: 0, pageSize: 5 })
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      pagination,
    },
  })

  return (
    <Card className="text-muted px-0">
      <div className="flex items-center justify-between px-6 pb-4">
        <h5 className="text-lg font-semibold text-dark leading-none">Inventory Status</h5>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search product..."
            value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
            onChange={(e) => table.getColumn("product")?.setFilterValue(e.target.value)}
            className="ps-9 bg-transparent border border-border"
          />
          <Icon icon="uil:search" width={18} height={18} className="text-lightgray absolute top-1/2 -translate-y-1/2 start-3" />
        </div>
      </div>
      <SimpleBar style={{ maxHeight: 220 }} >
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-primary/5">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="first:!px-6 first:!pe-3 !px-3 text-dark font-semibold">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="first:!px-6 first:!pe-3 !px-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center text-base font-medium">
                  No matching product found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      </SimpleBar>
      <div className="flex items-center justify-between px-6 py-4 pb-0">
        <div className="text-muted-foreground text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="xs" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <Button
              key={index}
              variant={index === table.getState().pagination.pageIndex ? "default" : "outline"}
              size="xs"
              onClick={() => table.setPageIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
          <Button variant="outline" size="xs" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </Card>
  )
}
