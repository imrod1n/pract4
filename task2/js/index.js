function getImageUrl(person) {
  return (
    './img/' +
    person.imageId +
    '.jpg'
  );
}

function Book({ title, author, price = "Не указано", size = "18rem", image }) {
  return (
    <div className="card book-card m-3 shadow-sm col-md-3" style={{ width: size }}>
      {image && (
        <img
          src={image}
          alt={title}
          className="card-img-top"
          style={{ height: "280px", objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem" }}
        />
      )}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">Цена: {price} ₽</p>
        </div>
        <button className="btn btn-primary mt-auto">Купить</button>
      </div>
    </div>
  );
}

function BookList({ books }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
}

function BookStore() {
  const books = [
    {
      title: "Пиши, сокращай",
      author: "Максим Ильяхов",
      price: 750,
      image: "http://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66767252693365.5bc109b7ba595.jpg"
    },
    {
      title: "Думай медленно... решай быстро",
      author: "Даниэль Канеман",
      price: 820,
      image: "https://avatars.mds.yandex.net/i?id=1cd18a6b74e1f30579649520557f8f72_l-4566892-images-thumbs&n=13"
    },
    {
      title: "Атлант расправил плечи",
      author: "Айн Рэнд",
      price: 1300,
      size: "20rem",
      image: "https://yandex-images.clstorage.net/ne5di1170/416a96KDj/AOYtD49-94usO0sXFMqfsYjt2P1I6kQwSAr64parwhfpfGgo_9m4MlhF-rcN27SrsmTXLv4qCy5QomMeDzCoimXrTDrSU46XrC8aOz3694HIuOiIRL9MVFgXntK7Gy6HfKXQnD4wfdepae6HEIqcy_NpeoPyH1pXGbe2Fse1dVdkroWLD37-U4wzQveYRucZdJhEUUSrdC0sRrc_ew-2w7D55JTmtOn7FUXaD8Ra9a_riZrCzgN-0xmzXoJfmRU7zHaVi4-yoo8QZyIzyOKH7RiIIE24j2SNrJqLx1_b4pfYncSk8lytQyXNzp9crnn7DxlWVjofBlMtV5qGw6U15yAGeY_jBrJrqEve-0Te-7GgHLhB7A8wWTjms8M7q4Y3YEWwSL6MXRMBlVbvaN5l3wOhTkLaO3rLtUOellcx3W_YsjF_EyoChwRzvquY1h-JMOTkeQADbMGQulsT11PKa8zNDOzuxCXXLRlKW0D6bSfbeaq2uvdazxWnulrvvb2T3Aadb1M6HntEky7LOGrDAfzYoCVYIySlUIL32-dbGhPUxXSsuvw108kxPq9MBmlr053Guk6r4i9Be-KSM1GlixQecW9HCtqH_MtOs3Tux2WoOHCNUOsQXVSmV__nW07XQJkMPFY85UuhSTYv0E5lU98xYlpWT5Y3oSdm3lutvWcwYg2DE-62B6y3tj_glp-lVDSwbZjvGE2c6lNPZ1vmx6htnJAeGDlnKaXe29Qa1RNr1SamXjf22xW7Uk4rkT1TJK7904-Gpg8Uy56j0ErHSUScxPW8b_yB-D5bLy9vcsNgEZwEZlSlZx3JSiPA1kXH29Uqvm6jQkvlawry_w3Z4-CGjetrHmKjPOueB3TKG6VMIHjJcNPkDTie298_e7qf8CW0wCbETadZGcJjmDohwx9VQsI2B5YjFdtaZpchleskcgVry5KC78iTDh-UDgORwND0oRgLkJl0FqN3XyNA"
    }
  ];
  return <BookList books={books} />;
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<BookStore/>);