Deploy on Vercel:

- Framework: Other
- Node: 22
- Install: npm install
- Build: npm run build
- Output: empty (Nitro handles .vercel/output)

No DATABASE_URL, no auth.

After deploy, add domain proofmine.org:

A record @ to 76.76.21.21

CNAME www to cname.vercel-dns.com

Redirect www to apex.

Also for proofmine.ai if owned.