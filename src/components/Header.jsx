import BackgroundImage from "./BackgroundImage";

const Header = () => {
  return (
    <header>
      <BackgroundImage />
      <h1 className='title'>
        Word<span className='first-heading--thin'>Counter</span>
      </h1>
    </header>
  );
};

export default Header;
