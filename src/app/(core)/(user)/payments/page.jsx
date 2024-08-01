"use client"
import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Dialog,DialogClose ,DialogTrigger, DialogContent } from '@/components/ui/dialog';
import Link from 'next/link';

export default function Component() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    cvv: '',
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, expirationMonth, expirationYear, cvv } = formData;
    if (cardNumber && expirationMonth && expirationYear && cvv) {
      setIsDialogOpen(true);
    } else {
      alert('Please fill in all the fields');
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 p-6 md:p-10 bg-background rounded-xl shadow-lg">
      <div className="grid gap-6">
        <div>
          <h2 className="text-2xl text-black font-bold">Payment</h2>
          <p className="text-muted-foreground">Enter your payment information to complete your order.</p>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label className="text-black" htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              name="cardNumber"
              className="text-black"
              type="text"
              placeholder="0000 0000 0000 0000"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label className="text-black" htmlFor="expiration">Expiration Date</Label>
              <div className="grid sm:grid-cols-2 gap-2">
                <Select value={formData.expirationMonth} onValueChange={(value) => handleSelectChange('expirationMonth', value)}>
                  <SelectTrigger className="text-black" id="expiration-month">
                    <SelectValue placeholder="MM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">01</SelectItem>
                    <SelectItem value="02">02</SelectItem>
                    <SelectItem value="03">03</SelectItem>
                    <SelectItem value="04">04</SelectItem>
                    <SelectItem value="05">05</SelectItem>
                    <SelectItem value="06">06</SelectItem>
                    <SelectItem value="07">07</SelectItem>
                    <SelectItem value="08">08</SelectItem>
                    <SelectItem value="09">09</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="11">11</SelectItem>
                    <SelectItem value="12">12</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={formData.expirationYear} onValueChange={(value) => handleSelectChange('expirationYear', value)}>
                  <SelectTrigger className="text-black" id="expiration-year">
                    <SelectValue placeholder="YY" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">23</SelectItem>
                    <SelectItem value="2024">24</SelectItem>
                    <SelectItem value="2025">25</SelectItem>
                    <SelectItem value="2026">26</SelectItem>
                    <SelectItem value="2027">27</SelectItem>
                    <SelectItem value="2028">28</SelectItem>
                    <SelectItem value="2029">29</SelectItem>
                    <SelectItem value="2030">30</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label className="text-black" htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                className="text-black"
                type="text"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
         
            <Button type="submit" size="lg" className="w-full">
            Pay Now
          </Button>
          
          
        </form>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex text-black flex-col items-center justify-center gap-4 py-8">
              <CircleCheckIcon className="size-24 text-green-500" />
              <p className="text-lg font-medium">Payment Successful!</p>
              <p className="text-muted-foreground">Your payment has been processed successfully.</p>
              <DialogClose asChild>
              <Link href={"/order"}>
            
                <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
              </Link>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-6">
        <div>
          <h2 className="text-2xl text-black font-bold">Order Summary</h2>
          <p className="text-muted-foreground">Review the details of your order before completing payment.</p>
        </div>
        <Card className="border-2 p-6 border-gray-100">
          <CardContent className="grid gap-4">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>$99.99</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>$4.99</span>
            </div>
            <div className="flex items-center justify-between font-medium">
              <span>Total</span>
              <span>$104.98</span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 p-6 border-gray-100">
          <CardHeader>
            <CardTitle>Items in your order</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Cozy Blanket</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>$49.99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Autumn Mug</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$24.99</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
