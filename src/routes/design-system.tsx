import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { BookIcon, MountainIcon, PencilIcon, StrawberryIcon, TigerLogo } from '@/components/InkIcons';

export const Route = createFileRoute('/design-system')({ component: DesignSystem });

function DesignSystem() {
  return (
    <div className="min-h-screen bg-paper text-ink p-8 md:p-20 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <div>
          <h1 className="text-5xl font-serif font-bold text-forest mb-4">Hogam Design System</h1>
          <p className="text-xl text-muted-foreground font-light">
            A guide to the visual language of Hogam, incorporating Korean Hanji textures with modern editorial layouts.
          </p>
        </div>

        {/* Colors */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-forest shadow-sm"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Forest Green</span>
                <span className="text-xs text-muted-foreground">#0D3328</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-sage shadow-sm"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Sage</span>
                <span className="text-xs text-muted-foreground">#E3EAD3</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-persimmon shadow-sm"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Persimmon</span>
                <span className="text-xs text-muted-foreground">#F36A2D</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-paper border shadow-sm"></div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-sm">Paper Cream</span>
                <span className="text-xs text-muted-foreground">#F9F8F6</span>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Typography</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Headings (Playfair Display)</span>
              <div className="space-y-2">
                <h1 className="text-6xl font-serif text-forest">Aa</h1>
                <p className="text-4xl font-serif">The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Body (Outfit)</span>
              <div className="space-y-2">
                <h1 className="text-6xl font-sans text-forest">Aa</h1>
                <p className="text-xl text-muted-foreground">The quick brown fox jumps over the lazy dog.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button variant="ink">Ink</Button>
            <Button variant="sage">Sage</Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" className="rounded-full">
               <TigerLogo className="w-5 h-5" />
            </Button>
          </div>
        </section>

        {/* Badges */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Badges</h2>
          <div className="flex gap-4">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* Form Elements */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Form Elements</h2>
          <div className="grid max-w-sm gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
        </section>

        {/* Progress */}
        <section className="space-y-6">
           <h2 className="text-2xl font-bold border-b border-border pb-2">Progress</h2>
           <div className="space-y-4 max-w-md">
              <div className="space-y-1">
                 <div className="flex justify-between text-sm">
                    <span>Daily Goal</span>
                    <span className="font-bold text-forest">60%</span>
                 </div>
                 <Progress value={60} />
              </div>
              <div className="space-y-1">
                 <div className="flex justify-between text-sm">
                    <span>Course Completion</span>
                    <span className="font-bold text-forest">25%</span>
                 </div>
                 <Progress value={25} />
              </div>
           </div>
        </section>

        {/* Tabs & Accordion */}
        <section className="space-y-6">
           <h2 className="text-2xl font-bold border-b border-border pb-2">Interactive Components</h2>
           <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                 <h3 className="text-lg font-bold">Tabs</h3>
                 <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                      <TabsTrigger value="account">Account</TabsTrigger>
                      <TabsTrigger value="password">Password</TabsTrigger>
                      <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                       <Card>
                          <CardHeader>
                             <CardTitle>Account</CardTitle>
                             <CardDescription>Make changes to your account here.</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-2">
                             <div className="space-y-1">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue="Pedro Duarte" />
                             </div>
                          </CardContent>
                          <CardFooter>
                             <Button>Save changes</Button>
                          </CardFooter>
                       </Card>
                    </TabsContent>
                    <TabsContent value="password">
                       <Card>
                          <CardHeader>
                             <CardTitle>Password</CardTitle>
                             <CardDescription>Change your password here.</CardDescription>
                          </CardHeader>
                          <CardContent>
                             <Input id="current" type="password" placeholder="Current Password" />
                          </CardContent>
                       </Card>
                    </TabsContent>
                    <TabsContent value="settings">
                       <Card>
                          <CardHeader>
                             <CardTitle>Settings</CardTitle>
                             <CardDescription>Manage your preferences.</CardDescription>
                          </CardHeader>
                          <CardContent>
                             <p className="text-sm">Preferences content goes here.</p>
                          </CardContent>
                       </Card>
                    </TabsContent>
                 </Tabs>
              </div>

              <div className="space-y-4">
                 <h3 className="text-lg font-bold">Accordion</h3>
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Is it accessible?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Is it styled?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It comes with default styles that matches the other components' aesthetic.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Is it animated?</AccordionTrigger>
                      <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                      </AccordionContent>
                    </AccordionItem>
                 </Accordion>
              </div>
           </div>
        </section>

        {/* Cards */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Cards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vocabulary Card</CardTitle>
                <CardDescription>Daily learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8 bg-paper rounded-xl border border-border/50">
                  <BookIcon className="w-16 h-16 text-forest" />
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="ghost">Skip</Button>
                <Button>Review</Button>
              </CardFooter>
            </Card>

            <Card className="bg-forest text-primary-foreground border-forest">
               <CardHeader>
                <CardTitle className="text-white">Dark Mode Card</CardTitle>
                <CardDescription className="text-white/70">For emphasis sections</CardDescription>
              </CardHeader>
              <CardContent>
                 <p className="leading-relaxed text-white/80">
                    This card style is used for feature highlights and contrast sections.
                 </p>
              </CardContent>
              <CardFooter>
                 <Button variant="secondary" className="w-full">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Icons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border pb-2">Iconography</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
             <div className="flex flex-col items-center gap-4 p-4 border rounded-xl bg-white">
                <TigerLogo className="w-16 h-16" />
                <span className="text-xs font-mono text-muted-foreground">TigerLogo</span>
             </div>
             <div className="flex flex-col items-center gap-4 p-4 border rounded-xl bg-white">
                <StrawberryIcon className="w-16 h-16 text-forest" />
                <span className="text-xs font-mono text-muted-foreground">StrawberryIcon</span>
             </div>
             <div className="flex flex-col items-center gap-4 p-4 border rounded-xl bg-white">
                <MountainIcon className="w-16 h-16 text-forest" />
                <span className="text-xs font-mono text-muted-foreground">MountainIcon</span>
             </div>
             <div className="flex flex-col items-center gap-4 p-4 border rounded-xl bg-white">
                <BookIcon className="w-16 h-16 text-forest" />
                <span className="text-xs font-mono text-muted-foreground">BookIcon</span>
             </div>
             <div className="flex flex-col items-center gap-4 p-4 border rounded-xl bg-white">
                <PencilIcon className="w-16 h-16 text-forest" />
                <span className="text-xs font-mono text-muted-foreground">PencilIcon</span>
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}
