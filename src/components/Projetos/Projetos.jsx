import { FaGithub } from 'react-icons/fa';
import { TbWorldShare } from 'react-icons/tb';

export default function Projetos() {
  const Projects = [
    {
      id: 1,
      title: 'Card Hover',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 2,
      title: 'Card Hover',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 3,
      title: 'Card Hover',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 4,
      title: 'Card Hover',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 5,
      title: 'Card Hover',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
    {
      id: 6,
      title: 'Card Hover',
      img: '/minha-logo.png',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tellus vel ipsum pulvinar fermentum non sit amet turpis. Duis condimentum, enim id cursus ultricies, sem nunc ultricies nunc, at consectetur neque dolor vel est.',
      githubLink: 'https://github.com/username/reponame',
      pageLink: 'https://example.com/project',
    },
  ];

  return (
    <main className="card-container">
      {Projects.map((project) => (
        <div key={project.id} className="card">
          <div className="img-content">
            <img src={project.img} alt="foto do projeto" />
          </div>
          <div className="content">
            <p className="heading">{project.title}</p>
            <p>{project.description}</p>
          </div>
          <div className="btns">
            <figure>
              <FaGithub />
              <a href={project.githubLink} className="btn-github">
                GITHUB
              </a>
            </figure>
            <figure>
              <TbWorldShare />
              <a href={project.pageLink} className="btn-page">
                PAGE
              </a>
            </figure>
          </div>
        </div>
      ))}
    </main>
  );
}
