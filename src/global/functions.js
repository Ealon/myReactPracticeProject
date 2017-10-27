export default function hasValue(val) {
  if (val.toString().trim().length > 0) {
    return true;
  }
  return false;
}
