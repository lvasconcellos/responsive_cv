import { TFunction } from "i18next";

interface BooksSectionProps {
  locale: TFunction<"global">;
  handleToggleSection: (section: string) => void;
}

const BooksSection: React.FC<BooksSectionProps> = ({
  locale,
  handleToggleSection,
}) => {
  const books: Array<string> = Object.keys(
    locale("books", { returnObjects: true })
  );
  return (
    <section className="books section masonry-section" id="books">
      <h2 className="section-title">{locale("section.books")}</h2>
      <i
        className="bx bx-left-arrow-alt books__icon--close"
        onClick={() => handleToggleSection("")}
      ></i>

      <div className="masonry__container-small">
        {books.map((book, i) => {
          return (
            <article className="masonry__content" key={i}>
              <div className="masonry__item">
                <img src={locale(`books.${book}.photo`)} alt={book} />
              </div>
              <div className="books__data">
                <h2 className="books__title">{locale(`books.${book}.name`)}</h2>
                <span className="books__description">
                  {locale(`books.${book}.description`)}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default BooksSection;
