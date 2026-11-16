import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-4xl font-bold text-yellow-400">ProofMine</h1>
      <p className="mt-4 text-blue-400">Ex fodina veritatis</p>
      <p>Per ramos ad gemmas</p>
      <p className="mt-8">The mine yields only what the proof contains.</p>
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div>Panda mascot</div>
        <div>Flying Fox on the Branch</div>
        <div>Mole in the Root</div>
      </div>
    </div>
  )
}