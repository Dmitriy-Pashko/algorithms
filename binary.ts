export default function bs_list(haystack: number[], needle: number): boolean {
  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    const result = haystack[middle];

    if (result === needle) {
      return true;
    } else if (result < needle) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return false;
}
