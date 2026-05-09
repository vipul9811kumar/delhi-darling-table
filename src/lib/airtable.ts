const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const TABLE_NAME = "Leads";

export type LeadRecord = {
  Name: string;
  Email: string;
  Intent: string;
  Message?: string;
  "Project Type"?: string;
  Timeline?: string;
  Location?: string;
  "Event Date"?: string;
  "Guest Count"?: string;
  City?: string;
};

export async function createLead(fields: LeadRecord): Promise<void> {
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Airtable error: ${error}`);
  }
}
