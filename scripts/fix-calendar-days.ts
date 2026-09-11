/**
 * Fix script: Replace "calendar days" → "working days" in the `processing:` field only.
 * Does NOT touch maxStay, validity, eVisa, or entry_rules fields where calendar days may be correct.
 */
import fs from 'fs';
import path from 'path';

const DIRS = [
  path.join(process.cwd(), 'src', 'data', 'country-visa-data'),
  path.join(process.cwd(), 'src', 'data', 'country-visa-data-verified'),
];

let totalFixed = 0;
let totalFiles = 0;

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;

  const countries = fs.readdirSync(dir);
  for (const country of countries) {
    const countryDir = path.join(dir, country);
    if (!fs.statSync(countryDir).isDirectory()) continue;

    const files = fs.readdirSync(countryDir).filter(f => f.endsWith('.ts') && !f.endsWith('.backup'));
    for (const file of files) {
      const filePath = path.join(countryDir, file);
      const original = fs.readFileSync(filePath, 'utf-8');

      // Replace "calendar days" in processing, standardSticker, expressSticker, processingTime fields
      let fixed = original;
      const patterns = [
        /(processing\s*:\s*['"`][^'"`]*?)calendar days([^'"`]*?['"`])/gi,
        /(standardSticker\s*:\s*['"`][^'"`]*?)calendar days([^'"`]*?['"`])/gi,
        /(expressSticker\s*:\s*['"`][^'"`]*?)calendar days([^'"`]*?['"`])/gi,
        /(processingTime\s*:\s*['"`][^'"`]*?)calendar days([^'"`]*?['"`])/gi,
      ];
      for (const pat of patterns) {
        fixed = fixed.replace(pat, '$1working days$2');
      }

      if (fixed !== original) {
        fs.writeFileSync(filePath, fixed, 'utf-8');
        totalFixed++;
        console.log(`  ✅ Fixed: ${dir.includes('verified') ? '[verified]' : '[prod]'} ${country}/${file}`);
      }
      totalFiles++;
    }
  }
}

console.log(`\n✅ Done. Fixed ${totalFixed} files out of ${totalFiles} scanned.`);
