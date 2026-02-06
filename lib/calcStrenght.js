```js
export function calcStrength(pushups, squats, pullups) {
  const pushupsTarget = 100
  const squatsTarget = 200
  const pullupsTarget = 50

  const pScore = Math.min(100, (pushups / pushupsTarget) * 100)
  const sScore = Math.min(100, (squats / squatsTarget) * 100)
  const puScore = Math.min(100, (pullups / pullupsTarget) * 100)

  const strength = +(pScore * 0.3 + sScore * 0.4 + puScore * 0.3).toFixed(1)
  return { pScore, sScore, puScore, strength }
}
```
