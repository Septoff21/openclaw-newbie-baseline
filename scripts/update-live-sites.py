#!/usr/bin/env python3
import json,re,urllib.parse,hashlib
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
validated=Path('/home/dm/.openclaw/workspace/openclaw-repo-url-validated.md')
scan=Path('/home/dm/.openclaw/workspace/openclaw-repo-url-scan-100.json')
out_json=ROOT/'site'/'claw-live-sites.json'
out_md=ROOT/'docs'/'live-sites-update-log.md'

if not validated.exists() or not scan.exists():
    raise SystemExit('Missing source files: openclaw-repo-url-validated.md or openclaw-repo-url-scan-100.json')

desc_map={}
for x in json.loads(scan.read_text(encoding='utf-8')):
    repo=x.get('repo') or x.get('full_name')
    if repo: desc_map[repo]=x.get('description','')

rows=[]; repo=None; stars=0
for line in validated.read_text(encoding='utf-8').splitlines():
    m=re.match(r'^\d+\.\s+(.+)\s+\(⭐\s*(\d+)\)',line.strip())
    if m:
        repo=m.group(1); stars=int(m.group(2)); continue
    m2=re.match(r'^\s*- URL:\s+(https?://\S+)',line)
    if m2 and repo:
        rows.append({'repo':repo,'stars':stars,'url':m2.group(1)})

bad=['github.com/','raw.githubusercontent.com','img.shields.io','shields.io','api.star-history.com','star-history.com','.png','.jpg','.jpeg','.svg','.gif','.webp','.mp4','.mov','.pdf','buymeacoffee.com','ko-fi.com','youtube.com','discord.gg','x.com/','twitter.com/','linkedin.com','bilibili.com','npmjs.com/package','pypi.org/project','localhost','127.0.0.1']
def ok(u):
    ul=u.lower()
    if any(b in ul for b in bad): return False
    host=urllib.parse.urlparse(u).netloc.lower()
    return host.endswith(('.ai','.dev','.cc','.io','.sh','.app','.com','.org')) or 'github.io' in host

def score(u):
    ul=u.lower(); s=0
    if any(x in ul for x in ['vercel.app','netlify.app','pages.dev','github.io']): s+=4
    if any(x in ul for x in ['docs.','/docs','/guide']): s+=3
    if any(x in ul for x in ['/blog','blog.']): s+=2
    if any(x in ul for x in ['app.','/app']): s+=2
    if ul.count('/')<=3: s+=1
    return s

best={}
for r in rows:
    u=r['url']
    if not ok(u):
        continue
    k=r['repo']
    if k not in best or score(u)>score(best[k]['url']):
        best[k]=r

items=[]
for r in sorted(best.values(), key=lambda x:x['stars'], reverse=True)[:120]:
    u=r['url']; ul=u.lower(); host=urllib.parse.urlparse(u).netloc.lower()
    t='site'
    if 'docs' in ul: t='docs'
    elif '/blog' in ul or 'blog.' in ul: t='blog'
    elif 'app.' in ul or '/app' in ul: t='app'
    items.append({'repo':r['repo'],'stars':r['stars'],'url':u,'domain':host,'type':t,'description':(desc_map.get(r['repo']) or '')[:180]})

payload=json.dumps(items,ensure_ascii=False,indent=2)
out_json.write_text(payload,encoding='utf-8')

hash_file=ROOT/'docs'/'.live-sites-hash'
new_hash=hashlib.sha256(payload.encode('utf-8')).hexdigest()
old_hash=hash_file.read_text(encoding='utf-8').strip() if hash_file.exists() else ''
changed=(new_hash!=old_hash)
if changed:
    hash_file.write_text(new_hash,encoding='utf-8')
    prev=[]
    if out_md.exists():
        prev=out_md.read_text(encoding='utf-8').splitlines()
    with out_md.open('a',encoding='utf-8') as f:
        if not prev:
            f.write('# Live Sites Update Log\n\n')
        f.write(f'- update: total {len(items)} curated entries\n')

print(f'updated {out_json} with {len(items)} entries; changed={changed}')
