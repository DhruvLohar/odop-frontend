/**
 * v0 by Vercel.
 * @see https://v0.dev/t/u3pvHg2804a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 grid gap-6 p-4 md:p-6">
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Enter order number" className="pl-8 rounded-md bg-background" />
          </div>
          <Button>Search</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 border-2 border-gray-100">
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Order #12345</CardTitle>
              <Badge variant="secondary">Fulfilled</Badge>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-muted-foreground">Order Date</div>
                <div>June 15, 2023</div>
              </div>
              <div className="grid gap-1">
                <div className="text-muted-foreground">Items</div>
                <ul className="grid gap-2">
                  <li className="flex items-center justify-between">
                    <div>Acme Lamp x 2</div>
                    <div>$99.98</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>Acme Filters x 1</div>
                    <div>$49.99</div>
                  </li>
                </ul>
              </div>
              <div className="grid gap-1">
                <div className="text-muted-foreground">Total</div>
                <div className="font-semibold">$149.97</div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 border-2 border-gray-100">
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Shipping Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-1">
                <div className="text-muted-foreground">Shipping Address</div>
                <address className="not-italic">
                  <div>John Doe</div>
                  <div>123 Main St.</div>
                  <div>Anytown, CA 12345</div>
                </address>
              </div>
              <div className="grid gap-1">
                <div className="text-muted-foreground">Shipping Method</div>
                <div>Standard Shipping</div>
              </div>
              <div className="grid gap-1">
                <div className="text-muted-foreground">Tracking Number</div>
                <div>
                  <Link href="#" className="underline" prefetch={false}>
                    1Z999AA1234567890
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="p-6 border-2 border-gray-100">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Order History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order #</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="font-medium underline" prefetch={false}>
                      12345
                    </Link>
                  </TableCell>
                  <TableCell>June 15, 2023</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Fulfilled</Badge>
                  </TableCell>
                  <TableCell>$149.97</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="font-medium underline" prefetch={false}>
                      12344
                    </Link>
                  </TableCell>
                  <TableCell>June 10, 2023</TableCell>
                  <TableCell>
                    <Badge variant="outline">Pending</Badge>
                  </TableCell>
                  <TableCell>$99.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Link href="#" className="font-medium underline" prefetch={false}>
                      12343
                    </Link>
                  </TableCell>
                  <TableCell>June 5, 2023</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Fulfilled</Badge>
                  </TableCell>
                  <TableCell>$199.98</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


