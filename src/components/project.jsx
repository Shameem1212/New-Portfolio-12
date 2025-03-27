export default function Project({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <div class="Container">
        <img src={data.image} alt="Image of Repo"></img>
      </div>
      <br />
      <a href={data.repoLink}>Link to Repo</a>
      <br />
      <a href={data.deployLink}>Link to Deploy</a>
    </div>
  );
}
