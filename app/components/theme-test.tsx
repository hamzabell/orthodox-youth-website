import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export function ThemeTest() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Orthodox Youth Theme Test</h1>
        <p className="text-muted-foreground">Testing our Orthodox theme colors with shadcn/ui components</p>
      </div>

      {/* Button variants with Orthodox theme */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      {/* Cards with Orthodox theme */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Orthodox Community</CardTitle>
              <CardDescription>Connect with fellow Orthodox youth in Lagos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Join our vibrant community of young Orthodox believers.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Faith & Learning</CardTitle>
              <CardDescription>Deepen your understanding of Orthodox faith</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Access educational videos and resources about Orthodox Christianity.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Badges with Orthodox theme */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Orthodox</Badge>
          <Badge variant="secondary">Youth</Badge>
          <Badge variant="outline">Lagos</Badge>
          <Badge variant="destructive">Limited Spots</Badge>
        </div>
      </div>

      {/* Custom Orthodox colors demonstration */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Orthodox Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-orthodox-primary text-white">
            <h3 className="font-semibold">Primary Green</h3>
            <p className="text-sm">#112722</p>
          </div>
          <div className="p-4 rounded-lg bg-orthodox-gold text-orthodox-primary">
            <h3 className="font-semibold">Orthodox Gold</h3>
            <p className="text-sm">#d3e97c</p>
          </div>
          <div className="p-4 rounded-lg bg-orthodox-cyan text-orthodox-primary">
            <h3 className="font-semibold">Orthodox Cyan</h3>
            <p className="text-sm">#7dd6e8</p>
          </div>
          <div className="p-4 rounded-lg bg-youth-energy text-orthodox-primary">
            <h3 className="font-semibold">Youth Energy</h3>
            <p className="text-sm">#ffcc00</p>
          </div>
        </div>
      </div>

      {/* Youth-focused vibrant colors */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Youth Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-youth-hope text-white">
            <h3 className="font-semibold">Hope</h3>
            <p className="text-sm">Growth & Future</p>
          </div>
          <div className="p-4 rounded-lg bg-youth-community text-white">
            <h3 className="font-semibold">Community</h3>
            <p className="text-sm">Unity & Together</p>
          </div>
          <div className="p-4 rounded-lg bg-youth-faith text-white">
            <h3 className="font-semibold">Faith</h3>
            <p className="text-sm">Stability & Trust</p>
          </div>
          <div className="p-4 rounded-lg bg-orthodox-gold-vibrant text-orthodox-primary">
            <h3 className="font-semibold">Vibrant Gold</h3>
            <p className="text-sm">Energetic Youth</p>
          </div>
        </div>
      </div>
    </div>
  );
}