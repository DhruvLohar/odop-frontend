import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="grid grid-cols-2 gap-6 w-full mx-auto p-4 sm:p-6">
      <div className="col-span-2 sm:col-span-1">
        <h2 className="text-black text-2xl font-semibold mb-4">My orders</h2>
        <Card className="h-full w-full p-6 border-2 border-gray-100">
          <CardContent className="grid grid-cols-[1fr_auto] gap-4 items-center">
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
               
                <div className="grid gap-1">
                  <div className="font-semibold">Acme Inc.</div>
                  <div className="text-sm text-muted-foreground">Placed on May 15, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PackageIcon className="w-4 h-4" />
                <span>Order #OE31b70H</span>
              </div>
            </div>
            <Link href={"/ordertracking"}>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                View Order
              </Button>
              </Link>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <Card className="h-full p-6 border-2 border-gray-100">
          <CardContent className="grid grid-cols-[1fr_auto] gap-4 items-center">
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
                
                <div className="grid gap-1">
                  <div className="font-semibold">Acme Inc.</div>
                  <div className="text-sm text-muted-foreground">Placed on April 22, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PackageIcon className="w-4 h-4" />
                <span>Order #OE31b70G</span>
              </div>
            </div>
            <Link href={"/ordertracking"}>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                View Order
              </Button>
              </Link>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <Card className="h-full p-6 border-2 border-gray-100">
          <CardContent className="grid grid-cols-[1fr_auto] gap-4 items-center">
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
          
                <div className="grid gap-1">
                  <div className="font-semibold">Acme Inc.</div>
                  <div className="text-sm text-muted-foreground">Placed on March 10, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PackageIcon className="w-4 h-4" />
                <span>Order #OE31b70F</span>
              </div>
            </div>
            <Link href={"/ordertracking"}>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                View Order
              </Button>
              </Link>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <Card className="h-full p-6 border-2 border-gray-100">
          <CardContent className="grid grid-cols-[1fr_auto] gap-4 items-center">
            <div className="grid gap-2">
              <div className="flex items-center gap-3">
                
                <div className="grid gap-1">
                  <div className="font-semibold">Acme Inc.</div>
                  <div className="text-sm text-muted-foreground">Placed on February 28, 2024</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PackageIcon className="w-4 h-4" />
                <span>Order #OE31b70E</span>
              </div>
            </div>
            <Link href={"/ordertracking"}>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                View Order
              </Button>
              </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}
