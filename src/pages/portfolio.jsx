import Project from "../components/project";
import "../styles/portfolio.css";
const allProjects = [
  {
    title: "Free Code Camp",
    image: "public/FreeCodeCampLogo.jpg",
    repoLink: "https://github.com/freeCodeCamp/freeCodeCamp",
    deployLink: "https://contribute.freecodecamp.org",
  },
  {
    title: "BYO Repo",
    image: "public/BYO Logo.webp",
    repoLink: "https://github.com/codecrafters-io/build-your-own-x",
    deployLink: "https://contribute.freecodecamp.org/",
  },
  {
    title: "API's",
    image: "public/API Logo.png",
    repoLink: "https://github.com/public-apis/public-apis",
    deployLink:
      "https://apilayer.com/?utm_source=Github&utm_medium=Referral&utm_campaign=Public-apis-repo",
  },
  {
    title: "Awesome Python",
    image: "public/Python Image.jpg",
    repoLink: "https://github.com/vinta/awesome-python",
    deployLink: "https://awesome-python.com/",
  },
  {
    title: "Road Map",
    image: "public/Roadmap Logo.jpg",
    repoLink: "https://github.com/kamranahmedse/developer-roadmap",
    deployLink: "https://roadmap.sh/",
  },
  {
    title: "Programming Books",
    image: "public/Programming Logo.jpg",
    repoLink: "https://github.com/EbookFoundation/free-programming-books",
    deployLink: "https://ebookfoundation.github.io/free-programming-books/",
  },
];
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio page</h1>

      <div className="projects">
        {allProjects.map((elem, i) => {
          return <Project key={i} data={elem} />;
        })}
      </div>
    </div>
  );
}
