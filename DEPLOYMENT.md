# Deploying on a new domain

The frontend and backend can be deployed to separate providers. Configure the
domain and environment variables in those providers; do not commit real
credentials to this repository.

The supplied `olive-wren-621595.hostingersite.com` address is a Hostinger
temporary domain. Hostinger describes these as temporary addresses that can be
replaced by a preferred domain. Use the Vercel-provided `*.vercel.app` project
domains unless you have a separately registered domain and DNS access; Vercel
requires a custom domain's DNS to point to the Vercel project.

Vercel Hobby is limited to personal, non-commercial projects. If this is the
live Discover Websoft business site, use an eligible paid plan or a host whose
terms allow commercial use. Vercel Hobby also has no static outbound IPs, which
matters for the Atlas IP access-list step below.

## Vercel setup

Create two Vercel projects from the same Git repository. Set each project's
Root Directory to the indicated folder:

| Vercel project | Root Directory | Framework/build |
|---|---|---|
| Frontend | `discover-websoft` | Vite; `npm run build`; output `dist` |
| Backend | `server-backend/server` | Express; Vercel detects the exported app |

Use the frontend project's generated `*.vercel.app` domain as the site URL and
the backend project's generated `*.vercel.app` domain as the API host. If you
later connect a registered domain with DNS access, assign the main domain to
the frontend and an API subdomain (such as `api.example.com`) to the backend,
then add the DNS records Vercel provides.

## Frontend

Build and publish the `discover-websoft` directory as a Vite app:

- Build command: `npm run build`
- Output directory: `dist`
- In the frontend Vercel project's Production environment, set `VITE_API_URL`
  to the backend project's Vercel domain plus `/api`, for example
  `https://your-backend-project.vercel.app/api`.
- For a reverse proxy that exposes the API on the same domain, set it to `/api`.
- `discover-websoft/vercel.json` rewrites client-side routes to `index.html` so
  React Router deep links work on Vercel.

`VITE_API_URL` is baked into the frontend at build time. Rebuild after changing
it. Both customer and admin requests use this same setting.

## Backend

In the backend Vercel project's Production environment, configure these
variables in Project Settings > Environment Variables:

- `MONGO_URI`: connection string from the new MongoDB Atlas database user.
- `JWT_SECRET` and `ADMIN_JWT_SECRET`: two different, long random secrets.
- `ADMIN_SECURITY_KEY`: strong initial admin credential; used by the seed step.
- `CLIENT_URLS`: allowed frontend origins, comma-separated, including scheme
  and port where applicable. Set it to the frontend project's Vercel domain,
  for example `https://your-frontend-project.vercel.app`.
- `PORT`: set only if required by the provider; the service uses its assigned
  `PORT` automatically.
- Email settings (`EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_SECURE`, `EMAIL_USER`,
  `EMAIL_PASSWORD`, `EMAIL_FROM`, and optionally `ADMIN_EMAIL`) if quotation
  emails should work.

The server still accepts the older `CLIENT_URL` setting for one origin. Atlas
requires an IP access-list entry. Vercel Hobby uses changing outbound IPs and
does not include static IPs. For a free setup, `0.0.0.0/0` would allow network
connections from any IP; Atlas warns this broadens exposure, even though a
valid MongoDB username and password are still required. For a restricted
allowlist, use Vercel's paid static IP feature or a backend host with fixed
outbound IPs, then allowlist only those addresses.

After setting the backend environment, create the admin record once from the
backend project folder in a shell where the Production `MONGO_URI` and
`ADMIN_SECURITY_KEY` values are available:

```sh
npm run seed:admin
```

Check `https://your-backend-project.vercel.app/api/health` after deployment.

## MongoDB account change

Changing `MONGO_URI` makes the app use the database named in the new URI. It does
not copy customers, quotations, carts, wishlists, or admin records from the old
database. If those records must carry over, migrate/restore the old database
into the new Atlas cluster before switching production traffic. If the new
database is intentionally empty, seed its admin after deployment.

Keep the MongoDB URI and JWT/email secrets in the backend provider's secret
store, not in frontend variables or committed `.env` files. The frontend only
needs the public API URL.
