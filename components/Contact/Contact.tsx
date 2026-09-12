import { MessageCircle, Phone, Send, type LucideIcon } from "lucide-react";
import { Card, SectionTitle } from "@/common";
import { cv } from "@/data";

const contactIcons: Record<
  (typeof cv.contact.items)[number]["icon"],
  LucideIcon
> = {
  email: Send,
  discord: MessageCircle,
  phone: Phone,
};

export default function Contact() {
  return (
    <section>
      <SectionTitle>{cv.contact.title}</SectionTitle>
      <Card>
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-10">
          {cv.contact.items.map((item) => {
            const Icon = contactIcons[item.icon];
            const valueClassName =
              "whitespace-nowrap text-base text-white md:text-lg";

            return (
              <li
                key={item.label}
                className="flex shrink-0 flex-col items-center gap-3 text-center"
              >
                <Icon className="size-6 text-white" aria-hidden="true" />
                {"href" in item ? (
                  <a
                    href={item.href}
                    className={`${valueClassName} transition-colors hover:text-accent`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className={valueClassName}>{item.value}</span>
                )}
                <span className="text-sm font-medium text-accent md:text-base">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
}
