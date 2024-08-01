/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WIirifaZ5xl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-10">
      <div className="flex items-center gap-6 mb-8">
        <div className="relative bg-black h-24 w-24 md:h-32 rounded-full md:w-32">
          
        </div>
        <div className="flex flex-col space-y-4 ">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-black md:text-3xl">Jane Smith</h1>
            <div className="flex space-x-4">
              <button className="bg-blue-900 h-9 text-white text-sm w-auto px-8 rounded-lg flex justify-center items-center ">
                View Brochure
              </button>
              <button className="bg-blue-900 h-9 text-white text-sm w-auto px-8 rounded-lg flex justify-center items-center ">
                Contact
              </button>
            </div>
          </div>
          
          <p className="text-muted-foreground md:text-lg">
            Ecommerce Seller at Acme Marketplace. Passionate about providing high-quality products and excellent
            customer service.
          </p>
        </div>
      </div>
      <div className="grid gap-6">
        <div>
          <h2 className="text-lg text-black font-semibold mb-2">About</h2>
          <div className="grid gap-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5" />
              <span>Seller since: January 2020</span>
            </div>
            <div className="flex items-center gap-2">
              <LocateIcon className="w-5 h-5" />
              <span>Based in Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="w-5 h-5" />
              <span>Ecommerce Seller at Acme Marketplace</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5" />
              <span>Interests: Fashion, Home Decor, Sustainability</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-black font-semibold mb-2">Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-gray-100">
              <CardHeader>
                <CardTitle>Organic Cotton T-Shirt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full">
                  <img
                    src="/districtArtisanImage1.png"
                    alt="Product Image"
                    width={300}
                    height={300}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">Soft and sustainable organic cotton t-shirt.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">$25.99</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-gray-100">
              <CardHeader>
                <CardTitle>Handmade Ceramic Vase</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full">
                  <img
                    src="/districtArtisanImage1.png"
                    alt="Product Image"
                    width={300}
                    height={300}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">Unique and beautiful handmade ceramic vase.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">$39.99</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6 border-2 border-gray-100">
              <CardHeader>
                <CardTitle>Bamboo Cutting Board</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-40 w-full">
                  <img
                    src="/districtArtisanImage1.png"
                    alt="Product Image"
                    width={300}
                    height={300}
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-muted-foreground">Durable and eco-friendly bamboo cutting board.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-semibold">$19.99</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-black font-semibold mb-2">Previous Sales</h2>
          <div className="grid gap-4 text-muted-foreground">
            <div>
              <h3 className="font-medium">Organic Cotton T-Shirt</h3>
              <p>Sold 250 units in the last 6 months</p>
            </div>
            <div>
              <h3 className="font-medium">Handmade Ceramic Vase</h3>
              <p>Sold 100 units in the last 3 months</p>
            </div>
            <div>
              <h3 className="font-medium">Bamboo Cutting Board</h3>
              <p>Sold 150 units in the last 4 months</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg text-black font-semibold mb-2">Product Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative h-32 w-full">
              <img
                src="/districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="/districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
            <div className="relative h-32 w-full">
              <img
                src="districtArtisanImage1.png"
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}