const Header = () => {
  return <div>

    <div className=" flex w-screen h-12 bg-white justify-between items-center ">
      <div className=" flex ">
        <h2 className=" text-xl text-black pl-1 ">
          logo
        </h2>
      </div>
      <div className=" flex ">
        <h3 className=" text-base text-black ">
          cart
        </h3>
        <h3 className=" text-base text-black px-2 ">
          menu
        </h3>
      </div> 
    </div>
  </div>
};

export default Header;
