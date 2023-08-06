export function getInitials(name: string) {
  const space = name.lastIndexOf(" ");

  if (space === -1) return name.substring(0, 2);
  return name.charAt(0) + name.charAt(space + 1);
}

export function stringHashFn(name: string) {
  const sum = [...name]?.reduce((prev, ch) => prev + ch?.charCodeAt(0), 0);
  return sum % 10;
}

