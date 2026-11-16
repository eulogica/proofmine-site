import { createRootRoute, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  component: () => (
    <html>
      <head>
        <title>ProofMine</title>
      </head>
      <body>
        <Outlet />
      </body>
    </html>
  ),
})