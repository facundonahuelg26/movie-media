import { movieObject } from "../../hooks/useFetch/interface"

interface Props{
  data:movieObject;
}

const GenresAndLang = ({data}:Props) => {
  return (
    <>
        <h2 className="subtitles">Genres</h2>
          <div className="sub-container-genres">
            {data.genres.map((genre: any) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
          <div>
            <h2 className="subtitles">Language</h2>
            <div className="sub-container-lang">
              {data.spoken_languages.map((language: any) => (
                <p key={language.iso_639_1}>{language.english_name}</p>
              ))}
            </div>
          </div>
    </>
  )
}

export default GenresAndLang