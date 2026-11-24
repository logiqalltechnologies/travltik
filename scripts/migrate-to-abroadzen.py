import os
import re

# 1. Update index.astro
index_path = 'visahub/src/pages/index.astro'
with open(index_path, 'r', encoding='utf-8') as f:
    c = f.read()

replacements_index = [
    ('<title>TravlTik — Move abroad. Pay safely. Land confident.</title>', '<title>Abroad Zen — Move abroad. Pay safely. Land confident.</title>'),
    ('alt="TravlTik"', 'alt="AbroadZen"'),
    ('TravlTik makes moving abroad simple', 'Abroad Zen makes moving abroad simple'),
    ('How TravlTik works', 'How Abroad Zen works'),
    ('You pay once into TravlTik escrow', 'You pay once into Abroad Zen escrow'),
    ('Funds held by TravlTik, not the consultant', 'Funds held by Abroad Zen, not the consultant'),
    ('From the first visa check to your first week in a new city, TravlTik keeps experts', 'From the first visa check to your first week in a new city, Abroad Zen keeps experts'),
    ('Why TravlTik', 'Why Abroad Zen'),
    ('TravlTik vs <span class="grad">traditional agents</span>', 'Abroad Zen vs <span class="grad">traditional agents</span>'),
    ('The <span class="sh-brand-travl">Travl</span><span class="sh-brand-tik">Tik</span> Ecosystem', 'The Abroad Zen Ecosystem'),
    ('Beyond Visas: The <span class="sh-brand-travl">Travl</span><span class="sh-brand-tik">Tik</span> Marketplace', 'Beyond Visas: The Abroad Zen Marketplace'),
    ('Explore Everything <span class="sh-brand-on">on</span> <span class="sh-brand-travl">Travl</span><span class="sh-brand-tik">Tik</span>', 'Explore Everything on <span class="sh-brand-zen" style="color:#0052cc;font-weight:800;">Abroad Zen</span>'),
    ("title: 'Explore Everything <span class=\"sh-brand-on\">on</span> <span class=\"sh-brand-travl\">Travl</span><span class=\"sh-brand-tik\">Tik</span>'", "title: 'Explore Everything on <span class=\"sh-brand-zen\" style=\"color:#0052cc;font-weight:800;\">Abroad Zen</span>'"),
    ('https://facebook.com/travltik', 'https://facebook.com/abroadzen'),
    ('https://twitter.com/travltik', 'https://twitter.com/abroadzen'),
    ('https://instagram.com/travltik', 'https://instagram.com/abroadzen'),
    ('https://linkedin.com/company/travltik', 'https://linkedin.com/company/abroadzen'),
    ('https://youtube.com/@travltik', 'https://youtube.com/@abroadzen'),
    ('© 2026 TravlTik. All rights reserved.', '© 2026 Abroad Zen. All rights reserved.'),
    ("${ic('shield')}TravlTik", "${ic('shield')}Abroad Zen"),
    ('How does TravlTik escrow work?', 'How does Abroad Zen escrow work?'),
    ('What does it cost to use TravlTik?', 'What does it cost to use Abroad Zen?'),
    ('TravlTik adds a small, transparent service fee', 'Abroad Zen adds a small, transparent service fee'),
    ('Can I use TravlTik for tours and study as well?', 'Can I use Abroad Zen for tours and study as well?'),
    ('TravlTik iOS and Android apps', 'Abroad Zen iOS and Android apps'),
    ("localStorage.getItem('travltik_user')", "(localStorage.getItem('abroadzen_user') || localStorage.getItem('travltik_user'))"),
    ("localStorage.removeItem('travltik_user');", "localStorage.removeItem('abroadzen_user'); localStorage.removeItem('travltik_user');"),
    ('src="/logo.png?v=16"', 'src="/logo.png?v=17"')
]

for old, new in replacements_index:
    c = c.replace(old, new)

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(c)
print('Successfully updated index.astro!')

# 2. Comprehensive sweep across all other source files
src_dir = 'visahub/src'
updated_count = 0

for root, dirs, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.astro', '.tsx', '.ts', '.jsx', '.js', '.json', '.html', '.css')):
            fp = os.path.join(root, f)
            if fp.endswith('index.astro'):
                continue # already handled
            
            with open(fp, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
            
            original = content
            
            # Update URLs, emails, social
            content = content.replace('travltik.com', 'abroadzen.com')
            content = content.replace('hello@travltik.com', 'hello@abroadzen.com')
            content = content.replace('support@travltik.com', 'support@abroadzen.com')
            content = content.replace('twitter.com/travltik', 'twitter.com/abroadzen')
            content = content.replace('linkedin.com/company/travltik', 'linkedin.com/company/abroadzen')
            content = content.replace('instagram.com/travltik', 'instagram.com/abroadzen')
            content = content.replace('facebook.com/travltik', 'facebook.com/abroadzen')
            content = content.replace('youtube.com/@travltik', 'youtube.com/@abroadzen')
            content = content.replace('1800-TRAVLTIK', '1800-ABROADZEN')
            
            # Update Uppercase
            content = content.replace('TRAVLTIK', 'ABROAD ZEN')
            
            # Update Mixed Case brand names
            content = content.replace('TravlTik', 'Abroad Zen')
            content = content.replace('Travltik', 'Abroad Zen')
            
            # Backwards-compatible localStorage:
            content = content.replace("localStorage.getItem('travltik_user')", "(localStorage.getItem('abroadzen_user') || localStorage.getItem('travltik_user'))")
            content = content.replace("localStorage.setItem('travltik_user',", "localStorage.setItem('abroadzen_user',")
            content = content.replace("localStorage.removeItem('travltik_user')", "localStorage.removeItem('abroadzen_user'); localStorage.removeItem('travltik_user')")
            
            # Logo version bump
            content = content.replace('/logo.png?v=16', '/logo.png?v=17')
            
            if content != original:
                with open(fp, 'w', encoding='utf-8') as file:
                    file.write(content)
                updated_count += 1

print(f'Successfully updated {updated_count} files in src/ to Abroad Zen!')
