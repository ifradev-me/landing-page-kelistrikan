import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsApp, buildGenericMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Standardized WhatsApp CTA. Always opens wa.me in a new tab.
 *
 * Props:
 *   message?   string — WhatsApp message body (defaults to generic inquiry)
 *   variant?   button variant (default | amber | whatsapp | outline | ghost)
 *   size?      sm | default | lg | xl
 *   children?  custom label (default: "Pesan via WhatsApp")
 *   showIcon?  boolean — show MessageCircle icon (default true)
 */
export function WhatsAppButton({
  message,
  variant = "whatsapp",
  size = "default",
  children = "Pesan via WhatsApp",
  showIcon = true,
  className,
  ...rest
}) {
  const handleClick = () => openWhatsApp(message ?? buildGenericMessage());
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      onClick={handleClick}
      className={cn(className)}
      {...rest}
    >
      {showIcon && <MessageCircle className="h-5 w-5" />}
      {children}
    </Button>
  );
}
