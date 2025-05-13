export default function Tabs({ title, img }) {
  return (
    <>
      <li>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>
          Molestias modi, recusandae nemo debitis reprehenderit repudiandae amet
          officiis odit.
        </p>
      </li>
    </>
  );
}
