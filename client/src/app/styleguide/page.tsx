"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage, AvatarBadge, AvatarGroup, AvatarGroupCount } from '@/components/ui/avatar';
import { Plus, ChevronDown, Users } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const colorTokens = [
  { label: "background",   cls: "bg-background border",      var: "--background" },
  { label: "foreground",   cls: "bg-foreground",              var: "--foreground" },
  { label: "card",         cls: "bg-card border",             var: "--card" },
  { label: "primary",      cls: "bg-primary",                 var: "--primary" },
  { label: "primary-fg",   cls: "bg-primary-foreground border", var: "--primary-foreground" },
  { label: "secondary",    cls: "bg-secondary",               var: "--secondary" },
  { label: "muted",        cls: "bg-muted",                   var: "--muted" },
  { label: "muted-fg",     cls: "bg-muted-foreground",        var: "--muted-foreground" },
  { label: "destructive",  cls: "bg-destructive",             var: "--destructive" },
  { label: "border",       cls: "bg-border",                  var: "--border" },
  { label: "ring",         cls: "bg-ring",                    var: "--ring" },
];

const semanticColors = [
  { label: "Success",     cls: "bg-emerald-500", hex: "emerald-500" },
  { label: "Warning",     cls: "bg-amber-500",   hex: "amber-500" },
  { label: "Error",       cls: "bg-destructive", hex: "--destructive" },
  { label: "Info",        cls: "bg-blue-500",    hex: "blue-500" },
];

const typeScale = [
  {
    level: "H1", label: "Display",
    sample: "A Wealth Engine Built for Precision",
    className: "text-5xl font-bold tracking-tight",
    specs: { size: "3rem / 48px", weight: "700", leading: "1.1", use: "Page titles, hero moments" },
  },
  {
    level: "H2", label: "Section",
    sample: "Net Worth Breakdown",
    className: "text-4xl font-bold tracking-tight",
    specs: { size: "2.25rem / 36px", weight: "700", leading: "1.2", use: "Major section headers" },
  },
  {
    level: "H3", label: "Subsection",
    sample: "Portfolio Allocation",
    className: "text-3xl font-semibold tracking-tight",
    specs: { size: "1.875rem / 30px", weight: "600", leading: "1.3", use: "Card titles, sub-sections" },
  },
  {
    level: "H4", label: "Card Title",
    sample: "Top Holdings",
    className: "text-2xl font-semibold",
    specs: { size: "1.5rem / 24px", weight: "600", leading: "1.4", use: "Card headings, dialogs" },
  },
  {
    level: "H5", label: "Label Title",
    sample: "Active Goal",
    className: "text-xl font-semibold",
    specs: { size: "1.25rem / 20px", weight: "600", leading: "1.5", use: "Widget labels, minor headers" },
  },
  {
    level: "H6", label: "Overline",
    sample: "FINANCIAL HEALTH SCORE",
    className: "text-xs font-medium uppercase tracking-widest",
    specs: { size: "0.75rem / 12px", weight: "500", leading: "1.6", use: "Section labels, metadata, eyebrows" },
  },
];

const bodyScale = [
  {
    label: "Body Large",
    sample: "Your financial trajectory is on track. Keep maintaining your current savings rate to hit milestones ahead of schedule.",
    className: "text-base",
    specs: { size: "1rem / 16px", weight: "400", leading: "1.6" },
  },
  {
    label: "Body Small",
    sample: "12% less on food this month — that's €580 extra by year end.",
    className: "text-sm",
    specs: { size: "0.875rem / 14px", weight: "400", leading: "1.5" },
  },
  {
    label: "Caption",
    sample: "at €1,200/mo savings rate · updated May 2026",
    className: "text-xs text-muted-foreground",
    specs: { size: "0.75rem / 12px", weight: "400", leading: "1.4" },
  },
];

const buttonVariants = [
  { variant: "default",     label: "Default",     desc: "Primary action. One per view.",                   hoverClass: "!bg-primary/80" },
  { variant: "secondary",   label: "Secondary",   desc: "Supplementary actions alongside a primary.",      hoverClass: "!bg-secondary/80" },
  { variant: "outline",     label: "Outline",     desc: "Low-emphasis actions, toolbars.",                 hoverClass: "!bg-muted !text-foreground" },
  { variant: "ghost",       label: "Ghost",       desc: "Inline or icon-adjacent actions.",                hoverClass: "!bg-muted !text-foreground" },
  { variant: "destructive", label: "Destructive", desc: "Irreversible or dangerous operations.",           hoverClass: "!bg-destructive/20" },
  { variant: "link",        label: "Link",        desc: "Inline navigational or contextual links.",        hoverClass: "!underline" },
] as const;

const badgeVariantList = [
  { variant: "default",     label: "Default",     desc: "Primary status or category tag." },
  { variant: "secondary",   label: "Secondary",   desc: "Neutral or supplementary tag." },
  { variant: "destructive", label: "Destructive", desc: "Error, risk, or danger state." },
  { variant: "outline",     label: "Outline",     desc: "Low-emphasis, bordered label." },
  { variant: "ghost",       label: "Ghost",       desc: "Minimal, background-free label." },
] as const;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function StyleguidePage() {
  return (
    <div className="flex flex-1 flex-col min-h-full bg-background">

      {/* Top bar */}
      <div className="border-b">
        <div className="max-w-5xl mx-auto px-8 py-3 flex items-center">
          <a href="/" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-mono-tabular">
            ← Back to site
          </a>
        </div>
      </div>

      {/* Header */}
      <div className="border-b">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2 font-mono-tabular">
            Meridian · Design System
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Styleguide</h1>
          <p className="mt-2 text-muted-foreground text-sm max-w-lg">
            Visual language, components, and patterns for the Meridian design system.
          </p>
        </div>
      </div>

      <div className="flex-1 max-w-5xl w-full mx-auto px-8 py-12 space-y-20">

        {/* 01 — Colors */}
        <section>
          <SectionLabel index="01" title="Colors" />

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[11px] font-mono-tabular font-medium uppercase tracking-wider text-muted-foreground mb-3">Theme Tokens</p>
              <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-3">
                {colorTokens.map(({ label, cls, var: v }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className={`h-14 w-full rounded-lg ${cls}`} />
                    <div>
                      <p className="text-[10px] font-medium text-foreground">{label}</p>
                      <p className="text-[9px] font-mono-tabular text-muted-foreground">{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-mono-tabular font-medium uppercase tracking-wider text-muted-foreground mb-3">Semantic</p>
              <div className="flex gap-3 flex-wrap">
                {semanticColors.map(({ label, cls, hex }) => (
                  <div key={label} className="flex flex-col gap-2">
                    <div className={`h-14 w-20 rounded-lg ${cls}`} />
                    <div>
                      <p className="text-[10px] font-medium text-foreground">{label}</p>
                      <p className="text-[9px] font-mono-tabular text-muted-foreground">{hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Avatar */}
        <section>
          <SectionLabel index="02" title="Avatar" />

          <div className="mt-8 space-y-0">

            {/* Sizes */}
            <div className="group grid grid-cols-[120px_1fr] items-center gap-6 border-t py-6 hover:bg-muted/30 px-4 -mx-4 rounded transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">Sizes</span>
                <span className="text-[10px] font-mono-tabular text-muted-foreground/50 pl-0.5">size=sm|default|lg</span>
              </div>
              <div className="flex items-end gap-6">
                {(["sm", "default", "lg"] as const).map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-mono-tabular text-muted-foreground">{size}</span>
                    <Avatar size={size}>
                      <AvatarFallback>GL</AvatarFallback>
                    </Avatar>
                  </div>
                ))}
              </div>
            </div>

            {/* Image + Fallback */}
            <div className="group grid grid-cols-[120px_1fr] items-center gap-6 border-t py-6 hover:bg-muted/30 px-4 -mx-4 rounded transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">Content</span>
                <span className="text-[10px] font-mono-tabular text-muted-foreground/50 pl-0.5">image | initials</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono-tabular text-muted-foreground">image</span>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono-tabular text-muted-foreground">initials</span>
                  <Avatar>
                    <AvatarFallback>GL</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono-tabular text-muted-foreground">with badge</span>
                  <Avatar>
                    <AvatarFallback>GL</AvatarFallback>
                    <AvatarBadge />
                  </Avatar>
                </div>
              </div>
            </div>

            {/* Group */}
            <div className="group grid grid-cols-[120px_1fr] items-center gap-6 border-t border-b py-6 hover:bg-muted/30 px-4 -mx-4 rounded transition-colors">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">Group</span>
                <span className="text-[10px] font-mono-tabular text-muted-foreground/50 pl-0.5">AvatarGroup</span>
              </div>
              <AvatarGroup>
                {["GL", "AK", "MB", "TS"].map((initials) => (
                  <Avatar key={initials}>
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                ))}
                <AvatarGroupCount>
                  <Users />
                </AvatarGroupCount>
              </AvatarGroup>
            </div>

          </div>
        </section>

        {/* 03 — Typefaces */}
        <section>
          <SectionLabel index="03" title="Typefaces" />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <TypefaceCard name="Outfit" role="Body · UI · Labels" sample="ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789" weights={[400, 500, 600, 700]} sampleClass="" />
            <TypefaceCard name="JetBrains Mono" role="Numbers · Data · Code" sample="€1,234,567.89 +12.4% −0.03% 92/100 Oct 2026" weights={[400, 600, 700]} sampleClass="font-mono-tabular" />
          </div>
        </section>

        {/* 04 — Heading Scale */}
        <section>
          <SectionLabel index="04" title="Heading Scale" />
          <div className="mt-8 space-y-0">
            {typeScale.map((item) => (
              <div key={item.level} className="group grid grid-cols-[80px_1fr_auto] items-baseline gap-6 border-t first:border-t-0 py-6 last:border-b transition-colors hover:bg-muted/30 px-4 -mx-4 rounded">
                <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">{item.level}</span>
                <div>
                  <p className={`${item.className} text-foreground leading-tight`}>{item.sample}</p>
                  <p className="mt-2 text-[11px] text-muted-foreground font-mono-tabular opacity-0 group-hover:opacity-100 transition-opacity">{item.specs.use}</p>
                </div>
                <div className="text-right space-y-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] font-mono-tabular text-muted-foreground whitespace-nowrap">{item.specs.size}</p>
                  <p className="text-[10px] font-mono-tabular text-muted-foreground">w{item.specs.weight}</p>
                  <p className="text-[10px] font-mono-tabular text-muted-foreground">lh {item.specs.leading}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 — Body & Prose */}
        <section>
          <SectionLabel index="05" title="Body & Prose" />
          <div className="mt-8 space-y-0">
            {bodyScale.map((item) => (
              <div key={item.label} className="group grid grid-cols-[120px_1fr_auto] items-start gap-6 border-t first:border-t-0 py-6 last:border-b hover:bg-muted/30 px-4 -mx-4 rounded transition-colors">
                <p className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 self-start mt-0.5 w-fit">{item.label}</p>
                <p className={`${item.className} leading-relaxed max-w-prose`}>{item.sample}</p>
                <div className="text-right space-y-0.5 opacity-40 group-hover:opacity-100 transition-opacity">
                  <p className="text-[10px] font-mono-tabular text-muted-foreground whitespace-nowrap">{item.specs.size}</p>
                  <p className="text-[10px] font-mono-tabular text-muted-foreground">w{item.specs.weight}</p>
                  <p className="text-[10px] font-mono-tabular text-muted-foreground">lh {item.specs.leading}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 06 — Buttons */}
        <section>
          <SectionLabel index="06" title="Buttons" />

          <div className="mt-8 space-y-0">
            {buttonVariants.map(({ variant, label, desc, hoverClass }, i) => (
              <div key={variant} className="group grid grid-cols-[120px_auto_1fr] items-center gap-6 border-t first:border-t-0 last:border-b hover:bg-muted/30 px-4 -mx-4 rounded transition-colors py-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">{label}</span>
                  <span className="text-[10px] font-mono-tabular text-muted-foreground/50 pl-0.5">variant="{variant}"</span>
                </div>

                <div className="flex items-end gap-6 flex-wrap">
                  {([
                    { btn: <Button variant={variant}>Save changes</Button>, state: "default" },
                    { btn: <Button variant={variant} className={hoverClass}>Save changes</Button>, state: "hover" },
                    { btn: <Button variant={variant} disabled>Save changes</Button>, state: "disabled" },
                  ] as const).map(({ btn, state }) => (
                    <div key={state} className="flex flex-col items-start gap-1.5">
                      {i === 0 && <span className="text-[10px] font-mono-tabular text-muted-foreground">{state}</span>}
                      {btn}
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-muted-foreground font-mono-tabular opacity-0 group-hover:opacity-100 transition-opacity max-w-[200px]">{desc}</p>
              </div>
            ))}
          </div>

          {/* Sizes */}
          <div className="mt-10">
            <p className="text-[11px] font-mono-tabular font-medium uppercase tracking-wider text-muted-foreground mb-4">Sizes</p>
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-end gap-4 flex-wrap">
                {(["xs", "sm", "default", "lg"] as const).map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <Button size={size}>Connect</Button>
                    <span className="text-[10px] font-mono-tabular text-muted-foreground">{size}</span>
                  </div>
                ))}
                <div className="w-px h-10 bg-border self-center mx-1" />
                {(["icon-xs", "icon-sm", "icon", "icon-lg"] as const).map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <Button size={size} variant="outline"><Plus /></Button>
                    <span className="text-[10px] font-mono-tabular text-muted-foreground">{size}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 07 — Badges */}
        <section>
          <SectionLabel index="07" title="Badges" />

          <div className="mt-8 space-y-0">
            {badgeVariantList.map(({ variant, label, desc }, i) => (
              <div key={variant} className="group grid grid-cols-[120px_auto_1fr] items-center gap-6 border-t first:border-t-0 last:border-b hover:bg-muted/30 px-4 -mx-4 rounded transition-colors py-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">{label}</span>
                  <span className="text-[10px] font-mono-tabular text-muted-foreground/50 pl-0.5">variant="{variant}"</span>
                </div>

                <div className="flex items-end gap-6 flex-wrap">
                  {([
                    { el: <Badge variant={variant}>On track</Badge>, state: "default" },
                    { el: <Badge variant={variant}>2 months ahead</Badge>, state: "longer" },
                    { el: <Badge variant={variant} className="opacity-50 pointer-events-none">Inactive</Badge>, state: "disabled" },
                  ] as const).map(({ el, state }) => (
                    <div key={state} className="flex flex-col items-start gap-1.5">
                      {i === 0 && <span className="text-[10px] font-mono-tabular text-muted-foreground">{state}</span>}
                      {el}
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-muted-foreground font-mono-tabular opacity-0 group-hover:opacity-100 transition-opacity max-w-[200px]">{desc}</p>
              </div>
            ))}
          </div>

          {/* In-context examples */}
          <div className="mt-10">
            <p className="text-[11px] font-mono-tabular font-medium uppercase tracking-wider text-muted-foreground mb-4">In context</p>
            <div className="rounded-xl border bg-card p-6 flex flex-wrap gap-2">
              <Badge variant="default">On track</Badge>
              <Badge variant="secondary">Savings</Badge>
              <Badge variant="outline">AAPL</Badge>
              <Badge variant="outline">VWCE</Badge>
              <Badge variant="destructive">High risk</Badge>
              <Badge variant="secondary">2 months ahead</Badge>
              <Badge variant="outline">87% success</Badge>
              <Badge variant="default">Goal reached</Badge>
              <Badge variant="ghost">Updated today</Badge>
            </div>
          </div>
        </section>

        {/* 08 — Form Fields */}
        <section>
          <SectionLabel index="08" title="Form Fields" />

          <div className="mt-8 space-y-0">

            <FieldRow label="Input" variantName="<Input />">
              <div className="flex items-end gap-6 flex-wrap">
                <FieldState label="default">
                  <Label htmlFor="input-default">Amount</Label>
                  <Input id="input-default" placeholder="€0.00" />
                </FieldState>
                <FieldState label="focus">
                  <Label htmlFor="input-focus">Amount</Label>
                  <Input id="input-focus" placeholder="€0.00" className="border-ring ring-1 ring-ring/20" />
                </FieldState>
                <FieldState label="disabled">
                  <Label htmlFor="input-disabled" className="opacity-50">Amount</Label>
                  <Input id="input-disabled" placeholder="€0.00" disabled />
                </FieldState>
                <FieldState label="error">
                  <Label htmlFor="input-error" className="text-destructive">Amount</Label>
                  <Input id="input-error" placeholder="€0.00" aria-invalid defaultValue="abc" />
                </FieldState>
              </div>
            </FieldRow>

            <FieldRow label="Textarea" variantName="<textarea />">
              <div className="flex items-start gap-6 flex-wrap">
                <FieldState label="default">
                  <Label htmlFor="textarea-default">Notes</Label>
                  <textarea id="textarea-default" placeholder="Add a note about this transaction..." rows={3} className="w-full min-w-[200px] rounded-md border border-input bg-transparent px-2.5 py-1.5 text-sm shadow-xs outline-none transition-[color,box-shadow] placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/20 resize-none dark:bg-input/30" />
                </FieldState>
                <FieldState label="disabled">
                  <Label htmlFor="textarea-disabled" className="opacity-50">Notes</Label>
                  <textarea id="textarea-disabled" placeholder="Add a note..." rows={3} disabled className="w-full min-w-[200px] rounded-md border border-input bg-transparent px-2.5 py-1.5 text-sm shadow-xs outline-none placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 resize-none dark:bg-input/30" />
                </FieldState>
              </div>
            </FieldRow>

            <FieldRow label="Select" variantName="<select />">
              <div className="flex items-end gap-6 flex-wrap">
                <FieldState label="default">
                  <Label htmlFor="select-default">Category</Label>
                  <div className="relative">
                    <select id="select-default" className="h-9 w-full min-w-[180px] appearance-none rounded-md border border-input bg-transparent px-2.5 pr-8 py-1 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/20 dark:bg-input/30">
                      <option>Groceries</option>
                      <option>Transport</option>
                      <option>Rent</option>
                      <option>Subscriptions</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </FieldState>
                <FieldState label="disabled">
                  <Label htmlFor="select-disabled" className="opacity-50">Category</Label>
                  <div className="relative opacity-50">
                    <select id="select-disabled" disabled className="h-9 w-full min-w-[180px] appearance-none rounded-md border border-input bg-transparent px-2.5 pr-8 py-1 text-sm shadow-xs outline-none pointer-events-none dark:bg-input/30">
                      <option>Groceries</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </FieldState>
              </div>
            </FieldRow>

            <FieldRow label="Radio" variantName="<input type=radio />">
              <div className="flex items-start gap-10 flex-wrap">
                <FieldState label="default">
                  <fieldset className="flex flex-col gap-2">
                    {["Savings", "Investments", "Cash"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2.5 text-sm cursor-pointer">
                        <input type="radio" name="radio-demo" defaultChecked={opt === "Savings"} className="h-4 w-4 rounded-full border border-input accent-primary cursor-pointer" />
                        {opt}
                      </label>
                    ))}
                  </fieldset>
                </FieldState>
                <FieldState label="disabled">
                  <fieldset className="flex flex-col gap-2">
                    {["Savings", "Investments"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2.5 text-sm opacity-50 cursor-not-allowed">
                        <input type="radio" name="radio-disabled" disabled defaultChecked={opt === "Savings"} className="h-4 w-4 rounded-full border border-input accent-primary" />
                        {opt}
                      </label>
                    ))}
                  </fieldset>
                </FieldState>
              </div>
            </FieldRow>

            <FieldRow label="Checkbox" variantName="<input type=checkbox />">
              <div className="flex items-start gap-10 flex-wrap">
                <FieldState label="default">
                  <div className="flex flex-col gap-2">
                    {[{ label: "Auto-save monthly", checked: true }, { label: "Email alerts", checked: false }, { label: "Dark mode", checked: true }].map((opt) => (
                      <label key={opt.label} className="flex items-center gap-2.5 text-sm cursor-pointer">
                        <input type="checkbox" defaultChecked={opt.checked} className="h-4 w-4 rounded border border-input accent-primary cursor-pointer" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </FieldState>
                <FieldState label="disabled">
                  <div className="flex flex-col gap-2">
                    {[{ label: "Auto-save monthly", checked: true }, { label: "Email alerts", checked: false }].map((opt) => (
                      <label key={opt.label} className="flex items-center gap-2.5 text-sm opacity-50 cursor-not-allowed">
                        <input type="checkbox" defaultChecked={opt.checked} disabled className="h-4 w-4 rounded border border-input accent-primary" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </FieldState>
              </div>
            </FieldRow>

          </div>
        </section>

      </div>
    </div>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function FieldRow({ label, variantName, children }: { label: string; variantName: string; children: React.ReactNode }) {
  return (
    <div className="group grid grid-cols-[120px_1fr] items-start gap-6 border-t first:border-t-0 last:border-b py-6 hover:bg-muted/30 px-4 -mx-4 rounded transition-colors">
      <div className="flex flex-col gap-1 pt-1">
        <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground bg-muted rounded px-1.5 py-0.5 w-fit">{label}</span>
        <span className="text-[10px] font-mono-tabular text-muted-foreground/50 pl-0.5">{variantName}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

function FieldState({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] font-mono-tabular text-muted-foreground">{label}</span>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-mono-tabular font-medium text-muted-foreground">{index}</span>
      <div className="h-px flex-1 bg-border" />
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{title}</span>
    </div>
  );
}

function TypefaceCard({ name, role, sample, weights, sampleClass }: { name: string; role: string; sample: string; weights: number[]; sampleClass: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <p className={`text-xl font-semibold ${sampleClass}`}>{name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{role}</p>
        </div>
        <div className="flex gap-1">
          {weights.map((w) => (
            <span key={w} className="text-[10px] font-mono-tabular bg-muted rounded px-1.5 py-0.5 text-muted-foreground">{w}</span>
          ))}
        </div>
      </div>
      <div className="border-t pt-4">
        <p className={`text-sm leading-relaxed text-muted-foreground break-all ${sampleClass}`}>{sample}</p>
      </div>
      <div className="flex gap-3">
        {weights.map((w) => (
          <p key={w} className={`text-base ${sampleClass}`} style={{ fontWeight: w }}>Aa</p>
        ))}
      </div>
    </div>
  );
}
