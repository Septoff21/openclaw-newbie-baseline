import { TocItem } from "@/types";

/** Extract table-of-contents items from markdown headings (h2/h3) */
export function extractToc(markdown: string): TocItem[] {
  const items: TocItem[] = [];
  for (const line of markdown.split("\n")) {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const level = match[1].length;
      const text = match[2].replace(/[*_`]/g, "");
      const id = text
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fff]+/g, "-")
        .replace(/^-|-$/g, "");
      items.push({ id, text, level });
    }
  }
  return items;
}

/** Generate a heading id from text (matches extractToc logic) */
export function headingId(text: string): string {
  return text
    .replace(/[*_`]/g, "")
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fff]+/g, "-")
    .replace(/^-|-$/g, "");
}
