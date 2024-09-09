import * as React from "react"

export const Textarea = React.forwardRef<
HTMLTextAreaElement,
React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
<textarea
ref={ref}
className={`flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
{...props}
/>
))
Textarea.displayName = "Textarea"
