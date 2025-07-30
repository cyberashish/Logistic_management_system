"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table"

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
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 637,
    status: "success",
    email: "ken99@example.com",
    customerName: "Leonie Green",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/6.png",
    quantity: 10,
    orderDate: "20 Sep - 03.00AM",
    product: "Decorative Plants",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png"
    
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "pending",
    email: "Abe45@example.com",
    customerName: "Peter White",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/8.png",
    quantity: 12,
    orderDate: "12 Mar - 08.12AM",
    product: "Sticky Calender",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/2.png"
  },
  {
    id: "3u1reuv4",
    amount: 520,
    status: "success",
    email: "Abe45@example.com",
    customerName: "Ruby Yang",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/7.png",
    quantity: 5,
    orderDate: "Feb 15 - 10.00AM",
    product: "Crystal Mug",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/3.png"
  },
  {
    id: "3u1reuv4",
    amount: 810,
    status: "failed",
    email: "Abe45@example.com",
    customerName: "Visha Long",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/8.png",
    quantity: 15,
    orderDate: "Jun 10 - 12.30AM",
    product: "Motion Table Lamp",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/4.png"
  },

  {
    id: "3u1reucsdv4",
    amount: 242,
    status: "pending",
    email: "Abe45@example.com",
    customerName: "Peter White",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/8.png",
    quantity: 12,
    orderDate: "12 Mar - 08.12AM",
    product: "Sticky Calender",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/2.png"
  },
  {
    id: "3u1reuv4",
    amount: 810,
    status: "failed",
    email: "Abe45@example.com",
    customerName: "Visha Long",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/8.png",
    quantity: 15,
    orderDate: "Jun 10 - 12.30AM",
    product: "Motion Table Lamp",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/4.png"
  },
  {
    id: "m5gr84ixd9",
    amount: 637,
    status: "success",
    email: "ken99@example.com",
    customerName: "Leonie Green",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/6.png",
    quantity: 10,
    orderDate: "20 Sep - 03.00AM",
    product: "Decorative Plants",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/1.png"
    
  },
  {
    id: "3u1redcsuv4",
    amount: 520,
    status: "success",
    email: "Abe45@example.com",
    customerName: "Ruby Yang",
    customerImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/user/7.png",
    quantity: 5,
    orderDate: "Feb 15 - 10.00AM",
    product: "Crystal Mug",
    productImage: "https://admin.pixelstrap.net/mofi/assets/images/dashboard-3/3.png"
  },
]

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string,
  customerName: string,
  customerImage: string,
  quantity: number,
  orderDate: string,
  product: string,
  productImage: string
}

export const columns: ColumnDef<Payment>[] = [
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
    header: "Recent Orders",
    enableSorting: true,
    enableColumnFilter: true,
    cell: ({ row }) => {
      const product = row.original.product;
      const productImage = row.original.productImage;
      return (
        <div className="flex items-center gap-2">
          <Image src={productImage} alt="" width={38} height={38} className="rounded-md shrink-0" />
          <p className="text-sm font-medium text-muted min-w-0 whitespace-normal">{product}</p>
        </div>
      )
    },
  },
  {
    accessorKey: "orderDate",
    header: "Order Date",
    cell: ({ row }) => <div className="text-sm font-medium text-muted">{row.getValue("orderDate")}</div> ,
  },
  {
    accessorKey: "quantity",
    header: "QTY",
    cell: ({ row }) => <div className="text-sm font-medium text-muted">{row.getValue("quantity")}</div> ,
  },
  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => {
      const customerName = row.original.customerName;
      const customerImage = row.original.customerImage;
      return (
        <div className="flex items-center gap-2">
          <Image src={customerImage} alt="" width={38} height={38} className="rounded-md shrink-0" />
          <p className="text-sm font-medium text-muted whitespace-normal">{customerName}</p>
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Price",
    cell: ({ row }) => <div className="text-sm font-medium text-muted">{`$${row.getValue("amount")}`}</div> ,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <span className={`text-[13px] leading-none font-medium py-1.5 rounded-md px-4 ${status === "success" ? 'bg-success/20 text-success' : status==="pending" ? 'bg-warning/20 text-warning' : status === "failed" ? 'bg-error/20 text-error' : null}`}>{`${row.getValue("status")}`}</span>
      )
    } ,
  },
]

export function RecentOrder() {
  const [pagination , setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 4
  })
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(), 
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    },
  })

  return (
    <Card className="text-muted px-0" >
     <div className="flex items-center justify-between px-6 pb-4">
        <h5 className="text-lg font-semibold text-dark leading-none">Recent Orders</h5>
            <div className="relative">
            <Input type="product" value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("product")?.setFilterValue(event.target.value)
          } placeholder="Search order here..." className="ps-9 bg-transparent border border-border" />
            <Icon icon="uil:search" width={18} height={18} className="text-lightgray absolute top-1/2 -translate-y-1/2 start-3" />
            </div>
     </div>
    <div className="w-full">
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-primary/5" >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="first:!px-6 first:!pe-3 !px-3 text-dark font-semibold" >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="first:!px-6 first:!pe-3 !px-3" >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-base font-medium"
                >
                  No matching product found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 p-4 pb-0">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2 flex items-center">
  <Button
    variant="outline"
    size="xs"
    onClick={() => table.previousPage()}
    disabled={!table.getCanPreviousPage()}
  >
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

  <Button
    variant="outline"
    size="xs"
    onClick={() => table.nextPage()}
    disabled={!table.getCanNextPage()}
  >
    Next
  </Button>
</div>

      </div>
    </div>
    </Card>
  )
}
