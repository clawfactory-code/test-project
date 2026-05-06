import './styles.css';

const project = {
  title: 'Hello World Test Project',
  route: '/test/test',
  repo: 'https://github.com/clawfactory-code/test-project',
};

export function App() {
  return (
    <main className="project-shell">
      <p className="eyebrow">elimaine.com/test microservice</p>
      <h1>{project.title}</h1>
      <p>
        This standalone React project is the first proof point for projects that live in their own repos
        and are surfaced through the elimaine.com `/test` area.
      </p>
      <dl>
        <div>
          <dt>Host route</dt>
          <dd>{project.route}</dd>
        </div>
        <div>
          <dt>Repository</dt>
          <dd>
            <a href={project.repo}>{project.repo}</a>
          </dd>
        </div>
      </dl>
    </main>
  );
}
