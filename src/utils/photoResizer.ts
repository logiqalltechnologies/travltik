export interface ConsularPreset {
  name: string;
  widthPx: number;
  heightPx: number;
  aspectRatio: number;
}

export const CONSULAR_PRESETS: Record<string, ConsularPreset> = {
  US_VISA: {
    name: 'US Visa (2x2 in)',
    widthPx: 600,
    heightPx: 600,
    aspectRatio: 1,
  },
  SCHENGEN: {
    name: 'Schengen (35x45 mm)',
    widthPx: 413,
    heightPx: 531,
    aspectRatio: 35 / 45,
  },
  INDIA: {
    name: 'India (35x35 mm)',
    widthPx: 413,
    heightPx: 413,
    aspectRatio: 1,
  },
  CANADA: {
    name: 'Canada (50x70 mm)',
    widthPx: 591,
    heightPx: 827,
    aspectRatio: 50 / 70,
  },
  UK: {
    name: 'UK (35x45 mm)',
    widthPx: 413,
    heightPx: 531,
    aspectRatio: 35 / 45,
  },
};

export function validateImageResolution(
  image: HTMLImageElement,
  preset: ConsularPreset
): { valid: boolean; message: string } {
  if (image.naturalWidth < preset.widthPx || image.naturalHeight < preset.heightPx) {
    return {
      valid: false,
      message: `Image too small. Minimum ${preset.widthPx}x${preset.heightPx}px required for ${preset.name}.`,
    };
  }
  return { valid: true, message: 'Image resolution OK' };
}

export async function cropConsularPhoto(
  imageSource: HTMLImageElement,
  cropArea: { x: number; y: number; width: number; height: number },
  preset: ConsularPreset
): Promise<Blob> {
  const canvas = document.createElement('canvas');
  canvas.width = preset.widthPx;
  canvas.height = preset.heightPx;
  const ctx = canvas.getContext('2d');

  if (!ctx) throw new Error('Could not get 2D context');

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(
    imageSource,
    cropArea.x,
    cropArea.y,
    cropArea.width,
    cropArea.height,
    0,
    0,
    preset.widthPx,
    preset.heightPx
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Image compression failed'));
      },
      'image/jpeg',
      0.95
    );
  });
}
