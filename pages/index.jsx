```jsx
import { useState } from 'react'
import Onboarding from '../components/Onboarding'
import StrengthTest from '../components/StrengthTest'

export default function Home() {
  const [step, setStep] = useState('onboard')
  const [user, setUser] = useState(null)

  return (
    <div style={{maxWidth:800, margin:'40px auto', padding:20, fontFamily:'Inter, system-ui'}}>
      <h1>Digify Life — Prototype</h1>
      {!user && (
        <Onboarding onNext={(u) => { setUser(u); setStep('strength') }} />
      )}

      {user && step === 'strength' && (
        <StrengthTest user={user} onBack={() => setUser(null)} />
      )}

      {user && step === 'dashboard' && (
        <div>
          <h2>Dashboard</h2>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
```
