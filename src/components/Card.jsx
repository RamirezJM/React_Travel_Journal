//VERSION HARDCODE

/* import fuji from '../assets/fuji.jpg'
import location from '../assets/map.svg'

export default function Card() {
  return (
    <section className="card">
      <div className="card-content">
      <h2>Mount Fuji</h2>
      <div className='card-header'>
        <img src={location} alt="location icon" className='card-icon'/>
      <h3>japan</h3>
      <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
      </div>
      <p className='card-date'>12 Jan, 2021 - 24 Jan, 2021</p>
      <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>
      <img src={fuji} alt="mount fuji" className="card-image"/>
    </section>
  )
} */

//VERSION DINÁMICA

export default function Card({data}) {
  return (
    <>
      {data.map(d => (
        <section className="card" key={d.id}>
          <div className="card-content">
            <h2>{d.title}</h2>
            <div className='card-header'>
              <img src={d.icon.src} alt={d.icon.alt} className='card-icon' />
              <h3>{d.country}</h3>
              <a href={d.googleMaps}>View on Google Maps</a>
            </div>
            <p className='card-date'>{d.dates}</p>
            <p>{d.text}</p>
          </div>
          <img src={d.img.src} alt={d.img.alt} className="card-image" />
        </section>
      ))}
    </>
  )
}
