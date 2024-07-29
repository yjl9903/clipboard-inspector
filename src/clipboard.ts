export interface ClipboardResult {
  plain: string;
  html: string;
  items: Array<{ type: string; content: string }>;
  files: File[];
}

export function readFromClipboardEvent(ev: ClipboardEvent): ClipboardResult | undefined {
  console.log('Receive clipboard event', ev);

  if (!ev.clipboardData) return undefined;

  const plain = ev.clipboardData?.getData('text/plain') ?? '';
  const html = ev.clipboardData?.getData('text/html') ?? '';

  const items = [];
  for (const type of ev.clipboardData.types) {
    if (type !== 'Files') {
      items.push({ type, content: ev.clipboardData.getData(type) });
    } else {
    }
  }

  const files = Array.from(ev.clipboardData.files);

  return {
    plain,
    html,
    items,
    files
  };
}

export async function readFromClipboardItems(clipboard: ClipboardItems): Promise<ClipboardResult> {
  console.log('Read clipboard', clipboard);

  let plain: string = '';
  let html: string = '';
  const items = [];
  const files = [];

  for (const item of clipboard) {
    for (const type of item.types) {
      const blob = await item.getType(type);
      if (type.startsWith(`image/`)) {
        console.log(item, blob);
        const file = new File([blob], `image.${type.split('/').at(-1)}`, { type });
        files.push(file);
      } else {
        const content = await blob.text();
        if (type === 'text/plain') {
          plain = content;
        } else if (type === 'text/html') {
          html = content;
        }
        items.push({ type, content });
      }
    }
  }

  return {
    plain,
    html,
    items,
    files
  };
}
