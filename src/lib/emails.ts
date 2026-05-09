export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

const BRAND_COLOR = "#C4832A";
const DARK = "#1A1512";
const CREAM = "#FAF7F2";

function baseTemplate(content: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
    <body style="margin:0;padding:0;background:${CREAM};font-family:Georgia,serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td align="center" style="padding:40px 20px;">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #DDD5C8;">
            <!-- Header -->
            <tr>
              <td style="background:${DARK};padding:32px 40px;text-align:center;">
                <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#ffffff;letter-spacing:1px;">
                  Delhi Darling Table
                </p>
                <p style="margin:6px 0 0;font-size:11px;color:rgba(255,255,255,0.5);letter-spacing:3px;text-transform:uppercase;font-family:Arial,sans-serif;">
                  ◆ ◆ ◆
                </p>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:40px;">
                ${content}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background:${CREAM};padding:24px 40px;border-top:1px solid #DDD5C8;text-align:center;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#999;letter-spacing:2px;text-transform:uppercase;">
                  Delhi Darling Table &nbsp;·&nbsp; San Francisco Bay Area
                </p>
                <p style="margin:6px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#bbb;">
                  delhi-darling.com
                </p>
              </td>
            </tr>
          </table>
        </td></tr>
      </table>
    </body>
    </html>
  `;
}

function heading(text: string): string {
  return `<h1 style="margin:0 0 20px;font-family:Georgia,serif;font-size:28px;font-weight:400;color:${DARK};line-height:1.2;">${text}</h1>`;
}

function body(text: string): string {
  return `<p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#555;line-height:1.7;">${text}</p>`;
}

function gold(text: string): string {
  return `<span style="color:${BRAND_COLOR};">${text}</span>`;
}

function divider(): string {
  return `<p style="text-align:center;color:${BRAND_COLOR};letter-spacing:8px;margin:24px 0;font-size:10px;">◆ ◆ ◆</p>`;
}

// ── Thank-you emails to the lead ──────────────────────────────────────────────

export function consultingThankYou(name: string): EmailPayload {
  return {
    to: "",
    subject: "Thank you — Delhi Darling Table",
    html: baseTemplate(`
      ${heading(`Thank you, ${gold(name)}.`)}
      ${body("Karuna has received your consulting enquiry and will be in touch within two business days.")}
      ${body("In the meantime, you're welcome to read about the restaurants she's built on the work page — three very different projects, three very different markets.")}
      ${divider()}
      ${body(`<a href="https://delhi-darling.com/work" style="color:${BRAND_COLOR};">Read our work →</a>`)}
    `),
  };
}

export function cateringThankYou(name: string): EmailPayload {
  return {
    to: "",
    subject: "Your catering enquiry — Delhi Darling Table",
    html: baseTemplate(`
      ${heading(`Thank you, ${gold(name)}.`)}
      ${body("We've received your catering enquiry. Karuna will review the details and get back to you within two business days to discuss your event.")}
      ${body("Every catering menu is built from scratch — please feel free to share any additional details about the event, dietary requirements, or cuisines you have in mind when we speak.")}
      ${divider()}
      ${body(`<a href="https://delhi-darling.com/services/catering" style="color:${BRAND_COLOR};">About our catering →</a>`)}
    `),
  };
}

export function supperClubThankYou(name: string): EmailPayload {
  return {
    to: "",
    subject: "You're on the waitlist — Delhi Darling Table",
    html: baseTemplate(`
      ${heading(`Welcome to the table, ${gold(name)}.`)}
      ${body("You're on the Delhi Darling Table supper club waitlist. When the next date is confirmed, you'll hear from us before the public announcement.")}
      ${body("Each dinner is devoted to one region of India — the food, the history, the people who shaped it. Small tables. No shortcuts.")}
      ${divider()}
      ${body(`<a href="https://delhi-darling.com/supper-club" style="color:${BRAND_COLOR};">About the supper club →</a>`)}
    `),
  };
}

export function pressThankYou(name: string): EmailPayload {
  return {
    to: "",
    subject: "Thanks for reaching out — Delhi Darling Table",
    html: baseTemplate(`
      ${heading(`Thank you, ${gold(name)}.`)}
      ${body("We've received your message and will get back to you shortly.")}
      ${divider()}
      ${body(`<a href="https://delhi-darling.com" style="color:${BRAND_COLOR};">Delhi Darling Table →</a>`)}
    `),
  };
}

// ── Notification email to Karuna ──────────────────────────────────────────────

export function karunaNotification(data: Record<string, string>): EmailPayload {
  const rows = Object.entries(data)
    .filter(([, v]) => v)
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:12px;color:#999;text-transform:uppercase;letter-spacing:1px;width:140px;vertical-align:top;">${k}</td>
        <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:14px;color:${DARK};vertical-align:top;">${v}</td>
      </tr>`
    )
    .join("");

  return {
    to: "",
    subject: `New ${data.Intent} enquiry — ${data.Name}`,
    html: baseTemplate(`
      ${heading(`New ${gold(data.Intent)} enquiry`)}
      ${body("Someone just submitted a form on delhi-darling.com.")}
      ${divider()}
      <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #DDD5C8;">
        ${rows}
      </table>
      ${divider()}
      ${body(`<a href="https://airtable.com" style="color:${BRAND_COLOR};">View in Airtable →</a>`)}
    `),
  };
}
