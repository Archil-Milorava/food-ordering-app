function Header() {
  return (
    <div className=" h-96 bg-[url('/header_img.png')] bg-cover bg-center rounded-2xl">
      <div className=" flex flex-col rounded-2xl  bg-gray-900 bg-opacity-5 h-full w-full justify-center pl-20 ">
        <h1 className="text-6xl text-white font-semibold leading-tight">
          Order your <br /> favourite food here
        </h1>
        <p className="mt-10 text-white max-w-lg h-auto text-sm leading-5">
          Satisfy your cravings with an incredible variety of dishes from our
          curated selection of top restaurants. Whether you&apos;re in the mood
          for comforting classics, exotic flavors, or something new and
          exciting, we&apos;ve got you covered.
        </p>
        <button className="mt-4 bg-gray-200 p-4 w-32 rounded-full text-sm text-gray-900">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
