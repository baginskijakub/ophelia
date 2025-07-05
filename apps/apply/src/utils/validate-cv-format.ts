export const validateCVFormat = async (cv: File): Promise<boolean> => {
  if (!cv) return false;

  if (cv.type !== "application/pdf") return false;

  const arrayBuffer = await cv.slice(0, 5).arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  // Check for PDF header
  // PDF files start with "%PDF-"
  if (
    uint8Array[0] !== 0x25 || // %
    uint8Array[1] !== 0x50 || // P
    uint8Array[2] !== 0x44 || // D
    uint8Array[3] !== 0x46 || // F
    uint8Array[4] !== 0x2d // -
  ) {
    return false;
  }

  return true;
}
