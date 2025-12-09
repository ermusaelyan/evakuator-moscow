import EvacuatorCard from '@/components/EvacuatorCard/EvacuatorCard'
import services from '@/data/services.json'
import s from './page.module.scss'

export default function Home() {
  return (
    <main className={s.wrapper}>
      <h1>Услуги эвакуатора в Москве</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {services.map((service) => (
          <EvacuatorCard key={service.id} />
        ))}
      </div>
    </main>
  )
}
