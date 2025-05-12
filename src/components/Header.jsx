import headerImg from "../assets/fruit-salad.png";

export default function Header() {
  return (
    <header>
      <img src={headerImg} alt="fruitSalad" />
      <h1>Hello healthy salad!</h1>
    </header>
  );
}
