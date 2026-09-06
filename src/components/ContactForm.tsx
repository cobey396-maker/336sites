"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { ArrowRightIcon, MailIcon } from "@/components/Icons";
import { site } from "@/lib/site";

/**
 * No backend yet, by design.
 *
 * The form validates in the browser and then hands a pre-filled message to the
 * visitor's email client. To switch to a hosted form service later, set
 * FORM_ENDPOINT to e.g. "https://formspree.io/f/xxxxxxx" — the submit handler
 * will POST to it instead and the mailto fallback stops being used.
 */
const FORM_ENDPOINT = "";

const budgets = [
  "Under $1,500",
  "$1,500 – $3,000",
  "$3,000 – $6,000",
  "$6,000+",
  "Not sure yet",
];

const projectTypes = [
  "New website",
  "Redesign of an existing site",
  "Online store or booking",
  "SEO / performance help",
  "Something else",
];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full min-h-12 rounded-lg border border-line bg-white px-4 text-[0.98rem] text-ink " +
  "transition-colors duration-200 placeholder:text-subtle hover:border-teal-200 " +
  "focus:border-teal-600 focus:outline-none";

const labelClass = "block text-[0.88rem] font-semibold text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    if (FORM_ENDPOINT) {
      setStatus("sending");
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        form.reset();
        setStatus("sent");
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback: compose the message in the visitor's own email client.
    const subject = `Website enquiry — ${get("business") || get("name")}`;
    const body = [
      `Name: ${get("name")}`,
      `Business: ${get("business")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Project: ${get("projectType")}`,
      `Budget: ${get("budget")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Your name <span className="text-teal-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jordan Ellis"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="business">
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            autoComplete="organization"
            placeholder="Ellis Heating & Air"
            className={`${fieldClass} mt-2`}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="email">
            Email <span className="text-teal-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            className={`${fieldClass} mt-2`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(336) 000-0000"
            className={`${fieldClass} mt-2`}
          />
          <p className="mt-1.5 text-[0.82rem] text-subtle">
            Only if you would rather I call than email.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="projectType">
            What do you need?
          </label>
          <select
            id="projectType"
            name="projectType"
            defaultValue={projectTypes[0]}
            className={`${fieldClass} mt-2 cursor-pointer`}
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">
            Rough budget
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue={budgets[4]}
            className={`${fieldClass} mt-2 cursor-pointer`}
          >
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Tell me about the project <span className="text-teal-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What does your business do, what is wrong with the site you have now, and when would you like to launch?"
          className={`${fieldClass} mt-2 min-h-36 resize-y py-3 leading-relaxed`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <ArrowRightIcon className="h-[1.1rem] w-[1.1rem]" />
        </Button>
        <p className="text-[0.85rem] text-subtle">{site.responseTime}.</p>
      </div>

      {/* Status messages sit next to the control that produced them */}
      <p aria-live="polite" className="min-h-6 text-[0.92rem]">
        {status === "sent" ? (
          <span className="inline-flex items-center gap-2 font-semibold text-teal-700">
            <MailIcon className="h-4 w-4" />
            {FORM_ENDPOINT
              ? "Thanks — your message is on its way."
              : "Your email app should be opening with the message ready to send."}
          </span>
        ) : null}
        {status === "error" ? (
          <span className="font-semibold text-[#b42318]">
            Something went wrong. Please email{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            instead.
          </span>
        ) : null}
      </p>
    </form>
  );
}
