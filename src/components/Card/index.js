import './index.scss'

const Card = (props) => {
  const film = props.film
  const description = `${film.description.substring(0, 300)} ...` // Limit to 300 chars

  return (
    <div className='card'>
      <h1 className='title'>{film.title}</h1>
      <img src={film.image} alt="" />
      <p className='description'>{description}</p>
    </div>
  );
}

export default Card
