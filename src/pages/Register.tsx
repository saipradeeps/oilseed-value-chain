import { useState } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { Sprout, Building2, Globe } from 'lucide-react';
import { UserRole } from '@/types';

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const defaultRole = searchParams.get('role') as UserRole || 'farmer';
  const [role, setRole] = useState<UserRole>(defaultRole);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to appropriate dashboard based on role
    if (role === 'farmer') {
      navigate('/dashboard/farmer');
    } else if (role === 'buyer') {
      navigate('/dashboard/buyer');
    } else if (role === 'international_buyer') {
      navigate('/dashboard/international');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="mb-4">Create Your Account</h1>
            <p className="text-muted-foreground">Join OilSeedXChange and start your journey</p>
          </div>

          <Tabs value={role} onValueChange={(value) => setRole(value as UserRole)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="farmer" className="flex items-center gap-2">
                <Sprout className="h-4 w-4" />
                Farmer
              </TabsTrigger>
              <TabsTrigger value="buyer" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Buyer
              </TabsTrigger>
              <TabsTrigger value="international_buyer" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                International
              </TabsTrigger>
            </TabsList>

            <TabsContent value="farmer">
              <Card className="grain-texture">
                <CardHeader>
                  <CardTitle>Farmer Registration</CardTitle>
                  <CardDescription>
                    Start selling your oilseed by-products with fair pricing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmerName">Full Name</Label>
                      <Input id="farmerName" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmerMobile">Mobile Number</Label>
                      <Input id="farmerMobile" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmerEmail">Email (Optional)</Label>
                    <Input id="farmerEmail" type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmLocation">Farm Location</Label>
                    <Input id="farmLocation" placeholder="Village, District, State" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmSize">Farm Size (acres)</Label>
                      <Input id="farmSize" type="number" placeholder="10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="primaryCrop">Primary Crops</Label>
                      <Input id="primaryCrop" placeholder="Soybean, Mustard..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmerPassword">Password</Label>
                    <Input id="farmerPassword" type="password" placeholder="Create a password" />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Register as Farmer
                  </Button>
                  </form>

                  <p className="text-sm text-center text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                      Login here
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="buyer">
              <Card className="grain-texture">
                <CardHeader>
                  <CardTitle>Domestic Buyer Registration</CardTitle>
                  <CardDescription>
                    Access quality-verified oilseed by-products from verified farmers
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister}>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" placeholder="Your company name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="trader">Trader</SelectItem>
                        <SelectItem value="processor">Processor</SelectItem>
                        <SelectItem value="exporter">Exporter</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gstNumber">GST Number</Label>
                      <Input id="gstNumber" placeholder="GST registration number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tradeLicense">Trade License</Label>
                      <Input id="tradeLicense" placeholder="License number" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input id="contactPerson" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="buyerMobile">Mobile Number</Label>
                      <Input id="buyerMobile" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="buyerEmail">Business Email</Label>
                    <Input id="buyerEmail" type="email" placeholder="business@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="buyerPassword">Password</Label>
                    <Input id="buyerPassword" type="password" placeholder="Create a password" />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Register as Buyer
                  </Button>
                  </form>

                  <p className="text-sm text-center text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                      Login here
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="international_buyer">
              <Card className="grain-texture">
                <CardHeader>
                  <CardTitle>International Buyer Registration</CardTitle>
                  <CardDescription>
                    Access export-grade oilseed by-products with blockchain verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleRegister}>
                  <div className="space-y-2">
                    <Label htmlFor="intCompanyName">Company Name</Label>
                    <Input id="intCompanyName" placeholder="Your company name" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="china">China</SelectItem>
                          <SelectItem value="japan">Japan</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intBusinessType">Business Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="importer">Importer</SelectItem>
                          <SelectItem value="manufacturer">Manufacturer</SelectItem>
                          <SelectItem value="distributor">Distributor</SelectItem>
                          <SelectItem value="retailer">Retailer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="importLicense">Import License</Label>
                      <Input id="importLicense" placeholder="License number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vatNumber">VAT/Tax Number</Label>
                      <Input id="vatNumber" placeholder="Tax registration" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="intContactPerson">Contact Person</Label>
                      <Input id="intContactPerson" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="intMobile">Contact Number</Label>
                      <Input id="intMobile" type="tel" placeholder="+XX XXX XXXX" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intEmail">Business Email</Label>
                    <Input id="intEmail" type="email" placeholder="business@company.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="volumeRequirement">Monthly Volume Requirement (kg)</Label>
                    <Input id="volumeRequirement" type="number" placeholder="10000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intPassword">Password</Label>
                    <Input id="intPassword" type="password" placeholder="Create a password" />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Register as International Buyer
                  </Button>
                  </form>

                  <p className="text-sm text-center text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                      Login here
                    </Link>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Register;
