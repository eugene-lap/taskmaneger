import './personal-area-team.scss';

export function PersonalAreaTeam() {
  const team = ['/photo.png','/photo.png','/photo.png','/photo.png','/photo.png'];

  return (
    <div className="team">
      <h2 className="team__title">Ваша команда</h2>
      <div className="team__line">
        { team.map((photo) =>
          <button className="team__btn team-photo">
            <img src={photo} alt='' id={photo}/>
          </button>
        )}
        <button className="team__btn">
          <img src="/icon-add.svg" alt="add" />
        </button>
        <button className="team__btn">
          <img src="/icon-book.svg" alt="add" />
        </button>
      </div>
    </div>
  )
}