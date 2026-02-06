```jsx
import { useState } from 'react'

export default function Onboarding({ onNext }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const user = {
      id: 'u_local',
      name: name || 'User',
      age: parseInt(age) || null,
      height_cm: parseInt(height) || null,
      weight_kg: parseInt(weight) || null,
      created_at: new Date().toISOString()
    }
    // Save to localStorage for persistence
    localStorage.setItem('digify_user', JSON.stringify(user))
    onNext(user)
  }

  return (
    <form onSubmit={handleSubmit} style={{display:'grid', gap:10}}>
      <label>
        Name<br/>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label>
        Age<br/>
        <input value={age} onChange={(e) => setAge(e.target.value)} />
      </label>

      <label>
        Height (cm)<br/>
        <input value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>

      <label>
        Weight (kg)<br/>
        <input value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>

      <button type="submit">Continue</button>
    </form>
  )
}
```
